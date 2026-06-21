<script setup lang="ts">
import { ref, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue'

const logs = ref<string[]>([])
const count = ref(0)

const addLog = (message: string) => {
  const time = new Date().toLocaleTimeString()
  logs.value.push(`[${time}] ${message}`)
  
  if (logs.value.length > 10) {
    logs.value.shift()
  }
}

onBeforeMount(() => {
  addLog('onBeforeMount: 组件即将挂载')
})

onMounted(() => {
  addLog('onMounted: 组件已挂载')
})

onBeforeUpdate(() => {
  addLog('onBeforeUpdate: 组件即将更新')
})

onUpdated(() => {
  addLog('onUpdated: 组件已更新')
})

onBeforeUnmount(() => {
  addLog('onBeforeUnmount: 组件即将卸载')
})

onUnmounted(() => {
  addLog('onUnmounted: 组件已卸载')
})

const increment = () => {
  count.value++
}
</script>

<template>
  <div class="example-lifecycle">
    <h4>生命周期钩子演示</h4>
    
    <div class="action-area">
      <button class="btn" @click="increment">触发更新 ({{ count }})</button>
    </div>
    
    <div class="logs-container">
      <h5>生命周期日志：</h5>
      <div class="logs">
        <div v-for="(log, index) in logs" :key="index" class="log-item">
          {{ log }}
        </div>
        <div v-if="logs.length === 0" class="no-logs">
          等待生命周期事件...
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.example-lifecycle {
  padding: 20px;
}

.example-lifecycle h4 {
  margin: 0 0 20px;
  color: #1a202c;
}

.action-area {
  margin-bottom: 20px;
}

.btn {
  padding: 12px 24px;
  background: #42b883;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.2s;
}

.btn:hover {
  background: #3aa776;
}

.logs-container {
  background: #f8fafc;
  border-radius: 8px;
  padding: 15px;
}

.logs-container h5 {
  margin: 0 0 10px;
  font-size: 0.95rem;
  color: #4a5568;
}

.logs {
  min-height: 150px;
}

.log-item {
  padding: 6px 0;
  font-size: 0.85rem;
  color: #4a5568;
  border-bottom: 1px solid #e2e8f0;
}

.log-item:last-child {
  border-bottom: none;
}

.no-logs {
  color: #a0aec0;
  font-size: 0.9rem;
  padding: 20px;
  text-align: center;
}
</style>
