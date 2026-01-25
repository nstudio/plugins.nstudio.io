<script setup lang="ts">
defineProps<{
  icon: string;
  title: string;
  description: string;
  gradient?: string;
}>();
</script>

<template>
  <div class="feature-item">
    <div 
      :class="[
        'inline-flex rounded-xl p-3 text-2xl text-white',
        gradient ? `bg-gradient-to-br ${gradient}` : 'bg-gradient-to-br from-blue-500 to-cyan-500'
      ]"
    >
      {{ icon }}
    </div>

    <h3 class="mt-4 text-xl font-bold text-slate-900 dark:text-white">
      {{ title }}
    </h3>

    <p class="mt-2 leading-relaxed text-slate-600 dark:text-slate-300">
      {{ description }}
    </p>

    <slot />
  </div>
</template>
