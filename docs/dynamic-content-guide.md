# Dynamic Content Guide

Complete guide to using JSON-based dynamic content for your presentation.

## Overview

Your presentation now supports **dynamic content loading** from JSON files, enabling non-technical content editing without touching code.

## Quick Start

1. **Edit Content**: Open `data/slides-content.json`
2. **Modify Slides**: Update titles, descriptions, bullet points
3. **Change Themes**: Use built-in color themes (purple, blue, green, red, orange)
4. **Preview**: Run `pnpm dev` - changes hot-reload automatically!

## File Structure

```
slidies/
├── data/
│   └── slides-content.json        # ✏️ Edit your content here
├── app/
│   ├── types/
│   │   └── slide-content.ts       # TypeScript type definitions
│   └── components/
│       ├── slides/
│       │   └── generic-slide.tsx  # Slide component (uses content)
│       └── ImpressRoot.tsx        # Loads data, creates slides
```

## Content Schema

### Presentation Data Structure

```json
{
  "title": "Presentation Title",
  "author": "Author Name",
  "date": "2025",
  "slides": [
    {
      "slideNumber": 1,
      "title": "Slide Title",
      "subtitle": "Optional Subtitle",
      "description": "Main description text",
      "bulletPoints": ["Point 1", "Point 2"],
      "metadata": {
        "theme": "purple"
      }
    }
  ]
}
```

### Slide Properties

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `slideNumber` | number | ✅ Yes | Slide number (1-5) |
| `title` | string | ✅ Yes | Main heading |
| `subtitle` | string | ❌ No | Optional subtitle below title |
| `description` | string | ❌ No | Main description text |
| `bulletPoints` | string[] | ❌ No | Array of bullet points |
| `metadata.theme` | string | ❌ No | Color theme (default: "purple") |

### Available Themes

#### Purple (Default)
```json
"metadata": { "theme": "purple" }
```
- **Use for**: Default slides, technology, creativity
- **Colors**: Purple accents, warm gradient

#### Blue
```json
"metadata": { "theme": "blue" }
```
- **Use for**: Trust, professionalism, corporate
- **Colors**: Blue accents, cool gradient

#### Green
```json
"metadata": { "theme": "green" }
```
- **Use for**: Growth, nature, sustainability
- **Colors**: Green accents, natural gradient

#### Red
```json
"metadata": { "theme": "red" }
```
- **Use for**: Energy, passion, urgency
- **Colors**: Red accents, warm gradient

#### Orange
```json
"metadata": { "theme": "orange" }
```
- **Use for**: Creativity, warmth, enthusiasm
- **Colors**: Orange accents, vibrant gradient

## Content Examples

### Minimal Slide (Title Only)

```json
{
  "slideNumber": 1,
  "title": "Welcome",
  "metadata": { "theme": "purple" }
}
```

### Slide with Subtitle

```json
{
  "slideNumber": 2,
  "title": "Main Topic",
  "subtitle": "Supporting Context",
  "description": "Additional details here",
  "metadata": { "theme": "blue" }
}
```

### Slide with Bullet Points

```json
{
  "slideNumber": 3,
  "title": "Key Features",
  "description": "Here's what makes this great",
  "bulletPoints": [
    "Easy to use and maintain",
    "Hot reload in development",
    "Type-safe with TypeScript",
    "Beautiful themes included"
  ],
  "metadata": { "theme": "green" }
}
```

### Slide with All Properties

```json
{
  "slideNumber": 4,
  "title": "Complete Example",
  "subtitle": "Using All Available Properties",
  "description": "This slide demonstrates every available content option",
  "bulletPoints": [
    "Title and subtitle for context",
    "Description for main message",
    "Bullet points for details",
    "Custom theme for visual variety"
  ],
  "metadata": { "theme": "red" }
}
```

## Workflow

### Development Mode

1. **Start Dev Server**:
   ```bash
   pnpm dev
   ```

2. **Open Browser**: http://localhost:3000

3. **Edit Content**: Open `data/slides-content.json`

4. **See Changes**: Save file → browser auto-reloads ⚡

### Production Build

```bash
pnpm build
pnpm start
```

Content is statically bundled at build time for optimal performance.

## Best Practices

### Content Writing

✅ **Do**:
- Keep titles concise (1-5 words)
- Use subtitles for context (1-10 words)
- Write descriptions in 1-2 sentences
- Limit bullet points to 3-5 items
- Use themes to create visual variety

❌ **Don't**:
- Write paragraph-length titles
- Include too many bullet points (>7)
- Mix too many themes (choose 2-3 max)
- Forget to set slideNumber correctly

