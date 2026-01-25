import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'en-US',
  title: 'nStudio Plugins',
  description: 'NativeScript plugins from nStudio. Native performance, beautiful APIs, and production-grade tested.',
  
  srcDir: './content',
  cleanUrls: true,
  appearance: true,
  
  markdown: {
    theme: {
      light: 'github-light',
      dark: 'github-dark',
    },
    lineNumbers: false,
  },
  
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }],
    ['meta', { name: 'theme-color', content: '#F75930' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:site_name', content: 'nStudio Plugins' }],
    ['meta', { property: 'og:image', content: 'https://plugins.nstudio.io/og-image.png' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    ['link', { href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap', rel: 'stylesheet' }],
  ],

  themeConfig: {
    logo: '/logo.svg',
    
    nav: [
      { text: 'Plugins', link: '/' },
      { text: 'nCharts', link: '/ncharts/' },
      { text: 'nStudio', link: 'https://nstudio.io' },
    ],

    sidebar: {
      '/ncharts/': [
        {
          text: 'Getting Started',
          items: [
            { text: 'Introduction', link: '/ncharts/' },
            { text: 'Installation', link: '/ncharts/installation' },
            { text: 'Quick Start', link: '/ncharts/quick-start' },
          ],
        },
        {
          text: 'Chart Types',
          items: [
            { text: 'Line Chart', link: '/ncharts/charts/line-chart' },
            { text: 'Bar Chart', link: '/ncharts/charts/bar-chart' },
            { text: 'Horizontal Bar', link: '/ncharts/charts/horizontal-bar-chart' },
            { text: 'Pie Chart', link: '/ncharts/charts/pie-chart' },
            { text: 'Scatter Chart', link: '/ncharts/charts/scatter-chart' },
            { text: 'Bubble Chart', link: '/ncharts/charts/bubble-chart' },
            { text: 'Candlestick Chart', link: '/ncharts/charts/candlestick-chart' },
            { text: 'Radar Chart', link: '/ncharts/charts/radar-chart' },
            { text: 'Combined Chart', link: '/ncharts/charts/combined-chart' },
          ],
        },
        {
          text: 'Configuration',
          items: [
            { text: 'Animation', link: '/ncharts/config/animation' },
            { text: 'Legend', link: '/ncharts/config/legend' },
            { text: 'Axes', link: '/ncharts/config/axes' },
            { text: 'Markers', link: '/ncharts/config/markers' },
            { text: 'Styling', link: '/ncharts/config/styling' },
          ],
        },
        {
          text: 'API Reference',
          items: [
            { text: 'Types', link: '/ncharts/api/types' },
            { text: 'Methods', link: '/ncharts/api/methods' },
            { text: 'Events', link: '/ncharts/api/events' },
          ],
        },
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/nstudio' },
      { icon: 'twitter', link: 'https://twitter.com/teamnstudio' },
    ],

    footer: {
    //   message: 'Released under the Apache-2.0 License.',
      copyright: `Copyright © ${new Date().getFullYear()} nStudio`,
    },

    search: {
      provider: 'local',
    },
  },
});
