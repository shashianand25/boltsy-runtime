# Routing Policy

Routing maps tasks to execution profiles.

## Profiles

| Profile | Use Case |
| --- | --- |
| `cheap` | Summaries, memory updates, simple classification |
| `fast` | Small edits, docs, simple UI changes |
| `balanced` | Normal feature work |
| `deep` | Architecture, migrations, risky changes |
| `review` | AI review gates and policy checks |

## Heuristics

Use `deep` when:

- The task touches auth, payments, data integrity, or infrastructure.
- More than five files are likely to change.
- A migration or schema change is involved.
- Prior attempts failed.

Use `fast` or `cheap` when:

- The output is mostly prose.
- The task is deterministic and low risk.
- Existing patterns are obvious.

Escalate when validation fails twice or when the model reports uncertainty about architecture.

