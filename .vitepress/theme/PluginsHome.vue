<script setup lang="ts">
import { ref } from 'vue';

const plugins = [
  {
    name: '@nstudio/ncharts',
    title: 'nCharts',
    description: 'Beautiful, high-performance native charts for NativeScript. Line, Bar, Pie, Scatter, Candlestick, Radar and more.',
    icon: '📊',
    gradient: 'from-blue-500 to-cyan-500',
    href: '/ncharts/',
    featured: true,
    stats: {
      chartTypes: '9+',
      performance: '60fps',
      platforms: 'iOS & Android',
    },
  },
  {
    name: '@nstudio/nativescript-loading-indicator',
    title: 'Loading Indicator',
    description: 'Native loading indicators with customizable appearance for iOS and Android.',
    icon: '⏳',
    gradient: 'from-emerald-500 to-teal-500',
    href: '/plugins/loading-indicator',
    featured: false,
  },
  {
    name: '@nstudio/nativescript-camera-plus',
    title: 'Camera Plus',
    description: 'Advanced camera with flash, focus, video recording, and gallery access.',
    icon: '📷',
    gradient: 'from-purple-500 to-pink-500',
    href: '/plugins/camera-plus',
    featured: false,
  },
  {
    name: '@nstudio/nativescript-checkbox',
    title: 'Checkbox',
    description: 'Native checkbox and radio button components with full customization.',
    icon: '☑️',
    gradient: 'from-orange-500 to-amber-500',
    href: '/plugins/checkbox',
    featured: false,
  },
  {
    name: '@nstudio/nativescript-fancyalert',
    title: 'Fancy Alert',
    description: 'Beautiful, customizable alert dialogs with animations and custom buttons.',
    icon: '🎨',
    gradient: 'from-indigo-500 to-violet-500',
    href: '/plugins/fancyalert',
    featured: false,
  },
  {
    name: '@nstudio/nativescript-barcodescanner',
    title: 'Barcode Scanner',
    description: 'Scan QR codes, barcodes, and more with native performance.',
    icon: '📱',
    gradient: 'from-slate-500 to-zinc-600',
    href: '/plugins/barcodescanner',
    featured: false,
  },
  {
    name: '@nstudio/nativescript-carousel',
    title: 'Carousel',
    description: 'Smooth, customizable carousel with page indicators and auto-paging.',
    icon: '🎠',
    gradient: 'from-cyan-500 to-blue-500',
    href: '/plugins/carousel',
    featured: false,
  },
  {
    name: '@nstudio/nativescript-cardview',
    title: 'CardView',
    description: 'Material Design CardView component with elevation and radius.',
    icon: '🃏',
    gradient: 'from-amber-500 to-yellow-500',
    href: '/plugins/cardview',
    featured: false,
  },
  {
    name: '@nstudio/nativescript-blur',
    title: 'Blur',
    description: 'Apply blur effects to any view for iOS and Android.',
    icon: '🌫️',
    gradient: 'from-sky-500 to-indigo-500',
    href: '/plugins/blur',
    featured: false,
  },
  {
    name: '@nstudio/nativescript-exoplayer',
    title: 'ExoPlayer',
    description: 'Video player using ExoPlayer on Android and AVPlayer on iOS.',
    icon: '🎬',
    gradient: 'from-red-500 to-rose-500',
    href: '/plugins/exoplayer',
    featured: false,
  },
  {
    name: '@nstudio/nativescript-filterable-listpicker',
    title: 'Filterable Listpicker',
    description: 'Modal listpicker with search filtering and autocomplete support.',
    icon: '🔍',
    gradient: 'from-violet-500 to-purple-500',
    href: '/plugins/filterable-listpicker',
    featured: false,
  },
  {
    name: '@nstudio/nativescript-input-mask',
    title: 'Input Mask',
    description: 'Format user input for phone numbers, credit cards, and more.',
    icon: '🎭',
    gradient: 'from-teal-500 to-emerald-500',
    href: '/plugins/input-mask',
    featured: false,
  },
  {
    name: '@nstudio/nativescript-appcues',
    title: 'Appcues',
    description: 'Integrate Appcues in-app experiences and user onboarding.',
    icon: '🚀',
    gradient: 'from-fuchsia-500 to-pink-500',
    href: '/plugins/appcues',
    featured: false,
  },
  {
    name: '@nstudio/nativescript-aptabase',
    title: 'Aptabase',
    description: 'Privacy-first, open source analytics for mobile apps.',
    icon: '📈',
    gradient: 'from-lime-500 to-green-500',
    href: '/plugins/aptabase',
    featured: false,
  },
  {
    name: '@nstudio/nativescript-auth0',
    title: 'Auth0',
    description: 'Auth0 authentication integration for NativeScript apps.',
    icon: '🔐',
    gradient: 'from-orange-600 to-red-500',
    href: '/plugins/auth0',
    featured: false,
  },
  {
    name: '@nstudio/nativescript-dynatrace',
    title: 'Dynatrace',
    description: 'Application performance monitoring with Dynatrace OneAgent.',
    icon: '📡',
    gradient: 'from-green-500 to-teal-500',
    href: '/plugins/dynatrace',
    featured: false,
  },
  {
    name: '@nstudio/nativescript-freshchat',
    title: 'Freshchat',
    description: 'In-app messaging and customer support with Freshchat SDK.',
    icon: '💬',
    gradient: 'from-blue-600 to-cyan-500',
    href: '/plugins/freshchat',
    featured: false,
  },
  {
    name: '@nstudio/nativescript-intercom',
    title: 'Intercom',
    description: 'Customer messaging platform integration with Intercom SDK.',
    icon: '📞',
    gradient: 'from-blue-500 to-indigo-500',
    href: '/plugins/intercom',
    featured: false,
  },
  {
    name: '@nstudio/nativescript-onfido',
    title: 'Onfido',
    description: 'Identity verification and document scanning with Onfido SDK.',
    icon: '🪪',
    gradient: 'from-cyan-600 to-blue-600',
    href: '/plugins/onfido',
    featured: false,
  },
  {
    name: '@nstudio/nativescript-persona',
    title: 'Persona',
    description: 'Identity verification and KYC flows with Persona SDK.',
    icon: '👤',
    gradient: 'from-indigo-600 to-purple-600',
    href: '/plugins/persona',
    featured: false,
  },
  {
    name: '@nstudio/nativescript-plaid',
    title: 'Plaid',
    description: 'Bank account linking with Plaid Link for financial apps.',
    icon: '🏦',
    gradient: 'from-slate-600 to-slate-800',
    href: '/plugins/plaid',
    featured: false,
  },
  {
    name: '@nstudio/nativescript-tracking-transparency',
    title: 'Tracking Transparency',
    description: 'iOS App Tracking Transparency API for iOS 14+.',
    icon: '🕵️',
    gradient: 'from-gray-500 to-slate-600',
    href: '/plugins/tracking-transparency',
    featured: false,
  },
  {
    name: '@nstudio/nativescript-walletconnect',
    title: 'WalletConnect',
    description: 'Connect to crypto wallets with WalletConnect protocol.',
    icon: '💳',
    gradient: 'from-blue-700 to-indigo-600',
    href: '/plugins/walletconnect',
    featured: false,
  },
];

