# nStudio NativeScript Plugins Documentation

Documentation website for nStudio's NativeScript plugins.

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
plugins.nstudio.io/
├── .vitepress/
│   ├── config.ts          # VitePress configuration
│   └── theme/
│       ├── index.ts        # Theme registration
│       ├── style.css       # Custom styles (Tailwind)
│       ├── PluginsHome.vue # Main landing page
│       ├── NChartsHome.vue # nCharts landing page
│       └── components/     # Vue components
├── content/
│   ├── index.md            # Plugins home
│   └── ncharts/
│       ├── index.md        # nCharts intro
│       ├── installation.md
│       ├── quick-start.md
│       ├── charts/         # Chart type docs
│       ├── config/         # Configuration docs
│       └── api/            # API reference
└── package.json
```

## Adding Documentation

1. Create a new `.md` file in the appropriate `content/` subdirectory
2. Add frontmatter for title and description
3. Update `.vitepress/config.ts` sidebar if needed

---

Built with ❤️ by [nStudio](https://nstudio.io)
