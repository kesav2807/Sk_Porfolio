# Windows Setup Guide - Kesavan S Portfolio

## Fix for Windows NODE_ENV Error

The error you encountered is common on Windows. Here are three solutions:

### Solution 1: Use the Batch File (Easiest)

I've created a Windows batch file for you:

1. Open Command Prompt in your project folder
2. Run this command:
```cmd
start.bat
```

### Solution 2: Install Dependencies First

If the batch file doesn't work, try this:

1. First install all dependencies:
```cmd
npm install
```

2. Then start with tsx directly:
```cmd
npx tsx server/index.ts
```

### Solution 3: Use PowerShell (Alternative)

1. Open PowerShell instead of Command Prompt
2. Navigate to your project folder
3. Run:
```powershell
$env:NODE_ENV="development"; npx tsx server/index.ts
```

## Complete Windows Setup Steps

### Step 1: Download & Extract
- Download your portfolio ZIP from Replit
- Extract to a folder like `C:\Projects\kesavan-portfolio`

### Step 2: Install Node.js
- Download from https://nodejs.org/ (LTS version)
- Install with default settings
- Restart your computer

### Step 3: Open Command Prompt
- Press `Windows + R`
- Type `cmd` and press Enter
- Navigate to your project:
```cmd
cd "C:\Projects\kesavan-portfolio"
```

### Step 4: Install Dependencies
```cmd
npm install
```
Wait 2-3 minutes for completion

### Step 5: Start Portfolio (Choose One Method)

**Method A - Use Batch File:**
```cmd
start.bat
```

**Method B - Direct Command:**
```cmd
npx tsx server/index.ts
```

**Method C - PowerShell:**
```powershell
$env:NODE_ENV="development"; npx tsx server/index.ts
```

### Step 6: Open Browser
Go to: http://localhost:5000

## Troubleshooting Windows Issues

### "tsx is not recognized"
Run this first:
```cmd
npm install -g tsx
```

### "Permission denied" error
Run Command Prompt as Administrator:
1. Right-click Command Prompt
2. Select "Run as administrator"
3. Navigate to your project folder
4. Try the commands again

### Port 5000 already in use
```cmd
netstat -ano | findstr :5000
taskkill /PID [PID_NUMBER] /F
```

### Dependencies not installing
```cmd
npm cache clean --force
rmdir /s node_modules
npm install
```

## Alternative: Use VS Code Terminal

1. Download VS Code from https://code.visualstudio.com/
2. Open your project folder in VS Code
3. Open terminal in VS Code (Ctrl + `)
4. Run the commands there

## What Should Happen

When successful, you'll see:
```
Starting Kesavan's Portfolio...

[express] serving on port 5000
```

Then open http://localhost:5000 to see your portfolio with:
- Your name (Kesavan S)
- Real projects from Madurai
- Working animations and navigation
- Professional contact information

## Still Having Issues?

Try this simple test:
```cmd
node --version
npm --version
```

Both should show version numbers. If not, Node.js isn't properly installed.

For additional help, the main README.md and SETUP_GUIDE.md files have more troubleshooting options.