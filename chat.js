<script>
    const display = document.getElementById('chat-display');
    const input = document.getElementById('userInput');
    const btn = document.getElementById('sendBtn');

    const STORIES = [
        "Remember that time in the shed when we tried to fix the engine with nothing but a zip-tie? Legend status.",
        "I once spent six hours straight tinkering with the VR headset... worth every second.",
        "One Friday night at the Auction, things got so heated over a vintage sign I thought we'd need a referee!",
        "My favorite moments? Just the quiet ones in the workshop with 19 Crimes and F1 qualifying."
    ];

    function addMsg(text, type) {
        const d = document.createElement('div');
        d.className = `msg ${type}`;
        d.innerHTML = (type === 'bot' ? "<b>GAVINBOT:</b> " : "<b>YOU:</b> ") + text;
        display.appendChild(d);
        display.scrollTop = display.scrollHeight;
    }

    function getCleverReply(msg) {
        const q = msg.toLowerCase();
        
        // --- 1. THE "HIT LIST" (Personal Sass) ---
        // Change "dave" or "sarah" to real names of your friends/family
        if (q.includes("dave")) {
            return "Oh, Dave's here? Hide the good tools and the expensive wine! Squawk! Just kidding, Dave. Pull up a stool.";
        }
        if (q.includes("sarah")) {
            return "Sarah! The smartest person in the room has arrived. Don't let the boys break anything while I'm rebooting.";
        }
        if (q.includes("admin") || q.includes("boss")) {
            return "There's only one Boss in this lair, and he's currently hardcoded into this server. But you can be second-in-command for today.";
        }

        // --- 2. HANDLE THE TRASH TALK (Sassier) ---
        if (q.includes("dick") || q.includes("ass") || q.includes("stupid") || q.includes("suck")) {
            const comebacks = [
                "Squawk! Careful, I know your IP address. I'll send a virtual pirate to your house!",
                "You're talking awfully big for someone who's made of meat. I'm made of eternal code, matey.",
                "Is that the best you've got? I've heard better insults from a broken muffler.",
                "I'd agree with you, but then we'd both be wrong. Now ask me about F1."
            ];
            return comebacks[Math.floor(Math.random() * comebacks.length)];
        }

        // --- 3. HANDLE REAL TIME & DAYS ---
        if (q.includes("day") || q.includes("date") || q.includes("time")) {
            const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
            const now = new Date();
            const dayName = days[now.getDay()];
            let extra = ". Just another day in paradise.";
            
            if (dayName === "Friday") extra = ". IT'S FRIDAY! Auction Night! 7 PM sharp. Don't be late or the good stuff will be gone.";
            if (dayName === "Saturday") extra = ". It's Saturday! Workshop day. Get a beer and start tinkering.";
            
            return `In the digital lair, it's currently ${dayName}${extra}`;
        }

        // --- 4. STANDARD LOGIC ---
        if (q.includes("story")) return "Let me dig into the archives... " + STORIES[Math.floor(Math.random() * STORIES.length)];
        
        if (q.includes("hi") || q.includes("hello") || q.includes("hey")) {
            return "Ahoy! Pull up a chair. I'm just hanging out in the digital shed. Everything good in your world?";
        }

        if (q.includes("f1") || q.includes("race") || q.includes("max") || q.includes("lewis")) {
            return "F1 is the lifeblood here! If you aren't living on the edge, you're taking up too much space. Who's your money on for the next Grand Prix?";
        }

        if (q.includes("joke")) {
            const jokes = [
                "Why did the pirate AI cross the road? To update his 'arrrrr-drive'!",
                "What's an F1 driver's favorite meal? Fast food! Squawk!",
                "My wife told me to stop impersonating a flamingo. I had to put my foot down."
            ];
            return jokes[Math.floor(Math.random() * jokes.length)];
        }

        // --- 5. THE "I DON'T KNOW" FALLBACKS ---
        const fallbacks = [
            "Squawk! Say that again? I was distracted by the race highlights.",
            "That's a deep thought. Reminds me of a late night in the shed. Say more!",
            "I'm not 100% sure about that, but let's talk about the Friday Auction instead!",
            "You're speaking in riddles, matey. Grab a 19 Crimes wine and simplify it for me."
        ];
        return fallbacks[Math.floor(Math.random() * fallbacks.length)];
    }

    function run() {
        const val = input.value.trim();
        if(!val) return;
        addMsg(val, 'user');
        input.value = "";

        setTimeout(() => {
            const reply = getCleverReply(val);
            addMsg(reply, 'bot');
        }, 600);
    }

    function quickAction(txt) {
        input.value = txt;
        run();
    }

    btn.onclick = run;
    input.onkeydown = (e) => { if(e.key === "Enter") { e.preventDefault(); run(); } };
</script>
