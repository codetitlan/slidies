# Scaling Architecture

## Overview

Slidies uses a dual-scaling approach to ensure all slide content fits within the viewport while maintaining readability and proper 3D positioning.

## The Dual Scaling System

### 1. Impress.js Scale (3D Positioning)

**Location**: `app/components/ImpressRoot.tsx` → `getSlideData()` function

**Purpose**: Controls how slides are positioned and sized in 3D space during transitions.

**Current Value**: `0.5` for all slides (1-5)

```typescript
const getSlideData = (slideId: string): ImpressStepData => {
  switch (slideId) {
    case "slide-1":
      return { x: 0, y: 0, z: 0, scale: 0.5, rotateX: 0, rotateY: 0, rotateZ: 0 };
    case "slide-2":
      return { x: 2000, y: -500, z: -800, scale: 0.5, rotateX: 20, rotateY: -15, rotateZ: 0 };
    // ... more slides
  }
};
```

**What it affects**:
- 3D camera zoom level when viewing the slide
- How slides appear in the overview (End key)
- Spatial relationships between slides
- Does NOT change internal content layout dimensions

### 2. Content Scale (CSS Transform)

**Location**: `app/components/slides/generic-slide.tsx` → inner content div

**Purpose**: Scales down the actual content to fit within the 750px container height.

**Current Value**: `0.5` (50% of original size)

```tsx
<div
  className="text-center space-y-1 max-w-6xl w-full flex flex-col items-center"
  style={{ transform: 'scale(0.5)', transformOrigin: 'center' }}
>
  {/* All slide content */}
</div>
```

**What it affects**:
- Font sizes (uniformly scaled down)
- Spacing between elements (uniformly scaled down)
- Overall content height (fits within 750px container)
- Content appears centered due to `transformOrigin: 'center'`

## Why Both Scales Are Needed

### The Problem

Original content naturally required ~1270px of vertical space, but the slide container is fixed at 750px:

```tsx
// Outer container (fixed height)
<div style={{ height: '750px', maxHeight: '750px' }}>
  {/* Content that was ~1270px tall → cropped */}
</div>
```

### Failed Approaches

1. **Only reducing impress.js scale** (0.9 → 0.7 → 0.6 → 0.5)
   - Changed 3D positioning but didn't affect internal layout
   - Content still ~1270px tall, still cropped

2. **Only reducing font sizes** (text-xl → text-base → text-[8px])
   - Made text unreadable at tiny sizes
   - Still couldn't achieve enough height reduction
   - Inconsistent scaling (manual adjustments needed for each element)

3. **Using overflow: auto**
   - Would add scrollbars (bad UX for presentations)
   - Doesn't solve the fundamental height constraint

### The Solution

**CSS `transform: scale(0.5)`** applied to the content wrapper:

✅ **Advantages**:
- Uniform scaling of ALL content (fonts, spacing, bullets, badges)
- Maintains proportions and readability
- Allows using reasonable base font sizes (text-xl, text-sm) that get scaled down
- Content stays centered with `transformOrigin: 'center'`
- Works predictably across all slides

✅ **Result**:
- Original 1270px content × 0.5 = 635px effective height
- Fits comfortably within 750px container
- No content cropping or scrollbars
- Professional appearance maintained

## Container Structure

```tsx
// Outer container: Fixed 750px height with overflow-hidden
<div
  className="flex flex-col items-center justify-center w-full px-4 py-2 bg-gradient-to-br overflow-hidden"
  style={{ height: '750px', maxHeight: '750px' }}
>

  // Inner container: Content scaled to 50%
  <div
    className="text-center space-y-1 max-w-6xl w-full flex flex-col items-center"
    style={{ transform: 'scale(0.5)', transformOrigin: 'center' }}
  >

    {/* Slide Number Badge */}
    <div>SLIDE {slideNumber}</div>

    {/* Main Heading - text-xl (scaled to effectively ~10px) */}
    <h1 className="text-xl md:text-2xl">Title</h1>

    {/* Subtitle - text-xs (scaled to effectively ~6px) */}
    <h2 className="text-xs md:text-sm">Subtitle</h2>

    {/* Description - text-[10px] (scaled to effectively ~5px) */}
    <p className="text-[10px] md:text-xs">Description</p>

    {/* Bullet Points - text-[9px] in 2-column grid */}
    <ul className="grid grid-cols-2 gap-x-3 gap-y-0.5">
      {bulletPoints.map(...)}
    </ul>

    {/* Progress Indicator */}
    <div className="flex justify-center gap-1.5">...</div>

  </div>
</div>
```

