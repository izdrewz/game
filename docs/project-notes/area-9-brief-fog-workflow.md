# Area 9 - Brief Fog v0.1 field/UI workflow

Status: completed

## Purpose
Brief Fog is the first working Study Cave chamber. It replaces the old separate Task Intake and Command Word Gate start.

It is for understanding the task before planning, sourcing, drafting, or editing.

It must not write assignment content, generate paragraphs, decide the user's argument, or replace the user's interpretation.

## Required v0.1 flow
1. User pastes raw task/guidance text.
2. User optionally adds task title and assessment type.
3. User clicks Suggest chunks or adds chunks manually.
4. User reviews chunks and can split, merge, reorder, rename, delete, or add chunks.
5. User works through chunk cards one at a time.
6. User highlights important wording and assigns categories.
7. User writes a plain-meaning note.
8. User writes an action-created note.
9. User can add flags, missed loot, or dismissed wording with reasons.
10. User chooses a chunk state.
11. User can finish Brief Fog only when every chunk has a decision.
12. Final summary passes cards to later chambers.

## Screen labels
Screen title: Brief Fog
Subtitle: Question-Unpacking Chamber
Intro text: Paste the task, question, brief, guidance, or marking notes. Then break it into chunks and work through each one so the task becomes clear before you move on.
Reminder: This chamber is for understanding the task, not writing the answer.

## Field labels
Raw task panel:
- Task Brief
- Paste task / question / guidance
- Task title
- Assessment type

Chunk card fields:
- Original wording
- Highlight category
- Confidence
- Highlight note
- Plain-meaning note
- Action-created note
- Flag note
- Missed loot note
- Dismissal reason
- Chunk state

## Button labels
- Suggest chunks
- Add chunk manually
- Approve chunks
- Save task brief
- Save chunk
- Add highlight
- Edit highlight
- Remove highlight
- Add flag
- Resolve flag
- Add missed loot
- Collect missed loot
- Dismiss wording
- Undo dismissal
- Mark fully unpacked
- Park for later
- Accept warning and continue
- Return to chunk
- Previous chunk
- Next chunk
- Finish Brief Fog
- View Brief Fog summary
- Send to next chamber

## Chunk card layout
Chunk number, chunk type, and chunk state appear at the top.

Original wording appears next and must be highlightable.

Highlight toolbar contains category menu, confidence menu, and save highlight.

Selected highlights list shows category, note, confidence, and status.

Then show:
- Plain-meaning note
- Action-created note
- Flags
- Missed loot
- Dismissed wording
- Chunk decision
- Save chunk
- Mark fully unpacked
- Park for later
- Previous chunk
- Next chunk

## Highlight category menu
- Command word / action word
- Topic keyword
- Scope / limit
- Evidence / source requirement
- Format / output rule
- Word count / deadline rule
- Marking / quality clue
- Optional / context wording
- Dismissed wording
- Unsure

## Chunk state menu
- Not started
- In progress
- Fully unpacked
- Dismissed with reason
- Flagged for later
- Parked as missed loot
- Partially unpacked - warning accepted

## Completion rules
Brief Fog can be completed only when every chunk is one of:
- Fully unpacked
- Dismissed with reason
- Flagged for later
- Parked as missed loot
- Partially unpacked - warning accepted

A chunk can be marked Fully unpacked only when:
- the user has reviewed the wording
- important command words are highlighted or confirmed absent
- important keywords are highlighted or confirmed absent
- scope, limit, source, format, word count, deadline, or marking clues are highlighted, dismissed, flagged, or parked
- a plain-meaning note exists unless the chunk is dismissed
- an action-created note exists unless the user confirms no action is created
- uncertainty is flagged
- the user confirms the chunk decision

## Warning messages
- No chunks have been created yet. Split the task into chunks before entering Brief Fog.
- This chunk has no decision yet. Highlight, note, dismiss, flag, or park it before finishing Brief Fog.
- This chunk has no plain-meaning note. Add a short note or confirm that no note is needed.
- This chunk does not say what action it creates. Add an action-created note or confirm that it creates no action.
- One or more highlights are marked needs checking. Add a flag or change the confidence.
- There is a blocking flag in Brief Fog. You can continue, but this will be carried into the next chamber.
- Dismissed wording will not be used for next-chamber cards unless you undo the dismissal.
- Some chunks are unfinished or parked. You can continue, but they will appear as missed loot or flags later.
- Brief Fog is for understanding the task. Drafting happens later.

## Final Brief Fog summary fields
- Task title
- Assessment type
- Number of chunks
- Chunks fully unpacked
- Chunks dismissed
- Chunks flagged
- Chunks parked as missed loot
- Command words found
- Topic keywords found
- Scope / limits found
- Source requirements found
- Format / output rules found
- Word count / deadline rules found
- Marking / quality clues found
- Open flags
- Missed loot
- Dismissed wording summary
- Next recommended chamber

## Outputs passed onward
To Command Word Chamber:
- commandWordCards

To Keyword Lanterns:
- keywordCards

To Scope Map:
- scopeLimitCards

To Source Mine:
- sourceRequirementCards

To Planning Board:
- taskDemandSummary

## Do not build yet
- automatic AI extraction
- assignment drafting
- paragraph generation
- automatic source finding
- automatic quote selection
- automatic reference generation
- complex animations
- monster combat logic
- reward unlock logic
- furniture or clothing rewards
- full export system
- full source upload parser
- final submission checker

## Implementation priority
Manual-first, editable, reversible, and reliable. The user stays in control of task interpretation.
