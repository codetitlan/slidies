# React-impressjs Hardcoded Styles Analysis

## Overview

The `react-impressjs` library includes extensive default CSS that can interfere with custom styling. This document catalogs all hardcoded values that may impact our presentation design.

## Critical Issues (Already Overridden)

### ✅ `.step` - Slide Container Width
**Default**: `width: 900px`
**Override**: `width: 1170px !important` (in globals.css)
**Impact**: PRIMARY - Controls the actual slide width
**Status**: Fixed ✅

## Potentially Problematic Hardcoded Values

### 🔴 HIGH PRIORITY - Layout & Dimensions

#### 1. `.step` - Multiple Properties
```css
.step {
  width: 900px;              /* ✅ OVERRIDDEN */
  margin: 20px auto;         /* ⚠️ Could affect positioning */
  padding: 20px;             /* ⚠️ Could affect internal spacing */
  font-size: 48px;           /* ⚠️ Base font size */
  line-height: 1.5;          /* ⚠️ Line height */
}
```

**Current Impact**:
- Width: Overridden successfully
- Margin: May affect slide positioning in 3D space
- Padding: 20px padding could limit usable space
- Font-size: 48px base size (but we use Tailwind classes, so likely overridden)

**Recommendation**: Monitor if margin/padding causes issues

#### 2. `.slide` - Alternative Slide Class
```css
.slide {
  width: 900px;
  height: 700px;
  padding: 40px 60px;
  font-size: 35px;
  line-height: 36px;
}
```

**Current Impact**: NOT USED (we use `.step` class)
**Recommendation**: No action needed unless we switch to `.slide` class

### 🟡 MEDIUM PRIORITY - Typography

#### 3. Heading Font Sizes in `.step`
```css
.step h1 { font-size: 124.8px; }
.step h2 { font-size: 103.2px; }
.step h3 { font-size: 81.6px; }
.step h4 { font-size: 62.4px; }
.step h5 { font-size: 48px; }
.step h6 { font-size: 40.8px; }
```

**Current Impact**:
- Our Tailwind classes (text-xl, text-sm, etc.) should override these
- CSS specificity: `.step h1` vs our classes on h1 elements
- Our classes appear to be working (visible in browser)

**Status**: Likely overridden by Tailwind, but monitor

**Test**: Check if heading sizes match our Tailwind classes

#### 4. Heading Font Sizes in `.slide`
```css
.slide h1 { font-size: 91px; }
.slide h2 { font-size: 75.25px; }
/* ... etc */
```

**Current Impact**: NOT USED (we use `.step` class)

### 🟢 LOW PRIORITY - Visual Effects

#### 5. `.impress-enabled .step`
```css
.impress-enabled .step {
  opacity: 0.3;              /* Inactive slides dimmed */
  margin: 0px;               /* Overrides the 20px auto margin */
  transition: opacity 1s;
}
```

**Current Impact**:
- Makes inactive slides semi-transparent (0.3 opacity)
- This is DESIRED behavior for 3D presentations
- Margin override to 0px might affect positioning

**Recommendation**: Keep as-is, this is expected impress.js behavior

#### 6. Background and Container Styles
```css
#react-impressjs {
  background: radial-gradient(rgb(240, 240, 240), rgb(155, 165, 175));
  min-height: 100vh;
  line-height: 1;
}
```

**Current Impact**:
- We override background in body with our own gradient
- Should not affect slides themselves

**Status**: No action needed

### 🔵 IGNORED - Specific Example Styles

The library includes many styles for specific demo slides:
- `#title`, `#big`, `#tiny`, `#imagination`, `#source`, etc.
- These have hardcoded widths (600px, 500px), font sizes, etc.

**Current Impact**: NONE - We don't use these IDs
**Recommendation**: Ignore completely

## Summary of Required Overrides

### Currently Applied in `globals.css`:
```css
.step {
  width: 1170px !important;  /* ✅ 900px + 30% */
  max-width: none !important;
}
```

### Potentially Needed (Monitor):

#### Option 1: Override padding for more space
```css
.step {
  padding: 0 !important;  /* Remove default 20px padding */
}
```

**When to apply**: If content feels cramped with limited horizontal space

#### Option 2: Override margin if positioning issues
```css
.step {
  margin: 0 !important;  /* Remove default 20px auto margin */
}
```

**When to apply**: If slides don't center properly in 3D space

#### Option 3: Override base font-size
```css
.step {
  font-size: inherit !important;  /* Don't force 48px base */
}
```

**When to apply**: If Tailwind font sizes aren't being respected

#### Option 4: Override heading sizes explicitly
```css
.step h1,
.step h2,
.step h3,
.step h4,
.step h5,
.step h6 {
  font-size: inherit !important;
}
```

**When to apply**: If heading sizes don't match Tailwind classes

## Testing Checklist

- [x] Slide width responds to `.step` width override
- [ ] Padding doesn't limit content space (check with wide content)
- [ ] Margin doesn't cause positioning issues in 3D transitions
- [ ] Heading font sizes match Tailwind classes (text-xl, text-sm, etc.)
- [ ] Base font-size doesn't override Tailwind utilities
- [ ] Line-height doesn't conflict with our spacing
- [ ] Inactive slide opacity (0.3) looks good visually
- [ ] Background gradient from globals.css is visible

## Monitoring Strategy

1. **After width changes**: Check if padding/margin need adjustment
2. **When adding content**: Verify font sizes match expectations
3. **During 3D transitions**: Ensure positioning is correct
4. **When changing typography**: Test against heading size overrides

## CSS Specificity Notes

**react-impressjs CSS specificity**:
- `.step` - specificity: 0,0,1,0
- `.step h1` - specificity: 0,0,1,1
- `.impress-enabled .step` - specificity: 0,0,2,0

**Our Tailwind classes**:
- Single class (e.g., `.text-xl`) - specificity: 0,0,1,0
- May need `!important` if react-impressjs rules are more specific

**Current approach**:
- Using `!important` for critical overrides (width)
- Relying on source order for Tailwind (globals.css loaded after react-impressjs)

## Files to Watch

1. `app/globals.css` - Our override location
2. `node_modules/react-impressjs/styles/react-impressjs.css` - Source of defaults
3. `app/components/slides/generic-slide.tsx` - Where our Tailwind classes are applied

## Debugging Commands

### Check computed styles in browser:
```javascript
// Get actual computed width
const step = document.querySelector('.step');
window.getComputedStyle(step).width;

// Check all step styles
const step = document.querySelector('.step');
console.log(window.getComputedStyle(step));

// Find which stylesheet a rule comes from
for (const sheet of document.styleSheets) {
  console.log(sheet.href || 'inline', sheet.cssRules);
}
```

### Check if Tailwind classes are applied:
```javascript
// Check h1 font size
const h1 = document.querySelector('h1');
window.getComputedStyle(h1).fontSize;

// Should match Tailwind's text-xl (1.25rem = 20px) × scale(0.5) = ~10px
```

## Recommended Documentation Update

When making styling changes, check this document to ensure you're not fighting against react-impressjs defaults. Use `!important` strategically when necessary, but prefer source order and specificity when possible.
