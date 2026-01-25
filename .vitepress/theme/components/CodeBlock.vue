<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';
import { createHighlighter, type Highlighter } from 'shiki';

const props = defineProps<{
  code: string;
  language?: string;
  filename?: string;
}>();

const highlightedCode = ref('');
let highlighter: Highlighter | null = null;

async function highlight() {
  if (!highlighter) {
    highlighter = await createHighlighter({
      themes: ['github-dark'],
      langs: ['typescript', 'javascript', 'html', 'bash', 'json'],
    });
  }
  
  highlightedCode.value = highlighter.codeToHtml(props.code, {
    lang: props.language || 'typescript',
    theme: 'github-dark',
  });
}

onMounted(highlight);
watch(() => props.code, highlight);
</script>

<template>
  <div class="code-block overflow-hidden rounded-xl border border-slate-700/50 bg-[#0d1117]">
    <div v-if="filename" class="flex items-center justify-between border-b border-slate-700/50 bg-slate-800/50 px-4 py-2">
      <span class="text-xs font-medium text-slate-400">{{ filename }}</span>
      <button 
        @click="navigator.clipboard.writeText(code)"
        class="rounded bg-slate-700/50 px-2 py-1 text-xs text-slate-400 transition-colors hover:bg-slate-600 hover:text-slate-200"
      >
        Copy
      </button>
    </div>
    <div class="overflow-x-auto p-4">
      <div v-if="highlightedCode" v-html="highlightedCode" class="shiki-wrapper text-sm leading-relaxed"></div>
      <pre v-else class="text-sm leading-relaxed text-slate-300"><code>{{ code }}</code></pre>
    </div>
  </div>
</template>

<style scoped>
.shiki-wrapper :deep(pre) {
  background: transparent !important;
  margin: 0;
  padding: 0;
}

.shiki-wrapper :deep(code) {
  font-family: 'Fira Code', 'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
}
</style>
