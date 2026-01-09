# Portfolio Valentin - Fullstack TypeScript Developer

Modern and responsive portfolio built with Astro, showcasing your skills, experiences, and projects.

## ✨ Features

- 🎨 **Light/Dark Theme** - Toggle between modes with persistence
- 📱 **Responsive** - Adaptive design for all screen sizes
- 🚀 **Performance** - Optimized with Astro for ultra-fast loading
- 📝 **Content Collections** - Easy content management via Markdown/JSON files
- 🎭 **Animations** - Smooth and interactive animations
- 🌐 **SEO Optimized** - Metadata and structure for great search ranking

## 🎯 Sections

1. **Hero** - Introduction with photo, bio, and social links
2. **Experiences** - Timeline of your professional journey
3. **Skills** - Technology grid with animated icons
4. **Projects** - Showcase of your work
5. **Contact** - Links and email to get in touch

## 🚀 Getting Started

```bash
# Install dependencies
pnpm install

# Start the development server
pnpm dev

# Build for production
pnpm build

# Preview the build
pnpm preview
```

## ⚙️ Configuration

### Personal Information

Edit the information in `src/pages/index.astro`:

```typescript
const profile = {
  name: "Your Name",
  title: "Your Title",
  subtitle: "X years of experience",
  bio: "Your description...",
  email: "your@email.com",
  location: "Your City, Country",
  github: "https://github.com/username",
  linkedin: "https://linkedin.com/in/username",
  cvUrl: "/cv.pdf",
};
```

### Experiences

Add/edit your experiences in `src/content/experiences/`:

```markdown
---
company: "Company Name"
position: "Your Position"
period: "2023 - Present"
order: 1
technologies: ["Tech1", "Tech2", "Tech3"]
---

Description of your missions and achievements...
```

### Projects

Add/edit your projects in `src/content/projects/`:

```markdown
---
title: "Project Name"
image: "/projects/image.png"
technologies: ["Tech1", "Tech2"]
liveUrl: "https://demo.com"
githubUrl: "https://github.com/user/repo"
order: 1
---

Project description...
```

### Skills

Edit your skills in `src/content/skills/`:

```json
{
  "category": "Frontend",
  "order": 1,
  "items": [
    { "name": "TypeScript", "level": 95 },
    { "name": "React", "level": 90 }
  ]
}
```

**Note**: The `level` field is not visually displayed but can be used to sort your skills.

### Resume

Replace the file `public/cv.pdf` with your resume in PDF format.

### Project Images

Add your project images in the `public/projects/` folder.

## 🎨 Theme Customization

Colors are defined in `src/layouts/Layout.astro`:

```css
:root {
  /* Dark theme */
  --color-bg: #0f0f1a;
  --color-primary: #6366f1;
  /* ... */
}

[data-theme="light"] {
  /* Light theme */
  --color-bg: #ffffff;
  --color-primary: #4f46e5;
  /* ... */
}
```

## 📦 Project Structure

```
portfolio-valentin/
├── public/
│   ├── cv.pdf              # Your resume
│   └── projects/           # Project images
├── src/
│   ├── components/         # Astro components
│   │   ├── Contact.astro
│   │   ├── Experiences.astro
│   │   ├── Hero.astro
│   │   ├── Navbar.astro
│   │   ├── Projects.astro
│   │   └── Skills.astro
│   ├── content/           # Content Collections
│   │   ├── config.ts
│   │   ├── experiences/   # Your experiences (.md)
│   │   ├── projects/      # Your projects (.md)
│   │   └── skills/        # Your skills (.json)
│   ├── layouts/
│   │   └── Layout.astro   # Main layout
│   └── pages/
│       └── index.astro    # Home page
└── package.json
```

## 🚢 Deployment

This site can be deployed on:

- **Vercel**: `vercel deploy`
- **Netlify**: Connect your GitHub repo
- **GitHub Pages**: Configure with GitHub Actions
- **Cloudflare Pages**: Deploy via the dashboard

Build command: `pnpm build`  
Output folder: `dist/`

## 📝 License

This project is free to use for your personal portfolio.

## 🤝 Support

For any questions or issues, feel free to open an issue on GitHub.
