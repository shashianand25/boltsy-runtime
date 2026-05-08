import os
import requests
import sys

def send_telegram_message(bot_token: str, chat_id: str, message: str):
    """Sends a message to a Telegram chat."""
    url = f"https://api.telegram.org/bot{bot_token}/sendMessage"
    payload = {
        "chat_id": chat_id,
        "text": message,
        "parse_mode": "Markdown"
    }
    
    try:
        response = requests.post(url, json=payload)
        response.raise_for_status()
        print("Successfully sent Telegram notification.")
    except requests.exceptions.RequestException as e:
        print(f"Failed to send Telegram notification: {e}")
        sys.exit(1)

if __name__ == "__main__":
    # Example usage: intended to be called from the CI/CD pipeline
    # when all checks (lint, test, AI review) have passed.
    BOT_TOKEN = os.environ.get("TELEGRAM_BOT_TOKEN")
    CHAT_ID = os.environ.get("TELEGRAM_CHAT_ID")
    
    if not BOT_TOKEN or not CHAT_ID:
        print("Error: TELEGRAM_BOT_TOKEN and TELEGRAM_CHAT_ID environment variables must be set.")
        sys.exit(1)
        
    pr_url = os.environ.get("PR_URL", "Unknown PR")
    repo_name = os.environ.get("GITHUB_REPOSITORY", "Unknown Repo")
    
    success_msg = (
        f"✅ *Merge-Ready PR Alert!*\n\n"
        f"Repository: `{repo_name}`\n"
        f"All CI checks passed (Lint, Typecheck, Tests).\n"
        f"AI Review Gate: Approved.\n\n"
        f"Review and Merge: {pr_url}"
    )
    
    send_telegram_message(BOT_TOKEN, CHAT_ID, success_msg)
