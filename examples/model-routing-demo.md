# Model Routing Demo

| Input | Expected Profile |
| --- | --- |
| "Fix typo in README" | `cheap` |
| "Add a settings panel" | `balanced` |
| "Refactor auth and database session handling" | `deep` |
| "Review this PR for architecture risk" | `review` |

The selector should choose the least expensive model that can safely handle the work.

