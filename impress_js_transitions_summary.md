# Impress.js Spatial Transitions: From HTML to React

## Core Data Attributes in impress.js

Impress.js enables impressive 3D presentations through HTML data attributes that position slides in a virtual 3D space. The main attributes are:

### Basic Positioning

- `data-x`, `data-y`, `data-z`: 3D coordinate positioning (in pixels)
- `data-scale`: Size scaling of an element (1 is normal size, 2 is twice as big)

### Rotation

- `data-rotate-x`, `data-rotate-y`, `data-rotate-z`: Rotation in degrees around each axis
- `data-rotate`: Shorthand for z-axis rotation
- `data-rotate-order`: Controls the order of rotation application (default "xyz", can be "zyx" or other permutations)

### Transition Control

- `data-transition-duration`: Duration of transition in milliseconds
- `data-autoplay`: Time in seconds before advancing to next slide (when using autoplay plugin)

### Advanced Positioning

- `data-rel-position`: Enables relative positioning
- `data-rel-x`, `data-rel-y`, `data-rel-z`: Position relative to previous step
- `data-rel-rotate-x/y/z`: Rotation relative to previous step
- `data-rel-reset`: Reset relative positioning chain

## Creative Spatial Patterns

From analyzing the original HTML examples, we can identify several spatial patterns:

### 1. Linear Layouts

Simple left-to-right or top-to-bottom arrangements using incremental x/y values:

```javascript
// Linear horizontal (current implementation)
{ x: 0, y: 0, scale: 1 }
{ x: 1000, y: 0, scale: 1 }
{ x: 2000, y: 0, scale: 1 }
```

### 2. Grid Layouts

Organized in rows and columns (our current implementation):

```javascript
// First row
{ x: 0, y: 0, scale: 1 }
{ x: 1000, y: 0, scale: 1 }
{ x: 2000, y: 0, scale: 1 }
// Second row
{ x: 0, y: 700, scale: 1 }
{ x: 1000, y: 700, scale: 1 }
```

### 3. Circular/Ring Arrangements

Slides arranged in a circle or ring, with rotation to face the viewer:

```javascript
// For a circle with 8 slides, angle increment = 45 degrees
// For radius = 1000px
const getCircularPosition = (index, totalSlides = 8, radius = 1000) => {
  const angle = (index * 360) / totalSlides;
  const radian = (angle * Math.PI) / 180;
  return {
    x: radius * Math.cos(radian),
    y: radius * Math.sin(radian),
    rotate: angle, // Face the center
  };
};
```

### 4. 3D Cube

Positioning slides as faces of a cube:

```javascript
// For a cube with side = 1000px
const cube = {
  front: { x: 0, y: 0, z: 500, rotateY: 0 },
  right: { x: 500, y: 0, z: 0, rotateY: 90 },
  back: { x: 0, y: 0, z: -500, rotateY: 180 },
  left: { x: -500, y: 0, z: 0, rotateY: 270 },
  top: { x: 0, y: -500, z: 0, rotateX: 90 },
  bottom: { x: 0, y: 500, z: 0, rotateX: -90 },
};
```

### 5. Spiral Arrangement

Slides in a spiral pattern with increasing z-depth:

```javascript
const getSpiralPosition = (
  index,
  totalSlides = 8,
  radiusStart = 500,
  radiusIncrement = 100
) => {
  const angle = (index * 360) / (totalSlides / 2); // Make two full circles
  const radian = (angle * Math.PI) / 180;
  const radius = radiusStart + index * radiusIncrement;
  return {
    x: radius * Math.cos(radian),
    y: radius * Math.sin(radian),
    z: index * -100, // Increasing depth
    rotate: angle,
    scale: 1 - index * 0.05, // Gradually smaller
  };
};
```

### 6. Overview Step

A zoomed-out view showing multiple slides at once:

```javascript
{
  x: 1000, // Center point
  y: 700,
  z: 3000, // Far back to see everything
  scale: 3  // Zoomed out to show multiple slides
}
```

## Implementing in React

To enhance our getSlideData function, we can:

1. Create utility functions for different spatial arrangements
2. Add z-axis and rotation properties to all slides
3. Implement more creative transitions between slides
4. Use dynamic calculations based on slide content or themes

### Improved getSlideData Implementation

```typescript
const getSlideData = (slideId: string, index: number, totalSlides: number) => {
  // Determine presentation "mode" based on slide grouping
  if (slideId.startsWith("intro-")) {
    // Perhaps a circular arrangement for intro slides
    return getCircularPosition(index, 3, 800);
  } else if (slideId.startsWith("feature-")) {
    // A 3D cube for feature slides
    const cubePositions = getCubePositions(1000);
    return (
      cubePositions[slideId.replace("feature-", "")] || cubePositions.front
    );
  } else if (slideId.startsWith("detail-")) {
    // A spiral arrangement for detailed explanation slides
    return getSpiralPosition(index, 4, 800, 100);
  } else if (slideId === "overview") {
    // Final overview that shows the whole presentation
    return { x: 1000, y: 700, z: 3000, scale: 3 };
  }

  // Default grid layout with added depth and subtle rotation
  const row = Math.floor(index / 3);
  const col = index % 3;
  return {
    x: col * 1000,
    y: row * 700,
    z: -100 * (row + col), // Increasing depth as we progress
    rotateY: (col - 1) * 5, // Subtle rotation for perspective
    rotateX: (row - 1) * 3,
    scale: 1,
  };
};
```

## Next Steps for Implementation

1. Enhance the `getSlideData` function to support various spatial patterns
2. Group slides by theme or section and apply different spatial arrangements to each group
3. Add rotation effects to create more dynamic transitions
4. Implement overview slides that showcase the spatial relationship between slides
5. Consider the content of each slide when determining its position (content-aware positioning)
6. Add subtle z-depth variations to create layering effects even in 2D layouts

By implementing these techniques, we can create a more immersive and spatially interesting presentation that leverages the full power of impress.js's 3D capabilities while maintaining a clear narrative structure.
