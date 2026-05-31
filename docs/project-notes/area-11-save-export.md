# Area 11 — Save / export / progress logic

## Current task: Brief Fog save/export structure

Status: completed

Area 11 defines the v0.1 save/export data for Brief Fog chunk cards and Cave Base persistence.

Brief Fog / Question-Unpacking Chamber must save:
- raw task text
- chunks
- highlights
- annotations
- plain-meaning notes
- action-created notes
- dismissed wording
- flags
- missed loot
- chunk states
- output cards
- Brief Fog completion
- completed chamber persistence
- export data

Completed Brief Fog must remain completed unless reset or replay is deliberately chosen. Flags and missed loot do not undo completion.

## localStorage

Use:

```ts
localStorage.setItem("studyCaveSave:v0.1", JSON.stringify(studyCaveSave));
```

The active quest inside `StudyCaveSaveState` should include:

```ts
briefFog?: BriefFogSave;
```

## BriefFogSave

```ts
type BriefFogSave = {
  chamberId: "brief-fog";
  chamberName: "Brief Fog / Question-Unpacking Chamber";

  status:
    | "locked"
    | "unlocked"
    | "not-started"
    | "in-progress"
    | "cleared"
    | "replay-available";

  rawTaskText: string;

  chunks: BriefFogChunk[];

  outputCards: BriefFogOutputCards;

  chamberFlags: FlagEntry[];
  chamberMissedLoot: MissedLootEntry[];

  completion: BriefFogCompletionState;

  exportHistory: ExportRecord[];

  enteredAt?: string;
  lastEditedAt: string;
  clearedAt?: string;
};
```

## BriefFogChunk

```ts
type BriefFogChunk = {
  chunkId: string;
  order: number;

  originalText: string;
  cleanedText?: string;

  chunkType:
    | "question"
    | "instruction"
    | "guidance"
    | "word-count"
    | "source-requirement"
    | "marking-grid"
    | "case-study"
    | "unknown";

  state:
    | "not-started"
    | "in-progress"
    | "understood"
    | "action-created"
    | "dismissed"
    | "flagged"
    | "left-for-later";

  plainMeaningNoteIds: string[];
  actionCreatedNoteIds: string[];
  annotationIds: string[];
  highlightIds: string[];
  dismissedWordingIds: string[];
  flagIds: string[];
  missedLootIds: string[];

  createdOutputCardIds: string[];

  isRequiredForCompletion: boolean;
  isOptional: boolean;

  createdAt: string;
  updatedAt: string;
};
```

Resolved chunk states for v0.1:
- understood
- action-created
- dismissed
- left-for-later

Open flags and missed loot do not stop a chunk from being resolved if the user has deliberately moved it forward.

## HighlightEntry

```ts
type HighlightEntry = {
  highlightId: string;

  questId: string;
  chamberId: "brief-fog";
  chunkId: string;

  highlightedText: string;

  highlightType:
    | "command-word"
    | "keyword"
    | "scope-limit"
    | "source-requirement"
    | "word-count"
    | "task-demand"
    | "unknown-important"
    | "dismissed";

  startOffset?: number;
  endOffset?: number;

  linkedAnnotationIds: string[];
  linkedFlagIds: string[];
  linkedMissedLootIds: string[];
  linkedOutputCardIds: string[];

  status:
    | "active"
    | "converted-to-card"
    | "dismissed"
    | "left-for-later";

  createdAt: string;
  updatedAt: string;
};
```

## BriefFogNote

```ts
type BriefFogNote = {
  noteId: string;

  questId: string;
  chamberId: "brief-fog";
  chunkId: string;

  noteType:
    | "plain-meaning"
    | "action-created"
    | "annotation"
    | "user-thought"
    | "system-prompt-response";

  noteText: string;

  linkedHighlightId?: string;
  linkedOutputCardId?: string;
  linkedFlagIds: string[];
  linkedMissedLootIds: string[];

  status:
    | "active"
    | "edited"
    | "dismissed"
    | "left-for-later";

  createdAt: string;
  updatedAt: string;
};
```

## DismissedWordingEntry

```ts
type DismissedWordingEntry = {
  dismissedWordingId: string;

  questId: string;
  chamberId: "brief-fog";
  chunkId: string;

  dismissedText: string;

  reason:
    | "not-relevant"
    | "duplicate"
    | "too-vague"
    | "example-only"
    | "already-captured"
    | "not-needed-for-v0.1"
    | "other";

  userNote?: string;

  canRestore: boolean;

  status:
    | "dismissed"
    | "restored";

  createdAt: string;
  restoredAt?: string;
};
```

