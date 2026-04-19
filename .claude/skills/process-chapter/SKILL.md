---
name: process-chapter
description: Process a raw notes file (typically one book chapter) into structured Obsidian notes. Use when the user runs /process-chapter with a file path, asks to "break down", "process", "structure", or "distill" a raw chapter file, or wants to split a large raw note into individual concept files following the vault's conventions.
argument-hint: <path/to/raw-notes.md>
---

# process-chapter

Transforms a raw chapter file into structured, granular Obsidian notes following the vault's conventions (kebab-case filenames, tag taxonomy, wiki-links, numbered prefixes).

## Workflow

### Step 1 — Read and orient

Read the raw file provided as the argument. Identify:
- The book/source title and author (from the file path, frontmatter, or opening lines)
- The chapter name and its position in the book if evident

### Step 2 — Propose output directory

Suggest a sibling folder using the pattern `N - Chapter Name/` where N is the chapter's position number (e.g. `atomic-habbits/1 - The surprising power of atomic habits/`).

Ask the user to confirm or override this path before writing anything.

### Step 3 — Analyse and draft the file list

Go through the raw content paragraph by paragraph. For each distinct idea:

1. Extract the **core claim** — the single thing a reader would bookmark this for, stripped of surrounding prose
2. Assign one or more tags from the vault taxonomy:
   - `#concept` — defines an idea or term, usually relates to understanding ot the topic
   - `#fact` — states a factual claim, usually sourced, generally related to memorizing
   - `#procedure` — describes a method or process to follow
   - `#tool` — a practical instrument or technique
   - `#quote` / `#paraphrased` — direct or paraphrased quote (tag goes **after** the quoted block)
3. Flag **broadly-known topics** (e.g. "feedback loops", "habit formation") — for these the note must capture the source's *specific angle or spin*, not a generic definition. Mark them `[spin]` in the draft table.
4. Propose a **kebab-case singular filename** reflecting the core claim
5. Assign a **1-based ordering prefix** based on order of appearance in the text

### Step 4 — Show the draft plan and wait for approval

Present the proposed files as a markdown table **before writing anything**:

```
| # | Filename              | Tags           | One-line summary                  |
|---|-----------------------|----------------|-----------------------------------|
| 0 | 0-chapter-name.md     | —              | Human-readable chapter overview   |
| 1 | 1-some-concept.md     | #concept       | What this note will say           |
| 2 | 2-another-concept.md  | #fact [spin]   | Source's angle on a known topic   |
```

Wait for the user to approve, rename, merge, or drop entries. Do not write any files until you receive explicit approval.

### Step 5 — Write the individual notes (1-, 2-, …)

For each approved entry, write the file to the confirmed output folder.

**File structure:**
```markdown
---
aliases: [Plural Form, Alternative Name]
---

#concept #fact in [[0-chapter-name]]

Body: 1–2 tight paragraphs. Prefer [[wiki-links]] over restating known concepts inline, especially if they are **broadly-known topics**.
For broadly-known topics ([spin]): frame the content as the source's perspective
e.g. "[[Author]] argues that…" or open with a contrast against the common view.
Feel free to refer existing files that relate.

```

Rules:
- Frontmatter only when there are aliases worth adding; omit entirely if empty
- Blank line required between `---` and the first tag/body line
- End each file with a backreference line: `#concept in [[0-chapter-name]]` (or the most relevant tag for that note)
- Wiki-link liberally to existing vault notes; use `[[Note Title|display text]]` when the display text is a known alias. For this process, you can use the table with filenames to refer to files that do not exist yet.

### Step 6 — Write the `0-CHAPTER_NAME.md` summary

The summary file is written for a human reader who wants to understand the chapter at a glance.

**Structure:**
- 1-3 narrative paragraph weaving together the chapter's key ideas
- Link to the **main** numbered notes using `[[filename|natural reading text]]` — enough links that every numbered note is referenced at least once (either from here or via another note that is referenced from here)
- Close with a tag (`#book`, `#concept`, or both) and optionally a reference to the book's parent note if one exists

**Do not** list every concept as bullets — write it as prose that reads naturally.

### Step 7 — Report

After all files are written, output:
- The list of files created with their paths
- A suggested git commit message in the format: `summarize: N - book name` (e.g. `summarize: - atomic habits`)
- 

## Key conventions

- Filenames: kebab-case, singular
- Frontmatter: excluded if empty; blank line before body/tags when present
- Tags: first line after `---` (or first line of file if no frontmatter)
- Broadly-known topics: always capture the source's unique spin, never a generic definition
- Every numbered note must be reachable via at least one wiki-link from the 0-summary or from another note the 0-summary links to
