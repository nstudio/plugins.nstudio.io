<script setup lang="ts">
import { ref } from 'vue';

interface ChartType {
  id: string;
  name: string;
  icon: string;
  color: string;
  description: string;
}

const chartTypes: ChartType[] = [
  {
    id: 'line',
    name: 'Line Chart',
    icon: '📈',
    color: 'from-blue-500 to-cyan-500',
    description: 'Perfect for time series and trends',
  },
  {
    id: 'bar',
    name: 'Bar Chart',
    icon: '📊',
    color: 'from-emerald-500 to-teal-500',
    description: 'Compare categories with style',
  },
  {
    id: 'pie',
    name: 'Pie Chart',
    icon: '🥧',
    color: 'from-orange-500 to-amber-500',
    description: 'Visualize proportions beautifully',
  },
  {
    id: 'scatter',
    name: 'Scatter Plot',
    icon: '⚬',
    color: 'from-pink-500 to-rose-500',
    description: 'Reveal correlations and patterns',
  },
  {
    id: 'radar',
    name: 'Radar Chart',
    icon: '🎯',
    color: 'from-violet-500 to-purple-500',
    description: 'Multi-dimensional comparisons',
  },
  {
    id: 'candlestick',
    name: 'Candlestick',
    icon: '🕯️',
    color: 'from-slate-600 to-slate-800',
    description: 'Financial data visualization',
  },
];

const activeChart = ref('line');
</script>

