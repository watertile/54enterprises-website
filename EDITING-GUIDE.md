# 📝 SIMPLE EDITING GUIDE FOR YOUR WEBSITE

## How to Make Changes - Super Easy! 🎨

You can edit your website using **any text editor**:
- **Mac**: TextEdit, VS Code, Sublime Text, or Atom
- **Recommended**: VS Code (free) - https://code.visualstudio.com

---

## 🖊️ CHANGING TEXT/WORDING

### Example: Change the Main Headline

**Find this in `index.html` (around line 31):**
```html
<h1 class="hero-title">
    <span class="hero-subtitle">Welcome to</span>
    54 Enterprises
</h1>
```

**Change to whatever you want:**
```html
<h1 class="hero-title">
    <span class="hero-subtitle">Your Partner For</span>
    Success & Growth
</h1>
```

### Example: Change Service Description

**Find this in `index.html` (around line 102):**
```html
<p class="service-description">
    Partner with MX Transportation to turn vehicles into revenue generators...
</p>
```

**Change to your own words:**
```html
<p class="service-description">
    We help you purchase and manage Uber vehicles that generate passive income 24/7...
</p>
```

### Quick Find Tips:
- Press `Cmd + F` (Mac) or `Ctrl + F` (Windows) to search for text
- Search for the text you want to change
- Edit it directly
- Save the file (`Cmd + S` or `Ctrl + S`)
- Refresh your browser to see changes

---

## 📸 CHANGING PHOTOS

### Option 1: Replace Existing Photos
1. Find your own photo (must be .jpg, .png, or .webp)
2. Rename it to match the existing filename:
   - `fleet-management.png`
   - `manufacturing.png`
   - `web-services.png`
3. Copy your photo into the `images/` folder (replace the old one)
4. Done! The new photo will show up automatically

### Option 2: Add New Photos
1. Put your photo in the `images/` folder (e.g., `my-cool-photo.jpg`)
2. In `index.html`, find the image you want to replace
3. Change the filename:

**Before:**
```html
<img src="images/fleet-management.png" alt="Fleet Management Services">
```

**After:**
```html
<img src="images/my-cool-photo.jpg" alt="My Cool Photo">
```

### 📏 Best Photo Sizes:
- Service images: 1200px x 800px (landscape)
- Keep file size under 500KB for fast loading

---

## 🎨 CHANGING COLORS

All colors are in `styles.css` at the very top (lines 8-15):

```css
:root {
    /* Change these colors */
    --color-primary: hsl(220, 90%, 56%);     /* Main blue color */
    --color-accent: hsl(40, 95%, 55%);       /* Gold accent color */
}
```

### Easy Color Picker:
1. Go to https://hslpicker.com
2. Pick your color
3. Copy the `hsl(xxx, xx%, xx%)` value
4. Replace in the CSS
5. Save and refresh!

**Example - Change to Green:**
```css
:root {
    --color-primary: hsl(140, 85%, 50%);     /* Green instead of blue */
    --color-accent: hsl(45, 100%, 60%);      /* Bright yellow */
}
```

---

## ✏️ COMMON EDITS - COPY & PASTE READY

### 1. Change Email Address
**Find (line ~276):**
```html
<p>info@54enterprises.com</p>
```
**Replace with your email:**
```html
<p>contact@54enterprises.com</p>
```

### 2. Change Phone Number
**Find (line ~286):**
```html
<p>Serving clients nationwide</p>
```
**Add your phone:**
```html
<p>Call us: (555) 123-4567</p>
```

### 3. Change Company Stats
**Find (around line 51-70):**
```html
<div class="stat-number" data-target="100">0</div>
```
**Change the number:**
```html
<div class="stat-number" data-target="250">0</div>
```
(The number will animate from 0 to your target!)

### 4. Add Your Address
**Find in Contact Section (line ~276):**
```html
<p>Serving clients nationwide</p>
```
**Replace with:**
```html
<p>123 Main Street, Los Angeles, CA 90001</p>
```

