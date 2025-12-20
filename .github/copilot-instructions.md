# Copilot Instructions for gavinnot.github.io

## Project Overview
This is a GitHub Pages website featuring interactive games and experiences centered around the "GavinNot" character universe. The site includes browser-based games (blackjack, roulette, flappy bird, treasure map), character assets, and a Node.js backend for chat functionality.

## Project Structure
- **HTML Files**: Static pages for games and interactive experiences
  - `index.html` - Main chat interface
  - `landing.html` - Landing page
  - `village.html` - Village exploration
  - Game files: `blackjack.html`, `roulette.html`, `flappy-bird.html`, `treasure-map.html`, etc.
- **JavaScript Files**: 
  - `server.js` - Express backend server
  - `chat.js` - Chat functionality
  - `edgewalker.js` - Game logic
- **Assets**: PNG images and MP4 videos for characters and scenes
- **Backend**: Node.js/Express server with CORS support

## Technology Stack
- Frontend: Vanilla HTML, CSS, JavaScript
- Backend: Node.js with Express
- Dependencies: express, cors
- Hosting: GitHub Pages

## Development Guidelines

### Code Style
- Use consistent indentation (2 spaces based on existing code)
- Follow vanilla JavaScript conventions for frontend code
- Keep inline styles within HTML files where already established
- Use cyan/turquoise (`#00ffff`) as the primary theme color
- Maintain dark theme aesthetic (black backgrounds)

### Backend Development
- Express server runs on port 3001 (or PORT env variable)
- Use CORS middleware for all API endpoints
- API routes should be prefixed with `/api/`

### Frontend Development
- Games and interactive elements are self-contained in individual HTML files
- Use inline styles and scripts for simplicity (following existing pattern)
- Ensure mobile responsiveness with viewport meta tags
- Maintain consistent visual theme across all pages

### Adding New Features
- New games should be standalone HTML files
- Include appropriate links from main pages (landing.html, all-games.html)
- Use existing character assets where appropriate
- Keep the cyberpunk/retro aesthetic consistent

## Running the Project

### Backend Server
```bash
npm install
npm start
```
Server will run on http://localhost:3001

### Frontend
- Open HTML files directly in browser, or
- Serve via GitHub Pages at https://gavinbot367.github.io/

## Testing
- Test games and interactive elements in multiple browsers
- Verify backend API endpoints respond correctly
- Ensure mobile responsiveness

## Important Notes
- This is a creative/entertainment project with a unique character universe
- Maintain the fun, quirky tone of the existing content
- Asset files (PNG, MP4) are part of the storytelling experience
- CNAME file should not be modified (domain configuration)
