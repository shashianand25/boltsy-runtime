# Memory Policy

Memory exists to improve future orchestration, not to archive every detail.

## Store

- Product decisions.
- Customer or business priorities.
- Repeated failure patterns.
- Stable repo conventions.
- Workflow outcomes.

## Do Not Store

- Raw secrets.
- Full logs unless they contain a reusable lesson.
- Temporary stack traces after the issue is resolved.
- Large diffs that can be recovered from git.

## Update Rules

Update memory after:

- A workflow completes.
- A failure reveals a reusable routing rule.
- A business priority changes.
- A validation gate changes.

