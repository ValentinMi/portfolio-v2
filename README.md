# Portfolio Valentin - Développeur TypeScript Fullstack

Portfolio moderne et responsive créé avec Astro, présentant vos compétences, expériences et projets.

## ✨ Fonctionnalités

- 🎨 **Thème Clair/Sombre** - Toggle pour basculer entre les modes avec persistance
- 📱 **Responsive** - Design adaptatif pour tous les écrans
- 🚀 **Performance** - Optimisé avec Astro pour un chargement ultra-rapide
- 📝 **Content Collections** - Gestion facile du contenu via fichiers Markdown/JSON
- 🎭 **Animations** - Animations fluides et interactives
- 🌐 **SEO Optimisé** - Métadonnées et structure pour un bon référencement

## 🎯 Sections

1. **Hero** - Introduction avec photo, bio et liens sociaux
2. **Expériences** - Timeline de votre parcours professionnel
3. **Compétences** - Grille de technologies avec icônes animées
4. **Projets** - Showcase de vos réalisations
5. **Contact** - Liens et email pour vous contacter

## 🚀 Démarrage

```bash
# Installation des dépendances
pnpm install

# Lancement du serveur de développement
pnpm dev

# Build pour la production
pnpm build

# Preview du build
pnpm preview
```

## ⚙️ Configuration

### Informations personnelles

Modifiez les informations dans `src/pages/index.astro` :

```typescript
const profile = {
  name: "Votre Nom",
  title: "Votre Titre",
  subtitle: "X ans d'expérience",
  bio: "Votre description...",
  email: "votre@email.com",
  location: "Votre Ville, Pays",
  github: "https://github.com/username",
  linkedin: "https://linkedin.com/in/username",
  cvUrl: "/cv.pdf",
};
```

### Expériences

Ajoutez/modifiez vos expériences dans `src/content/experiences/` :

```markdown
---
company: "Nom de l'entreprise"
position: "Votre poste"
period: "2023 - Présent"
order: 1
technologies: ["Tech1", "Tech2", "Tech3"]
---

Description de vos missions et réalisations...
```

### Projets

Ajoutez/modifiez vos projets dans `src/content/projects/` :

```markdown
---
title: "Nom du Projet"
image: "/projects/image.png"
technologies: ["Tech1", "Tech2"]
liveUrl: "https://demo.com"
githubUrl: "https://github.com/user/repo"
order: 1
---

Description du projet...
```

### Compétences

Modifiez vos compétences dans `src/content/skills/` :

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

**Note**: Le champ `level` n'est pas affiché visuellement mais peut être utilisé pour trier vos compétences.

### CV

Remplacez le fichier `public/cv.pdf` par votre CV au format PDF.

### Images de projets

Ajoutez vos images de projets dans le dossier `public/projects/`.

## 🎨 Personnalisation du thème

Les couleurs sont définies dans `src/layouts/Layout.astro` :

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

## 📦 Structure du projet

```
portfolio-valentin/
├── public/
│   ├── cv.pdf              # Votre CV
│   └── projects/           # Images des projets
├── src/
│   ├── components/         # Composants Astro
│   │   ├── Contact.astro
│   │   ├── Experiences.astro
│   │   ├── Hero.astro
│   │   ├── Navbar.astro
│   │   ├── Projects.astro
│   │   └── Skills.astro
│   ├── content/           # Content Collections
│   │   ├── config.ts
│   │   ├── experiences/   # Vos expériences (.md)
│   │   ├── projects/      # Vos projets (.md)
│   │   └── skills/        # Vos compétences (.json)
│   ├── layouts/
│   │   └── Layout.astro   # Layout principal
│   └── pages/
│       └── index.astro    # Page d'accueil
└── package.json
```

## 🚢 Déploiement

Ce site peut être déployé sur :

- **Vercel** : `vercel deploy`
- **Netlify** : Connectez votre repo GitHub
- **GitHub Pages** : Configurez avec GitHub Actions
- **Cloudflare Pages** : Déployez via le dashboard

Commande de build : `pnpm build`  
Dossier de sortie : `dist/`

## 📝 Licence

Ce projet est libre d'utilisation pour votre portfolio personnel.

## 🤝 Support

Pour toute question ou problème, n'hésitez pas à ouvrir une issue sur GitHub.

