# Professional Portfolio Website

A premium, luxury portfolio website showcasing professional skills and experience with advanced GSAP animations and fully responsive design.

## Features

- 🎨 **Premium Design** - Clean, professional, and luxury aesthetic
- ⚡ **Fast Performance** - Built with Next.js 14 for optimal speed
- 📱 **Fully Responsive** - Perfect on all devices (mobile, tablet, desktop)
- 🎭 **Advanced Animations** - GSAP-powered smooth animations and transitions
- 🎯 **Professional Sections** - Hero, About, Skills, Experience, Projects, Contact
- 🌙 **Dark Theme** - Modern dark color scheme with accent colors
- ✨ **Smooth Scrolling** - Seamless navigation experience

## Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **GSAP** - Advanced animation library
- **Lucide React** - Beautiful icon library

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
# or
yarn install
```

2. Run the development server:
```bash
npm run dev
# or
yarn dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Customization

### Update Personal Information

1. **Hero Section** (`components/Hero.tsx`): Update title and subtitle
2. **About Section** (`components/About.tsx`): Modify your bio and stats
3. **Skills Section** (`components/Skills.tsx`): Update skill categories and technologies
4. **Experience Section** (`components/Experience.tsx`): Add your work experience
5. **Projects Section** (`components/Projects.tsx`): Add your portfolio projects
6. **Contact Section** (`components/Contact.tsx`): Update contact information and social links

### Color Scheme

Edit `tailwind.config.ts` to customize colors:
- `primary` - Main brand color
- `dark` - Dark theme colors
- `accent` - Accent colors (gold, platinum)

### Fonts

The project uses:
- **Inter** - Sans-serif for body text
- **Playfair Display** - Serif for headings

Fonts are loaded from Google Fonts in `app/globals.css`.

## Project Structure

```
├── app/
│   ├── globals.css      # Global styles
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Home page
├── components/
│   ├── Navigation.tsx   # Navigation bar
│   ├── Hero.tsx         # Hero section
│   ├── About.tsx        # About section
│   ├── Skills.tsx       # Skills section
│   ├── Experience.tsx   # Experience section
│   ├── Projects.tsx     # Projects section
│   └── Contact.tsx      # Contact section
├── public/              # Static assets
└── package.json         # Dependencies
```

## Performance Optimization

- Next.js automatic code splitting
- Image optimization ready
- CSS optimization with Tailwind
- GSAP animations optimized for performance

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available for personal use.

## Support

For issues or questions, please open an issue on the repository.

