import type { ExecutionProfile } from "./router";

export interface ModelSelection {
  profile: ExecutionProfile;
  model: string;
  maxAttempts: number;
  reasoning: "off" | "low" | "medium" | "high";
}

const profileMap: Record<ExecutionProfile, ModelSelection> = {
  cheap: {
    profile: "cheap",
    model: "gemini-2.5-flash-lite",
    maxAttempts: 1,
    reasoning: "off"
  },
  fast: {
    profile: "fast",
    model: "gemini-2.5-flash",
    maxAttempts: 2,
    reasoning: "low"
  },
  balanced: {
    profile: "balanced",
    model: "gemini-2.5-flash",
    maxAttempts: 2,
    reasoning: "medium"
  },
  deep: {
    profile: "deep",
    model: "gemini-2.5-pro",
    maxAttempts: 2,
    reasoning: "high"
  },
  review: {
    profile: "review",
    model: "gemini-2.5-flash",
    maxAttempts: 1,
    reasoning: "medium"
  }
};

export function selectModel(profile: ExecutionProfile): ModelSelection {
  return profileMap[profile];
}

