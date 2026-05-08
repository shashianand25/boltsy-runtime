export type WorkflowKind = "feature" | "bugfix" | "review" | "docs" | "memory";
export type RiskLevel = "low" | "medium" | "high";
export type ExecutionProfile = "cheap" | "fast" | "balanced" | "deep" | "review";

export interface TaskInput {
  title: string;
  description: string;
  changedFiles?: string[];
  riskHint?: RiskLevel;
}

export interface RouteDecision {
  workflow: WorkflowKind;
  risk: RiskLevel;
  profile: ExecutionProfile;
  reason: string;
}

export function routeTask(task: TaskInput): RouteDecision {
  const text = `${task.title} ${task.description}`.toLowerCase();
  const changedCount = task.changedFiles?.length ?? 0;

  if (text.includes("review") || text.includes("pr")) {
    return {
      workflow: "review",
      risk: task.riskHint ?? "medium",
      profile: "review",
      reason: "Task asks for review or PR validation."
    };
  }

  if (text.includes("memory") || text.includes("summarize")) {
    return {
      workflow: "memory",
      risk: "low",
      profile: "cheap",
      reason: "Task is a memory or summarization operation."
    };
  }

  if (text.includes("auth") || text.includes("payment") || text.includes("migration") || changedCount > 5) {
    return {
      workflow: "feature",
      risk: "high",
      profile: "deep",
      reason: "Task has high-risk keywords or broad file impact."
    };
  }

  if (text.includes("doc") || text.includes("readme")) {
    return {
      workflow: "docs",
      risk: "low",
      profile: "fast",
      reason: "Task is documentation-oriented."
    };
  }

  return {
    workflow: "feature",
    risk: task.riskHint ?? "medium",
    profile: changedCount <= 2 ? "fast" : "balanced",
    reason: "Default feature routing based on file impact."
  };
}

