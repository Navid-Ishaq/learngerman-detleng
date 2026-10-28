# DETLENG LearnGerman — Organized Repository

## Directories

- `index.html`, `lesson.html`, `app.js`, `styles.css`, `course-data.js`: web entry points (keep at root).
- `lesson-engine/`: reusable interactive UI, saved progress, Smart Listener, speaking drills.
- `lessons/start-here/lesson.js`: course introduction lesson data.
- `lessons/ch-001/lesson.js`: Chapter 001 data.
- `lessons/ch-002/lesson.js`: Chapter 002 data.
- `lessons/ch-003/lesson.js`: Chapter 003 data.
- `docs/chapters/ch-NNN/MASTER.md`: approved chapter teaching master.
- `docs/chapters/ch-NNN/IMPLEMENTATION-REPORT.md`: chapter release notes.
- `docs/project-history/`: older repository update reports.
- `assets/`: site media and branding.

## Adding Chapter NNN

1. Place JS lesson data at `lessons/ch-NNN/lesson.js`, keeping registration ID `lesson-NNN`.
2. Keep Markdown master in `docs/chapters/ch-NNN/MASTER.md`.
3. Add exactly one script tag in `lesson.html` before `lesson-engine/lesson.js`.
4. Activate the link in `app.js` for the corresponding curriculum chapter.
5. Preserve lesson IDs and storage keys to retain existing progress.
6. Run `node --check` for modified JavaScript, verify relative script paths and test the three prior chapters in browser.

## Why this is safe

Browser entry URL remains `lesson.html?id=lesson-NNN`; it is independent of the JS data file location. No learner-localStorage key is migrated or reset.
