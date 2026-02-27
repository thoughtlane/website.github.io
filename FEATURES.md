# Math Solver — Features (User Guide)

This document lists what you can do with Math Solver from a user’s perspective. It does not describe internal design or implementation.

---

## Overview

Math Solver lets you:

1. Upload math question sheets (images or PDFs).
2. Extract questions and work with them in two modes: **Solver** (see full solutions) or **Cognitive Helper** (solve step-by-step yourself with hints and validation).
3. Generate similar questions, export results, and manage everything from a dashboard.

---

## Upload & Extract

- **Upload** — Add one or more files: images (e.g. JPEG, PNG, WebP) or PDFs of math question sheets.
- **Optional prefix** — Give a job ID prefix (e.g. quiz name) when uploading so you can find the run later.
- **Extract** — The app extracts individual questions (and answer choices when present) from each sheet and shows them in a list.
- **Dashboard** — Uploads can be organized in folders (e.g. by topic, grade, or date). You can search, sort, and switch between list and tile views.

---

## Solver (Step-by-Step Solutions)

Use the Solver when you want to **see** a full step-by-step solution for each question.

- **Solve All** — Run solutions for every extracted question in one go. Progress is shown in real time.
- **Solve one question** — Run the solver for a single question instead of the full set.
- **Results** — Each question shows a step-by-step solution. You can expand or collapse sections and use “Minimize all” / “Maximize all” for easier reading.
- **Similar questions** — From the questions list you can request “Similar” for one question or “Similar (all)” for the whole set. From the results view you can “Generate similar for all” to create additional practice questions.
- **Export** — Download the solutions as **PDF** (for sharing or printing) or **DOCX** (editable in Word or similar).
- **Open in Dashboard** — Jump from the Solver view to the Dashboard for that job (e.g. to open Cognitive Helper or manage files).

---

## Cognitive Helper (Guided Step-by-Step Practice)

Use Cognitive Helper when you want to **solve** the questions yourself, with hints and feedback.

- **Question list** — All questions from the current job appear in a left-hand list. Click a question to open it.
- **Question view** — The selected question is shown clearly so you can work on it.
- **Step editor** — A math-aware editor where you type your solution **one step per line**. You can mix plain text and math (e.g. fractions, square roots) using the toolbar or the math keyboard.
- **Hints** — Each step line has a “?” (hint). Click it to get a **suggestion for the next step** only—not the full answer—so you can keep reasoning yourself.
- **Step checking** — You can turn on “Check every step when moving to next line.” When you go to the next line, the previous step is checked. If it’s wrong, you get feedback and can fix it before continuing.
- **Mark as solved** — When you’ve finished a question correctly, you can mark it as solved. A clear success indicator appears, and the question is marked in the list.
- **Chat** — A chat panel lets you ask follow-up questions about the current problem and get explanations (with math when needed). The conversation is saved and restored when you return to that question.
- **Progress tracking** — The app records: hints used, steps marked wrong (and corrected), steps done on your own, and questions solved. This helps you or your teacher see how practice is going.
- **Saved state** — Your steps, hints, and chat are saved. When you leave and come back to the same job, your progress is restored.
- **Back to Dashboard** — Return to the Dashboard to switch jobs or open another file.

---

## Dashboard

The Dashboard is your home for files and past runs.

- **Tabs** — **Uploads**, **Jobs (Questions)**, and **Steps** let you switch between uploaded files, extracted question sets, and solution runs.
- **Uploads** — Browse by folder. For each file you can: **Solve** (extract and open in Solver), **Cognitive Helper** (open in Cognitive Helper), or **Past jobs** (see previous runs for that file). You can also add new files and create folders.
- **Jobs (Questions)** — See extracted question sets. Open a job in Solver or Cognitive Helper.
- **Steps** — See past solution runs and open them to view results.
- **Search & sort** — Search by name and sort by name or date.
- **List / tile view** — Switch between list and tile layout.
- **Job ID prefix** — Optional prefix when opening a file in Solver (e.g. for extraction) to label the run.

---

## Export & Download

- **Download PDF** — From the Solver results, download all step-by-step solutions as a single PDF.
- **Download DOCX** — Download the same content as an editable Word-style document (DOCX).

---

## Experience & Accessibility

- **Themes** — Choose a visual theme (e.g. Paper, Light, Slate, Sepia, Midnight, Ocean, Forest, Sunset) for comfort in different lighting or preference.
- **Responsive layout** — The interface adapts to different screen sizes; key areas (question list, step editor, chat) can scroll when content is long.

---

## Summary Table

| Feature | Description |
|--------|-------------|
| Upload sheets | Images or PDFs of math question sheets |
| Extract questions | Get a list of questions (and choices) from each sheet |
| Solver | Full step-by-step solutions for each question; solve all or one |
| Cognitive Helper | Type your own steps; get hints, step checking, chat, and progress tracking |
| Similar questions | Generate extra practice questions from existing ones |
| Export | PDF and DOCX download of solutions |
| Dashboard | Folders, uploads, jobs, steps; search, sort, list/tile view |
| Progress & state | Hints used, steps wrong/on own, questions solved; saved per job |
| Themes | Multiple visual themes |

All of these features are available through the app’s UI; no implementation or system details are required to use them.
