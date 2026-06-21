<script setup lang="ts">
import { ref } from 'vue'
import KnowledgeSidebar from './components/KnowledgeSidebar.vue'
import ContentDisplay from './components/ContentDisplay.vue'
import { knowledgeList, type KnowledgeItem } from './data/knowledge'

const selectedId = ref(knowledgeList[0]?.id || '')

const handleSelect = (item: KnowledgeItem) => {
  selectedId.value = item.id
}
</script>

<template>
  <div id="app-container">
    <KnowledgeSidebar :selected-id="selectedId" @select="handleSelect" />
    <ContentDisplay :selected-id="selectedId" />
  </div>
</template>

<style scoped>
#app-container {
  display: flex;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
}
</style>
