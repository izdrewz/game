# Area 1 — Character Assets

## Study Cave character assets — Cave Base and Brief Fog

Status: needs approval

Area 1 scope:
Character pose/outfit/effect asset planning and transparent PNG production only.
Area 1 does not edit the repo, design cave room backgrounds, or decide route/save logic.

Checked context:
- Current dispatch request for Area 1 Study Cave character assets.
- Existing Area 1 asset history: locked base/front sprite identity anchor, right-arm tattoo only, clean transparent PNG requirement, no redraw/identity drift, and proof-first asset workflow.
- Long-term working rules supplied in chat: stay inside assigned area, keep locked work locked, label placeholder/final work clearly, keep assets organised, update notes after meaningful changes.

Locked character rules:
- approved base girl only
- front/default base remains the identity anchor
- right-arm tattoo only
- no tattoo on both arms
- no face/body/hair redesign
- no AI replacement character
- transparent PNGs only
- no checkerboard backgrounds
- no white/grey halo around hair, boots, lace, hands, sleeves, or gaps
- consistent 1024 × 1536 canvas unless main repo confirms another locked canvas
- consistent character scale and bottom alignment across Study Cave assets

Cave Base assets needed:
characters/player/study_cave/cave_base/full_body/
- player_cave_base_idle.png
- player_cave_base_open_chest.png
- player_cave_base_reading_ledger.png

Cave Base pose requirements:
- player_cave_base_idle.png: standing relaxed but ready, calm/focused expression.
- player_cave_base_open_chest.png: turned slightly toward chest or opening chest, curious/pleased expression.
- player_cave_base_reading_ledger.png: holding or reading cave journal / route ledger, focused/thoughtful expression.

Cave outfit override asset notes:
- Home outfit = house/home-base outfit.
- Cave outfit = temporary Study Cave override.
- Cave Base chest = where cave outfit is changed.
- Area 1 defines assets and folder structure only.
- Main repo owns route/save/equip logic.

Recommended v0.1 cave outfit:
outfit_id: cave_study_default
display_name: Study Cave Adventurer
Style: practical academic adventurer
Details: boots, blouse, bodice/pinafore or skirt/shorts/trousers, optional satchel
Use: default Study Cave override outfit

Later cave outfit options:
outfit_id: soft_scholar_explorer
display_name: Soft Scholar Explorer
Use: calmer cave/study scenes
Status: later / placeholder only

outfit_id: brief_fog_spellwork
display_name: Brief Fog Spellwork
Use: magic-light scenes if needed
Status: later / placeholder only

Brief Fog full character PNGs needed:
characters/player/study_cave/cave_study_default/brief_fog/full_body/
- player_brief_fog_01_light_ready.png
- player_brief_fog_02_light_beam_cast.png
- player_brief_fog_03_afterglow_extended_hand.png
- player_brief_fog_04_confident_after_reveal.png
- player_brief_fog_05_warning_spark.png

Brief Fog pose sequence:
1. player_brief_fog_01_light_ready.png
Pose: one hand raised with small sparkle/light in palm.
Expression: focused.
Scene use: ready to investigate fog.

2. player_brief_fog_02_light_beam_cast.png
Pose: arm extended toward fog, casting hand clearly visible.
Expression: determined.
Scene use: firing light beam toward fog.

3. player_brief_fog_03_afterglow_extended_hand.png
Pose: same or near-same extended-hand pose, beam stopped.
Expression: assessing/focused.
Scene use: fog patch cleared, Command Imp revealed.

4. player_brief_fog_04_confident_after_reveal.png
Pose: hand on hip preferred for v0.1.
Expression: confident/calm.
Scene use: character has revealed the imp.

5. player_brief_fog_05_warning_spark.png
Pose: hand raised again with controlled sparkle/light.
Expression: confident/threatening but not angry.
Scene use: imp runs away / next wording chunk begins.

Expression set:
- focused
- determined
- assessing
- confident
- warning-confident

Scene 4 recommendation:
Use hand-on-hip first. Do not prioritise arms-crossed or hair-tuck for v0.1 because those are more likely to interfere with hair, hands, sleeves, and clothing clarity.

