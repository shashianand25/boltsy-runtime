# Workflow Examples

## Feature Implementation

Input:

```text
Implement refund policy page and link it from the footer.
```

Workflow:

1. Classify as `feature`.
2. Load product and repo conventions.
3. Route to `balanced`.
4. Spawn implementation agent.
5. Run lint, typecheck, and UI checks.
6. Notify only when merge-ready or blocked.

## AI Review Gate

Input:

```text
Review this pull request against architecture and business context.
```

Workflow:

1. Load PR diff and changed files.
2. Load business priority and engineering rules.
3. Route to `review`.
4. Return `approved`, `changes_requested`, or `blocked`.

## Memory Update

Input:

```text
Workflow completed. Update long-term context.
```

Workflow:

1. Summarize what changed.
2. Record decisions, failures, and learned patterns.
3. Avoid storing raw noisy logs.
4. Keep future prompts smaller and sharper.

