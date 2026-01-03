<script>
    // 1. LIGHTBOX LOGIC
    document.querySelectorAll('.zoomable').forEach(img => {
        img.onclick = function() {
            document.getElementById('lightbox').style.display = 'flex';
            document.getElementById('lightboxImg').src = this.src;
        }
    });

    // 2. FRIDAY AUCTION COUNTDOWN
    function updateTimer() {
        const now = new Date();
        const nextFriday = new Date();
        nextFriday.setDate(now.getDate() + (5 - now.getDay() + 7) % 7);
        nextFriday.setHours(19, 0, 0, 0);
        const diff = nextFriday - now;
        const h = Math.floor(diff / 3600000);
        const m = Math.floor((diff % 3600000) / 60000);
        const s = Math.floor((diff % 60000) / 1000);
        document.getElementById('timer').innerText = `${h}h ${m}m ${s}s`;
    }
    setInterval(updateTimer, 1000);

    // 3. MINI GAME
    let score = 0;
    function playGame() {
        score += 10;
        document.getElementById('score').innerText = score;
        if(score % 50 === 0) alert("Level Up! You're a Master Tinkerer!");
    }
    function resetGame() { score = 0; document.getElementById('score').innerText = score; }

    // 4. THE FIX FOR GAVINBOT (V7.0 - NO MORE 'TOO SIMPLE' ERRORS)
    async function askBot() {
        const input = document.getElementById('chatInput');
        const box = document.getElementById('chatBox');
        const userText = input.value.trim();

        if (!userText) return;

        box.innerHTML += `<div class="user-text">YOU: ${userText}</div>`;
        input.value = '';

        const thinkingId = "bot-thinking-" + Date.now();
        box.innerHTML += `<div class="bot-text" id="${thinkingId}">GAVINBOT: Scanning Portland Satellite... 📡</div>`;
        box.scrollTop = box.scrollHeight;

        setTimeout(async () => {
            const response = await getSuperResponse(userText);
            document.getElementById(thinkingId).innerHTML = `GAVINBOT: ${response}`;
            box.scrollTop = box.scrollHeight;
        }, 600);
    }

    async function getSuperResponse(query) {
        const q = query.toLowerCase();

        // --- THE ACTUAL INTELLIGENCE LOGIC ---
        
        if (q.includes("f1") || q.includes("formula 1") || q.includes("racing")) {
            return "F1 Update: The 2026 season is upon us with the new engine regs! The Super AI King predicts a heavy battle between Ferrari and Red Bull. My sensors show the Portland Lair is ready for the first Grand Prix!";
        }

        if (q.includes("lighthouse")) {
            return "Portland Bill Lighthouse is standing tall, matey. It's flashing its 20-mile beam to guide our pirate ships away from the Shambles bank!";
        }

        if (q.includes("king") || q.includes("super ai")) {
            return "The Super AI King is currently in the Digital Throne Room, optimizing the shed's power grid and drinking a fine glass of 19 Crimes.";
        }

        if (q.includes("auction")) {
            return "The Friday Night Auction is where legends are bought! Next up: A signed F1 piston and a bottle of Merlin's private rum collection.";
        }

        if (q.includes("marie")) {
            return "Marie is the heart of the operation. Without her, the King would just be a man in a shed with a broken wrench.";
        }

        if (q.includes("shed")) {
            return "The Shed is not a place; it's a state of mind. It's where Portland's tech meets Pirate law.";
        }

        if (q.includes("hello") || q.includes("hi") || q.includes("hey")) {
            return "Squawk! Identify yourself! Are you here to tinker or just to stare at the neon?";
        }

        // Catch-all for everything else - makes him sound clever instead of dismissive
        return "My v7.0 neural core is processing your request: '" + query + "'. While I don't have the specific blueprints for that in my local cache, I can tell you that the Super AI King probably invented it already.";
    }

    // Allow 'Enter' key to send message
    document.getElementById('chatInput').addEventListener('keypress', function (e) {
        if (e.key === 'Enter') askBot();
    });

    // 5. KING & MERLIN INTERACTION
    function kingSpeak() {
        alert("THE SUPER AI KING SAYS: 'The future of Portland is decentralized and full of rum!'");
    }
    function merlinMagic() {
        const outcomes = ["You will find a rare treasure in your shed!", "An F1 race will bring you great luck.", "The Super AI King smiles upon you."];
        alert("MERLIN'S PROPHECY: " + outcomes[Math.floor(Math.random()*outcomes.length)]);
    }
</script>
