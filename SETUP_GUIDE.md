# Complete Setup Guide - Kesavan S Portfolio

## Quick Start (5 Minutes)

### 1. Download & Extract
- Download the project ZIP file
- Extract to your desired folder (e.g., `C:\Projects\kesavan-portfolio`)

### 2. Install Node.js
If not already installed:
- Visit: https://nodejs.org/
- Download LTS version (recommended)
- Install with default settings

### 3. Open Terminal
- Windows: Press `Win + R`, type `cmd`, press Enter
- Mac: Press `Cmd + Space`, type `terminal`, press Enter
- Navigate to project folder: `cd path/to/kesavan-portfolio`

### 4. Install & Run
```bash
npm install
npm run dev
```

### 5. Open Browser
- Go to: http://localhost:5000
- Your portfolio is now running!

## Detailed Windows Setup

### Step 1: Download Node.js
1. Go to https://nodejs.org/
2. Click "Download for Windows" (LTS version)
3. Run the installer (.msi file)
4. Follow installation wizard with default settings
5. Restart your computer

### Step 2: Verify Installation
1. Press `Windows Key + R`
2. Type `cmd` and press Enter
3. Type: `node --version` (should show version number)
4. Type: `npm --version` (should show version number)

### Step 3: Extract Project
1. Right-click the downloaded ZIP file
2. Select "Extract All..."
3. Choose destination folder
4. Remember the folder path

### Step 4: Navigate to Project
1. Open Command Prompt (cmd)
2. Type: `cd "C:\path\to\your\extracted\folder"`
3. Press Enter

### Step 5: Install Dependencies
```cmd
npm install
```
Wait for installation to complete (2-3 minutes)

### Step 6: Start Development Server
```cmd
npm run dev
```

### Step 7: View Portfolio
1. Open your web browser
2. Go to: http://localhost:5000
3. Your portfolio should load

## Detailed Mac Setup

### Step 1: Install Node.js
1. Go to https://nodejs.org/
2. Download macOS installer
3. Open the .pkg file
4. Follow installation steps

### Step 2: Extract Project
1. Double-click the ZIP file to extract
2. Move folder to desired location (e.g., Desktop)

### Step 3: Open Terminal
1. Press `Cmd + Space`
2. Type "Terminal" and press Enter
3. Navigate: `cd ~/Desktop/kesavan-portfolio`

### Step 4: Install & Run
```bash
npm install
npm run dev
```

### Step 5: Open Browser
Visit: http://localhost:5000

## Project Files Structure

```
kesavan-portfolio/
├── README.md                 # Main documentation
├── SETUP_GUIDE.md           # This file
├── package.json             # Dependencies
├── package-lock.json        # Dependency lock file
├── tsconfig.json            # TypeScript config
├── tailwind.config.ts       # Styling config
├── vite.config.ts           # Build config
├── client/                  # Frontend code
│   ├── index.html
│   └── src/
│       ├── components/      # UI components
│       ├── pages/          # Page components
│       ├── hooks/          # Custom hooks
│       ├── lib/            # Utilities
│       ├── App.tsx         # Main app
│       ├── main.tsx        # Entry point
│       └── index.css       # Global styles
├── server/                  # Backend code
│   ├── index.ts            # Server entry
│   ├── routes.ts           # API routes
│   └── vite.ts             # Vite setup
└── shared/                  # Shared types
    └── schema.ts           # Data schemas
```

## Customization Guide

### Change Personal Information
1. Open `client/src/components/sections/about.tsx`
2. Update name, bio, and personal details
3. Save file - changes appear automatically

### Update Projects
1. Open `client/src/components/sections/projects.tsx`
2. Modify the `projects` array
3. Add your project details, links, and descriptions

### Change Contact Info
1. Open `client/src/components/sections/contact.tsx`
2. Update email and social links
3. Modify contact paragraph

### Modify Skills
1. Open `client/src/components/sections/skills.tsx`
2. Update `skillsData` array with your technologies

## Building for Production

### Create Production Build
```bash
npm run build
```

### Test Production Build
```bash
npm run preview
```

### Deploy to Netlify (Free)
1. Go to https://netlify.com/
2. Drag the `dist` folder to deploy area
3. Your site will be live in minutes

### Deploy to Vercel (Free)
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow prompts

## Troubleshooting

### "Command not found" Error
- Node.js not installed or not in PATH
- Restart terminal after installing Node.js
- On Windows, restart computer

### Port 5000 Busy
```bash
npm run dev -- --port 3000
```

### Dependencies Installation Failed
```bash
npm cache clean --force
rm -rf node_modules
npm install
```

### Animations Not Working
- Update your browser to latest version
- Enable hardware acceleration in browser settings
- Clear browser cache

## Contact Form Setup (Optional)

### Get EmailJS Account
1. Visit: https://www.emailjs.com/
2. Create free account
3. Add email service (Gmail/Outlook)
4. Create email template
5. Get Service ID, Template ID, and Public Key

### Add to Project
1. Create `.env` file in root folder
2. Add your credentials:
```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

## Performance Tips

### Optimization
- Images: Use WebP format when possible
- Keep images under 1MB
- Minimize custom fonts
- Use browser caching

### Development
- Use `npm run dev` for development
- Use `npm run build` for production
- Test on different screen sizes

## Need Help?

### Common Commands
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Check for errors
npx tsc --noEmit
```

### Support Resources
- Node.js Documentation: https://nodejs.org/docs/
- React Documentation: https://react.dev/
- Tailwind CSS: https://tailwindcss.com/docs
- Framer Motion: https://www.framer.com/motion/

### Project Author
**Kesavan S**
- Email: kesevansunder007@gmail.com
- GitHub: https://github.com/kesav2807
- LinkedIn: https://www.linkedin.com/in/kesavansunder/

---

This portfolio showcases real projects and professional experience. All links and contact information are authentic and maintained.