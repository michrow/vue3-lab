<script setup lang="ts">
import { ref, watch } from 'vue'

const inputValue = ref('')
const history = ref<string[]>([])
const changeCount = ref(0)

watch(inputValue, (newVal, oldVal) => {
  if (newVal !== oldVal) {
    changeCount.value++
    history.value.unshift(`[${new Date().toLocaleTimeString()}] "${oldVal}" -> "${newVal}"`)
    
    if (history.value.length > 5) {
      history.value.pop()
    }
  }
})

const clear = () => {
  inputValue.value = ''
  history.value = []
  changeCount.value = 0
}
</script>

<template>
  <div class="example-watch">
    <h4>输入监听器</h4>
    
    <div class="input-container">
      <input 
        v-model="inputValue" 
        type="text" 
        placeholder="在这里输入..."
      />
      <button class="clear-btn" @click="clear">清空</button>
    </div>
    
    <div class="stats">
      <span class="stat">输入次数：{{ changeCount }}</span>
    </div>
    
    <div class="history-section">
      <h5>变化历史：</h5>
      <div v-if="history.length === 0" class="empty-history">
        开始输入以查看变化历史
      </div>
      <ul v-else class="history-list">
        <li v-for="(item, index) in history" :key="index">
          {{ item }}
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.example-watch {
  padding: 20px;
}

.example-watch h4 {
  margin: 0 0 20px;
  color: #1a202c;
}

.input-container {
  display: flex;
  gap: 10px;
}

.input-container input {
  flex: 1;
  padding: 12px 15px;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  font-size: 1rem;
  outline: none;
  transition: border-color 0.2s;
}

.input-container input:focus {
  border-color: #42b883;
}

.clear-btn {
  padding: 12px 20px;
  background: #e53e3e;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 0.95rem;
  transition: background 0.2s;
}

.clear-btn:hover {
  background: #c53030;
}

.stats {
  margin-top: 15px;
}

.stat {
  font-size: 0.9rem;
  color: #718096;
}

.history-section {
  margin-top: 20px;
}

.history-section h5 {
  margin: 0 0 10px;
  font-size: 0.95rem;
  color: #4a5568;
}

.empty-history {
  padding: 15px;
  background: #f8fafc;
  border-radius: 8px;
  text-align: center;
  color: #a0aec0;
  font-size: 0.9rem;
}

.history-list {
  margin: 0;
  padding: 0;
  list-style: none;
  background: #f8fafc;
  border-radius: 8px;
}

.history-list li {
  padding: 10px 15px;
  border-bottom: 1px solid #e2e8f0;
  font-size: 0.85rem;
  color: #4a5568;
}

.history-list li:last-child {
  border-bottom: none;
}
</style>
