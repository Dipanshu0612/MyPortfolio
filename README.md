# Dipanshu Mishra - Portfolio Website

A modern, high-performance portfolio website built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- ⚡ **Next.js 15** with App Router
- 🎨 **Modern UI** with Tailwind CSS and shadcn/ui components
- ✨ **Smooth Animations** powered by Framer Motion
- 🌓 **Dark/Light Mode** with theme persistence
- 📱 **Fully Responsive** design
- ⌨️ **Command Palette** (Cmd/Ctrl + K) for quick navigation
- 🎯 **SEO Optimized** with meta tags and Open Graph
- ♿ **Accessible** with ARIA labels and keyboard navigation
- 🚀 **Performance Optimized** with Next.js Image and Font optimization

## Sections

1. **Hero** - Eye-catching introduction with animated background
2. **About** - Personal information with stats cards
3. **Skills** - Interactive skill categories with progress bars
4. **Projects** - Showcase of featured projects with hover effects
5. **Education Timeline** - Center-line timeline with alternating cards
6. **Experience Timeline** - Professional experience with animated reveals
7. **Contact** - Contact form and social links
8. **Command Palette** - Quick navigation with keyboard shortcuts

## Tech Stack

- **Framework:** Next.js 15
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **UI Components:** Radix UI primitives
- **Icons:** Lucide React
- **Fonts:** Inter (Google Fonts)

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main page component
│   └── globals.css         # Global styles
├── components/
│   ├── ui/                 # Reusable UI components
│   ├── sections/           # Page sections
│   ├── header.tsx          # Navigation header
│   ├── footer.tsx          # Footer component
│   ├── theme-provider.tsx  # Theme context
│   └── command-palette.tsx # Command palette
├── lib/
│   ├── utils.ts            # Utility functions
│   └── data.ts             # Portfolio data
└── public/
    ├── project-images/     # Project screenshots
    └── assests/            # Resume and other assets
```

## Customization

### Update Personal Information

Edit `lib/data.ts` to update:

- Personal info (name, email, location)
- Social media links
- Skills and technologies
- Projects
- Education
- Experience

### Modify Theme Colors

Edit `tailwind.config.ts` and `app/globals.css` to customize:

- Color palette
- Typography
- Spacing
- Animations

### Add New Sections

1. Create a new component in `components/sections/`
2. Import and add it to `app/page.tsx`
3. Update navigation in `components/header.tsx`

## Performance

- Lighthouse Score: 90+
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3.5s
- Optimized images with Next.js Image
- Font optimization with next/font

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Deploy with zero configuration

### Other Platforms

The project can be deployed to any platform that supports Next.js:

- Netlify
- AWS Amplify
- Cloudflare Pages
- Self-hosted with Docker

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License - feel free to use this template for your own portfolio!

## Contact

Dipanshu Mishra

- GitHub: [@Dipanshu0612](https://github.com/Dipanshu0612)
- LinkedIn: [dipanshu-mishra](https://www.linkedin.com/in/dipanshu-mishra-696a0622a)

---

Made with ❤️ using Next.js and TypeScript
