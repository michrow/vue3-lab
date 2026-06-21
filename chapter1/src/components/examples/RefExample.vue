<script setup lang="ts">
import { ref } from 'vue'

const count = ref(0)
const message = ref('点击按钮增加计数')

const increment = () => {
  count.value++
  if (count.value >= 10) {
    message.value = '🎉 达到10次了！'
  } else if (count.value >= 5) {
    message.value = '继续加油！'
  }
}

const decrement = () => {
  if (count.value > 0) {
    count.value--
    message.value = '点击按钮增加计数'
  }
}

const reset = () => {
  count.value = 0
  message.value = '点击按钮增加计数'
}
</script>

<template>
  <div class="example-ref">
    <div class="count-display">
      <span class="count-value">{{ count }}</span>
      <span class="count-label">当前计数</span>
    </div>
    
    <p class="message">{{ message }}</p>
    
    <div class="button-group">
      <button class="btn btn-primary" @click="increment">+ 增加</button>
      <button class="btn btn-secondary" @click="decrement">- 减少</button>
      <button class="btn btn-outline" @click="reset">重置</button>
    </div>
  </div>
</template>

<style scoped>
.example-ref {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  gap: 20px;
}

.count-display {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.count-value {
  font-size: 4rem;
  font-weight: bold;
  color: #42b883;
}

.count-label {
  font-size: 0.9rem;
  color: #718096;
}

.message {
  margin: 0;
  color: #4a5568;
  font-size: 1rem;
}

.button-group {
  display: flex;
  gap: 12px;
}

.btn {
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  font-size: 0.95rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
}

.btn-primary {
  background: #42b883;
  color: white;
}

.btn-primary:hover {
  background: #3aa776;
}

.btn-secondary {
  background: #667eea;
  color: white;
}

.btn-secondary:hover {
  background: #5a6fd6;
}

.btn-outline {
  background: transparent;
  color: #4a5568;
  border: 2px solid #e2e8f0;
}

.btn-outline:hover {
  background: #f7fafc;
  border-color: #cbd5e0;
}
</style>
