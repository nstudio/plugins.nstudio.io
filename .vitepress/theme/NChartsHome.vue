<script setup lang="ts">
import { ref } from 'vue';
import ChartShowcase from './components/ChartShowcase.vue';
import CodeBlock from './components/CodeBlock.vue';

const chartSnippets = [
  {
    title: 'Line Chart',
    icon: '📈',
    link: '/ncharts/charts/line-chart',
    code: `const data: LineChartData = {
  dataSets: [{
    values: [{ y: 45 }, { y: 52 }, { y: 68 }, { y: 73 }],
    config: {
      colors: ['#3B82F6'],
      mode: 'CUBIC_BEZIER',
      drawFilled: true,
    },
  }],
};`,
  },
  {
    title: 'Bar Chart',
    icon: '📊',
    link: '/ncharts/charts/bar-chart',
    code: `const data: BarChartData = {
  dataSets: [{
    values: [{ y: 25 }, { y: 32 }, { y: 28 }, { y: 41 }],
    config: {
      colors: ['#10B981', '#14B8A6', '#06B6D4', '#3B82F6'],
      drawValues: true,
    },
  }],
};`,
  },
  {
    title: 'Pie Chart',
    icon: '🥧',
    link: '/ncharts/charts/pie-chart',
    code: `const data: PieChartData = {
  dataSets: [{
    values: [
      { value: 35, label: 'iOS' },
      { value: 45, label: 'Android' },
      { value: 20, label: 'Other' },
    ],
    config: { sliceSpace: 3 },
  }],
};`,
  },
  {
    title: 'Scatter Chart',
    icon: '🔵',
    link: '/ncharts/charts/scatter-chart',
    code: `const data: ScatterChartData = {
  dataSets: [{
    values: [
      { x: 1, y: 5 }, { x: 2, y: 8 },
      { x: 3, y: 4 }, { x: 4, y: 9 },
    ],
    config: { scatterShape: 'CIRCLE' },
  }],
};`,
  },
  {
    title: 'Bubble Chart',
    icon: '🫧',
    link: '/ncharts/charts/bubble-chart',
    code: `const data: BubbleChartData = {
  dataSets: [{
    values: [
      { x: 1, y: 5, size: 20 },
      { x: 3, y: 8, size: 35 },
      { x: 5, y: 3, size: 15 },
    ],
    config: { colors: ['#8B5CF6'] },
  }],
};`,
  },
  {
    title: 'Candlestick',
    icon: '🕯️',
    link: '/ncharts/charts/candlestick-chart',
    code: `const data: CandleChartData = {
  dataSets: [{
    values: [{
      shadowH: 105, shadowL: 95,
      open: 98, close: 102,
    }],
    config: { increasingColor: '#10B981' },
  }],
};`,
  },
  {
    title: 'Radar Chart',
    icon: '🕸️',
    link: '/ncharts/charts/radar-chart',
    code: `const data: RadarChartData = {
  labels: ['Speed', 'Power', 'Defense', 'Range'],
  dataSets: [{
    values: [{ value: 80 }, { value: 65 },
             { value: 90 }, { value: 70 }],
    config: { drawFilled: true },
  }],
};`,
  },
  {
    title: 'Combined Chart',
    icon: '📉',
    link: '/ncharts/charts/combined-chart',
    code: `const data: CombinedChartData = {
  lineData: {
    dataSets: [{ values: [{ y: 30 }, { y: 45 }] }],
  },
  barData: {
    dataSets: [{ values: [{ y: 50 }, { y: 35 }] }],
  },
};`,
  },
  {
    title: 'Horizontal Bar',
    icon: '📏',
    link: '/ncharts/charts/horizontal-bar-chart',
    code: `// Use HorizontalBarChart component
const data: BarChartData = {
  dataSets: [{
    values: [{ y: 42 }, { y: 28 }, { y: 18 }],
    config: {
      colors: ['#F59E0B', '#EF4444', '#8B5CF6'],
    },
  }],
};`,
  },
];
</script>

