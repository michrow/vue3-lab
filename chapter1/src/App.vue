<script setup lang="ts">
//  导入布局相关的通用组件
import NavBar from './components/NavBar.vue'
</script>

<template>
  <div id="app-root">
    <!-- 导航栏 -->
    <NavBar />

    <!-- 主内容区域 -->
    <!-- 根据当前 URL，这里会渲染对应的页面组件 -->
    <main class="main-content">
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main-content {
  flex: 1;
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
}
</style>