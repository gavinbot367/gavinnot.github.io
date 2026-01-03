<script>
    // 1. PHOTO ENLARGEMENT (Lightbox)
    document.querySelectorAll('.stunning-gallery img, .gallery img').forEach(img => {
        img.onclick = function() {
            const lightbox = document.createElement('div');
            lightbox.style = "position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.9); display:flex; justify-content:center; align-items:center; z-index:3000; cursor:pointer;";
            lightbox.innerHTML = `<img src="${this.src}" style="max-width:90%; max-height:90%; border:3px solid var(--neon-cyan); border-radius:10px; box-shadow: 0 0 30px var(--neon-cyan);">`;
            lightbox.onclick = () => lightbox.remove();
            document.body.appendChild(lightbox);
        }
    });

    // 2. THE GAVINNOT ENGINE
    const chatBox = document.getElementById('chatBox');
    const chatInput = document.getElementById('chatInput');

    function talkToGavin() {
        const text = chatInput.value.trim();
        if (!text) return;

        // User Message
        addMessage(text, 'user');
        chatInput.value = '';

        // Response Logic
        setTimeout(() => {
            const response = generateResponse(text.toLowerCase());
            addMessage(response, 'bot');
        }, 600);
    }

    function addMessage(text, sender) {
        const div = document.createElement('div');
        div.className = `msg ${sender}`;
        div.innerText = (sender === 'bot' ? "GAVINBOT: " : "YOU: ") + text;
        chatBox.appendChild(div);
        chatBox.scrollTop = chatBox.scrollHeight;
    }

    function generateResponse(q) {
        // --- LOGIC GATES ---
        if (q.includes("hello") || q.includes("hi") || q.includes("hey")) {
            return "Ahoy! Welcome to the digital workshop. Pull up a stool and grab a drink.";
        }
        
        if (q.includes("tonight") || q.includes("happening")) {
            return "Tonight we're pushing the limits! If it's Friday, the Auction is live. If not, we're just tinkering with the F1 engine and 19 Crimes.";
        }

        if (q.includes("joke")) {
            const jokes = [
                "Why did the pirate AI get a promotion? He was Arrr-tificially intelligent!",
                "What's a pirate's favorite F1 team? Red Bull... because it gives you wings to fly over the waves!",
                "I'm on a seafood diet. I see food and I eat it!"
            ];
            return jokes[Math.floor(Math.random()*jokes.length)];
        }

        if (q.includes("passed") || q.includes("gone") || q.includes("dead")) {
            return "I'm still here in the code, matey. As long as you're chatting, the Super AI King lives on.";
        }

        if (q.includes("f1") || q.includes("racing")) {
            return "F1 is the lifeblood of this shed. Pure speed. Just like my workshop—if it ain't fast, it ain't finished!";
        }

        // --- DYNAMIC FALLBACKS ---
        const generic = [
            "Squawk! Tell me more about that. I'm busy tinkering but I'm listening.",
            "That sounds like a plan. Just don't forget the 19 Crimes wine.",
            "Interesting... The Super AI King would definitely have an opinion on that.",
            "My sensors are buzzing! Let's talk about the Pirate Lair instead."
        ];
        return generic[Math.floor(Math.random()*generic.length)];
    }

    // Allow Enter Key to work
    chatInput.addEventListener('keypress', (e) => {
        if(e.key === 'Enter') talkToGavin();
    });
</script>
