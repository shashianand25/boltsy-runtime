import { routeTask, type TaskInput } from "./router";
import { selectModel } from "./selection";

export interface OrchestrationPlan {
  task: TaskInput;
  route: ReturnType<typeof routeTask>;
  model: ReturnType<typeof selectModel>;
  contextSources: string[];
  prompt: string;
}

export function aggregateContext(route: ReturnType<typeof routeTask>): string[] {
  const base = ["context/AGENTS.md", "context/routing_policy.md"];

  if (route.workflow === "memory") {
    return [...base, "context/memory_policy.md"];
  }

  if (route.workflow === "feature" || route.workflow === "bugfix") {
    return [...base, "context/workflow_patterns.md"];
  }

  return base;
}

export function buildPrompt(task: TaskInput, contextSources: string[]): string {
  return [
    "You are an execution agent working under Boltsy Runtime.",
    "",
    "Use only the task-scoped context provided by the orchestrator.",
    "",
    `Task: ${task.title}`,
    task.description,
    "",
    "Context sources:",
    ...contextSources.map((source) => `- ${source}`),
    "",
    "Return a structured result with status, changed files, checks, and blockers."
  ].join("\n");
}

export function orchestrate(task: TaskInput): OrchestrationPlan {
  const route = routeTask(task);
  const model = selectModel(route.profile);
  const contextSources = aggregateContext(route);
  const prompt = buildPrompt(task, contextSources);

  return {
    task,
    route,
    model,
    contextSources,
    prompt
  };
}

