# LearnGerman Speaking Drill — Simple Mode

- Maximum 3 selected sentences per drill block; when three are checked, other unchecked options are disabled until a sentence is unchecked.
- Repetition choices 1×–5×, with 3× default for a new learner.
- Source language remains German; translation target list is retained.
- One button: **Open Google Translate**. Removed batch numbering and Next batch navigation.
- Text is composed exactly from selected sentences and requested repetitions, with line breaks.
- Conservative 500-character budget: over-budget selections show an explicit warning and disable the Google button. Nothing is silently truncated or reduced.
- Existing saved selections are capped to three on first load; previous preference remains otherwise.
- Existing 15 sentences in each of two blocks, lesson stages, other Smart Listener functions and learner progress are untouched.
- Google Translate speaker behavior and spoken completion remain external and cannot be guaranteed.

## Deploy
Extract changed files at the repository root, preserving directory structure. Test both drill blocks at 1×, 3× and 5×, including long combinations. Syntax checked with `node --check`; live browser testing still required.
