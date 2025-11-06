# Story: Simplify Presentation to 5 Identical Slides

## Context
- **Project**: Slidies - Interactive presentation with impress.js
- **Current State**: 9 distinct slides with unique content and 3D positioning
- **Goal**: Reduce to 5 slides using same template, preparing for content replacement

## User Story
**As a** presentation creator
**I want** to simplify the presentation to 5 identical slides
**So that** I can replace the content with new slides later

## Acceptance Criteria
1. ✅ Presentation contains exactly 5 slides (no more, no less)
2. ✅ All 5 slides use the same component template
3. ✅ Each slide has unique 3D positioning for visual variety
4. ✅ Slide IDs are sequential: `slide-1`, `slide-2`, `slide-3`, `slide-4`, `slide-5`
5. ✅ Overview slide remains for navigation
6. ✅ Generic placeholder content clearly indicates "Slide N"
7. ✅ Transitions remain smooth (duration: 1500ms)

## Technical Implementation

### Components to Create
1. **GenericSlide Component** (`app/components/slides/generic-slide.tsx`)
   - Props: `slideNumber: number`
   - Simple, clean design with placeholder content
   - Responsive layout
   - Clear slide number display

### Components to Modify
1. **ImpressRoot.tsx** (`app/components/ImpressRoot.tsx`)
   - Remove slide-specific imports (SlideOne through SlideNine)
   - Import GenericSlide component
   - Update `getSlideData()` to return positioning for 5 slides
   - Update `slides` array to use GenericSlide 5 times
   - Keep overview slide

### 3D Positioning Strategy
Create visually interesting positions distributed in 3D space:

```typescript
slide-1: { x: 0, y: 0, z: 0, scale: 1, rotateX: 0, rotateY: 0, rotateZ: 0 }
slide-2: { x: 2000, y: -500, z: -800, scale: 1.2, rotateX: 20, rotateY: -15, rotateZ: 0 }
slide-3: { x: -1500, y: 800, z: 1000, scale: 0.9, rotateX: -10, rotateY: 30, rotateZ: 10 }
slide-4: { x: 1200, y: 1500, z: -1200, scale: 1.1, rotateX: 45, rotateY: -20, rotateZ: -5 }
slide-5: { x: -2200, y: -800, z: 500, scale: 1.3, rotateX: -15, rotateY: 10, rotateZ: 15 }
overview: { x: 0, y: 0, z: 4000, scale: 4, rotateX: 0, rotateY: 0, rotateZ: 0 }
```

### Files to Keep
- `app/components/ImpressClient.tsx` - Core impress.js wrapper
- `app/components/impress-types.ts` - TypeScript types
- `app/page.tsx` - Entry point
- All configuration files

### Files to Remove (After Implementation)
- `app/components/slides/slide-one.tsx` through `slide-nine.tsx`
- Any associated CSS modules if not reused

## Non-Functional Requirements
- **Performance**: No performance degradation from simplification
- **Maintainability**: Code should be cleaner and easier to understand
- **Extensibility**: Easy to replace GenericSlide with custom content later

## Testing Checklist
- [ ] Presentation loads without errors
- [ ] Exactly 5 slides visible (+ overview)
- [ ] Arrow key navigation works forward/backward
- [ ] Each slide displays correct number (1-5)
- [ ] 3D transitions are smooth and visually appealing
- [ ] Overview slide shows all 5 slides in miniature
- [ ] No console errors or warnings
- [ ] Responsive on different screen sizes

## Future Enhancements
- Content replacement strategy
- Slide data management (JSON/YAML)
- Dynamic slide loading
- CMS integration for content updates

## Dependencies
- No new dependencies required
- Uses existing react-impressjs library
- Next.js 15, React 19, TypeScript

## Estimated Effort
- **Development**: ~1 hour
- **Testing**: ~30 minutes
- **Documentation**: ~15 minutes
- **Total**: ~2 hours

## Success Metrics
- Clean codebase with reduced complexity
- Easy content replacement workflow
- Maintained visual quality and transitions
- No functional regressions

## Notes
- Keep impress.js configuration unchanged
- Preserve responsive design patterns
- Maintain TypeScript type safety
- Use Tailwind CSS for styling consistency

---

**Created**: 2025-11-05
**Status**: Ready for Implementation
**Priority**: High
**Complexity**: Low-Medium