### Theme Selection

**For Consistent Presentations**:
- Use 1-2 themes throughout
- Example: Purple for intro/outro, Blue for content

**For Dynamic Presentations**:
- Use different themes per section
- Example: Blue (intro) → Green (benefits) → Red (urgency) → Orange (action)

### Slide Count

- **Recommended**: 5-7 slides for focused presentations
- **Maximum**: 10 slides before considering split
- Update 3D positioning in `ImpressRoot.tsx` if adding slides

## Extending the System

### Adding Custom Fields

1. **Update Type Definition** (`app/types/slide-content.ts`):
   ```typescript
   export interface SlideContent {
     slideNumber: number;
     title: string;
     // ... existing fields
     customField?: string; // Add your field
   }
   ```

2. **Update Component** (`app/components/slides/generic-slide.tsx`):
   ```tsx
   const customField = content?.customField;

   // Use in JSX
   {customField && <div>{customField}</div>}
   ```

3. **Use in Data** (`data/slides-content.json`):
   ```json
   {
     "slideNumber": 1,
     "title": "Example",
     "customField": "My custom content"
   }
   ```

### Adding New Themes

1. **Add Theme Colors** (`app/types/slide-content.ts`):
   ```typescript
   export const THEME_COLORS = {
     // ... existing themes
     teal: {
       from: "from-slate-900",
       via: "via-teal-900",
       to: "to-slate-900",
       accent: "bg-teal-600/30",
       border: "border-teal-400",
       text: "text-teal-200",
       indicator: "bg-teal-400",
     },
   } as const;
   ```

2. **Update Type**:
   ```typescript
   export interface SlideContent {
     metadata?: {
       theme?: "purple" | "blue" | "green" | "red" | "orange" | "teal";
     };
   }
   ```

3. **Use in Data**:
   ```json
   "metadata": { "theme": "teal" }
   ```

## Troubleshooting

### Common Issues

**Build fails with JSON error**:
- Check JSON syntax validity at [jsonlint.com](https://jsonlint.com)
- Ensure all strings are in double quotes
- Verify no trailing commas

**Slides don't show content**:
- Verify `slideNumber` matches exactly (1-5)
- Check TypeScript console for type errors
- Ensure JSON structure matches schema

**Themes not applying**:
- Verify theme name is lowercase
- Check theme exists in `THEME_COLORS`
- Ensure metadata object is properly structured

**Hot reload not working**:
- Restart dev server (`pnpm dev`)
- Clear Next.js cache: `rm -rf .next`
- Check file is saved in `data/` directory

### TypeScript Validation

The system provides **type safety** to catch errors early:

```typescript
// ✅ Valid
const content: SlideContent = {
  slideNumber: 1,
  title: "Example",
};

// ❌ Invalid - TypeScript error
const content: SlideContent = {
  slideNumber: "one", // Must be number
  title: 123,         // Must be string
};
```

## Performance

- **Build Time**: ~2 seconds (static generation)
- **Bundle Size**: ~105 kB First Load JS
- **Hot Reload**: <500ms in development
- **Data Loading**: Static import (zero runtime overhead)

## Advanced Usage

### Multiple Presentations

Create different content files for different presentations:

```
data/
├── slides-content.json          # Default
├── slides-tech-talk.json        # Tech presentation
└── slides-sales-pitch.json      # Sales presentation
```

Update import in `ImpressRoot.tsx`:
```typescript
import slidesData from "@/data/slides-tech-talk.json";
```

### Dynamic Slide Count

The system automatically adapts to your slide count:

```json
{
  "slides": [
    // Add as many slides as needed
    // Progress indicator updates automatically
  ]
}
```

Update 3D positioning in `getSlideData()` for new slides.

### CMS Integration

For future CMS integration, the data structure is ready:

```typescript
// Fetch from CMS instead of JSON
const presentationData = await fetchFromCMS();

// Rest of the code works the same
const slides = presentationData.slides.map(...)
```

## Summary

✅ **Achieved**:
- Content separated from code
- Non-technical editing (JSON only)
- Type-safe with TypeScript
- Hot reload in development
- 5 built-in themes
- Flexible content structure

🎯 **Benefits**:
- Update presentations without coding
- Multiple presentations from same codebase
- Reduced maintenance burden
- Fast iteration cycles
- Production-ready architecture

📝 **Next Steps**:
1. Edit `data/slides-content.json` with your content
2. Run `pnpm dev` to preview
3. Customize themes if needed
4. Build and deploy: `pnpm build`

Happy presenting! 🎉
