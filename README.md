# Portfolio Website - Ahamad Kalandar Shahad

A modern, responsive, recruiter-ready developer portfolio website engineered for **Ahamad Kalandar Shahad**, Computer Science Engineering student at A.J. Institute of Engineering and Technology (Class of 2028).

Built with **React**, **Vite**, **TypeScript**, **Tailwind CSS**, and **Lucide React**.

---

## 🚀 Live Local Preview

The preview server is active at:
- **Local:** [http://localhost:4173/](http://localhost:4173/)

To start the development server with Hot Module Replacement (HMR):
```bash
cd ahamad-portfolio
npm run dev
```

To create a production build:
```bash
npm run build
npm run preview
```

---

## 📁 Project Architecture

```
ahamad-portfolio/
├── index.html                   # Entry HTML with Inter & JetBrains Mono typography
├── package.json                 # Dependencies & scripts
├── tailwind.config.js           # Deep navy, electric blue & violet theme configuration
├── vite.config.ts               # Vite bundler configuration
├── public/
│   └── favicon.svg              # Custom developer SVG favicon
└── src/
    ├── main.tsx                 # React DOM root entry
    ├── App.tsx                  # Root component & scroll observer
    ├── index.css                # Tailwind directives & glow/glassmorphism utilities
    ├── vite-env.d.ts            # TypeScript client declarations
    ├── types/
    │   └── index.ts             # Clean TypeScript interfaces
    ├── data/
    │   └── portfolioData.ts     # ⭐ Central configuration file for all portfolio data
    └── components/
        ├── Navbar.tsx           # Sticky responsive navigation with mobile drawer
        ├── Hero.tsx             # Hero section with headline, code snippet & dev avatar
        ├── About.tsx            # Balanced two-column background & profile snapshot
        ├── Skills.tsx           # Python, C Programming, Excel (categorized, no fake ratings)
        ├── Projects.tsx         # ScholarMatch academic project spotlight & placeholder modal
        ├── Education.tsx        # B.E. CSE at AJIET (2028) with coursework & grade placeholders
        ├── CurrentlyLearning.tsx# Growth roadmap & learning milestones
        ├── Contact.tsx          # Direct email/tel links & validated contact form
        ├── Footer.tsx           # Branding, quick links, copyright & contact
        ├── BrandIcons.tsx       # Crisp SVGs for GitHub and LinkedIn
        ├── BackToTop.tsx        # Floating back-to-top button
        ├── Chatbot.tsx          # 🤖 Interactive AI Portfolio Assistant chatbot widget
        └── PlaceholderModal.tsx # Informative dialog for unconfigured URLs & repositories
```

---

## 🛠️ How to Customize Your Portfolio

All your personal information, links, projects, and skills are maintained inside a single configuration file:
👉 **`src/data/portfolioData.ts`**

### 1. Adding Your Profile Photo
1. Place your photo image file (e.g. `shahad.jpg`) into the `public/` directory.
2. In `src/data/portfolioData.ts`, change:
   ```typescript
   profileImage: {
     customPhotoUrl: "/shahad.jpg", // Change from null
     fallbackInitials: "AS",
   }
   ```

### 2. Adding Your GitHub and LinkedIn Profiles
In `src/data/portfolioData.ts`, update:
```typescript
socialLinks: {
  github: {
    url: "https://github.com/your-username",
    isConfigured: true, // Set to true
    placeholderLabel: "GitHub Profile",
  },
  linkedin: {
    url: "https://linkedin.com/in/your-username",
    isConfigured: true, // Set to true
    placeholderLabel: "LinkedIn Profile",
  },
}
```

### 3. Updating ScholarMatch Details
When your academic project repository or live demo is ready, update `projectsData` in `src/data/portfolioData.ts`:
```typescript
{
  id: "scholar-match",
  title: "ScholarMatch",
  category: "Academic Project",
  status: "Completed / Live",
  shortDescription: "Your updated description...",
  technologies: ["Python", "Flask", "SQLite", "Tailwind CSS"],
  isPlaceholderTech: false,
  liveDemoUrl: "https://your-demo-url.com",
  sourceCodeUrl: "https://github.com/your-username/ScholarMatch",
  isRealDemoConfigured: true,
  isRealRepoConfigured: true,
}
```

### 4. Adding Additional Technical Skills
To add more skills (e.g., Java, SQL, Git, HTML/CSS), simply add a new object to `skillCategories` in `src/data/portfolioData.ts`:
```typescript
{
  name: "SQL & Databases",
  category: "tools",
  description: "Relational database concepts, queries, and table design.",
  tags: ["SQL", "Relational Models", "Queries"],
  iconName: "Code2",
}
```

### 5. Connecting the Contact Form to a Backend (Optional)
The contact form currently validates user input and generates a pre-filled `mailto:` email ready for your inbox (`shahadh22831@gmail.com`). 
If you would like direct serverless delivery in the browser:
- Sign up for a free account at [Formspree](https://formspree.io/) or [EmailJS](https://www.emailjs.com/).
- Follow the simple setup in `src/components/Contact.tsx`.

---

## 🎨 Design Highlights
- **Color Palette:** Dark navy/charcoal background (`#080c16`), Electric Blue (`#38bdf8`), Violet (`#a855f7`).
- **Typography:** Inter for clean readability and JetBrains Mono for code elements.
- **Accessibility:** Reduced-motion media query support (`prefers-reduced-motion`), high contrast ratios, touch targets $\ge 44\text{px}$, responsive across mobile, tablet, and desktop monitors.
- **Integrity & Authenticity:** No fabricated percentages, no fake work experience, no broken 404 external links.
