<script setup lang="ts">
import { ref, computed, watch } from 'vue'

interface Props {
  syncKey?: string
}

const props = withDefaults(defineProps<Props>(), {
  syncKey: 'framework'
})

const frameworks = ['Angular', 'React', 'Vue', 'Svelte', 'Solid'] as const
type Framework = typeof frameworks[number]

// Use localStorage to persist and sync selection across tabs
const getStoredFramework = (): Framework => {
  if (typeof window !== 'undefined') {
    const stored = localStorage.getItem(`ncharts-${props.syncKey}`)
    if (stored && frameworks.includes(stored as Framework)) {
      return stored as Framework
    }
  }
  return 'Angular'
}

const selectedFramework = ref<Framework>(getStoredFramework())

// Watch for changes and persist
watch(selectedFramework, (newVal) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem(`ncharts-${props.syncKey}`, newVal)
    // Dispatch custom event for cross-tab sync
    window.dispatchEvent(new CustomEvent('framework-change', { detail: newVal }))
  }
})

// Listen for changes from other tabs on the same page
if (typeof window !== 'undefined') {
  window.addEventListener('framework-change', ((event: CustomEvent<Framework>) => {
    if (event.detail !== selectedFramework.value) {
      selectedFramework.value = event.detail
    }
  }) as EventListener)
}

const selectFramework = (framework: Framework) => {
  selectedFramework.value = framework
}

// Expose selected framework for slot content
defineExpose({ selectedFramework })
</script>

<template>
  <div class="framework-tabs">
    <div class="tab-header">
      <button
        v-for="framework in frameworks"
        :key="framework"
        :class="['tab-button', { active: selectedFramework === framework }]"
        @click="selectFramework(framework)"
      >
        {{ framework }}
      </button>
    </div>
    <div class="tab-content">
      <div v-show="selectedFramework === 'Angular'">
        <slot name="angular" />
      </div>
      <div v-show="selectedFramework === 'React'">
        <slot name="react" />
      </div>
      <div v-show="selectedFramework === 'Vue'">
        <slot name="vue" />
      </div>
      <div v-show="selectedFramework === 'Svelte'">
        <slot name="svelte" />
      </div>
      <div v-show="selectedFramework === 'Solid'">
        <slot name="solid" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.framework-tabs {
  margin: 1.5rem 0;
}

.tab-header {
  display: flex;
  gap: 0;
  border-bottom: 1px solid var(--vp-c-divider);
  margin-bottom: 0;
}

.tab-button {
  padding: 0.625rem 1rem;
  border: none;
  background: transparent;
  color: var(--vp-c-text-2);
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: 500;
  border-bottom: 2px solid transparent;
  transition: all 0.2s ease;
  margin-bottom: -1px;
}

.tab-button:hover {
  color: var(--vp-c-brand-1);
}

.tab-button.active {
  color: var(--vp-c-brand-1);
  border-bottom-color: var(--vp-c-brand-1);
}

.tab-content {
  margin-top: 0;
}

.tab-content :deep(div[class*="language-"]) {
  margin-top: 0;
  border-radius: 0 0 8px 8px;
}

.tab-content :deep(div[class*="language-"]:first-child) {
  margin-top: 0;
}
</style>