Dismissed wording should remain restorable.

## Flag attachment

```ts
type FlagAttachment = {
  attachedToType:
    | "raw-task-text"
    | "chunk"
    | "highlight"
    | "annotation"
    | "plain-meaning-note"
    | "action-created-note"
    | "dismissed-wording"
    | "output-card"
    | "missed-loot"
    | "general-chamber";

  attachedToId: string;
};
```

Flags are attention notes. They do not undo chamber completion.

## Missed loot attachment

```ts
type MissedLootAttachment = {
  attachedToType:
    | "chunk"
    | "highlight"
    | "annotation"
    | "plain-meaning-note"
    | "action-created-note"
    | "output-card"
    | "optional-task"
    | "general-chamber";

  attachedToId: string;
};
```

Missed loot means useful work was left unfinished or uncollected so the user could continue.

## Output cards

```ts
type BriefFogOutputCards = {
  commandWordCards: CommandWordCard[];
  keywordCards: KeywordCard[];
  scopeLimitCards: ScopeLimitCard[];
  sourceRequirementCards: SourceRequirementCard[];
  taskDemandSummary: TaskDemandSummaryCard | null;
};
```

Brief Fog output cards should feed later chambers.

## Brief Fog completion

```ts
type BriefFogCompletionState = {
  requiredChunksResolved: boolean;

  outputCardsCreated: {
    commandWords: boolean;
    keywords: boolean;
    scopeLimits: boolean;
    sourceRequirements: boolean;
    taskDemandSummary: boolean;
  };

  hasOpenFlags: boolean;
  hasMissedLoot: boolean;

  cleared: boolean;
  clearedAt?: string;

  nextUnlockedChamberId: "source-mine" | null;
};
```

Brief Fog clears when required chunks are resolved and a task demand summary exists.

On clear:
- set Brief Fog status to cleared
- add `brief-fog` to completedChambers
- add `source-mine` to unlockedChambers
- set next chamber to `source-mine`
- keep current route location as Cave Base unless route design says otherwise
- add progress log entry saying Brief Fog cleared and Source Mine unlocked

## Source Mine unlock

After Brief Fog clears:

```ts
const sourceMineUnlockUpdate = {
  completedChambersAdd: "brief-fog",
  unlockedChambersAdd: "source-mine",
  currentChamberId: "source-mine",
  currentRouteLocation: "cave-base",
  nextAction: "Enter Source Mine to connect sources, notes, and evidence to the task demand.",
  progressLogSummary: "Source Mine unlocked after Brief Fog was cleared."
};
```

## Export

v0.1 exports:
- `.md`
- `.txt`
- Word-openable `.doc`

Proper `.docx` can wait.

Brief Fog export must include:
- quest title
- export date
- current chamber
- chamber status
- current route location
- last saved timestamp
- raw task text
- chunk cards
- plain-meaning notes
- action-created notes
- annotations
- highlights
- dismissed wording
- flags
- missed loot
- command word cards
- keyword cards
- scope/limit cards
- source requirement cards
- task demand summary
- Brief Fog completion state
- progress log
- next action

For Word-openable `.doc`, v0.1 can save simple HTML content with a `.doc` extension.

## Reset rules

Reset must only target:

```ts
questId === "study-skills-trial"
```

Reset Study Skills Trial should:
- reset quest status to task-map-started
- set current chamber to brief-fog
- set current route location to cave-base
- clear completedChambers
- set unlockedChambers to ["brief-fog"]
- clear collectedLoot
- clear missedLoot
- clear flags
- clear chamberSaves
- reset briefFog to unlocked/blank state
- add one reset progress log entry

Reset must not affect:
- wardrobe data
- house data
- edit room data
- furniture data
- unrelated quests
- source library data
- calendar data
- global settings

## Implementation priority

Main repo should implement:
- BriefFogSave on the active StudyQuest
- raw task text save
- chunk card save
- highlight save
- note save
- dismissed wording save
- flag attachments
- missed loot attachments
- output cards
- Brief Fog completion
- Source Mine unlock
- `.md`, `.txt`, and Word-openable `.doc` exports
- Study Skills Trial reset only
