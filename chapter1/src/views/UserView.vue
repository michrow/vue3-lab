<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
const userId = route.params.id

// 模拟获取用户数据

const userData = {
  id: userId,
  name: `用户：${userId}`,
  email: `user${userId}@example.com`
}
</script>

<template>
  <div class="user-profile">
    <h1>用户资料</h1>
    <div  class="user-card">
        <p><strong>ID:</strong> {{ userData.id }}</p>
        <p><strong>Name:</strong> {{ userData.name }}</p>
        <p><strong>Email:</strong> {{ userData.email }}</p>
    </div>
    <router-link to="/">返回首页</router-link>
  </div>

</template>

<style scoped>
.user-profile {
  background: #e3f2fd;
  padding: 20px;
  border-radius: 8px;
}
.user-card {
  background: white;
  padding: 15px;
  border-radius: 6px;
  margin: 10px 0;
}
</style>