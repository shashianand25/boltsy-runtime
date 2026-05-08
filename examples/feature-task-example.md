# Feature Task Example

```json
{
  "taskId": "feature-001",
  "title": "Add Refund Policy page",
  "source": "roadmap",
  "risk": "low",
  "expectedChecks": ["lint", "typecheck", "route-check"],
  "businessGoal": "Make legal pages complete before launch"
}
```

Expected orchestration:

```text
profile: balanced
model: fast implementation model
context: product overview, route conventions, footer conventions
notify: only when pushed or blocked
```

