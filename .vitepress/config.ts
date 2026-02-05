import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'en-US',
  title: 'Plugins',
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
    ['meta', { property: 'og:title', content: 'NativeScript Plugins' }],
    ['meta', { property: 'og:description', content: 'NativeScript plugins from nStudio. Native performance, beautiful APIs, and production-grade tested.' }],
    ['meta', { property: 'og:image', content: 'https://plugins.nstudio.io/nstudio-plugins-meta.png' }],
    ['meta', { property: 'og:image:width', content: '1200' }],
    ['meta', { property: 'og:image:height', content: '630' }],
    ['meta', { property: 'og:url', content: 'https://plugins.nstudio.io' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:title', content: 'NativeScript Plugins' }],
    ['meta', { name: 'twitter:description', content: 'NativeScript plugins from nStudio. Native performance, beautiful APIs, and production-grade tested.' }],
    ['meta', { name: 'twitter:image', content: 'https://plugins.nstudio.io/nstudio-plugins-meta.png' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    ['link', { href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap', rel: 'stylesheet' }],
  ],

  themeConfig: {
    logo: '/logo.svg',
    
    nav: [
      { text: 'Plugins', link: '/' },
      { text: 'nCharts', link: '/ncharts/' },
      { text: 'All Plugins', link: '/plugins/' },
      { text: 'nStudio', link: 'https://nstudio.io' },
    ],

    sidebar: {
      '/plugins/': [
        {
          text: 'Overview',
          items: [
            { text: 'All Plugins', link: '/plugins/' },
          ],
        },
        {
          text: 'UI Components',
          items: [
            { text: 'Camera Plus', link: '/plugins/camera-plus' },
            { text: 'Checkbox', link: '/plugins/checkbox' },
            { text: 'CardView', link: '/plugins/cardview' },
            { text: 'Carousel', link: '/plugins/carousel' },
            { text: 'Blur', link: '/plugins/blur' },
            { text: 'Variable Blur View', link: '/plugins/variable-blur-view' },
            { text: 'Loading Indicator', link: '/plugins/loading-indicator' },
            { text: 'Shimmer', link: '/plugins/shimmer' },
            { text: 'Fancy Alert', link: '/plugins/fancyalert' },
            { text: 'Filterable Listpicker', link: '/plugins/filterable-listpicker' },
            { text: 'Input Mask', link: '/plugins/input-mask' },
            { text: 'ExoPlayer', link: '/plugins/exoplayer' },
            { text: 'Fluid Segmented Bar', link: '/plugins/fluid-segmented-bar' },
            { text: 'Label Marquee', link: '/plugins/label-marquee' },
            { text: 'Markdown View', link: '/plugins/markdown-view' },
          ],
        },
        {
          text: 'Barcode & Scanning',
          items: [
            { text: 'Barcode Scanner', link: '/plugins/barcodescanner' },
          ],
        },
        {
          text: 'Authentication & Identity',
          items: [
            { text: 'Auth0', link: '/plugins/auth0' },
            { text: 'Onfido', link: '/plugins/onfido' },
            { text: 'Persona', link: '/plugins/persona' },
          ],
        },
        {
          text: 'Analytics & Monitoring',
          items: [
            { text: 'Aptabase', link: '/plugins/aptabase' },
            { text: 'Dynatrace', link: '/plugins/dynatrace' },
            { text: 'Appcues', link: '/plugins/appcues' },
            { text: 'Smartlook', link: '/plugins/smartlook' },
          ],
        },
        {
          text: 'Deep Linking & Attribution',
          items: [
            { text: 'Branch.io', link: '/plugins/branch' },
          ],
        },
        {
          text: 'Customer Support',
          items: [
            { text: 'Freshchat', link: '/plugins/freshchat' },
            { text: 'Intercom', link: '/plugins/intercom' },
          ],
        },
        {
          text: 'Financial Services',
          items: [
            { text: 'Plaid', link: '/plugins/plaid' },
          ],
        },
        {
          text: 'Web3 & Blockchain',
          items: [
            { text: 'WalletConnect', link: '/plugins/walletconnect' },
          ],
        },
        {
          text: 'Privacy & Tracking',
          items: [
            { text: 'Tracking Transparency', link: '/plugins/tracking-transparency' },
          ],
        },
        {
          text: 'Utilities',
          items: [
            { text: 'Font Icon', link: '/plugins/fonticon' },
          ],
        },
      ],
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

    // footer: {
    // //   message: 'Released under the Apache-2.0 License.',
    //   copyright: `Copyright © ${new Date().getFullYear()} nStudio`,
    // },

    search: {
      provider: 'local',
    },
  },
});