### 5. Change Footer Year
**Find (line ~350):**
```html
<p>&copy; 2024 54 Enterprises. All rights reserved.</p>
```
**Update year:**
```html
<p>&copy; 2026 54 Enterprises. All rights reserved.</p>
```

---

## 🔗 CHANGING PARTNER LINKS

### Update MX Transportation Link
**Find (around line 222):**
```html
<a href="https://www.mxtransportation.com" target="_blank">
```
**Keep as is, or update if their URL changes**

### Update Website Geeks Link  
**Find (around line 247):**
```html
<a href="https://thewebsitegeeks.com" target="_blank">
```

---

## 🚀 ADDING A NEW SERVICE

**Copy this entire block** (from line 118-159) in `index.html`:
```html
<div class="service-card">
    <div class="service-image">
        <img src="images/your-new-service.png" alt="New Service">
        <div class="service-overlay"></div>
    </div>
    <div class="service-content">
        <div class="service-icon">
            <!-- Icon SVG here -->
        </div>
        <h3 class="service-title">Your New Service</h3>
        <p class="service-description">
            Describe your new service here...
        </p>
        <ul class="service-features">
            <li>Feature 1</li>
            <li>Feature 2</li>
            <li>Feature 3</li>
        </ul>
        <a href="#contact" class="service-link">
            Learn More
            <svg>...</svg>
        </a>
    </div>
</div>
```

Paste it after the last service card and edit the content!

---

## 🧪 TESTING YOUR CHANGES

### Method 1: Double-Click
1. Make your edits in the text editor
2. Save the file
3. Double-click `index.html` to open in browser
4. Refresh the page (`Cmd + R` or `Ctrl + R`) to see changes

### Method 2: Live Server (Recommended)
1. Install VS Code
2. Install "Live Server" extension
3. Right-click `index.html` → "Open with Live Server"
4. Page auto-refreshes when you save!

---

## ⚠️ COMMON MISTAKES TO AVOID

❌ **Don't break the HTML tags**
- Keep opening `<div>` and closing `</div>` tags matched
- If something breaks, undo (`Cmd + Z`) and try again

❌ **Don't delete quotes**
- Keep quotes around values: `src="images/photo.jpg"` ✅
- Not: `src=images/photo.jpg` ❌

❌ **Watch your file extensions**
- If your photo is `.jpg`, write `.jpg` not `.png`
- Case matters: `Photo.PNG` is different from `photo.png`

✅ **ALWAYS keep a backup**
- Before major edits, copy the entire folder
- Name it `54enterprises-website-backup`

---

## 📋 EDITING CHECKLIST

Before uploading changes to your live site:

- [ ] Test in your browser locally
- [ ] Check on your phone (resize browser window)
- [ ] Verify all images load
- [ ] Click all links to ensure they work
- [ ] Submit the contact form (test it works)
- [ ] Spell check all text
- [ ] Make a backup of your current live site

---

## 🆘 HELP - Something Broke!

### If the layout looks weird:
1. Check you didn't delete any `</div>` tags
2. Undo recent changes
3. Compare with the backup folder

### If images don't show:
1. Check the image filename matches exactly (including extension)
2. Make sure image is in the `images/` folder
3. Check for typos in the path

### If colors look wrong:
1. Verify the HSL values in `styles.css`
2. Make sure you didn't delete the closing `}`
3. Refresh with `Cmd + Shift + R` (hard refresh)

---

## 🎓 WANT TO LEARN MORE?

**Free Resources:**
- HTML Basics: https://www.w3schools.com/html/
- CSS Colors: https://www.w3schools.com/css/css_colors_hsl.asp
- VS Code Tutorial: https://code.visualstudio.com/docs/introvideos/basics

**Or just ask me!** I can help you make any specific changes you need.

---

## 💡 PRO TIPS

1. **Use VS Code** - It highlights errors and makes editing easier
2. **Save often** - Press `Cmd + S` after every change
3. **Test before uploading** - Always preview changes locally first
4. **Keep backups** - Copy the folder before major edits
5. **One change at a time** - Edit, save, test, repeat

---

**Need help with a specific edit?** Just tell me what you want to change and I'll show you exactly where and how! 🚀
