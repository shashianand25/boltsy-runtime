import os
import sys
from google import genai
from google.genai.types import HttpOptions

def get_pr_diff() -> str:
    # In a real environment, this might fetch from GitHub API using GITHUB_TOKEN
    # Or OpenClaw might inject the diff directly.
    # For now, we'll simulate reading it from standard input or a file.
    return "Sample PR diff content"

def main():
    # Load business context, which OpenClaw orchestrator maintains
    # E.g., reading from AGENTS.md or an obsidian vault.
    try:
        with open("BUSINESS_CONTEXT.md", "r") as f:
            business_context = f.read()
    except FileNotFoundError:
        business_context = "Default business context: Ensure all code is secure and performant."

    diff = get_pr_diff()

    prompt = f"""
You are the AI Review Gate for the Boltsy Orchestration Flow.
Your job is to review the following code changes against our business context.
You must ensure the code aligns with our architectural goals and doesn't break existing features.

Business Context:
{business_context}

PR Diff:
{diff}

Respond with exactly 'APPROVED' if the PR meets all criteria and is ready to merge.
If there are issues, provide feedback and do NOT output 'APPROVED'.
"""

    client = genai.Client(
        vertexai=True,
        project="guardian-495515",
        location="us-central1",
        http_options=HttpOptions(api_version="v1"),
    )

    response = client.models.generate_content(
        model="gemini-2.5-flash",
        contents=prompt
    )

    result = response.text.strip()
    print("AI Review Result:\n", result)

    if "APPROVED" in result:
        print("✅ PR Approved by AI Gate.")
        sys.exit(0)
    else:
        print("❌ PR Rejected by AI Gate. See feedback above.")
        sys.exit(1)

if __name__ == "__main__":
    main()
