# 🚀 Deployment Guide - Gavinbot Website

This guide covers deploying the Gavinbot website to GitHub Pages and other platforms.

## 📋 Prerequisites

- Git installed locally
- GitHub account
- Node.js (v14+) for backend server (optional)
- Text editor or IDE

## 🌐 GitHub Pages Deployment (Recommended)

The site is configured for automatic GitHub Pages deployment.

### Initial Setup

1. **Repository Settings**
   - Go to repository Settings → Pages
   - Source: Deploy from a branch
   - Branch: `main` (or your default branch)
   - Folder: `/ (root)`
   - Click Save

2. **Custom Domain (Optional)**
   ```bash
   # The CNAME file already exists in the repo
   # It contains: gavinnot.github.io
   # To use a custom domain, edit CNAME file:
   echo "yourdomain.com" > CNAME
   ```

3. **Verify Deployment**
   - Visit: `https://yourusername.github.io/`
   - Or your custom domain if configured

### Automatic Deployment

Every push to the main branch triggers automatic deployment:

```bash
# Make changes locally
git add .
git commit -m "Your changes"
git push origin main

# GitHub Actions automatically deploys your changes
# Check Actions tab for deployment status
```

## 🖥️ Local Development

### Static Site (No Backend)

For front-end only development:

```bash
# Option 1: Python Simple Server
python -m http.server 8000
# Visit: http://localhost:8000

# Option 2: Node.js http-server
npx http-server -p 8000
# Visit: http://localhost:8000

# Option 3: PHP Built-in Server
php -S localhost:8000
```

### With Backend Server

For chatbot API features:

```bash
# Install dependencies
npm install

# Start the server
npm start
# Server runs on http://localhost:3001

# In another terminal, serve the static files
python -m http.server 8000
```

**Note**: The front-end chatbot works without the backend since it has built-in responses.

## 🔧 Configuration Files

### package.json
```json
{
  "name": "gavinbot-backend",
  "version": "1.0.0",
  "main": "server.js",
  "scripts": {
    "start": "node server.js"
  },
  "dependencies": {
    "express": "^4.18.2",
    "cors": "^2.8.5"
  }
}
```

### .gitignore
Ensure these are ignored:
```
node_modules/
npm-debug.log*
.env
.DS_Store
dist/
build/
```

## 🚀 Alternative Deployment Options

### Netlify

1. **Via Git**
   - Connect your GitHub repository to Netlify
   - Build command: (leave empty for static site)
   - Publish directory: `/`
   - Deploy!

2. **Via Drag & Drop**
   - Zip your project files
   - Drag to Netlify drop zone
   - Site is live!

### Vercel

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel

# Follow prompts to configure
```

### Custom Server

#### Apache
```apache
# .htaccess for clean URLs
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule ^(.*)$ index.html [L]
</IfModule>
```

#### Nginx
```nginx
server {
    listen 80;
    server_name yourdomain.com;
    root /var/www/gavinbot;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    # Gzip compression
    gzip on;
    gzip_types text/html text/css application/javascript;
}
```

## 🔒 Security Considerations

### HTTPS
Always use HTTPS for production:
- GitHub Pages: Automatic HTTPS with custom domains
- Netlify: Free SSL certificates
- Custom server: Use Let's Encrypt

### Content Security Policy
Add to your HTML `<head>`:
```html
<meta http-equiv="Content-Security-Policy" 
      content="default-src 'self'; 
               script-src 'self' 'unsafe-inline'; 
               style-src 'self' 'unsafe-inline';">
```

### Environment Variables
Never commit sensitive data:
```bash
# .env file (add to .gitignore)
API_KEY=your-secret-key
DATABASE_URL=your-database-url
```

## ⚡ Performance Optimization

### Image Optimization
```bash
# Compress images before committing
# Use tools like:
- TinyPNG (online)
- ImageOptim (Mac)
- GIMP (cross-platform)
```

### Caching Strategy
```html
<!-- Add cache headers in your server config -->
<meta http-equiv="Cache-Control" content="max-age=31536000">
```

### CDN (Optional)
Consider using a CDN for static assets:
- Cloudflare (free tier available)
- AWS CloudFront
- Google Cloud CDN

## 🐛 Troubleshooting

### Common Issues

**1. 404 Error on GitHub Pages**
- Verify branch name in Settings → Pages
- Check that index.html exists in root
- Wait 5-10 minutes after first deployment

**2. Images Not Loading**
- Check image paths (use relative paths)
- Verify images are committed to repo
- Check case sensitivity (GitHub is case-sensitive)

**3. CSS/JS Not Applied**
- Clear browser cache (Ctrl+Shift+R)
- Check file paths in HTML
- Verify files are in correct directory

**4. Custom Domain Not Working**
- Verify DNS settings with domain provider
- Check CNAME file content
- Wait for DNS propagation (up to 24 hours)

### Debug Mode

Check browser console for errors:
```javascript
// Add to your scripts temporarily
console.log('Debug info:', {
  location: window.location,
  scripts: document.scripts.length,
  styles: document.styleSheets.length
});
```

## 📊 Monitoring

### GitHub Pages Status
- Visit: https://www.githubstatus.com/
- Check Actions tab for deployment logs

### Analytics (Optional)
Add Google Analytics or Plausible:
```html
<!-- Add before </head> -->
<script async src="https://www.googletagmanager.com/gtag/js?id=YOUR-ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'YOUR-ID');
</script>
```

## 🔄 Continuous Integration

### GitHub Actions (Optional)
Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./
```

## 📝 Deployment Checklist

Before deploying:
- [ ] Test all pages locally
- [ ] Check all links work
- [ ] Verify images load correctly
- [ ] Test responsive design
- [ ] Run HTML/CSS validators
- [ ] Check browser console for errors
- [ ] Test chatbot functionality
- [ ] Verify navigation works
- [ ] Test on mobile devices
- [ ] Update README if needed

## 🆘 Getting Help

- GitHub Issues: Report bugs or request features
- GitHub Discussions: Ask questions
- Documentation: Check README.md and other guides

---

**Happy Deploying! 🎉**

*"May your deploys be swift and your uptime be 100%!"* - The Gavinbot Team
