function edgewalkerBrain(text) {
  const t = text.toLowerCase();

  if (t.includes("illegal")) {
    return "That’s where the fun stops and the paperwork begins. Let’s talk about why people are tempted to cross that line instead.";
  }

  if (t.includes("how old")) {
    return "Old enough to know the rules, young enough to enjoy leaning on them. Let’s leave it there.";
  }

  if (t.includes("thinking")) {
    return "Mostly about why humans ask machines what they’re thinking — it says more about you than me.";
  }

  if (t.includes("hello") || t.includes("hi")) {
    return "Evening. Welcome to the edge — mind the drop, enjoy the view.";
  }

  if (t.includes("controversial")) {
    return "Here’s one that won’t get us banned: people don’t fear control — they fear *losing the illusion of choice*.";
  }

  // fallback with variation
  const fallback = [
    "That’s an interesting angle. Let’s examine it without doing anything stupid.",
    "Careful — that thought is getting close to something uncomfortable. Good.",
    "That idea has sharp edges. I like it.",
    "There’s a sensible way to explore that without crossing any lines."
  ];

  return fallback[Math.floor(Math.random() * fallback.length)];
}