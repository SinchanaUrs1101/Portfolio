# Portfolio Website Design Guidelines for Sinchana S Urs

## Design Approach
**Reference-Based Approach**: Modern developer portfolio aesthetic drawing inspiration from contemporary portfolio designs with a specific focus on the provided image references. The design balances creative visual impact with professional presentation of technical credentials.

## Core Design Principles
- **Photo-Centric Hero**: Tilted portrait display as the focal point (matching Image 1)
- **Gradient Atmosphere**: Deep purple-to-dark gradient background creating depth (Image 2 palette)
- **Minimalist Sophistication**: Clean layouts with purposeful whitespace
- **Subtle Motion**: Gentle animations that enhance without overwhelming

## Layout System

**Spacing Framework**:
- Primary spacing units: 4, 8, 12, 16, 24, 32
- Section padding: Vertical spacing of 24-32 units for desktop, 16-20 for mobile
- Component gaps: 8-12 units between related elements
- Container max-width: 6xl (1152px) for content sections

**Grid Structure**:
- Hero: Single column with asymmetric tilted photo placement
- Skills/Services: 3-column grid on desktop, 2-column on tablet, single on mobile
- Projects: 2-column card layout on desktop, stacked on mobile
- Education/Certifications: Single column timeline-style layout

## Typography

**Font Selection** (Google Fonts):
- Primary (Headings): Inter - Bold (700) and SemiBold (600)
- Body Text: Inter - Regular (400) and Medium (500)

**Hierarchy**:
- Hero Name: 4xl to 6xl, Bold weight
- Section Headings: 3xl to 4xl, SemiBold
- Subsection Titles: xl to 2xl, SemiBold
- Body Text: Base to lg, Regular
- Captions/Labels: sm, Medium

**Line Heights**: 
- Headings: 1.2
- Body: 1.6

## Color Themes

**Dark Theme (Default)**:
- Primary Background: Deep purple gradient (from #1a0b2e via #2d1b4e to #1a0b2e)
- Secondary Background: rgba(45, 27, 78, 0.5) for cards/sections
- Text Primary: rgba(255, 255, 255, 0.95)
- Text Secondary: rgba(255, 255, 255, 0.7)
- Accent Purple: #8b5cf6 for highlights and CTAs
- Border: rgba(139, 92, 246, 0.2)

**Light Theme**:
- Primary Background: White to light gray gradient (#ffffff to #f8f9fa)
- Secondary Background: rgba(248, 249, 250, 0.8) for cards
- Text Primary: rgba(0, 0, 0, 0.9)
- Text Secondary: rgba(0, 0, 0, 0.6)
- Accent Purple: #7c3aed
- Border: rgba(124, 58, 237, 0.15)

## Component Library

**Navigation Bar**:
- Fixed position with backdrop blur effect
- Horizontal links: Home, About, Work, Portfolio, Contact
- Theme toggle button (sun/moon icon) positioned at top-right
- Semi-transparent background with subtle border-bottom
- Height: 16-20 spacing units

**Hero Section**:
- Full viewport height (100vh)
- Tilted portrait photo (15-20 degree rotation) positioned left or center-left
- Photo dimensions: 300-400px width with subtle shadow and rounded corners
- Name and title text positioned adjacent to photo
- Brief tagline beneath name
- Contact links (GitHub, LinkedIn, Email) as icon buttons
- CTA buttons: "View Projects" and "Download Resume"

**Skills Section**:
- Grid of skill category cards (3 columns desktop)
- Each card includes icon, skill name, and brief description
- Categories: Languages, Databases, Technologies, Soft Skills
- Hover effect: subtle lift and glow

**Projects Section**:
- Featured project cards (2 columns)
- Each card contains: Project title, tech stack badges, description bullets, "View Details" link
- Cards have slight elevation with border accent
- Tech stack displayed as small rounded badges

**Education/Certifications**:
- Timeline-style vertical layout
- Each entry: Institution name, degree/certification, date, location
- Left-aligned timeline markers with connecting lines

**Footer**:
- Minimal design with social links, copyright, and back-to-top button
- Centered layout

## Animations

**Entry Animations** (on scroll):
- Fade-in with slight upward motion (20-30px translate)
- Stagger delay between elements (100-150ms)
- Duration: 600-800ms with ease-out timing

**Interactive Animations**:
- Navigation links: Underline expand on hover
- Cards: Lift (4-8px) with shadow increase on hover
- Buttons: Subtle scale (1.02-1.05) and glow effect
- Theme toggle: Rotate icon 180 degrees with smooth transition
- Photo: Gentle pulse/glow effect on page load

**Performance**:
- Use transform and opacity only for animations
- Disable animations on reduced-motion preference

## Images

**Portrait Photo (Image 3)**:
- Placement: Hero section, tilted 15-20 degrees clockwise
- Treatment: Rounded corners (12-16px radius), subtle shadow, optional subtle border glow
- Display size: 300-400px width, auto height maintaining aspect ratio
- Background: Semi-transparent card behind photo for depth

**Icon Library**: Heroicons for UI icons and skill representations

## Responsive Breakpoints

- Mobile: < 768px (single column, stacked layout)
- Tablet: 768px - 1024px (2-column grids where appropriate)
- Desktop: > 1024px (full multi-column layouts)

**Mobile Adjustments**:
- Photo rotation reduced to 5-10 degrees
- Photo size reduced to 250-300px
- Navigation converts to hamburger menu
- Section padding reduced by 30-40%

## Accessibility

- Maintain WCAG AA contrast ratios in both themes
- Theme toggle includes aria-label
- Keyboard navigation support throughout
- Focus indicators on all interactive elements
- Semantic HTML structure with proper heading hierarchy

## Interactive Elements

**Theme Toggle Button**:
- Fixed position top-right in navigation
- Icon switches between sun (light theme) and moon (dark theme)
- Smooth transition between themes (300-400ms)
- Persists user preference in localStorage

**Call-to-Action Buttons**:
- Primary style for "View Projects" with solid accent background
- Secondary style for "Download Resume" with outline treatment
- Consistent padding and border radius across all buttons

This design creates a visually striking, modern portfolio that showcases Sinchana's technical expertise while maintaining professional credibility and excellent user experience.