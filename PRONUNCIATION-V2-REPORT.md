# DETLENG LearnGerman — Pronunciation / Practice v2

## Baseline
Latest uploaded `learngerman-detleng-main(2).zip`. Incremental update; preserve existing files and paths.

## Changed files
- `lesson.html`: practice action toolbar placeholder.
- `lesson-engine/lesson.js`: shared Google Listener, pronunciation rendering and practice-round state.
- `lesson-engine/lesson.css`: pronunciation, fourth table column, compact shared listener UI and responsive styles.
- `lessons/lesson-001.js`: 40 German vocabulary and phrase pronunciation entries. The 20 stages and 29 activities are preserved.

## Behavior
- German and English Connection vocabulary tables retain original content and gain a fourth Listen column. Under each German item is its approximate English-readable pronunciation.
- Other instructional text may offer compact listening chips for known German phrases; quiz questions do not receive pronunciation chips.
- Headphone clicks open one shared panel with 1×, 3×, 10× or 1–10 custom repeat selection. Google Translate is prefilled in a new tab; no playback is guaranteed.
- Copy German copies the selected German phrase repeated at the chosen count.
- Practice Again stores practice round progress and count separately from the original achievement. A count increments upon finishing all stages. Front Matter uses the same practice engine without pronunciation content.

## Checks performed
- JavaScript syntax `node --check`: PASSED for the two changed JS files and existing Front Matter JS.
- Content integrity: Lesson 001 still 20 stages / 29 activities.
- ZIP CRC integrity verified.
- Real browser interactive and visual testing: NOT PERFORMED in this runtime. Test in a preview branch before production.

## QA on preview
1. Open CH001 and inspect English Connection and Key Vocabulary at desktop/mobile widths.
2. Select each headphone; verify correct phrase/hint; switch 1×/3×/10×; verify translated tab and speaker manually.
3. Refresh and verify saved repeat preference. Check Copy behavior on HTTPS domain.
4. Run Practice Again; refresh midway; verify prior completion survives and counter increments after all stages.
5. Confirm previous homepage and Front Matter are unchanged, and no JS console errors.

## Installation
Extract incremental ZIP at repository root, preserving internal paths, preferably on a test branch. Do not delete other repository files.
