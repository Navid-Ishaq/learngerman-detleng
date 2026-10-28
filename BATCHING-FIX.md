# LearnGerman – Speaking Drill Batching Fix

## Problem
Original batching grouped up to ~950 characters of sentences, then split the repetitions into ~1100-character chunks. Therefore 13 selected sentences with 4× could show the full 13-sentence block only 2× in a single Google Translate tab, with remaining repetitions in another batch. Long speech may also be truncated by Google Translate.

## Changed
- Each batch is built from at most two selected sentences (also subject to a 240-character grouping threshold).
- Each batch's repeated text is conservatively capped at around 600 characters. If needed, a group is split into multiple batches covering **all** requested repetitions.
- Batch summary now explicitly shows the sentence numbers and repetition interval covered by that particular batch.
- All 15 selectable sentences, language selection, copy functionality and saved settings are unchanged.
- The change is in the shared speaking-drill code and applies to both Lesson 001 drill blocks and future blocks using the same engine.

## Limitation
Google Translate is an external service. These changes ensure the text sent contains the requested number of repeats across batches, but Google may limit or truncate actual spoken playback. No audio playback count can be guaranteed without controlling an audio service.

## QA
JavaScript syntax check passed. Browser/audio validation still needed; verify 13 selected × 4, navigate all batches, and listen.
