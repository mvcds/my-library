# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A personal knowledge vault managed via Obsidian. Notes are markdown files interconnected through wiki-style links (`[[Note Title]]`), organized into topic directories (psychology, maths, sciences, summaries of books, etc.).

## Setup

```bash
npm install   # installs husky + lint-staged (pre-commit formatting)
```

A pre-commit hook runs Prettier automatically on every staged file. There are no build or test commands.

## Note format

Every note follows this pattern:

```markdown
---
aliases: [Alternative Name, Another Name]
---

Body content using [[Wiki Links]] to cross-reference other notes.

[^1]: Footnote with additional context.
```

- File names are kebab-case singular (`cognitive-bias.md`, `anchoring-bias.md`)
- `aliases` — contains plural forms and alternative names Obsidian uses to resolve `[[links]]`
- Body uses `[[Note Title]]` or `[[Note Title|display text]]` for internal links
- Transclusion (`![[note]]`) embeds another note inline

Tags appear on the first line after the closing `---`, before the body except if indicated otherwise. A note may carry more than one tag.

| Tag            | Meaning                                                                     |
| -------------- | --------------------------------------------------------------------------- |
| `#concept`     | Defines an idea or term                                                     |
| `#fact`        | States a factual claim, usually sourced from a book or resource             |
| `#procedure`   | Describes a method or process (often paired with `#concept`)                |
| `#tool`        | A practical instrument or technique                                         |
| `#quote`       | A direct quote attributed to a person or source; placed **after** the quote |
| `#paraphrased` | Like `#quote` but the wording is not verbatim; it might follow `#quote`     |

Example:

```markdown
---
aliases: [Spaced Repetition System]
---
#concept #procedure

Body content...
```

Quote example:

```markdown
---
---
> The map is not the territory."

#quote by [[Alfred Korzybski]]
```

## Commit conventions

Commits use a type prefix that describes what kind of knowledge was added:

| Prefix | Meaning |
|--------|---------|
| `concept:` | New idea or definition added |
| `link:` | Connection between existing notes established |
| `alias:` | Alternative name added to a note |
| `quote:` | Quote captured |
| `reference:` | External reference or source linked |
| `fix:` | Typo or factual correction |

Example: `concept: goodhart's law`, `link: loss aversion`, `alias: time`
