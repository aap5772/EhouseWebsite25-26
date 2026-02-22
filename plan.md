# EhousePage.pen - Dynamic Component & Variable Refactoring Plan

## Goal
Convert the 18-page design (9 light + 9 dark) to use reusable components, variables, and a **theme axis** for light/dark mode — eliminating duplication and making everything dynamic.

## Approach: Theme Axis + Major Components Only

Instead of maintaining 18 separate pages, we'll use a theme axis so each page switches between light/dark via theming. This means we end up with **9 pages** instead of 18.

**Scope: Major elements only** — Nav, Footer, Hero, Buttons, Cards (executive, cabinet, FAQ, info), Section Headers. Not every tiny detail.

---

## Phase 1: Variables & Theme Axis

1. **Replace all variables** with correct values using `set_variables(replace: true)`
2. **Define theme axis**: `mode: ["light", "dark"]`
3. **Define themed color variables**:
   - `bg-primary`: light=#ebf2fa, dark=#0a1a24
   - `bg-surface`: light=#ffffff, dark=#091820
   - `primary-blue`: light=#024889, dark=#012844
   - `accent-blue`: light=#2775e3, dark=#16448a
   - `text-primary`: light=#091820, dark=#ebf2fa
   - `text-secondary`: light=#091820cc, dark=#ebf2facc
   - `text-on-primary`: light=#ffffff, dark=#ebf2fa
   - `text-on-primary-secondary`: light=#ffffffcc, dark=#ebf2facc
   - `stroke-border`: light=#d1e1f3, dark=#122732
   - `stroke-accent`: light=#2775e3, dark=#16448a
   - `card-bg`: light=#ebf2fa, dark=#091820
   - `card-overlay`: light=#ffffff15, dark=#00000040
4. **Non-themed variables**: `brand-yellow` (#fcd200), spacing scale, radius scale, font sizes

## Phase 2: Create Reusable Components (in a "Design System" area)

Build these components using variable references so they auto-theme:

### A. NavBar (~3 batch calls)
- Logo + nav buttons (Home, Information dropdown, Events dropdown) + theme toggle
- Height 70px, uses themed colors
- `reusable: true`

### B. Footer (~1 batch call)
- Social icons (github, instagram, mail, facebook) + copyright
- Fill: `$primary-blue`, icons: `$brand-yellow`

### C. Hero Section (~2 batch calls)
- Label (13px yellow caps) + Title (48px) + Description (17px)
- Background: `$primary-blue`

### D. Button (~1 batch call)
- Outline style, radius 20, padding [28,44], stroke 1px `$stroke-accent`
- Text: `$accent-blue`

### E. Section Header (~1 batch call)
- Label + Title + optional Description

### F. Executive Card (~2 batch calls)
- 360px wide, circular image, name, role, description

### G. Cabinet Member Card (~2 batch calls)
- Horizontal, circular image + info stack

### H. FAQ Card (~1 batch call)
- Question + answer, border, radius 15

### I. Info Card (~1 batch call)
- Icon + label + value (Jankathon style)

## Phase 3: Migrate Pages to Components + Theme Axis

For each of the 9 pages:
1. Set `placeholder: true` on the light mode page
2. Delete old nav/footer, replace with component instances
3. Replace hero sections with Hero component instances
4. Replace card patterns with Card component instances
5. Apply `theme: {mode: "light"}` on the page frame
6. Apply variables to remaining hardcoded colors
7. Remove placeholder, screenshot to verify

After all light pages are done:
- **Delete all 9 dark mode pages** (they're now redundant — theme switching handles it)

## Phase 4: Variable Application & Cleanup

1. Use `replace_all_matching_properties` for bulk color replacement
2. Screenshot each page in both theme modes to verify
3. Clean up any remaining hardcoded values
4. Remove placeholder from Design System frame

---

## Execution Order
```
Phase 1 (Variables + Theme) → Phase 2 (Components) → Phase 3 (Page Migration) → Phase 4 (Cleanup)
```

## Estimated: ~80-100 batch_design calls total
