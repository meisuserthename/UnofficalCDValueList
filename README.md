# Custom Duels Sword Values Gallery

An interactive web gallery for displaying and filtering Custom Duels sword values.

## Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` in your browser.

3. **Add your sword data:**
   - Edit `src/data/swords.js` to update the sword list
   - Add image URLs to each sword entry
   - Update values, demand, and copy counts

4. **Build for production:**
   ```bash
   npm run build
   ```
   The output will be in the `dist` folder.

## Customization

### Adding Images
In `src/data/swords.js`, set the `image` field to your image URL:
```javascript
{
  id: 1,
  name: "Your Sword",
  rarity: "Godly",
  value: 200,
  demand: "Great",
  copies: 64,
  image: "https://example.com/sword.png", // Add your image URL here
}
```

### Styling
- Global styles: `src/index.css`
- App layout: `src/App.css`
- Card design: `src/components/SwordCard.css`

### Filter Rarities
Edit the `rarities` array in `src/App.jsx` to add or remove rarity tiers.

## Deployment

### GitHub Pages
```bash
npm run deploy
```

### Vercel
1. Push to GitHub
2. Connect repo to [Vercel](https://vercel.com)
3. Auto-deploys on push

### Other Hosting
Build the project and upload the `dist` folder to any static host.

## File Structure
```
src/
├── components/
│   ├── SwordCard.jsx      # Individual sword card component
│   └── SwordCard.css
├── data/
│   └── swords.js          # Sword data array
├── App.jsx                # Main app with filtering
├── App.css
├── main.jsx
└── index.css
```