## Adjusting Scales

### Making Content Larger

If content appears too small, increase the content scale:

```tsx
// In generic-slide.tsx
style={{ transform: 'scale(0.6)', transformOrigin: 'center' }}
```

⚠️ **Warning**: Values above `0.65` may cause content cropping on slides with many bullet points.

### Making Content Smaller

If content still doesn't fit (rare), decrease the content scale:

```tsx
// In generic-slide.tsx
style={{ transform: 'scale(0.4)', transformOrigin: 'center' }}
```

⚠️ **Warning**: Values below `0.45` may make text difficult to read.

### Changing 3D Positioning

Adjust impress.js scale independently for different 3D effects:

```typescript
// In ImpressRoot.tsx
case "slide-1":
  return {
    x: 0, y: 0, z: 0,
    scale: 0.8,  // Larger in 3D space (closer zoom)
    rotateX: 0, rotateY: 0, rotateZ: 0
  };
```

This won't affect content fitting, only the 3D camera position.

## Best Practices

1. **Keep both scales synchronized** across all slides for consistency
2. **Test all slides** when changing the content scale
3. **Use base font sizes** (text-xl, text-sm) and let the scale reduce them uniformly
4. **Maintain transformOrigin: 'center'** for proper centering
5. **Don't mix percentage scaling with pixel-based adjustments** (confusing to debug)

## Technical Details

### Transform Origin

```tsx
transformOrigin: 'center'
```

Ensures the content scales from the center point, keeping it centered in the container. Without this, the content would scale from the top-left corner and appear misaligned.

### Container Flexbox

```tsx
className="flex flex-col items-center justify-center"
```

The outer container uses flexbox with `justify-center` to vertically center the scaled content. This works together with the transform origin to create a balanced, centered appearance.

### CSS Transform vs HTML Scale

CSS `transform: scale()` is preferred over:
- Font size adjustments (too granular, not uniform)
- Width/height percentage (doesn't scale spacing)
- Impress.js scale alone (doesn't affect internal layout)

The transform scales the entire rendering of the div and its children as a single unit.

## Troubleshooting

### Content Still Cropped

1. Check actual content height in browser DevTools
2. Reduce content scale further (e.g., from 0.5 to 0.45)
3. Verify container has `overflow-hidden` and fixed height
4. Check for any conflicting CSS in slides.module.css

### Content Too Small

1. Increase content scale (e.g., from 0.5 to 0.6)
2. Increase base font sizes before the scale
3. Reduce padding/spacing in base Tailwind classes

### Inconsistent Across Slides

1. Verify all slides use the same `totalSlides` prop
2. Check that all slides have the same content scale value
3. Ensure impress.js scale is consistent across getSlideData()

## Performance Notes

CSS transforms are GPU-accelerated and highly performant. The `scale()` transform:
- Does not trigger layout recalculations
- Does not affect the DOM box model
- Renders efficiently on all modern browsers
- Works seamlessly with impress.js 3D transforms

## Future Considerations

If adding dynamic content that varies significantly in height:

1. Consider per-slide scale adjustments based on content amount
2. Implement dynamic scale calculation in GenericSlide component
3. Add overflow detection and automatic scale adjustment
4. Create a content validator that warns when content exceeds safe limits

## Related Files

- `app/components/ImpressRoot.tsx` - Impress.js scale configuration
- `app/components/slides/generic-slide.tsx` - Content scale implementation
- `app/types/slide-content.ts` - Type definitions
- `data/slides-content.json` - Presentation content
- `README.md` - User-facing documentation
