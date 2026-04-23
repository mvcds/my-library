---
name: breakdown
description: Process a raw file (typically a book chapter) into structured Obsidian notes. Use when the user runs /breakdown with a file path, asks to "break down", "process", "structure", or "distill" a raw file, or wants to split a large raw file into individual files following the vault's conventions for summaries.
argument-hint: <path/to/raw-notes.md>
---

# breakdown

Transforms a raw file into structured Obsidian notes following the vault's summary conventions: sections/chapters use `N - Title Case.md` naming, granular notes land in root-level `concepts/`, `facts/`, `procedures/`, or `quotes/` folders, and chapter files stay compact (≤3 paragraphs).

## Vault structure

```
<book-root>/
  0 - Book Title.md              ← one-liner with #book inline
  N - Section Name/
    0 - Section Name.md          ← brief overview, ends with #understanding of [[0 - Book Title]]
    1 - Chapter Name.md          ← ≤3 paragraphs, ends with #understanding of [[0 - Section Name]]
    2 - Chapter Name.md
  concepts/
    Concept Name.md              ← #concept in [[N - Chapter Name]]
  facts/
    Factual statement.md         ← #fact in [[N - Chapter Name]]
  procedures/
    Action phrase.md             ← #procedure in [[N - Chapter Name]]
  quotes/
    Quote text.md                ← #quote by [[Author]] on [[0 - Book Title]] about [[topic]]
```

## Workflow

### Step 1 — Read and orient

Read the raw file. Identify:
- Book title, author, and root folder (e.g. `domain-driven-design/`)
- Whether this is a new **section** or a **chapter inside an existing section**
- The position number for naming
- If the body headers like `---` markers (outside frontmatter) to indicate text division, treat them as **sub-chapter separators** and scope this run to the **first sub-chapter only**

When sub-chapter separators are present, ignore content after the first separator for Steps 2-6 in this run so review pacing stays incremental.

### Step 2 — Confirm output location

Ask the user:
- Is this a new section? If so, propose `N - Section Name/` folder + a `0 - Section Name.md` inside it.
- Is this a chapter inside an existing section? If so, propose `N - Chapter Name.md` in the existing section folder.
- Confirm the book root path.

Do not write anything yet.

### Step 3 — Analyse and draft the file list

Go through the raw content. For each distinct idea:

1. Extract the **core claim** — the single thing a reader would bookmark this for
2. Assign one or more tags:
   - `#concept` — defines an idea or term (understanding-oriented)
   - `#fact` — factual claim, usually memorization-oriented
   - `#procedure` — method or process to follow
   - `#tool` — practical instrument or technique
   - `#quote` / `#paraphrased` — direct or paraphrased quote
3. Determine the **destination folder** by highest-precedence tag:
   `#concept` → `concepts/` > `#fact` → `facts/` > `#procedure` → `procedures/` > `#quote` → `quotes/`
4. Flag **broadly-known topics** — mark `[spin]`; these must capture the source's specific angle, not a generic definition
5. Propose a filename:
   - Concepts/procedures: Title Case (`Ubiquitous Language.md`)
   - Facts: full descriptive phrase (`The basic distinctions between entities and value objects.md`)
   - Quotes: the quote text itself

### Step 4 — Show the draft plan and wait for structural approval

Present **two tables** before writing anything:

**Section/chapter files:**
```
| File                              | Description                        |
|-----------------------------------|------------------------------------|
| N - Section Name/0 - Section.md   | Section overview                   |
| N - Section Name/1 - Chapter.md   | Compact chapter note (≤3 paras)    |
```

**Granular notes:**
```
| Folder      | Filename                        | Tags              | One-line summary          |
|-------------|---------------------------------|-------------------|---------------------------|
| concepts/   | Concept Name.md                 | #concept          | What this note will say   |
| facts/      | Factual statement.md            | #fact [spin]      | Source's angle on a topic |
| quotes/     | Quote text.md                   | #quote            | Attribution               |
```

Wait for the user to approve, rename, merge, or drop entries. This is a **structural approval** — file names, tags, and plan shape. Individual file content will be reviewed one at a time in Steps 5 and 6. Do not write any files until you receive explicit approval.

### Step 5 — Write the section/chapter files (per-file loop)

Those files are meant to be read at a glance by humans.

For **each** section/chapter file, before writing:

1. Show the full proposed content as a fenced markdown block
2. Wait for the user's response — one of three outcomes:
   - **Approve** → write the file
   - **"Already exists as [[X]]"** → the file might be refering to an existing file without adding proper wiki-links; add `proposed name → X` to the substitution map; apply the map to this and subsequent files drafts in this batch, if file does not exists, ask user if they want to create or just wrap the work as wiki-link, so they might create the file later.
   - **Broaden / redirect** (user gives new direction) → revise the draft accordingly, show again, wait for approval

**Section `0-` file** (only when creating a new section):
```markdown
Brief 1–2 sentence overview of what this section is about, using [[wiki-links]] to key concepts.

#understanding of [[0 - Book Title]]
```

**Chapter file** (≤2 paragraphs — compact reading-comprehension note):
```markdown
Body using [[wiki-links]] heavily. May include transclusion (![[note]]) for related ideas.
Keep it tight, this is a pointer into the granular notes, not a retelling.

#understanding of [[0 - Section Name]]
```

### Step 6 — Write the granular notes (per-file loop)

For **each** approved granular entry, before writing, apply the same loop as Step 5:

1. Draft the full content, applying any substitutions from the map (replace `[[proposed name]]` with `[[existing note]]` throughout)
2. Show the draft in a fenced block
3. Wait → approve / already-exists / broaden

For each approved entry, write to the appropriate root-level folder.

Example

```markdown
---
aliases: [Plural Form, Alternative Name]
---

#concept #procedure in [[N - Chapter Name]]

Body: 1–2 tight paragraphs. For broadly-known topics ([spin]): frame as the source's perspective,
e.g. "[[Author]] argues that…" or open with a contrast against the common view.
Use [[wiki-links]] over restating known concepts inline.
```

Example of #quote

```markdown
> Quote text with [[linked concepts]]

#quote by [[Author]] on [[0 - Book Title]] about [[topic]] #paraphased
```

Rules for all files:
- Frontmatter only when there are aliases; omit entirely if empty
- Blank line required between closing `---` and the first tag/body line
- Wiki-link liberally; use `[[Note Title|display text]]` when the display text is a known alias
- You can reference files being created in the same batch by their proposed names
- You can reference other, already existing links, especially if they are **broadly-known topics** that are being treated on the book

### Step 7 — Trim processed raw content

After all approved files are written, update the raw input file by removing only the processed portion from this run:
- If sub-chapter separators are present, remove everything up to including its separator, keeping the separator and remaining text for the next run.
- Never remove unprocessed text.

### Step 8 — Report

After all files are written, output:
- List of files created with their paths
- Suggested git commit message using vault conventions (e.g. `summary: book name`)

## Key conventions

- Section/chapter files: `N - Title Case.md` with spaces
- Concept/procedure files: Title Case names
- Fact files: full descriptive statement as filename
- Quote files: the quote text as filename
- Frontmatter: excluded if empty; blank line before body/tags when present
- Tags: first line after `---` (or first line of file if no frontmatter)
- Folder precedence when multiple tags: concept > fact > procedure > quote
- Broadly-known topics: always capture the source's unique spin, never a generic definition
- Chapter files: ≤3 paragraphs — compact, link-heavy, not comprehensive
- Section/chapter files are meant to humans reading it
