# Slidies - Dynamic 3D Presentations

An interactive presentation framework built with Next.js, React, and impress.js that supports **dynamic content loading from JSON files**.

## ✨ Features

- 🎯 **Dynamic Content**: Edit presentations via JSON (no code required)
- 🎨 **5 Built-in Themes**: Purple, Blue, Green, Red, Orange
- 🌀 **3D Transitions**: Smooth impress.js animations
- ⚡ **Hot Reload**: Instant preview in development mode
- 📱 **Responsive Design**: Works on all screen sizes
- 🔒 **Type-Safe**: TypeScript validation for content structure
- 🚀 **Static Generation**: Optimal performance with Next.js

## 🚀 Quick Start

1. **Install dependencies**:
   ```bash
   pnpm install
   ```

2. **Edit content** in `data/slides-content.json`:
   ```json
   {
     "title": "Your Presentation",
     "slides": [
       {
         "slideNumber": 1,
         "title": "Welcome",
         "description": "Your content here",
         "metadata": { "theme": "purple" }
       }
     ]
   }
   ```

3. **Run development server**:
   ```bash
   pnpm dev
   ```

4. **Open browser**: http://localhost:3000 🎉

## 📝 Content Management

### Editing Slides

All presentation content lives in `data/slides-content.json`:

```json
{
  "slideNumber": 1,
  "title": "Your Title",
  "subtitle": "Optional subtitle",
  "description": "Main description text",
  "bulletPoints": ["Point 1", "Point 2", "Point 3"],
  "metadata": { "theme": "blue" }
}
```

### Available Themes

| Theme | Use Case | Colors |
|-------|----------|--------|
| `purple` | Default, tech, creativity | Purple gradient |
| `blue` | Trust, professional, corporate | Blue gradient |
| `green` | Growth, nature, sustainability | Green gradient |
| `red` | Energy, passion, urgency | Red gradient |
| `orange` | Creativity, warmth, enthusiasm | Orange gradient |

### Complete Documentation

📖 See [docs/dynamic-content-guide.md](docs/dynamic-content-guide.md) for:
- Content schema reference
- Theme examples
- Best practices
- Troubleshooting
- Advanced usage

## 🎮 Navigation

- **Arrow Keys / Spacebar**: Navigate slides
- **Home**: First slide
- **End**: Overview of all slides
- **Swipe**: Touch navigation (mobile)

## 🏗️ Project Structure

```
slidies/
├── data/
│   └── slides-content.json         # ✏️ Edit your content here
├── app/
│   ├── types/
│   │   └── slide-content.ts        # TypeScript interfaces
│   ├── components/
│   │   ├── slides/
│   │   │   └── generic-slide.tsx   # Slide component
│   │   ├── ImpressRoot.tsx         # Main presentation logic
│   │   └── ImpressClient.tsx       # impress.js wrapper
│   └── page.tsx                    # Entry point
├── docs/
│   ├── dynamic-content-guide.md    # Complete documentation
│   └── story-5-slides-simplification.md
└── public/                         # Static assets
```

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (React 19)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Animations**: impress.js (via react-impressjs)
- **Package Manager**: pnpm

## 📦 Build & Deploy

```bash
# Development
pnpm dev

# Production build
pnpm build
pnpm start

# Type checking
pnpm lint
```

## 🔧 Customization

### Adding New Themes

See [docs/dynamic-content-guide.md#adding-new-themes](docs/dynamic-content-guide.md#adding-new-themes)

### Changing 3D Positioning

Edit `getSlideData()` in `app/components/ImpressRoot.tsx`:

```typescript
case "slide-1":
  return { x: 0, y: 0, z: 0, scale: 0.5, rotateX: 0, rotateY: 0, rotateZ: 0 };
```

**Important**: The project uses dual scaling:
- **Impress.js scale**: `0.5` (controls 3D slide positioning)
- **Content scale**: `0.5` via CSS transform (ensures content fits in 750px container)

Both scales work together to prevent content overflow while maintaining readability.

### Adjusting Content Scale

To change how content fits within slides, edit `generic-slide.tsx`:

```tsx
<div style={{ transform: 'scale(0.5)', transformOrigin: 'center' }}>
```

- Increase value (e.g., `0.6`) for larger text
- Decrease value (e.g., `0.4`) for more compact slides
- Always test across all slides to ensure no content cropping

### Multiple Presentations

Create different JSON files in `data/` and change the import in `ImpressRoot.tsx`.

## 📄 License

Open source - feel free to use and modify!

## 🙏 Credits

Built with [Next.js](https://nextjs.org), [React](https://react.dev), and [impress.js](https://impress.js.org)
