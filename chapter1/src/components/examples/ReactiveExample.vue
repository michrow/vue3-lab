<script setup lang="ts">
import { reactive, computed } from 'vue'

const form = reactive({
  firstName: '张',
  lastName: '三',
  age: 25,
  email: 'zhangsan@example.com'
})

const fullName = computed(() => {
  return `${form.firstName}${form.lastName}`
})

const canVote = computed(() => {
  return form.age >= 18
})

const greetings = computed(() => {
  return `你好，${fullName.value}！${canVote.value ? '你已成年，可以投票。' : '你还未成年。'}`
})
</script>

<template>
  <div class="example-reactive">
    <h4>用户信息表单</h4>
    
    <div class="form-group">
      <label>姓：</label>
      <input v-model="form.firstName" type="text" />
    </div>
    
    <div class="form-group">
      <label>名：</label>
      <input v-model="form.lastName" type="text" />
    </div>
    
    <div class="form-group">
      <label>年龄：</label>
      <input v-model.number="form.age" type="number" min="0" max="120" />
    </div>
    
    <div class="form-group">
      <label>邮箱：</label>
      <input v-model="form.email" type="email" />
    </div>
    
    <div class="result-card">
      <div class="result-item">
        <span class="label">全名：</span>
        <span class="value">{{ fullName }}</span>
      </div>
      <div class="result-item">
        <span class="label">问候语：</span>
        <span class="value">{{ greetings }}</span>
      </div>
      <div class="result-item">
        <span class="label">是否成年：</span>
        <span class="value" :class="{ yes: canVote, no: !canVote }">
          {{ canVote ? '是 ✓' : '否 ✗' }}
        </span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.example-reactive {
  padding: 20px;
}

.example-reactive h4 {
  margin: 0 0 20px;
  color: #1a202c;
}

.form-group {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 15px;
}

.form-group label {
  width: 60px;
  font-size: 0.95rem;
  color: #4a5568;
}

.form-group input {
  flex: 1;
  padding: 10px 12px;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  font-size: 0.95rem;
  outline: none;
  transition: border-color 0.2s;
}

.form-group input:focus {
  border-color: #42b883;
}

.result-card {
  margin-top: 20px;
  padding: 15px;
  background: #f8fafc;
  border-radius: 8px;
}

.result-item {
  display: flex;
  justify-content: space-between;
  padding: 8px 0;
  border-bottom: 1px solid #e2e8f0;
}

.result-item:last-child {
  border-bottom: none;
}

.result-item .label {
  color: #718096;
  font-size: 0.9rem;
}

.result-item .value {
  color: #1a202c;
  font-weight: 500;
}

.result-item .value.yes {
  color: #42b883;
}

.result-item .value.no {
  color: #e53e3e;
}
</style>