<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <section class="relative overflow-hidden px-6 pt-10 pb-20 md:pb-32 md:pt-12">
      <div class="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-transparent to-emerald-600/5"></div>
      
      <!-- Background decorations -->
      <div class="absolute -right-40 -top-40 h-80 w-80 rounded-full bg-blue-500/10 blur-[100px]"></div>
      <div class="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-emerald-500/10 blur-[100px]"></div>

      <div class="relative mx-auto max-w-7xl">
        <div class="space-y-8 text-center">
          <!-- Badge -->
          <div class="inline-flex items-center gap-2 rounded-full border border-blue-200/50 bg-white/80 px-4 py-2 shadow-sm backdrop-blur-sm dark:border-blue-800 dark:bg-slate-800/80">
            <!-- <span class="text-lg">✨</span> -->
            <span class="text-sm font-medium text-slate-700 dark:text-slate-200">@nstudio/ncharts</span>
          </div>

          <!-- Headline -->
          <!-- <h1 class="text-5xl font-bold leading-tight text-slate-900 dark:text-white md:text-7xl">
            <span class="block bg-gradient-to-r from-blue-600 via-cyan-600 to-emerald-600 bg-clip-text text-transparent">
              Charts for NativeScript
            </span>
          </h1> -->

          <!-- Subheadline -->
          <p class="mx-auto max-w-3xl text-xl leading-relaxed text-slate-600 dark:text-slate-300 md:text-2xl">
            High-performance, fully customizable chart components. <br class="hidden sm:block" />
            Line, Bar, Pie, Scatter, Candlestick, Radar and more.
          </p>

          <!-- CTA Buttons -->
          <div class="flex flex-col items-center justify-center gap-4 pt-4 sm:flex-row">
            <a
              href="/ncharts/installation"
              class="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 px-8 py-4 font-semibold text-white shadow-lg shadow-blue-600/30 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-blue-600/40"
            >
              Get Started
              <svg class="h-5 w-5 transition-transform group-hover:rotate-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </a>
            <a
              href="/ncharts/quick-start"
              class="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white/80 px-8 py-4 font-semibold text-slate-700 backdrop-blur-sm transition-all duration-300 hover:border-slate-300 hover:bg-white dark:border-slate-700 dark:bg-slate-800/80 dark:text-slate-200 dark:hover:border-slate-600"
            >
              View Documentation
            </a>
          </div>

          <!-- Trust badges -->
          <div class="flex flex-wrap items-center justify-center gap-6 pt-8 text-sm text-slate-600 dark:text-slate-400">
            <div class="flex items-center gap-2">
              <div class="h-2 w-2 animate-pulse rounded-full bg-emerald-500"></div>
              <span>Native Performance</span>
            </div>
            <div class="flex items-center gap-2">
              <div class="h-2 w-2 animate-pulse rounded-full bg-blue-500"></div>
              <span>TypeScript First</span>
            </div>
            <div class="flex items-center gap-2">
              <div class="h-2 w-2 animate-pulse rounded-full bg-cyan-500"></div>
              <span>iOS & Android</span>
            </div>
          </div>
        </div>

        <!-- Hero Chart Preview -->
        <div class="relative mt-20 hidden md:block">
          <div class="absolute inset-0 z-10 bg-gradient-to-t from-slate-50 via-transparent to-transparent dark:from-slate-900"></div>
          <div class="relative overflow-hidden rounded-2xl border border-slate-200/50 bg-white/60 p-8 shadow-2xl backdrop-blur-xl dark:border-slate-700/50 dark:bg-slate-800/60">
            <div class="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl"></div>
            <div class="absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-emerald-500/10 blur-3xl"></div>
            <div class="relative">
              <svg class="h-64 w-full" viewBox="0 0 800 200">
                <defs>
                  <linearGradient id="heroLineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stop-color="#2563eb" stop-opacity="0.8" />
                    <stop offset="50%" stop-color="#06b6d4" stop-opacity="0.8" />
                    <stop offset="100%" stop-color="#10b981" stop-opacity="0.8" />
                  </linearGradient>
                  <linearGradient id="heroAreaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stop-color="#2563eb" stop-opacity="0.3" />
                    <stop offset="100%" stop-color="#2563eb" stop-opacity="0.05" />
                  </linearGradient>
                </defs>

                <!-- Grid lines -->
                <line v-for="i in 4" :key="i" x1="0" :y1="i * 40" x2="800" :y2="i * 40" stroke="#e2e8f0" stroke-width="1" />

                <!-- Area fill -->
                <path
                  d="M 0 150 Q 100 100, 200 120 T 400 80 T 600 100 T 800 60 L 800 200 L 0 200 Z"
                  fill="url(#heroAreaGradient)"
                />

                <!-- Line -->
                <path
                  id="heroChartPath"
                  d="M 0 150 Q 100 100, 200 120 T 400 80 T 600 100 T 800 60"
                  stroke="url(#heroLineGradient)"
                  stroke-width="3"
                  fill="none"
                  stroke-linecap="round"
                />

                <!-- Data points gliding along the curve -->
                <circle r="6" fill="#2563eb" class="hero-dot">
                  <animateMotion
                    dur="3s"
                    repeatCount="indefinite"
                    keyPoints="0.22;0.28;0.22"
                    keyTimes="0;0.5;1"
                    calcMode="spline"
                    keySplines="0.42 0 0.58 1; 0.42 0 0.58 1"
                  >
                    <mpath href="#heroChartPath" />
                  </animateMotion>
                </circle>
                <circle r="6" fill="#06b6d4" class="hero-dot">
                  <animateMotion
                    dur="4s"
                    repeatCount="indefinite"
                    keyPoints="0.48;0.54;0.48"
                    keyTimes="0;0.5;1"
                    calcMode="spline"
                    keySplines="0.42 0 0.58 1; 0.42 0 0.58 1"
                  >
                    <mpath href="#heroChartPath" />
                  </animateMotion>
                </circle>
                <circle r="6" fill="#10b981" class="hero-dot">
                  <animateMotion
                    dur="3.5s"
                    repeatCount="indefinite"
                    keyPoints="0.72;0.78;0.72"
                    keyTimes="0;0.5;1"
                    calcMode="spline"
                    keySplines="0.42 0 0.58 1; 0.42 0 0.58 1"
                  >
                    <mpath href="#heroChartPath" />
                  </animateMotion>
                </circle>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Code Examples Section -->
    <section class="px-6 pt-10 pb-20 md:pb-32 md:pt-12">
      <div class="mx-auto max-w-7xl">
        <div class="mb-16 space-y-4 text-center">
          <h2 class="text-4xl font-bold text-slate-900 dark:text-white md:text-5xl">
            Simple API, Powerful Results
          </h2>
          <p class="mx-auto max-w-2xl text-xl text-slate-600 dark:text-slate-300">
            Get started in minutes
          </p>
        </div>

        <!-- Chart Snippets Grid -->
        <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <a
            v-for="snippet in chartSnippets"
            :key="snippet.title"
            :href="snippet.link"
            class="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl dark:border-slate-700 dark:bg-slate-800/50 dark:hover:border-blue-600"
          >
            <div class="flex items-center justify-between border-b border-slate-100 bg-gradient-to-r from-slate-50 to-slate-100/80 px-4 py-3 dark:border-slate-700 dark:from-slate-800 dark:to-slate-800/80">
              <div class="flex items-center gap-2">
                <span class="text-xl">{{ snippet.icon }}</span>
                <span class="font-semibold text-slate-700 dark:text-slate-200">{{ snippet.title }}</span>
              </div>
              <svg class="h-4 w-4 text-slate-400 transition-transform group-hover:translate-x-1 group-hover:text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </div>
            <div class="code-card-wrapper flex-1">
              <CodeBlock :code="snippet.code" language="typescript" />
            </div>
          </a>
        </div>

        <!-- Stats -->
        <div class="mt-16 grid gap-6 md:grid-cols-3">
          <div class="rounded-2xl border border-slate-200 bg-white/80 p-6 text-center backdrop-blur-sm dark:border-slate-700 dark:bg-slate-800/80">
            <div class="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-3xl font-bold text-transparent">
              9+
            </div>
            <div class="text-slate-600 dark:text-slate-300">Chart Types</div>
          </div>
          <div class="rounded-2xl border border-slate-200 bg-white/80 p-6 text-center backdrop-blur-sm dark:border-slate-700 dark:bg-slate-800/80">
            <div class="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-3xl font-bold text-transparent">
              120fps
            </div>
            <div class="text-slate-600 dark:text-slate-300">Animation Performance</div>
          </div>
          <div class="rounded-2xl border border-slate-200 bg-white/80 p-6 text-center backdrop-blur-sm dark:border-slate-700 dark:bg-slate-800/80">
            <div class="bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-3xl font-bold text-transparent">
              100%
            </div>
            <div class="text-slate-600 dark:text-slate-300">TypeScript Coverage</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Chart Types Showcase -->
    <ChartShowcase />

    <!-- Installation CTA -->
    <section class="bg-gradient-to-br from-slate-900 to-slate-800 px-6 pt-10 pb-20 md:pb-32 md:pt-12">
      <div class="mx-auto max-w-4xl text-center">
        <h2 class="text-3xl font-bold text-white md:text-4xl">
          Ready to Get Started?
        </h2>
        <p class="mt-4 text-lg text-slate-300">
          Install @nstudio/ncharts and start building beautiful charts today
        </p>
        
        <!-- Install command -->
        <div class="mx-auto mt-8 max-w-md">
          <CodeBlock code="npm install @nstudio/ncharts" language="bash" filename="" />
        </div>

        <div class="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="/ncharts/installation"
            class="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
          >
            Installation Guide
          </a>
          <a
            href="/ncharts/quick-start"
            class="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-8 py-4 font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-white/40 hover:bg-white/10"
          >
            Quick Start Tutorial
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* Glow effect for animated chart dots */
.hero-dot {
  filter: drop-shadow(0 0 6px currentColor);
}

/* Code card styling */
.code-card-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 200px;
}

.code-card-wrapper :deep(.code-block) {
  flex: 1;
  display: flex;
  flex-direction: column;
  border: none;
  border-radius: 0;
}

.code-card-wrapper :deep(.code-block > div:last-child) {
  flex: 1;
  display: flex;
  align-items: flex-start;
}

.code-card-wrapper :deep(.code-block > div:last-child > *) {
  width: 100%;
}
</style>