const featuredPlugin = plugins.find(p => p.featured);
const otherPlugins = plugins.filter(p => !p.featured);
</script>

<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <section class="relative overflow-hidden bg-gradient-to-br from-nstudio-navy via-slate-900 to-slate-800 px-6 py-20 md:py-32">
      <!-- Background decorations -->
      <div class="absolute inset-0 opacity-30">
        <div class="absolute -left-40 -top-40 h-80 w-80 rounded-full bg-nstudio-orange blur-[100px]"></div>
        <div class="absolute -bottom-40 -right-40 h-80 w-80 rounded-full bg-blue-500 blur-[100px]"></div>
      </div>

      <div class="relative mx-auto max-w-7xl">
        <div class="text-center">
          <!-- Logo -->
          <!-- <div class="mb-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-6 py-3 backdrop-blur-sm">
            <span class="text-2xl">⚡</span>
            <span class="font-semibold text-white">NativeScript</span>
          </div> -->

          <!-- <h1 class="text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
            <span class="block bg-gradient-to-r from-nstudio-orange via-orange-400 to-amber-400 bg-clip-text text-transparent leading-[1.2]">
              NativeScript Plugins
            </span>
          </h1> -->

          <p class="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">
            Powerful APIs. Production-ready quality.
            <br class="hidden sm:block" />
            With support for Angular, React, Solid, Svelte, & Vue.
            <br class="hidden sm:block" />
            Built by <a href="https://nativescript.org" class="text-nstudio-orange hover:underline">NativeScript</a> partners.
          </p>

          <div class="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="/ncharts/"
              class="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-nstudio-orange to-orange-500 px-8 py-4 font-semibold text-white shadow-lg shadow-orange-500/30 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-orange-500/40"
            >
              Explore nCharts
              <svg class="h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <a
              href="https://github.com/nstudio/ncharts"
              target="_blank"
              class="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-8 py-4 font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-white/40 hover:bg-white/10"
            >
              <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              View on GitHub
            </a>
          </div>

          <!-- Trust badges -->
          <div class="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-slate-400">
            <div class="flex items-center gap-2">
              <div class="h-2 w-2 animate-pulse rounded-full bg-emerald-500"></div>
              <span>TypeScript First</span>
            </div>
            <div class="flex items-center gap-2">
              <div class="h-2 w-2 animate-pulse rounded-full bg-blue-500"></div>
              <span>iOS & Android</span>
            </div>
            <div class="flex items-center gap-2">
              <div class="h-2 w-2 animate-pulse rounded-full bg-orange-500"></div>
              <span>Native Performance</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Plugin: nCharts -->
    <section v-if="featuredPlugin" class="relative -mt-12 px-6">
      <div class="mx-auto max-w-7xl">
        <div class="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl dark:border-slate-700 dark:bg-slate-800">
          <div class="grid gap-8 p-8 md:grid-cols-2 md:p-12">
            <div class="flex flex-col justify-center space-y-6">
              <div class="inline-flex w-fit items-center gap-2 rounded-full bg-gradient-to-r from-blue-500/10 to-cyan-500/10 px-4 py-2">
                <span class="text-2xl">{{ featuredPlugin.icon }}</span>
                <span class="font-medium text-blue-600 dark:text-blue-400">Featured Plugin</span>
              </div>

              <h2 class="text-3xl font-bold text-slate-900 dark:text-white md:text-4xl">
                {{ featuredPlugin.title }}
              </h2>

              <p class="text-lg text-slate-600 dark:text-slate-300">
                {{ featuredPlugin.description }}
              </p>

              <div class="flex flex-wrap gap-4">
                <div v-for="(value, key) in featuredPlugin.stats" :key="key" class="rounded-xl bg-slate-100 px-4 py-2 dark:bg-slate-700">
                  <div class="text-lg font-bold text-slate-900 dark:text-white">{{ value }}</div>
                  <div class="text-xs text-slate-500 dark:text-slate-400 capitalize">{{ key }}</div>
                </div>
              </div>

              <a
                :href="featuredPlugin.href"
                class="group inline-flex w-fit items-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 px-6 py-3 font-semibold text-white shadow-lg shadow-blue-500/30 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
              >
                Learn More
                <svg class="h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>

            <!-- Chart Preview -->
            <div class="relative">
              <div class="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/5 via-transparent to-cyan-500/5"></div>
              <div class="relative overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-8 dark:border-slate-600 dark:from-slate-700 dark:to-slate-800">
                <svg class="h-64 w-full" viewBox="0 0 400 200">
                  <defs>
                    <linearGradient id="homeLineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stop-color="#3b82f6" />
                      <stop offset="50%" stop-color="#06b6d4" />
                      <stop offset="100%" stop-color="#10b981" />
                    </linearGradient>
                    <linearGradient id="homeAreaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stop-color="#3b82f6" stop-opacity="0.3" />
                      <stop offset="100%" stop-color="#3b82f6" stop-opacity="0.05" />
                    </linearGradient>
                  </defs>
                  
                  <!-- Grid lines -->
                  <line x1="0" y1="50" x2="400" y2="50" stroke="#e2e8f0" stroke-width="1" />
                  <line x1="0" y1="100" x2="400" y2="100" stroke="#e2e8f0" stroke-width="1" />
                  <line x1="0" y1="150" x2="400" y2="150" stroke="#e2e8f0" stroke-width="1" />
                  
                  <!-- Area fill -->
                  <path
                    d="M 0 150 Q 50 120, 100 130 T 200 90 T 300 100 T 400 60 L 400 200 L 0 200 Z"
                    fill="url(#homeAreaGradient)"
                  />
                  
                  <!-- Line -->
                  <path
                    d="M 0 150 Q 50 120, 100 130 T 200 90 T 300 100 T 400 60"
                    stroke="url(#homeLineGradient)"
                    stroke-width="3"
                    fill="none"
                    stroke-linecap="round"
                  />
                  
                  <!-- Data points -->
                  <circle cx="100" cy="130" r="5" fill="#3b82f6" />
                  <circle cx="200" cy="90" r="5" fill="#06b6d4" />
                  <circle cx="300" cy="100" r="5" fill="#10b981" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Other Plugins -->
    <section class="px-6 py-20 md:py-32">
      <div class="mx-auto max-w-7xl">
        <div class="mb-12 text-center">
          <h2 class="text-3xl font-bold text-slate-900 dark:text-white md:text-4xl">
            More Plugins
          </h2>
          <p class="mt-4 text-lg text-slate-600 dark:text-slate-300">
            Explore our collection of high-quality NativeScript plugins
          </p>
        </div>

        <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <a
            v-for="plugin in otherPlugins"
            :key="plugin.name"
            :href="plugin.href"
            class="plugin-card group rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-800"
          >
            <div :class="`inline-flex rounded-xl bg-gradient-to-br ${plugin.gradient} p-3 text-2xl text-white`">
              {{ plugin.icon }}
            </div>
            
            <h3 class="mt-4 text-xl font-bold text-slate-900 dark:text-white">
              {{ plugin.title }}
            </h3>
            
            <p class="mt-2 text-slate-600 dark:text-slate-300">
              {{ plugin.description }}
            </p>
            
            <div class="mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600 dark:text-blue-400">
              Learn more
              <svg class="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </a>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="bg-gradient-to-br from-nstudio-navy to-slate-900 px-6 py-20 md:py-32">
      <div class="mx-auto max-w-4xl text-center">
        <h2 class="text-3xl font-bold text-white md:text-4xl">
          Need a Custom Plugin?
        </h2>
        <p class="mt-4 text-lg text-slate-300">
          Our team has deep expertise across a wide variety of languages and platforms.
          <br class="hidden sm:block" />
          We can build custom plugins tailored to your specific needs.
        </p>
        <div class="mt-8 flex flex-wrap justify-center gap-4">
          <!-- <a
            href="https://nstudio.io/#services"
            class="inline-flex items-center gap-2 rounded-xl bg-nstudio-orange px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
          >
            Contact Us
          </a> -->
          <a
            href="https://nstudio.io"
            class="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-8 py-4 font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-white/40 hover:bg-white/10"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="border-t border-slate-200 bg-white px-6 py-12 dark:border-slate-700 dark:bg-slate-900">
      <div class="mx-auto max-w-7xl">
        <div class="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div class="flex items-center gap-3">
            <img class="rounded-full w-[30px] h-[30px]" src="/logo.svg" alt="">
            <span class="font-semibold text-slate-900 dark:text-white">nStudio Plugins</span>
          </div>
          <!-- <p class="text-sm text-slate-500 dark:text-slate-400">
            Released under the MIT License.
          </p> -->
          <div class="flex gap-4">
            <a href="https://github.com/nstudio" class="text-slate-500 transition-colors hover:text-slate-900 dark:hover:text-white">
              <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a href="https://nstudio.io" class="text-slate-500 transition-colors hover:text-slate-900 dark:hover:text-white">
              <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>
