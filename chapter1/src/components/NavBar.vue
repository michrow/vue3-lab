<!-- src/components/NavBar.vue -->
<script setup lang="ts">
import { useRoute } from 'vue-router'
const route = useRoute()
</script>

<template>
  <nav class="navbar">
    <div class="nav-brand">我的应用</div>
    <div class="nav-links">
      <!-- router-link 是 Vue Router 提供的导航组件 -->
      <router-link to="/" class="nav-link" active-class="active">
        首页
      </router-link>
      <router-link to="/about" class="nav-link" active-class="active">
        关于
      </router-link>
      <router-link to="/user/100" class="nav-link" active-class="active">
        用户100
      </router-link>
    </div>
    <div class="nav-info">
      当前路径: {{ route.path }}
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 30px;
  background: #2c3e50;
  color: white;
}
.nav-brand {
  font-size: 1.2rem;
  font-weight: bold;
}
.nav-links {
  display: flex;
  gap: 20px;
}
.nav-link {
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  padding: 5px 10px;
  border-radius: 4px;
  transition: all 0.3s;
}
.nav-link:hover {
  color: white;
  background: rgba(255, 255, 255, 0.1);
}
.nav-link.active {
  color: white;
  background: #42b883;
}
.nav-info {
  font-size: 0.9rem;
  opacity: 0.7;
}
</style>