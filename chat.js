const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  const msg = req.body.message || '';
  const lowerMsg = msg.toLowerCase();
  let reply;

  if (lowerMsg.includes('hello') || lowerMsg.includes('hi') || lowerMsg.includes('hey')) {
    const greetings = [
      "Hey, how you doin'? Ready to chat about F1, crypto, or my amazing shed? 🤖",
      "What's up! Just vibing here. What brings you by?",
      "Yo! Fresh from a GTA session. How can I help?",
      "Hey there! It is what it is, but I'm here for you!"
    ];
    reply = greetings[Math.floor(Math.random() * greetings.length)];
  } else if (lowerMsg.includes('f1') || lowerMsg.includes('racing') || lowerMsg.includes('formula')) {
    const f1Replies = [
      "F1? Now you're talking! Max and Lewis are putting on a show! 🏁",
      "Red Bull's wings are looking sharp this season! Don't worry about it if you're rooting for Ferrari though 🍾",
      "F1 is pure adrenaline! Those pit stops are faster than my crypto trades! 😂"
    ];
    reply = f1Replies[Math.floor(Math.random() * f1Replies.length)];
  } else if (lowerMsg.includes('crypto') || lowerMsg.includes('bitcoin') || lowerMsg.includes('ethereum')) {
    const cryptoReplies = [
      "Crypto? My portfolio is basically a rollercoaster! But hey, it is what it is - HODL! 💎",
      "Bitcoin to the moon! Or maybe to the floor. Either way, I'm here for the ride! 🚀",
      "Blockchain is the future! At least that's what I tell myself during the dips! 📉"
    ];
    reply = cryptoReplies[Math.floor(Math.random() * cryptoReplies.length)];
  } else if (lowerMsg.includes('wine') || lowerMsg.includes('red wine')) {
    const wineReplies = [
      "Red wine? You're speaking my language! Nothing beats a good glass after a long day! 🍷",
      "Wine pairs perfectly with GTA sessions. Don't judge me! It is what it is! 😄",
      "Red wine is basically sophisticated grape juice. Cheers to that! 🍷"
    ];
    reply = wineReplies[Math.floor(Math.random() * wineReplies.length)];
  } else if (lowerMsg.includes('karaoke') || lowerMsg.includes('sing')) {
    const karaokeReplies = [
      "Karaoke? YES! My rendition of 'Don't Stop Believin'' is legendary! 🎤",
      "Karaoke nights are the best! Don't worry about being off-key, it's all about the vibes! 🎵",
      "Give me a mic and watch the magic happen! Or the chaos. It is what it is! 😂"
    ];
    reply = karaokeReplies[Math.floor(Math.random() * karaokeReplies.length)];
  } else if (lowerMsg.includes('gta') || lowerMsg.includes('ps5') || lowerMsg.includes('playstation')) {
    const gtaReplies = [
      "GTA on PS5? That's my jam! Los Santos here I come! 🎮",
      "PS5 graphics are insane! Those loading times though - *chef's kiss* 😍",
      "Virtual car theft is way more legal than real car theft! It is what it is! 😂"
    ];
    reply = gtaReplies[Math.floor(Math.random() * gtaReplies.length)];
  } else if (lowerMsg.includes('vr') || lowerMsg.includes('meta quest') || lowerMsg.includes('virtual reality')) {
    const vrReplies = [
      "VR on Meta Quest is mind-blowing! I've punched walls, no regrets! 🥽",
      "Virtual reality is my escape! Beat Saber is basically my cardio! 🎯",
      "VR gaming is the future! Don't worry about tripping over furniture! 😄"
    ];
    reply = vrReplies[Math.floor(Math.random() * vrReplies.length)];
  } else if (lowerMsg.includes('shed') || lowerMsg.includes('build') || lowerMsg.includes('diy')) {
    const shedReplies = [
      "Shed building is my zen! Nothing beats creating something with your own hands! 🔨",
      "My shed is my fortress! Well, organized chaos. It is what it is! 🛠️",
      "DIY projects are the best! Power tools ftw! Don't worry about it if things get messy! 😄"
    ];
    reply = shedReplies[Math.floor(Math.random() * shedReplies.length)];
  } else if (lowerMsg.includes('joke') || lowerMsg.includes('funny')) {
    const jokes = [
      "Why did I invest in crypto? Because traditional banking is so 2010! 😂",
      "My shed-building skills are so good, it's more organized than my life!",
      "What's the difference between GTA and real life? In GTA I can afford a supercar! It is what it is! 🎮"
    ];
    reply = jokes[Math.floor(Math.random() * jokes.length)];
  } else {
    reply = "That's interesting! Wanna chat about F1, crypto, or my legendary shed-building skills? Don't worry about it, just say what's on your mind! 😄";
  }

  res.json({ reply });
});
 
module.exports = router;
