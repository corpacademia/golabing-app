# GoLabing.ai Platform

## Overview
GoLabing.ai is a frontend web application for an AI-powered hands-on lab platform for IT learning. The application showcases features, solutions, and services offered by GoLabing.ai, providing an interactive user interface for potential users and customers.

## Technology Stack
- **Framework**: React 18.3 with TypeScript
- **Build Tool**: Vite 5.4
- **Styling**: Tailwind CSS with PostCSS
- **Routing**: React Router DOM
- **Animations**: Framer Motion
- **Icons**: Lucide React

## Project Structure
- `src/` - Main application source code
  - `components/` - Reusable UI components
    - `navigation/` - Navigation-related components
  - `pages/` - Page components for routing
    - `company/` - Company-related pages (About, Blog, Careers, Partners)
    - `legal/` - Legal pages (Privacy, Terms, Cookie Policy)
  - `data/` - Static data for content
- `public/` - Static assets

## Development
- **Dev Server**: Runs on port 5000 with Vite
- **Command**: `npm run dev`
- **Hot Module Replacement**: Configured for Replit's proxy environment

## Key Features
- Landing page with Hero section
- Features showcase
- Technology vendors display
- Solutions for different user types
- Lab types overview
- Testimonials and FAQ sections
- Multi-page routing for company info and legal pages
- Contact form with animations

## Architecture Notes
- Frontend-only application (no backend)
- Component-based architecture
- Responsive design with mobile menu
- External authentication links to app.golabing.ai

## Recent Changes
- *2025-10-15*: Initial Replit setup
  - Configured Vite for Replit environment (port 5000, host 0.0.0.0)
  - Set up development workflow
  - Configured HMR for proxy environment

## Configuration
- Vite server configured for Replit's proxy (0.0.0.0:5000)
- HMR configured with WSS protocol on port 443
- Build outputs to `dist/` directory
