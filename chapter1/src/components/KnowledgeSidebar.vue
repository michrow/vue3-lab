<script setup lang="ts">
import { ref } from 'vue'
import { categories, knowledgeList, type KnowledgeItem } from '../data/knowledge'

const emit = defineEmits<{
  (e: 'select', item: KnowledgeItem): void
}>()

const props = defineProps<{
  selectedId: string
}>()

const expandedCategories = ref<string[]>(['composition'])

const toggleCategory = (categoryId: string) => {
  const index = expandedCategories.value.indexOf(categoryId)
  if (index > -1) {
    expandedCategories.value.splice(index, 1)
  } else {
    expandedCategories.value.push(categoryId)
  }
}

const getItemsByCategory = (categoryId: string) => {
  return knowledgeList.filter(item => item.category === categoryId)
}

const isExpanded = (categoryId: string) => {
  return expandedCategories.value.includes(categoryId)
}

const selectItem = (item: KnowledgeItem) => {
  emit('select', item)
}
</script>

<template>
  <aside class="sidebar">
    <div class="sidebar-header">
      <h2>📚 Vue3 学习指南</h2>
    </div>
    
    <div class="sidebar-menu">
      <div 
        v-for="category in categories" 
        :key="category.id" 
        class="category"
      >
        <button 
          class="category-header"
          @click="toggleCategory(category.id)"
        >
          <span class="category-icon">{{ category.icon }}</span>
          <span class="category-name">{{ category.name }}</span>
          <span class="category-arrow" :class="{ expanded: isExpanded(category.id) }">
            ▼
          </span>
        </button>
        
        <ul 
          v-if="isExpanded(category.id)" 
          class="category-items"
        >
          <li 
            v-for="item in getItemsByCategory(category.id)" 
            :key="item.id"
            class="menu-item"
            :class="{ active: item.id === props.selectedId }"
            @click="selectItem(item)"
          >
            <span class="item-dot"></span>
            <span class="item-title">{{ item.title }}</span>
          </li>
        </ul>
      </div>
    </div>
  </aside>
</template>

<style scoped>
.sidebar {
  width: 280px;
  background: linear-gradient(180deg, #1e3a5f 0%, #0d1b2a 100%);
  color: white;
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow-y: auto;
}

.sidebar-header {
  padding: 20px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.sidebar-header h2 {
  margin: 0;
  font-size: 1.2rem;
  font-weight: 600;
}

.sidebar-menu {
  flex: 1;
  padding: 10px;
}

.category {
  margin-bottom: 4px;
}

.category-header {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 15px;
  background: rgba(255, 255, 255, 0.05);
  border: none;
  border-radius: 8px;
  color: white;
  cursor: pointer;
  transition: all 0.3s;
  text-align: left;
}

.category-header:hover {
  background: rgba(255, 255, 255, 0.1);
}

.category-icon {
  margin-right: 10px;
  font-size: 1.1rem;
}

.category-name {
  flex: 1;
  font-size: 0.95rem;
  font-weight: 500;
}

.category-arrow {
  font-size: 0.7rem;
  opacity: 0.6;
  transition: transform 0.3s;
}

.category-arrow.expanded {
  transform: rotate(180deg);
}

.category-items {
  margin: 0;
  padding: 4px 0;
  list-style: none;
}

.menu-item {
  display: flex;
  align-items: center;
  padding: 10px 15px 10px 35px;
  cursor: pointer;
  border-radius: 6px;
  transition: all 0.2s;
  margin-bottom: 2px;
}

.menu-item:hover {
  background: rgba(255, 255, 255, 0.08);
}

.menu-item.active {
  background: #42b883;
}

.menu-item.active:hover {
  background: #3aa776;
}

.item-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.5);
  margin-right: 12px;
  transition: all 0.2s;
}

.menu-item.active .item-dot {
  background: white;
}

.item-title {
  font-size: 0.9rem;
  opacity: 0.9;
}

.menu-item.active .item-title {
  opacity: 1;
}
</style>
