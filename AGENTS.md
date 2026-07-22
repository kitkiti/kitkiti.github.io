# Agent Guidelines for al-folio

A simple, clean, and responsive Jekyll theme for academics.

## Preserve the Template and Its Beginner-Friendly Editing Model

This repository is a customized instance of the **al-folio template**, not a site to be re-architected. The existing structure, configuration options, reusable components, responsive behavior, and documented editing workflow are part of the product and must be preserved.

### Default Rule: Customize Through Existing Interfaces

For every request, first find the supported al-folio way to make the change. Prefer, in this order:

1. Existing settings and feature flags in `_config.yml`.
2. Existing structured data in `_data/`.
3. Markdown/frontmatter content in `_pages/`, `_posts/`, `_projects/`, `_news/`, `_teachings/`, and other existing collections.
4. Correctly placed assets under `assets/img/`, `assets/pdf/`, or another existing asset directory.
5. Existing theme variables, utility classes, includes, and layouts.
6. A small extension that follows an existing repository pattern.

Do not replace a configuration-driven or content-driven feature with hard-coded HTML, CSS, JavaScript, or duplicated markup. Keep personal content separate from presentation logic so the owner can continue editing the site through YAML, Markdown, BibTeX, and documented configuration options.

### Structural Preservation Rules

- Make the smallest localized change that satisfies the request. Avoid broad rewrites, framework substitutions, speculative refactors, and unrelated cleanup.
- Preserve the current directory layout, file responsibilities, naming conventions, frontmatter schemas, Liquid include boundaries, and data shapes.
- Reuse existing layouts, includes, components, classes, variables, and plugins before creating new ones.
- Preserve responsive layouts, navigation, dark mode, accessibility, SEO metadata, image handling, bibliography behavior, and build/deployment behavior unless the request explicitly targets one of them.
- Preserve comments, examples, placeholder fields, and documented options that help a beginner discover how to edit the template. Do not simplify a file by deleting useful optional settings.
- Keep new content consistent with nearby examples. Copy the structure of the closest existing entry, then change only the necessary values.
- Do not rename or move established files merely for preference. If a move is genuinely required, update every reference and explain the migration.
- Do not edit generated or vendored output, including `_site/`, `.jekyll-cache/`, dependency directories, minified/vendor assets, or the `gh-pages` branch. Change the source that produces the output.
- Do not run repository-wide formatting for a localized edit. Format only touched files unless the user explicitly requests a full formatting pass.
- Never discard or overwrite unrelated user changes. Inspect the working tree and preserve customizations already present.

### Protected Template Areas

Treat `_includes/`, `_layouts/`, `_plugins/`, `_sass/`, `_scripts/`, `assets/js/`, dependency manifests and lockfiles, Docker files, and `.github/workflows/` as template infrastructure. They may be edited only when content/configuration cannot satisfy the request and the change is necessary.

Before changing template infrastructure:

1. Read the relevant repository instruction file and `CUSTOMIZE.md`.
2. Identify the existing pattern or extension point being used.
3. Keep public data/frontmatter contracts backward-compatible.
4. Avoid adding dependencies when the existing stack can provide the behavior.
5. Ask the user before a major structural change, removal of core functionality, dependency change, workflow change, or departure from the al-folio editing model.

If a requested visual change requires custom styling, prefer a narrowly scoped override using existing theme tokens. Do not replace the global theme or duplicate the stylesheet system for a single page or component.

### Required Workflow for Every Edit

1. Read `.github/copilot-instructions.md` and the path-specific instruction file for every file type that will be changed.
2. Inspect nearby files and existing implementations before editing; do not invent a new convention without checking.
3. State which source-of-truth files will change and whether any template infrastructure is affected.
4. Apply the minimum diff and retain the original editing interface wherever possible.
5. Review the diff for accidental deletions, duplicated functionality, hard-coded personal data in templates, and unrelated formatting churn.
6. Validate in proportion to the change: syntax-check structured files, format touched files, build the site when practical, and visually verify affected pages, navigation, mobile behavior, and dark mode when presentation changes.
7. Report what changed, what was validated, and any verification that could not be completed.

When multiple implementations are possible, choose the one a non-technical owner can understand and maintain by following the existing al-folio documentation. If fulfilling a request would undermine that model, pause and explain the safer template-native option before proceeding.

## Quick Links by Role

- **Are you a coding agent?** → Read [`.github/copilot-instructions.md`](.github/copilot-instructions.md) first (tech stack, build, CI/CD, common pitfalls & solutions)
- **Customizing the site?** → See [`.github/agents/customize.agent.md`](.github/agents/customize.agent.md)
- **Writing documentation?** → See [`.github/agents/docs.agent.md`](.github/agents/docs.agent.md)
- **Need setup/deployment help?** → [INSTALL.md](INSTALL.md)
- **Troubleshooting & FAQ?** → [TROUBLESHOOTING.md](TROUBLESHOOTING.md)
- **Customization & theming?** → [CUSTOMIZE.md](CUSTOMIZE.md)
- **Quick 5-min start?** → [QUICKSTART.md](QUICKSTART.md)

## Essential Commands

### Local Development (Docker)

The recommended approach is using Docker.

```bash
# Initial setup & start dev server
docker compose pull && docker compose up
# Site runs at http://localhost:8080

# Rebuild after changing dependencies or Dockerfile
docker compose up --build

# Stop containers and free port 8080
docker compose down
```

### Pre-Commit Checklist

Before every commit, you **must** run these steps:

1.  **Format Code:**
    ```bash
    # (First time only)
    npm install --save-dev prettier @shopify/prettier-plugin-liquid
    # Format all files
    npx prettier . --write
    ```
2.  **Build Locally & Verify:**

    ```bash
    # Rebuild the site
    docker compose up --build

    # Verify by visiting http://localhost:8080.
    # Check navigation, pages, images, and dark mode.
    ```

## Critical Configuration

When modifying `_config.yml`, these **must be updated together**:

- **Personal site:** `url: https://username.github.io` + `baseurl:` (empty)
- **Project site:** `url: https://username.github.io` + `baseurl: /repo-name/`
- **YAML errors:** Quote strings with special characters: `title: "My: Cool Site"`

## Development Workflow

- **Git & Commits:** For commit message format and Git practices, see [.github/GIT_WORKFLOW.md](.github/GIT_WORKFLOW.md).
- **Code-Specific Instructions:** Consult the relevant instruction file for your code type.

| File Type                                     | Instruction File                                                                                |
| --------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| Markdown content (`_posts/`, `_pages/`, etc.) | [markdown-content.instructions.md](.github/instructions/markdown-content.instructions.md)       |
| YAML config (`_config.yml`, `_data/`)         | [yaml-configuration.instructions.md](.github/instructions/yaml-configuration.instructions.md)   |
| BibTeX (`_bibliography/`)                     | [bibtex-bibliography.instructions.md](.github/instructions/bibtex-bibliography.instructions.md) |
| Liquid templates (`_includes/`, `_layouts/`)  | [liquid-templates.instructions.md](.github/instructions/liquid-templates.instructions.md)       |
| JavaScript (`_scripts/`)                      | [javascript-scripts.instructions.md](.github/instructions/javascript-scripts.instructions.md)   |

## Common Issues

For troubleshooting, see:

- [Common Pitfalls & Workarounds](.github/copilot-instructions.md#common-pitfalls--workarounds) in copilot-instructions.md
- [TROUBLESHOOTING.md](TROUBLESHOOTING.md) for detailed solutions
- [GitHub Issues](https://github.com/alshedivat/al-folio/issues) to search for your specific problem.
