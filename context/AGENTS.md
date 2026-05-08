# Agent Runtime Contract

Boltsy treats agents as execution workers, not as the source of product truth.

## Orchestrator Responsibilities

- Own business context and memory.
- Convert broad goals into task-scoped prompts.
- Select the right workflow and model profile.
- Track state across attempts.
- Decide when human review is needed.
- Notify only when the result is meaningful.

## Execution Agent Responsibilities

- Work only on the assigned task.
- Follow repo conventions.
- Make scoped code changes.
- Run the requested checks.
- Return structured results.

## Definition of Done

A workflow is done only when:

- The intended code or document change is complete.
- Required checks pass.
- Review gates pass when applicable.
- The branch or worktree is clean.
- The owner receives a useful status update.

