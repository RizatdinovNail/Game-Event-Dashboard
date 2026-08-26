# Apex Racing Hub

A modern motorsport and esports platform focused on competitive racing events, driver rankings, games, and championship results.

> This is a fictional portfolio project created to demonstrate modern frontend development practices.

## Overview

Apex Racing Hub is a responsive web application designed around competitive motorsport and esports racing.

The project focuses on building a polished, accessible, and maintainable frontend with reusable components and a clear separation between UI and data-access logic.

## Features

- Live and upcoming racing events
- Event details and results
- Driver rankings
- Game information
- Driver profiles
- Responsive design
- Accessible navigation and interactive elements
- Reusable UI components
- Responsive layouts for desktop, tablet, and mobile

## Tech Stack

- **Next.js**
- **React**
- **TypeScript**
- **Tailwind CSS**
- **Lucide React**
- **Git**

## Architecture

The project separates data access, UI components, and application pages to keep the codebase maintainable and reusable.

├── app/
   ├── components/
   │   ├── events/
   │   ├── home/
   │   ├── layout/
   │   └── ui/
   │
   ├── lib/
   │   ├── events.ts
   │   ├── games.ts
   │   ├── players.ts
   │   └── rankings.ts
   │
   ├── events/
   ├── games/
   ├── rankings/
   ├── page.tsx
   └── types/


## Accessibility

Accessibility is considered throughout the interface, including:

- Semantic HTML structure
- Keyboard-accessible navigation
- Visible focus states
- Appropriate heading hierarchy
- Decorative icons hidden from assistive technologies
- Responsive layouts
- Sufficient color contrast
- Meaningful navigation links

## Responsive Design

The interface is designed to adapt across:

- Desktop
- Tablet
- Mobile

Layouts, typography, grids, and navigation adjust based on viewport size.

## Data

The application currently uses fictional local data to simulate the backend.

The data layer is separated from the UI so that the mock data can later be replaced with an API or database without requiring major changes to the components.

## Project Status

The project is currently under active development.

Planned features include:
- Event details pages
- Event filtering and search
- Driver profiles
- Full rankings page
- Game pages
- Race results
- Loading and empty states
- Error handling
- Testing
- Performance optimization

## Disclaimer

Apex Racing Hub is a fictional portfolio project and is not affiliated with Polyphony Digital, Gran Turismo, or any other motorsport organization or game developer.

## License

This project is intended for portfolio and educational purposes.
