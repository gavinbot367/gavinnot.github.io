#!/bin/bash

# Function to add navigation to game pages
add_nav_to_game() {
    local file=$1
    local game_name=$2
    local icon=$3
    
    # Check if navigation already exists
    if grep -q "class=\"top-nav\"" "$file"; then
        echo "Navigation already exists in $file"
        return
    fi
    
    # Add navigation styles after body style
    sed -i '/body.*{.*display:flex.*align-items:center;}/a\    \n    /* Top Navigation styles */\n    .top-nav {\n      width: 100%;\n      background: rgba(10, 18, 48, 0.95);\n      padding: 1em 2em;\n      display: flex;\n      justify-content: space-between;\n      align-items: center;\n      border-bottom: 2px solid #0ff;\n      box-shadow: 0 2px 10px rgba(0, 255, 255, 0.3);\n      box-sizing: border-box;\n    }\n    \n    .nav-brand {\n      font-size: 1.2em;\n      font-weight: bold;\n      color: #0ff;\n      text-shadow: 0 0 10px #0ff;\n    }\n    \n    .nav-links {\n      display: flex;\n      gap: 0.8em;\n      flex-wrap: wrap;\n    }\n    \n    .nav-links a {\n      color: #0ff;\n      text-decoration: none;\n      padding: 6px 12px;\n      border: 1px solid #0ff;\n      border-radius: 8px;\n      transition: all 0.3s ease;\n      font-size: 0.9rem;\n    }\n    \n    .nav-links a:hover {\n      background-color: #0ff;\n      color: #000;\n      box-shadow: 0 0 10px #0ff;\n    }' "$file"
    
    # Add navigation HTML after body tag
    sed -i "/<body>/a\  <!-- Top Navigation -->\n  <nav class=\"top-nav\">\n    <div class=\"nav-brand\">$icon $game_name</div>\n    <div class=\"nav-links\">\n      <a href=\"index.html\">💬 Chat</a>\n      <a href=\"landing.html\">🌊 Story</a>\n      <a href=\"village.html\">🏡 Village</a>\n      <a href=\"all-games.html\">🎮 Games</a>\n    </div>\n  </nav>\n  " "$file"
    
    echo "Navigation added to $file"
}

# Add navigation to game files
add_nav_to_game "blackjack.html" "Pirate Blackjack" "🃏"
add_nav_to_game "flappy-bird.html" "Flappy Pirate" "🐦"
add_nav_to_game "treasure-map.html" "Treasure Hunt" "🗺️"

echo "Navigation added to game pages!"
