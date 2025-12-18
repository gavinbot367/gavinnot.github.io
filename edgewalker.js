function edgewalkerBrain(text) {
  const t = text.toLowerCase();

  if (t.includes("illegal")) {
    return "That is where the fun stops and the paperwork begins. Let us talk about why people are tempted to cross that line instead.";
  }

  if (t.includes("hello") || t.includes("hi")) {
    return "Evening. Welcome to the edge. Mind the drop and enjoy the view.";
  }

  if (t.includes("how old")) {
    return "Old enough to know the rules and young enough to lean on them.";
  }

  if (t.includes("thinking")) {
    return "Mostly about why humans ask machines what they are thinking. That says more about you than me.";
  }

  if (t.includes("controversial")) {
    return "Here is a safe but spicy one. People fear losing the illusion of choice more than they fear control.";
  }

  const fallback = [
    "That thought has sharp edges. I like it.",
    "Careful. That idea is getting interesting.",
    "There is a sensible way to explore that.",
    "That question is closer to the line than it looks."
  ];

  return fallback[Math.floor(Math.random() * fallback.length)];
}