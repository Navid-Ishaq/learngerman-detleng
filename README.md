# DETLENG German Academy — Speak German with Confidence

Interactive German learning website for [learngerman.detleng.com](https://learngerman.detleng.com), with an A1–C1 curriculum covering 179 numbered chapters.

## Available now

- **Start Here:** How to Use This Course
- **CH 001:** Welcome to German
- **CH 002:** The German Alphabet & Spelling
- **CH 003:** Pronunciation I: Vowels

All four entries above are interactive. Other chapters remain visible in the curriculum; clicking their titles explains politely that the lesson is being prepared. They are not marked as completed or live.

## Local preview

Serve this folder using a simple static web server (for example `python -m http.server 8000`), then open `http://localhost:8000/`. The site has no build dependencies.

## Publish

Hosted on GitHub Pages with the root `CNAME`. Preserve the `CNAME` file and `lesson.html?id=lesson-NNN` URLs.

## Repository guide

- `course-data.js`: all curriculum titles, topics, and course structure.
- `app.js`: curriculum UI and available-vs-upcoming lesson links. Update its `availableChapters` set when releasing a new chapter.
- `lesson.html`: shared lesson page and current-chapter navigation.
- `lesson-engine/`: shared activities, learner progress, Smart Listener and final speaking drills.
- `lessons/ch-NNN/lesson.js`: interactive lesson data; register it once in `lesson.html`.
- `docs/chapters/ch-NNN/MASTER.md`: chapter teaching master.
- `docs/chapters/ch-NNN/IMPLEMENTATION-REPORT.md`: integration notes.
- `docs/STUDY-GUIDE.md`: curriculum learning reference.

Read `docs/REPOSITORY-STRUCTURE.md` before adding chapters. Maintain existing lesson IDs and progress storage keys so learners retain their saved work.
