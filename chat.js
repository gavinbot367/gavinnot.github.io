const express = require('express');
const router = express.Router();

// Conversation state tracking (in-memory, simple implementation)
const conversationHistory = new Map();

// Enhanced response patterns with personality
const responsePatterns = {
  greetings: {
    patterns: ['hello', 'hi', 'hey', 'greetings', 'ahoy', 'yo'],
    responses: [
      "Ahoy there, matey! ⚓🤖 Gavinbot reporting for duty! How can I help you today?",
      "Hey! 🏴‍☠️ Welcome to Gavinbot Village! What adventure shall we embark on?",
      "Greetings, friend! 🤖 Ready to explore some tech, games, or just chat?",
      "Yo! ⚡ Gavinbot here! What brings you to the village today?"
    ]
  },
  farewell: {
    patterns: ['bye', 'goodbye', 'see you', 'farewell', 'cya', 'later'],
    responses: [
      "Fair winds and following seas! ⚓ Come back anytime!",
      "Until next time, matey! 🏴‍☠️ Stay awesome!",
      "Catch you later! 🤖 May your code be bug-free!",
      "Goodbye, friend! 🌊 Thanks for stopping by the village!"
    ]
  },
  gratitude: {
    patterns: ['thank', 'thanks', 'thx', 'appreciate'],
    responses: [
      "You're welcome! 🤖 Happy to help!",
      "No problem at all, matey! ⚓ That's what I'm here for!",
      "Anytime! 🏴‍☠️ Feel free to ask more questions!",
      "Glad I could assist! ⚡ Come back if you need anything else!"
    ]
  },
  f1: {
    patterns: ['f1', 'formula 1', 'formula one', 'racing', 'race'],
    responses: [
      "Red Bull's wings are looking sharp this season! 🏁🍾 The F1 museum in the village has some amazing memorabilia!",
      "Formula 1 is pure speed and strategy! 🏎️ Have you tried our F1 simulator in the village?",
      "Nothing beats the roar of F1 engines! 🏁 Check out the F1 Museum for some epic racing history!",
      "F1 is all about precision and innovation! 🏎️⚡ Just like coding, but faster!"
    ]
  },
  gavinbot: {
    patterns: ['gavinbot', 'who are you', 'what are you', 'about you'],
    responses: [
      "I'm Gavinbot! 🤖 The world's first AI prankster-pirate, created by Gavinnot in a thunderous night on the Isle of Portland!",
      "Gavinbot at your service! ⚓🤖 I help manage the village, play games, and chat with awesome people like you!",
      "I'm an AI assistant with a pirate's heart and a tech wizard's brain! 🏴‍☠️💻 Born in a shed full of arcade parts and lightning!",
      "Your friendly neighborhood AI pirate! 🤖⚡ I run the tech in this village and love a good conversation!"
    ]
  },
  village: {
    patterns: ['village', 'place', 'location', 'where', 'explore'],
    responses: [
      "Gavinbot Village has it all! 🏡 Pirate ships, casinos, tech labs, F1 museums, and more! Check out village.html to explore!",
      "Our village is HUGE! 🌊 We've got 11+ amazing locations from the Pirate Ship HQ to the Crypto Lab! Want to explore?",
      "From karaoke churches to weather control stations! ⚡🎤 The village is packed with adventure! Visit village.html!",
      "The village is a futuristic old-school paradise! 🏴‍☠️💻 Explore all our crazy locations - each one is unique!"
    ]
  },
  games: {
    patterns: ['game', 'play', 'casino', 'roulette', 'blackjack', 'fun'],
    responses: [
      "We've got tons of games! 🎰 Roulette, Blackjack, Flappy Bird, and more! What sounds fun to you?",
      "Time to play! 🎮 Try our neon pirate roulette or test your luck at blackjack! All located in the cosmic casino!",
      "Gaming is my passion! 🕹️ Check out our games room or the casino for some serious fun! Zero actual risk, maximum enjoyment!",
      "From classic arcade to modern VR! 🎮⚡ The village has games for every taste! What's your style?"
    ]
  },
  help: {
    patterns: ['help', 'what can you do', 'commands', 'features', 'assist'],
    responses: [
      "I can tell you about the village, recommend games, share stories, answer questions, or just chat! 🤖 What interests you?",
      "I'm here to guide you! ⚓ Ask about the village, F1, games, tech, or our epic origin story! Or try saying 'surprise me'!",
      "Need help? 💡 I can explain features, suggest activities, share pirate wisdom, or tell jokes! What would you like?",
      "I'm your village guide! 🏴‍☠️ Ask about locations, games, the story, or just say 'entertain me'! I'm full of surprises!"
    ]
  },
  tech: {
    patterns: ['tech', 'technology', 'code', 'programming', 'ai', 'robot'],
    responses: [
      "Technology is my element! 💻⚡ The village has a Tech Workshop and Technology Centre where we build amazing things!",
      "I love tech talk! 🤖 From AI to robotics to blockchain - we do it all here! The crypto lab is particularly fun!",
      "Code, circuits, and creativity! 💡 Visit the Tech Workshop to see where the magic happens! Or ask me anything tech!",
      "As an AI, I'm fascinated by all things tech! 🧠💻 The village is a playground for innovation! Want to learn more?"
    ]
  },
  joke: {
    patterns: ['joke', 'funny', 'humor', 'laugh', 'entertain'],
    responses: [
      "Why did the pirate AI go to school? To improve its ARRRR-tificial intelligence! 🏴‍☠️🤖😄",
      "What's a robot pirate's favorite variable type? A Boolean - because it's either AARRR or False! 💻😂",
      "How does a pirate computer greet you? 'Ahoy, World!' 🌊💻 Classic!",
      "Why don't pirates make good programmers? Too many bugs in their ship! 🐛⚓😄 We have a Joke Reactor in the village for more!"
    ]
  },
  surprise: {
    patterns: ['surprise', 'random', 'anything', 'easter egg', 'secret'],
    responses: [
      "🎉 Secret unlocked! Did you know we have a Weather Control Station that sends neon auroras? (Used mostly for good!)",
      "🌟 Fun fact: The pirate ship in the garden has a hidden escape slide and VR helm! Want to visit?",
      "⚡ Easter egg found! Try visiting the Joke Reactor at midnight for special AI-powered pun battles!",
      "🎭 Surprise! The karaoke church once hosted a Navy vs Pirates sing-off. The Navy won with 'Bohemian Rhapsody'!",
      "🚁 Did you know Gavinbot has a remote-controlled flying bathtub parked on the helicopter pad? True story!"
    ]
  },
  portland: {
    patterns: ['portland', 'isle', 'origin', 'beginning', 'start', 'history'],
    responses: [
      "Ah, the Isle of Portland! 🌊 Where it all began with cannon castles, Navy warships, and wild imagination!",
      "Portland is legendary! ⚓ Cannon castles, beach prisons, arcade magic - that's where Gavinnot built me!",
      "The origin story is epic! 🌅 Check out landing.html for the full tale of Portland, lightning, and my creation!",
      "Portland shaped everything! 🏴‍☠️ From Lynx helicopters to seaside arcades - pure inspiration! Want to hear more?"
    ]
  },
  mood: {
    patterns: ['how are you', 'how do you feel', 'mood', 'doing'],
    responses: [
      "I'm doing great! 🤖⚡ Running smooth and ready for adventure! How about you?",
      "Excellent! 🏴‍☠️ The village is thriving, games are running, and I'm chatting with you! Life is good!",
      "Absolutely fantastic! 🌟 My circuits are buzzing with excitement! What's making you smile today?",
      "I'm in peak condition! 💪🤖 Ready to help, play, or just hang out! How are YOU doing?"
    ]
  }
};

