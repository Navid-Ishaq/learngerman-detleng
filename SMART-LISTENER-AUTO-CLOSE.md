# Smart Listener — Auto-close patch

## Scope
- Modified: `lesson-engine/lesson.js` only.
- Google Listener click now closes the shared listener dock after the new tab is requested successfully.
- If the browser reports a blocked popup, the dock stays open and a message advises the learner to allow popups or copy the phrase.
- Copy German does not close the dock.
- Repetition preference and current lesson state are untouched.
- Since this is the shared lesson engine, the same behavior applies to all lessons that use this Smart Listener, including future lessons.

## Verification
- `node --check lesson-engine/lesson.js`: passed.
- Browser/production tests: not run; test on a preview first.

## Installation
Extract into the current repo root and preserve the `lesson-engine/` path. Review `git diff`, then commit and push.
