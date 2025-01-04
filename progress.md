# MBBS Europe Guide - Project Documentation

## Project Overview
A comprehensive web application providing information about MBBS programs across European countries, focusing on English-medium programs with tuition under €15,000/year.

## Technology Stack
- **Framework**: React with TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Build Tool**: Vite

## Project Structure

### Root Configuration Files
- `vite.config.ts` - Vite configuration with path aliases
- `tsconfig.json` - TypeScript configuration
- `tailwind.config.js` - Tailwind CSS customization
- `components.json` - shadcn/ui configuration

### Source Code Organization (`/src`)

#### Core Files
- `main.tsx` - Application entry point
- `App.tsx` - Root component with layout structure
- `index.css` - Global styles and Tailwind imports

#### Components (`/src/components`)
1. **Layout Components**
   - `Header.tsx` - Main header with animated logo
   - `TableOfContents.tsx` - Sticky navigation sidebar

2. **Content Components**
   - `Introduction.tsx` - Opening section
   - `CountryCard.tsx` - Individual country information display
   - `RestrictedCountries.tsx` - Information about excluded countries
   - `OtherCountries.tsx` - Additional Western European countries
   - `Conclusion.tsx` - Summary and recommendations

3. **UI Components** (`/src/components/ui`)
   - Reusable UI components from shadcn/ui
   - Custom styled components for consistent design

#### Data (`/src/data`)
- `countries.ts` - Comprehensive country data including:
  - Tuition fees
  - Language requirements
  - University lists
  - Entrance requirements
  - Practice locations

#### Types (`/src/types`)
- `index.ts` - TypeScript interfaces for country and university data

#### Utilities (`/src/lib`)
- `utils.ts` - Helper functions for className merging

## Key Features

### 1. Interactive Navigation
- Sticky table of contents
- Smooth scrolling to sections
- Active section highlighting
- Responsive design

### 2. Visual Design
- Gradient backgrounds
- Animated header with pulsing icon
- Grid pattern overlay
- Consistent card layouts
- Country flags integration

### 3. Content Organization
- Structured information hierarchy
- Clear section separation
- Comprehensive country data
- Comparative analysis

### 4. Performance Optimizations
- Component-based architecture
- Efficient re-rendering
- Optimized scroll handling
- Lazy-loaded images

## Component Details

### Header Component
```typescript
// Features:
- Gradient background with overlay patterns
- Animated stethoscope icon
- Responsive text sizing
```

### TableOfContents Component
```typescript
// Features:
- Intersection Observer for active section tracking
- Smooth scroll behavior
- Visual feedback for current section
```

### CountryCard Component
```typescript
// Features:
- Comprehensive country information display
- Flag integration
- Organized data sections
```

## Styling Approach

### Tailwind CSS Usage
- Custom color scheme
- Responsive design utilities
- Animation classes
- Glass-morphism effects

### Theme Configuration
- Light/dark mode support
- Custom color variables
- Consistent spacing scale
- Typography system

## Future Enhancements
1. Search functionality
2. Country comparison tool
3. University filters
4. Interactive maps
5. Cost calculator
6. Language requirement checker

## Development Guidelines

### Code Style
- Consistent file structure
- Component-based architecture
- TypeScript for type safety
- Proper error handling

### Best Practices
- Single responsibility principle
- DRY (Don't Repeat Yourself)
- Consistent naming conventions
- Proper component composition

### Performance Considerations
- Efficient re-renders
- Proper event handling
- Image optimization
- Code splitting