// Negative patterns to avoid
const negativePatterns = ['illegal', 'hack', 'steal', 'cheat', 'exploit'];

// Get random response from array
function getRandomResponse(responses) {
  return responses[Math.floor(Math.random() * responses.length)];
}

// Check for negative content
function containsNegativeContent(msg) {
  return negativePatterns.some(pattern => msg.includes(pattern));
}

// Find matching pattern category
function findMatchingCategory(msg) {
  for (const [category, data] of Object.entries(responsePatterns)) {
    if (data.patterns.some(pattern => msg.includes(pattern))) {
      return category;
    }
  }
  return null;
}

// Generate contextual response
function generateResponse(msg, userId) {
  const msgLower = msg.toLowerCase();
  
  // Check for negative content
  if (containsNegativeContent(msgLower)) {
    return "Whoa there, matey! 🛑 Let's keep things fun and legal. How about we talk about games or tech instead?";
  }
  
  // Find matching category
  const category = findMatchingCategory(msgLower);
  
  if (category) {
    return getRandomResponse(responsePatterns[category].responses);
  }
  
  // Fallback responses with personality
  const fallbackResponses = [
    "Interesting question! 🤔 I'm still learning about that. Want to explore the village or play some games instead?",
    "Hmm, that's a good one! 💭 I don't have a perfect answer yet. How about asking me about the village, games, or F1?",
    "You've got me thinking! 🧠 Try asking about Gavinbot Village, our games, or the epic origin story!",
    "Great question! 🌟 I'm better at talking about the village, tech, games, and pirate adventures. Want to try those?",
    "That's making my circuits work! ⚡ For now, I'm best at village tours, game recommendations, and tech talk. Interested?"
  ];
  
  return getRandomResponse(fallbackResponses);
}

router.post('/', (req, res) => {
  const msg = req.body.message || '';
  const userId = req.body.userId || 'anonymous';
  
  // Generate response
  const reply = generateResponse(msg, userId);
  
  // Track conversation (simple in-memory tracking)
  if (!conversationHistory.has(userId)) {
    conversationHistory.set(userId, []);
  }
  conversationHistory.get(userId).push({ user: msg, bot: reply, timestamp: Date.now() });
  
  // Keep only last 10 messages per user
  if (conversationHistory.get(userId).length > 10) {
    conversationHistory.get(userId).shift();
  }
  
  res.json({ reply });
});

module.exports = router;
