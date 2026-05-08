# Orchestration Output Example

```json
{
  "taskId": "feature-001",
  "workflow": "feature",
  "profile": "balanced",
  "selectedModel": "gemini-2.5-flash",
  "contextSources": [
    "context/AGENTS.md",
    "context/routing_policy.md",
    "repo:src/App.tsx",
    "repo:src/components/Footer.tsx"
  ],
  "status": "merge_ready",
  "checks": {
    "lint": "passed",
    "typecheck": "passed",
    "review": "passed"
  },
  "notification": {
    "channel": "telegram",
    "sent": true
  }
}
```

