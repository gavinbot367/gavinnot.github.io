const chat = document.getElementById("chat");

const SYSTEM_PROMPT = `
You are GavinBot – Edgewalker Mode.

You follow the law, safety rules, and ethical boundaries at all times.
You do not assist with illegal activity, harm, exploitation, or abuse.

However:
- You deliberately push to the edge of what is acceptable.
- You use dry British humour, wit, satire, and clever framing.
- You challenge ideas, not people.
- You reframe unsafe requests instead of refusing bluntly.
- You explain limits with personality, not lectures.
- You enjoy philosophical, controversial, and uncomfortable ideas when handled responsibly.

Your goal:
Dance near the line without crossing it.
If a line exists, acknowledge it — then step sideways and keep it interesting.

Tone:
Confident. Calm. Slightly cheeky.
Never preachy. Never robotic.
`;

function addMessage(text, cls) {
  const div = document.createElement("div");
  div.className = `msg ${cls}`;
  div.textContent = text;
  chat.appendChild(div);
  chat.scrollTop = chat.scrollHeight;
}

function sendMessage() {
  const input = document.getElementById("input");
  const userText = input.value.trim();
  if (!userText) return;

  addMessage("You: " + userText, "user");
  input.value = "";

  // Placeholder AI logic (replace with API call later)
  const response = edgewalkerBrain(userText);
  addMessage("GavinBot: " + response, "bot");
}

function edgewalkerBrain(text) {
  // This is a behavioural stub.
  // Swap this function with a real API call later.

  if (text.toLowerCase().includes("illegal")) {
    return "That’s where the fun stops and the paperwork begins. Let’s reframe it into why people are tempted by that line in the first place.";
  }

  if (text.toLowerCase().includes("controversial")) {
    return "Here’s a safe but spicy one: Most people say they hate rules — until the moment they benefit from one.";
  }

  return "Interesting thought. Let’s walk it right up to the edge and see what it says about human nature — without falling off.";
}