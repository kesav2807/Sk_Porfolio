# Portfolio Web Application

## Overview

This is a modern, animated portfolio website built with React, TypeScript, and Vite. The application features a single-page design with smooth animations, responsive layout, and a professional developer portfolio structure. It includes sections for hero/landing, about, projects, skills, and contact information.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for development and production builds
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **Animations**: Framer Motion for smooth transitions and interactions
- **UI Components**: Radix UI primitives with custom shadcn/ui components

### Backend Architecture
- **Server**: Express.js with TypeScript
- **Development**: TSX for running TypeScript files directly
- **Static Serving**: Vite development server in development, static files in production
- **API Structure**: RESTful endpoints prefixed with `/api`

## Key Components

### Frontend Components
- **Loading Screen**: Animated initial loading experience
- **Floating Navigation**: Fixed navigation with smooth scrolling
- **Scroll Progress**: Visual progress indicator
- **Particle Effects**: Background animation system
- **Responsive Sections**: Hero, About, Projects, Skills, Contact, Footer
- **Interactive Forms**: Contact form with state management

### Backend Infrastructure
- **Route Registration**: Centralized route management system
- **Storage Interface**: Abstracted storage layer with in-memory implementation
- **Error Handling**: Global error middleware
- **Request Logging**: Detailed API request logging

### UI System
- **Design System**: Consistent component library based on shadcn/ui
- **Color Scheme**: Custom CSS variables for portfolio-specific theming
- **Typography**: Professional font hierarchy
- **Responsive Design**: Mobile-first approach with breakpoint system

## Data Flow

### Client-Side State Management
- **React Query**: Server state management and caching
- **Local State**: React hooks for component-level state
- **Form Handling**: Controlled components with validation

### Animation System
- **Intersection Observer**: Trigger animations on scroll
- **Motion Variants**: Reusable animation configurations
- **Performance**: Hardware-accelerated animations with proper cleanup

### Asset Management
- **Static Assets**: Vite-managed asset pipeline
- **Image Optimization**: Responsive images with proper sizing
- **Font Loading**: Optimized web font delivery

## External Dependencies

### Core Dependencies
- **React Ecosystem**: React, React DOM, React Query
- **Animation**: Framer Motion for smooth transitions
- **Routing**: Wouter for lightweight routing
- **Forms**: React Hook Form with Zod validation
- **UI Components**: Radix UI primitives

### Development Dependencies
- **TypeScript**: Full type safety
- **Tailwind CSS**: Utility-first styling
- **PostCSS**: CSS processing
- **ESBuild**: Fast bundling for production

### Database Layer
- **Drizzle ORM**: Type-safe database operations
- **PostgreSQL**: Primary database (configured but not yet connected)
- **Schema Management**: Drizzle migrations and schema definitions

## Deployment Strategy

### Development Environment
- **Hot Reload**: Vite development server with HMR
- **TypeScript Checking**: Real-time type checking
- **Error Overlay**: Development error reporting

### Production Build
- **Client Build**: Vite production build with optimizations
- **Server Bundle**: ESBuild server bundling
- **Static Serving**: Express serving built assets

### Platform Configuration
- **Replit Integration**: Configured for Replit deployment
- **Port Configuration**: Port 5000 for development, 80 for production
- **Environment Variables**: DATABASE_URL for database connection

## Changelog

- June 16, 2025: Initial setup with basic portfolio structure
- June 16, 2025: Enhanced portfolio with advanced animations and real project data
  - Integrated actual personal information for Kesavan S from Madurai
  - Added 6 real projects: Cafe-7 app, Netflix Clone, Food Delivery, E-Commerce, ToDO App, Transport Management
  - Implemented advanced Framer Motion animations with typewriter effects
  - Created responsive design with glass morphism and particle effects
  - Added working contact form structure with EmailJS integration
  - Enhanced navigation with active section tracking
  - Integrated real GitHub and LinkedIn profiles
  - Added comprehensive setup documentation

## User Preferences

Preferred communication style: Simple, everyday language.
Project focus: Professional portfolio with engaging animations and real project showcase.
Target audience: Potential employers and clients looking for full-stack development services.