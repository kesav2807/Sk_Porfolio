# Kesavan S - Portfolio Website

A modern, animated portfolio website built with React, TypeScript, and advanced animations featuring real projects and professional contact information.

## 🚀 Features

- **Advanced Animations**: Framer Motion with typewriter effects, floating particles, and smooth transitions
- **Real Project Showcase**: 6 live projects including Cafe-7 app, Netflix Clone, Food Delivery app
- **Interactive Contact Form**: Working contact form with EmailJS integration
- **Responsive Design**: Mobile-first approach with glass morphism effects
- **Modern Tech Stack**: React 18, TypeScript, Tailwind CSS, Vite

## 📋 Prerequisites

Before you begin, ensure you have the following installed on your machine:

1. **Node.js** (version 18 or higher)
   - Download from: https://nodejs.org/
   - Verify installation: `node --version`

2. **Git**
   - Download from: https://git-scm.com/
   - Verify installation: `git --version`

3. **Code Editor** (recommended: VS Code)
   - Download from: https://code.visualstudio.com/

## 🛠️ Installation & Setup

### Step 1: Download the Project

#### Option A: Download ZIP File
1. Click on the "Download" or "Export" button in your Replit project
2. Extract the ZIP file to your desired location
3. Open terminal/command prompt and navigate to the extracted folder

#### Option B: Clone from Git (if repository exists)
```bash
git clone [your-repository-url]
cd portfolio-website
```

### Step 2: Install Dependencies
```bash
# Install all project dependencies
npm install
```

### Step 3: Environment Setup (Optional)
If you want to use the contact form with EmailJS:
1. Create a `.env` file in the root directory
2. Add your EmailJS credentials:
```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

### Step 4: Run the Development Server
```bash
# Start the development server
npm run dev
```

The website will be available at: `http://localhost:5000`

## 📁 Project Structure

```
portfolio-website/
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   │   ├── sections/   # Page sections (Hero, About, Projects, etc.)
│   │   │   └── ui/         # UI components (buttons, cards, etc.)
│   │   ├── hooks/          # Custom React hooks
│   │   ├── lib/            # Utility functions and animations
│   │   ├── pages/          # Page components
│   │   ├── App.tsx         # Main application component
│   │   ├── index.css       # Global styles and animations
│   │   └── main.tsx        # Application entry point
│   └── index.html          # HTML template
├── server/                 # Backend Express server
│   ├── index.ts            # Server entry point
│   ├── routes.ts           # API routes
│   └── vite.ts             # Vite configuration
├── shared/                 # Shared types and schemas
│   └── schema.ts           # Database schemas
├── package.json            # Dependencies and scripts
├── tailwind.config.ts      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
└── vite.config.ts          # Vite build configuration
```

## 🎨 Customization

### Personal Information
Update your personal details in these files:
- `client/src/components/sections/hero.tsx` - Name and intro
- `client/src/components/sections/about.tsx` - About section content
- `client/src/components/sections/contact.tsx` - Contact information
- `client/src/components/sections/header.tsx` - Navigation name

### Projects
Add or modify projects in:
- `client/src/components/sections/projects.tsx` - Update the `projects` array

### Skills
Update your tech stack in:
- `client/src/components/sections/skills.tsx` - Modify the `skillsData` array

### Styling
- `client/src/index.css` - Global styles and CSS variables
- `tailwind.config.ts` - Tailwind configuration

## 🚀 Building for Production

### Step 1: Build the Project
```bash
npm run build
```

### Step 2: Test Production Build
```bash
npm run preview
```

### Step 3: Deploy
The build files will be in the `dist` folder. You can deploy to:

#### Netlify
1. Drag and drop the `dist` folder to Netlify
2. Or connect your Git repository for automatic deployments

#### Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

#### GitHub Pages
1. Push your code to GitHub
2. Go to repository Settings > Pages
3. Select source branch and folder

## 📱 Mobile Responsiveness

The portfolio is fully responsive and tested on:
- Desktop (1920px and above)
- Laptop (1024px - 1919px)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## 🛠️ Available Scripts

```bash
# Development
npm run dev          # Start development server

# Building
npm run build        # Build for production
npm run preview      # Preview production build

# Type checking
npx tsc --noEmit     # Check TypeScript errors

# Linting (if configured)
npm run lint         # Run ESLint
```

## 🐛 Troubleshooting

### Common Issues

#### 1. Port Already in Use
```bash
# Kill process on port 5000
npx kill-port 5000
# Or use a different port
npm run dev -- --port 3000
```

#### 2. Node Modules Issues
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

#### 3. Build Errors
```bash
# Check TypeScript errors
npx tsc --noEmit
# Clear Vite cache
rm -rf .vite
npm run build
```

#### 4. Animation Performance
If animations are slow:
- Check browser hardware acceleration
- Reduce motion in system settings
- Clear browser cache

## 📧 Contact Form Setup (Optional)

To enable the contact form:

1. **Create EmailJS Account**
   - Go to https://www.emailjs.com/
   - Create a free account

2. **Setup Email Service**
   - Add an email service (Gmail, Outlook, etc.)
   - Note the Service ID

3. **Create Email Template**
   - Create a new template
   - Use variables: `{{user_name}}`, `{{user_email}}`, `{{subject}}`, `{{message}}`
   - Note the Template ID

4. **Get Public Key**
   - Go to Account > API Keys
   - Copy the Public Key

5. **Update Environment Variables**
   - Add your keys to `.env` file as shown above

## 🌟 Features Overview

### Animations
- Typewriter effect for hero text
- Floating particles and sparkles
- Smooth scroll animations
- Hover effects on cards and buttons
- Gradient animations

### Sections
- **Hero**: Introduction with animated background
- **About**: Personal information and brief bio
- **Projects**: Showcase of 6 real projects with live links
- **Skills**: Tech stack organized by categories
- **Contact**: Working contact form and social links

### Technical
- TypeScript for type safety
- Responsive design with Tailwind CSS
- Modern React patterns with hooks
- Optimized for performance
- SEO-friendly structure

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Developer

**Kesavan S**
- Email: kesevansunder007@gmail.com
- GitHub: https://github.com/kesav2807
- LinkedIn: https://www.linkedin.com/in/kesavansunder/
- Location: Madurai, India

---

**Note**: This portfolio showcases real projects and professional experience. All project links and contact information are authentic and regularly maintained.