<template>
  <section class="px-6 pt-10 pb-20 md:pb-32 md:pt-12">
    <div class="mx-auto max-w-7xl">
      <div class="mb-16 space-y-4 text-center">
        <h2 class="text-4xl font-bold text-slate-900 dark:text-white md:text-5xl">
          Every Chart Type You Need
        </h2>
        <p class="mx-auto max-w-2xl text-xl text-slate-600 dark:text-slate-300">
          From simple lines to complex candlesticks, render stunning charts with ease
        </p>
      </div>

      <!-- Chart type buttons -->
      <div class="mb-12 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
        <button
          v-for="chart in chartTypes"
          :key="chart.id"
          @click="activeChart = chart.id"
          :class="[
            'group relative rounded-2xl border-2 p-6 transition-all duration-300',
            activeChart === chart.id
              ? 'scale-105 border-blue-500 bg-white shadow-lg dark:bg-slate-800'
              : 'border-slate-200 bg-white/50 hover:border-slate-300 hover:bg-white dark:border-slate-700 dark:bg-slate-800/50 dark:hover:bg-slate-800'
          ]"
        >
          <div 
            :class="[
              'mb-3 inline-flex rounded-xl p-3 text-2xl text-white transition-transform group-hover:scale-110',
              `bg-gradient-to-br ${chart.color}`
            ]"
          >
            {{ chart.icon }}
          </div>
          <div class="text-sm font-semibold text-slate-900 dark:text-white">{{ chart.name }}</div>
        </button>
      </div>

      <!-- Chart preview area -->
      <div class="overflow-hidden rounded-3xl border border-slate-200/50 bg-white/80 shadow-2xl backdrop-blur-xl dark:border-slate-700/50 dark:bg-slate-800/80">
        <div class="grid gap-8 p-8 md:grid-cols-2 md:p-12">
          <!-- Info panel -->
          <div class="space-y-6">
            <div class="inline-flex rounded-full bg-slate-100 px-4 py-2 dark:bg-slate-700">
              <span class="text-sm font-medium text-slate-700 dark:text-slate-300">
                {{ chartTypes.find(c => c.id === activeChart)?.name }}
              </span>
            </div>

            <h3 class="text-3xl font-bold text-slate-900 dark:text-white">
              {{ chartTypes.find(c => c.id === activeChart)?.description }}
            </h3>

            <div class="space-y-4 text-slate-600 dark:text-slate-300">
              <div class="flex items-start gap-3">
                <div class="mt-2 h-1.5 w-1.5 rounded-full bg-blue-500"></div>
                <p>Smooth animations with 60fps performance</p>
              </div>
              <div class="flex items-start gap-3">
                <div class="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                <p>Touch gestures and interactions built-in</p>
              </div>
              <div class="flex items-start gap-3">
                <div class="mt-2 h-1.5 w-1.5 rounded-full bg-cyan-500"></div>
                <p>Fully customizable colors and styles</p>
              </div>
              <div class="flex items-start gap-3">
                <div class="mt-2 h-1.5 w-1.5 rounded-full bg-orange-500"></div>
                <p>Real-time data updates supported</p>
              </div>
            </div>

            <a
              :href="`/ncharts/charts/${activeChart}-chart`"
              class="group inline-flex items-center gap-2 text-blue-600 transition-colors hover:text-blue-700 dark:text-blue-400"
            >
              View documentation
              <svg class="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          <!-- Chart preview -->
          <div class="relative">
            <div class="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/5 via-transparent to-emerald-500/5"></div>
            <div class="relative overflow-hidden rounded-2xl border border-slate-200/50 bg-gradient-to-br from-slate-50 to-white p-8 dark:border-slate-600 dark:from-slate-700 dark:to-slate-800">
              <!-- Line Chart -->
              <svg v-if="activeChart === 'line'" class="h-64 w-full" viewBox="0 0 400 250">
                <defs>
                  <linearGradient id="line1" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stop-color="#3b82f6" />
                    <stop offset="100%" stop-color="#06b6d4" />
                  </linearGradient>
                </defs>
                <path d="M 20 200 L 80 150 L 140 170 L 200 100 L 260 130 L 320 80 L 380 90"
                      stroke="url(#line1)" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
                <circle cx="80" cy="150" r="6" fill="#3b82f6" class="animate-pulse" />
                <circle cx="200" cy="100" r="6" fill="#06b6d4" class="animate-pulse" />
                <circle cx="320" cy="80" r="6" fill="#10b981" class="animate-pulse" />
              </svg>

              <!-- Bar Chart -->
              <svg v-if="activeChart === 'bar'" class="h-64 w-full" viewBox="0 0 400 250">
                <rect x="40" y="120" width="50" height="80" fill="#10b981" rx="4" />
                <rect x="110" y="80" width="50" height="120" fill="#14b8a6" rx="4" />
                <rect x="180" y="140" width="50" height="60" fill="#06b6d4" rx="4" />
                <rect x="250" y="60" width="50" height="140" fill="#0ea5e9" rx="4" />
                <rect x="320" y="100" width="50" height="100" fill="#3b82f6" rx="4" />
              </svg>

              <!-- Pie Chart -->
              <svg v-if="activeChart === 'pie'" class="h-64 w-full" viewBox="0 0 400 250">
                <circle cx="200" cy="125" r="80" fill="#f97316" />
                <path d="M 200 125 L 200 45 A 80 80 0 0 1 254.64 85 Z" fill="#fb923c" />
                <path d="M 200 125 L 254.64 85 A 80 80 0 0 1 254.64 165 Z" fill="#fdba74" />
                <path d="M 200 125 L 254.64 165 A 80 80 0 0 1 200 205 Z" fill="#fcd34d" />
              </svg>

              <!-- Scatter Chart -->
              <svg v-if="activeChart === 'scatter'" class="h-64 w-full" viewBox="0 0 400 250">
                <circle cx="80" cy="120" r="8" fill="#ec4899" class="animate-pulse" />
                <circle cx="120" cy="90" r="12" fill="#f43f5e" class="animate-pulse" style="animation-delay: 0.1s" />
                <circle cx="180" cy="140" r="6" fill="#fb7185" class="animate-pulse" style="animation-delay: 0.2s" />
                <circle cx="220" cy="80" r="10" fill="#f472b6" class="animate-pulse" style="animation-delay: 0.3s" />
                <circle cx="280" cy="110" r="14" fill="#ec4899" class="animate-pulse" style="animation-delay: 0.4s" />
                <circle cx="140" cy="160" r="7" fill="#f43f5e" class="animate-pulse" style="animation-delay: 0.5s" />
                <circle cx="320" cy="130" r="9" fill="#fb7185" class="animate-pulse" style="animation-delay: 0.6s" />
              </svg>

              <!-- Radar Chart -->
              <svg v-if="activeChart === 'radar'" class="h-64 w-full" viewBox="0 0 400 250">
                <polygon points="200,50 280,100 260,180 140,180 120,100"
                         fill="none" stroke="#e2e8f0" stroke-width="1" />
                <polygon points="200,80 250,110 240,160 160,160 150,110"
                         fill="none" stroke="#cbd5e1" stroke-width="1" />
                <polygon points="200,70 265,95 255,175 145,175 135,95"
                         fill="#8b5cf6" fill-opacity="0.2" stroke="#8b5cf6" stroke-width="2" />
                <circle cx="200" cy="70" r="5" fill="#8b5cf6" />
                <circle cx="265" cy="95" r="5" fill="#a78bfa" />
                <circle cx="255" cy="175" r="5" fill="#c4b5fd" />
              </svg>

              <!-- Candlestick Chart -->
              <svg v-if="activeChart === 'candlestick'" class="h-64 w-full" viewBox="0 0 400 250">
                <line x1="60" y1="80" x2="60" y2="160" stroke="#10b981" stroke-width="2" />
                <rect x="50" y="100" width="20" height="40" fill="#10b981" />
                <line x1="120" y1="120" x2="120" y2="180" stroke="#ef4444" stroke-width="2" />
                <rect x="110" y="140" width="20" height="30" fill="#ef4444" />
                <line x1="180" y1="90" x2="180" y2="150" stroke="#10b981" stroke-width="2" />
                <rect x="170" y="105" width="20" height="35" fill="#10b981" />
                <line x1="240" y1="70" x2="240" y2="140" stroke="#10b981" stroke-width="2" />
                <rect x="230" y="85" width="20" height="45" fill="#10b981" />
                <line x1="300" y1="110" x2="300" y2="170" stroke="#ef4444" stroke-width="2" />
                <rect x="290" y="125" width="20" height="35" fill="#ef4444" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
