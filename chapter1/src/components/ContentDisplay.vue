<script setup lang="ts">
import { computed, type Component } from 'vue'
import { knowledgeList, categories, type KnowledgeItem } from '../data/knowledge'
import RefExample from './examples/RefExample.vue'
import ReactiveExample from './examples/ReactiveExample.vue'
import ComputedExample from './examples/ComputedExample.vue'
import WatchExample from './examples/WatchExample.vue'
import LifeCycleExample from './examples/LifeCycleExample.vue'

const props = defineProps<{
  selectedId: string
}>()

const currentItem = computed<KnowledgeItem | null>(() => {
  return knowledgeList.find(item => item.id === props.selectedId) || null
})

const currentCategory = computed(() => {
  if (!currentItem.value) return null
  return categories.find(cat => cat.id === currentItem.value?.category)
})

const renderContent = (content: string) => {
  let html = content
  
  html = html.replace(/^### (.*$)/gim, '<h3>$1</h3>')
  html = html.replace(/^## (.*$)/gim, '<h2>$1</h2>')
  html = html.replace(/^# (.*$)/gim, '<h1>$1</h1>')
  
  html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
  html = html.replace(/\*(.*?)\*/g, '<em>$1</em>')
  
  html = html.replace(/`([^`]+)`/g, '<code>$1</code>')
  
  html = html.replace(/```(\w+)?\n([\s\S]*?)```/g, (match, lang, code) => {
    return `<pre><code class="language-${lang || 'text'}">${code.trim()}</code></pre>`
  })
  
  html = html.replace(/\n/g, '<br>')
  
  html = html.replace(/\|([^|]+)\|([^|]+)\|/g, '<tr><td>$1</td><td>$2</td></tr>')
  html = html.replace(/<tr>/, '<table><thead><tr>')
  html = html.replace(/<\/tr>$/, '</tr></thead></table>')
  
  return html
}

const getExampleComponent = (id: string) => {
  const examples: Record<string, Component> = {
    'ref': RefExample,
    'reactive': ReactiveExample,
    'computed': ComputedExample,
    'watch': WatchExample,
    'lifecycle': LifeCycleExample
  }
  return examples[id] || null
}
</script>

<template>
  <main class="content-display">
    <template v-if="currentItem">
      <header class="content-header">
        <div class="category-badge">
          <span v-if="currentCategory" class="badge-icon">{{ currentCategory.icon }}</span>
          <span v-if="currentCategory" class="badge-name">{{ currentCategory.name }}</span>
        </div>
        <h1 class="content-title">{{ currentItem.title }}</h1>
      </header>
      
      <article class="content-body" v-html="renderContent(currentItem.content)"></article>
      
      <div v-if="getExampleComponent(currentItem.id)" class="example-section">
        <h3>🎯 动手实践</h3>
        <component :is="getExampleComponent(currentItem.id)" />
      </div>
    </template>
    
    <template v-else>
      <div class="empty-state">
        <div class="empty-icon">📖</div>
        <h2>选择一个知识点开始学习</h2>
        <p>从左侧菜单中选择一个 Vue3 知识点进行学习</p>
      </div>
    </template>
  </main>
</template>

<style scoped>
.content-display {
  flex: 1;
  background: #ffffff;
  padding: 40px;
  overflow-y: auto;
  min-height: 100%;
}

.content-header {
  margin-bottom: 30px;
}

.category-badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  background: #e8f5e9;
  color: #2e7d32;
  border-radius: 20px;
  font-size: 0.85rem;
  margin-bottom: 15px;
}

.badge-icon {
  font-size: 0.9rem;
}

.badge-name {
  font-weight: 500;
}

.content-title {
  margin: 0;
  font-size: 2rem;
  color: #1a202c;
  font-weight: 700;
}

.content-body {
  color: #2d3748;
  line-height: 1.8;
  font-size: 1rem;
}

.content-body h1 {
  font-size: 1.8rem;
  color: #1a202c;
  margin: 25px 0 15px;
  padding-bottom: 10px;
  border-bottom: 2px solid #e2e8f0;
}

.content-body h2 {
  font-size: 1.4rem;
  color: #2d3748;
  margin: 20px 0 12px;
}

.content-body h3 {
  font-size: 1.2rem;
  color: #4a5568;
  margin: 18px 0 10px;
}

.content-body p {
  margin: 10px 0;
}

.content-body strong {
  font-weight: 600;
  color: #1a202c;
}

.content-body em {
  font-style: italic;
  color: #4a5568;
}

.content-body code {
  background: #f7fafc;
  padding: 2px 6px;
  border-radius: 4px;
  font-family: 'Fira Code', 'Monaco', monospace;
  font-size: 0.9rem;
  color: #e53e3e;
}

.content-body pre {
  background: #1a202c;
  color: #e2e8f0;
  padding: 20px;
  border-radius: 8px;
  overflow-x: auto;
  margin: 15px 0;
}

.content-body pre code {
  background: none;
  padding: 0;
  color: #e2e8f0;
  font-size: 0.875rem;
  line-height: 1.6;
}

.content-body table {
  width: 100%;
  border-collapse: collapse;
  margin: 15px 0;
  border-radius: 8px;
  overflow: hidden;
}

.content-body th,
.content-body td {
  padding: 12px 15px;
  text-align: left;
  border-bottom: 1px solid #e2e8f0;
}

.content-body th {
  background: #f7fafc;
  font-weight: 600;
  color: #2d3748;
}

.content-body tr:hover {
  background: #f7fafc;
}

.example-section {
  margin-top: 40px;
  padding-top: 30px;
  border-top: 2px solid #e2e8f0;
}

.example-section h3 {
  margin-bottom: 20px;
  font-size: 1.3rem;
  color: #1a202c;
}

.empty-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 60vh;
  text-align: center;
}

.empty-icon {
  font-size: 5rem;
  margin-bottom: 20px;
}

.empty-state h2 {
  font-size: 1.5rem;
  color: #4a5568;
  margin: 0 0 10px;
}

.empty-state p {
  color: #718096;
  margin: 0;
}
</style>