Separate transparent effect overlays needed:
effects/study_cave/brief_fog/hand_sparkle/
- effect_brief_fog_hand_sparkle_small.png
- effect_brief_fog_hand_sparkle_large.png

effects/study_cave/brief_fog/beam/
- effect_brief_fog_light_beam_start.png
- effect_brief_fog_light_beam_long.png
- effect_brief_fog_light_beam_fade.png

effects/study_cave/brief_fog/afterglow/
- effect_brief_fog_afterglow_hand.png

effects/study_cave/brief_fog/reveal/
- effect_brief_fog_reveal_flash.png

Overlay rules:
- Sparkle and beam should not be baked into character PNGs.
- Hand sparkle should align to the palm.
- Light beam should start at the casting hand and point toward fog.
- Afterglow can sit over the casting hand after the beam stops.
- Fog-clearing/reveal light may be placeholder now and finalised later with Area 10.

Recommended metadata:
characters/player/study_cave/cave_study_default/brief_fog/metadata/
- brief_fog_pose_manifest.json
- hand_anchors.json

Suggested hand anchor fields:
- pose_id
- hand_anchor_x
- hand_anchor_y
- beam_angle
- recommended_effect_layer
- notes

Placeholder-now assets:
- player_cave_base_idle.png
- player_cave_base_open_chest.png
- player_cave_base_reading_ledger.png
- effect_brief_fog_hand_sparkle_small.png
- effect_brief_fog_light_beam_long.png
- effect_brief_fog_afterglow_hand.png
- effect_brief_fog_reveal_flash.png
- icon_cave_study_default.png

Final-art-later assets:
- all five Brief Fog character pose PNGs
- final Study Cave Adventurer outfit applied to each pose
- clean hand sparkle overlays
- clean light beam overlays
- Cave Base outfit chest icon
- optional confident pose variants
- optional expression-only face overlays

Approval needed:
Izzy should approve pose previews before final transparent PNG production.

Previews needed for approval:
- Cave Base idle pose
- Cave Base outfit chest pose
- Cave Base reading ledger pose
- Brief Fog light-ready pose
- Brief Fog light-beam casting pose
- Brief Fog afterglow extended-hand pose
- Brief Fog confident reveal pose
- Brief Fog warning sparkle pose
- Study Cave Adventurer outfit design

Contact sheet rule:
No contact sheets should be made unless Izzy asks.

Dependencies:
- Main repo or Izzy should confirm whether 1024 × 1536 remains the locked Study Cave character canvas.
- Area 10 likely owns Command Imp, fog patch, and wider fog-clearing scene effects.
- Area 1 can produce character-side pose previews after Izzy confirms to proceed.

Task status options after review:
- If Izzy approves this plan: completed locked.
- If repo uses placeholders now but needs final art later: completed needs further edits.
- If Izzy rejects the pose/outfit direction: active, with fixes listed.

## Outfit-class variant previews — rejected / reset

Status: active

Latest feedback:
Izzy rejected the generated wizard, sorcerer, jester, bard, princess, knight, scribe, ranger, and druid outfit variants. The variants were too bland/boring, did not keep enough of the approved base-girl identity, and the outfit direction was not strong enough.

Do not treat the generated class-variant images as approved assets. They are rejected visual tests only.

Reset rules for next outfit-class variant pass:
- Use the locked base girl as the identity anchor, not a generic generated character.
- Keep the face, body, hair identity, scale, and default front pose closer to the approved base.
- Preserve right-arm tattoo rule only.
- Use black background for working previews.
- Do not mark anything final or export-ready until Izzy approves the preview.
- Stronger silhouettes are needed. The outfits should feel distinct, styled, and game-worthy, not bland default clothing.
- Keep the cave outfit variants in the academic-adventurer / medieval fantasy direction, but make each class readable.
- Do not generate large batches that drift. Produce smaller preview batches and check approval before continuing.

Needed class default outfit variants remain:
- wizard
- sorcerer
- jester
- bard
- princess
- knight
- scribe
- ranger
- druid

Next Area 1 action:
Prepare a corrected outfit direction plan before generating again. The plan should define what makes each class visually readable, then ask Izzy to approve the direction or adjust it before any new image batch is produced.
