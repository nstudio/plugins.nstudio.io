<script setup lang="ts">
import { ref } from 'vue';

defineProps<{
  code: string;
  language?: string;
  title?: string;
}>();

const copied = ref(false);

const copyCode = (code: string) => {
  navigator.clipboard.writeText(code);
  copied.value = true;
  setTimeout(() => {
    copied.value = false;
  }, 2000);
};
</script>

<template>
  <div class="overflow-hidden rounded-xl border border-slate-700 bg-slate-900">
    <div v-if="title" class="flex items-center justify-between border-b border-slate-700 px-4 py-2">
      <span class="text-sm font-medium text-slate-400">{{ title }}</span>
      <button 
        @click="copyCode(code)"
        class="flex items-center gap-1 rounded bg-slate-700 px-2 py-1 text-xs text-slate-300 transition-colors hover:bg-slate-600"
      >
        <span v-if="copied">✓ Copied!</span>
        <span v-else>Copy</span>
      </button>
    </div>
    <div class="overflow-x-auto p-4">
      <pre class="text-sm leading-relaxed text-slate-300"><code>{{ code }}</code></pre>
    </div>
  </div>
</template>
