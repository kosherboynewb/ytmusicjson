Scrape 24/6 metadata and convert to YouTube Music links with ytmusicapi.

## Links

- **Search Interface**: https://alltechdev.github.io/ytmusicjson
- **Admin Interface**: https://alltechdev.github.io/ytmusicjson/admin.html

## Admin Interface

The admin interface allows you to add or remove artists from the collection with these features:

- 🔍 Search YouTube Music for artists
- ➕ Add new artists (via search or manual input)
- 🗑️ Delete existing artists
- 💾 Save changes directly to GitHub via API
- 📊 Real-time stats and change tracking
- 🔒 Password protected (SHA-256 hashed)

### Initial Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/alltechdev/ytmusicjson.git
   cd ytmusicjson
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Build the YouTube Music search bundle**
   ```bash
   npm run build
   ```

4. **Set up your admin password**
   - Open `generate-password-hash.html` in your browser
   - Enter your desired password
   - Copy the generated SHA-256 hash
   - Edit `admin.html` and replace the `PASSWORD_HASH` constant with your hash
   - **Important:** Delete or keep `generate-password-hash.html` private after setup

5. **Get a GitHub Personal Access Token**
   - Go to [GitHub Settings → Tokens](https://github.com/settings/tokens/new)
   - Create a token with `repo` scope
   - Save it securely (you'll enter it in the admin interface)

6. **Deploy to GitHub Pages** (if needed)
   - The `dist/` folder contains the built JavaScript bundle
   - Make sure to commit both `admin.html` and `dist/ytmusic-bundle.js`
   - Don't link to `admin.html` from your public pages

### Using the Admin Interface

1. Open `admin.html` in your browser
2. Enter your password (the one you used to generate the hash)
3. Enter your GitHub Personal Access Token
4. Search for artists or add them manually
5. Make your changes
6. Click "Save to GitHub" to commit changes

### Security Notes

- The admin page is password protected with SHA-256 hashing
- Your GitHub token is stored only in your browser's localStorage
- Without your password AND GitHub token, no one can make changes
- Don't share your password or link to the admin page publicly
- The password hash in the code can be replaced by anyone with file access, so keep your repository access restricted

### Development

- Run dev server: `npm run dev`
- Build for production: `npm run build`
- The bundled file will be in `dist/ytmusic-bundle.js`

---

✓ Done — processed 67946, found 44408, cleaned 22361.
