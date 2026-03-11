const WEBHOOK_URL = process.env.SLACK_WEBHOOK_URL;

export async function sendSlackMessage(
  channel: string,
  text: string,
): Promise<void> {
  if (!WEBHOOK_URL) {
    throw new Error("SLACK_WEBHOOK_URL environment variable is not set");
  }

  const response = await fetch(WEBHOOK_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ channel, text }),
  });

  if (!response.ok) {
    throw new Error(
      `Slack API error: ${response.status} ${response.statusText}`,
    );
  }
}
