export interface KnowledgeItem {
  id: string
  title: string
  category: string
  content: string
}

export interface Category {
  id: string
  name: string
  icon: string
}

export const categories: Category[] = [
  { id: 'composition', name: '组合式API', icon: '⚡' },
  { id: 'reactive', name: '响应式系统', icon: '🔄' },
  { id: 'template', name: '模板语法', icon: '📋' },
  { id: 'component', name: '组件基础', icon: '🧩' },
  { id: 'router', name: '路由', icon: '📍' },
  { id: 'state', name: '状态管理', icon: '📊' },
]

export const knowledgeList: KnowledgeItem[] = [
  {
    id: 'setup',
    title: 'setup() 函数',
    category: 'composition',
    content: `## setup() 函数

setup() 是组合式 API 的入口函数，在组件创建前执行。

### 基本用法

\`\`\`typescript
import { ref, onMounted } from 'vue'

export default {
  setup() {
    const count = ref(0)
    
    const increment = () => {
      count.value++
    }
    
    onMounted(() => {
      console.log('组件已挂载')
    })
    
    return {
      count,
      increment
    }
  }
}
\`\`\`

### 特点

- 在 beforeCreate 之前执行
- 没有 this 指向
- 返回的响应式数据会暴露给模板
- 可以使用所有的组合式 API`
  },
  {
    id: 'ref',
    title: 'ref() 响应式引用',
    category: 'reactive',
    content: `## ref() 响应式引用

ref() 用于创建一个响应式的引用类型，可以存储任意类型的值。

### 基本用法

\`\`\`typescript
import { ref } from 'vue'

// 创建响应式引用
const count = ref(0)
const name = ref('Vue3')
const isActive = ref(false)

// 访问值
console.log(count.value) // 0

// 修改值
count.value++
console.log(count.value) // 1
\`\`\`

### 在模板中使用

\`\`\`vue
<template>
  <div>
    <p>计数: {{ count }}</p>
    <button @click="count++">增加</button>
  </div>
</template>
\`\`\`

### 注意事项

- 在 JavaScript 中需要通过 \`.value\` 访问
- 在模板中自动解包，不需要 \`.value\`
- 可以存储基本类型和对象类型`
  },
  {
    id: 'reactive',
    title: 'reactive() 响应式对象',
    category: 'reactive',
    content: `## reactive() 响应式对象

reactive() 用于创建一个响应式对象，适用于复杂数据结构。

### 基本用法

\`\`\`typescript
import { reactive } from 'vue'

// 创建响应式对象
const state = reactive({
  count: 0,
  name: 'Vue3',
  nested: {
    value: 100
  }
})

// 直接访问和修改
state.count++
console.log(state.count) // 1
\`\`\`

### 与 ref 的区别

| 特性 | ref | reactive |
|------|-----|----------|
| 适用类型 | 所有类型 | 对象/数组 |
| 访问方式 | .value | 直接访问 |
| 深层响应 | 是 | 是 |

### 解构响应式对象

\`\`\`typescript
import { reactive, toRefs } from 'vue'

const state = reactive({ count: 0 })

// 使用 toRefs 保持响应式
const { count } = toRefs(state)
\`\`\``
  },
  {
    id: 'computed',
    title: 'computed() 计算属性',
    category: 'reactive',
    content: `## computed() 计算属性

computed() 用于创建计算属性，它会根据依赖自动更新。

### 基本用法

\`\`\`typescript
import { ref, computed } from 'vue'

const firstName = ref('张')
const lastName = ref('三')

// 创建计算属性
const fullName = computed(() => {
  return firstName.value + lastName.value
})

console.log(fullName.value) // '张三'
\`\`\`

### 可写的计算属性

\`\`\`typescript
const fullName = computed({
  get: () => firstName.value + lastName.value,
  set: (value) => {
    const [first, last] = value.split(' ')
    firstName.value = first
    lastName.value = last
  }
})

// 设置值
fullName.value = '李 四'
\`\`\`

### 特点

- 惰性求值：只有依赖变化时才重新计算
- 缓存机制：相同依赖返回缓存结果
- 响应式更新：自动追踪依赖`
  },
  {
    id: 'template-syntax',
    title: '模板语法',
    category: 'template',
    content: `## Vue3 模板语法

Vue3 提供了丰富的模板语法来声明式地渲染 DOM。

### 插值表达式

\`\`\`vue
<template>
  <p>{{ message }}</p>
  <p>{{ count + 1 }}</p>
  <p>{{ isActive ? '激活' : '未激活' }}</p>
</template>
\`\`\`

### 指令

**v-bind** - 动态绑定属性

\`\`\`vue
<img v-bind:src="imageUrl" />
<!-- 简写 -->
<img :src="imageUrl" />
\`\`\`

**v-if / v-else** - 条件渲染

\`\`\`vue
<div v-if="isShow">显示内容</div>
<div v-else>隐藏时显示</div>
\`\`\`

**v-for** - 列表渲染

\`\`\`vue
<ul>
  <li v-for="item in list" :key="item.id">
    {{ item.name }}
  </li>
</ul>
\`\`\`

**v-on** - 事件监听

\`\`\`vue
<button v-on:click="handleClick">点击</button>
<!-- 简写 -->
<button @click="handleClick">点击</button>
\`\`\`

**v-model** - 双向绑定

\`\`\`vue
<input v-model="username" />
\`\`\``
  },
  {
    id: 'component-basics',
    title: '组件基础',
    category: 'component',
    content: `## Vue3 组件基础

组件是 Vue3 应用的基本构建块。

### 组件定义

\`\`\`vue
<!-- HelloWorld.vue -->
<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  msg: string
}>()
</script>
\`\`\`

### 使用组件

\`\`\`vue
<template>
  <HelloWorld msg="欢迎学习 Vue3!" />
</template>

<script setup lang="ts">
import HelloWorld from './HelloWorld.vue'
</script>
\`\`\`

### Props 定义

\`\`\`typescript
// 使用 defineProps
const props = defineProps<{
  title: string
  count?: number
}>()

// 默认值
const props = withDefaults(defineProps<{
  title: string
  count?: number
}>(), {
  count: 0
})
\`\`\`

### 事件触发

\`\`\`typescript
const emit = defineEmits<{
  (e: 'update', value: number): void
}>()

// 触发事件
emit('update', 100)
\`\`\``
  },
  {
    id: 'router-basics',
    title: 'Vue Router 基础',
    category: 'router',
    content: `## Vue Router 基础

Vue Router 是 Vue3 的官方路由管理器。

### 安装和配置

\`\`\`typescript
// router/index.ts
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('../views/Home.vue')
    },
    {
      path: '/about',
      name: 'About',
      component: () => import('../views/About.vue')
    }
  ]
})

export default router
\`\`\`

### 使用路由

\`\`\`vue
<!-- 导航链接 -->
<router-link to="/">首页</router-link>
<router-link to="/about">关于</router-link>

<!-- 路由出口 -->
<router-view />
\`\`\`

### 动态路由

\`\`\`typescript
// 路由配置
{
  path: '/user/:id',
  component: UserView
}

// 获取参数
import { useRoute } from 'vue-router'

const route = useRoute()
console.log(route.params.id)
\`\`\`

### 编程式导航

\`\`\`typescript
import { useRouter } from 'vue-router'

const router = useRouter()

// 导航到指定路径
router.push('/about')

// 带参数
router.push({ name: 'User', params: { id: 1 } })
\`\`\``
  },
  {
    id: 'pinia',
    title: 'Pinia 状态管理',
    category: 'state',
    content: `## Pinia 状态管理

Pinia 是 Vue3 的官方状态管理库。

### 创建 Store

\`\`\`typescript
// stores/counter.ts
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useCounterStore = defineStore('counter', () => {
  // 状态
  const count = ref(0)
  
  // 计算属性
  const doubleCount = computed(() => count.value * 2)
  
  // 动作
  function increment() {
    count.value++
  }
  
  function decrement() {
    count.value--
  }
  
  return { count, doubleCount, increment, decrement }
})
\`\`\`

### 使用 Store

\`\`\`vue
<script setup lang="ts">
import { useCounterStore } from '../stores/counter'

const counter = useCounterStore()
</script>

<template>
  <div>
    <p>计数: {{ counter.count }}</p>
    <p>双倍: {{ counter.doubleCount }}</p>
    <button @click="counter.increment()">增加</button>
  </div>
</template>
\`\`\`

### 特点

- 支持组合式 API
- 类型安全
- 自动持久化（可选）
- 模块化设计`
  },
  {
    id: 'watch',
    title: 'watch() 侦听器',
    category: 'reactive',
    content: `## watch() 侦听器

watch() 用于响应式地侦听数据变化并执行副作用。

### 基本用法

\`\`\`typescript
import { ref, watch } from 'vue'

const count = ref(0)

// 侦听单个源
watch(count, (newValue, oldValue) => {
  console.log(\`count 从 \${oldValue} 变为 \${newValue}\`)
})

// 侦听多个源
const name = ref('Vue')
watch([count, name], ([newCount, newName], [oldCount, oldName]) => {
  console.log('count 或 name 变化了')
})
\`\`\`

### 侦听对象

\`\`\`typescript
const state = reactive({ count: 0 })

// 侦听整个对象
watch(state, () => {
  console.log('state 变化了')
}, { deep: true })

// 侦听对象的某个属性
watch(() => state.count, (newVal) => {
  console.log('count 变化了:', newVal)
})
\`\`\`

### 选项

\`\`\`typescript
watch(source, callback, {
  immediate: true, // 立即执行
  deep: true,      // 深度侦听
  flush: 'pre'     // 刷新时机
})
\`\`\``
  },
  {
    id: 'provide-inject',
    title: 'provide / inject',
    category: 'component',
    content: `## provide / inject

provide 和 inject 用于跨组件层级传递数据。

### 基本用法

**父组件提供数据：**

\`\`\`typescript
import { provide, ref } from 'vue'

const theme = ref('dark')

// 提供数据
provide('theme', theme)
provide('setTheme', (newTheme: string) => {
  theme.value = newTheme
})
\`\`\`

**子组件注入数据：**

\`\`\`typescript
import { inject } from 'vue'

// 注入数据
const theme = inject('theme')
const setTheme = inject('setTheme')

// 使用
console.log(theme.value) // 'dark'
setTheme('light')
\`\`\`

### 类型提示

\`\`\`typescript
import { provide, inject } from 'vue'

// 定义符号
const ThemeSymbol = Symbol('theme')

// 提供
provide(ThemeSymbol, ref('dark'))

// 注入并指定类型
const theme = inject<Ref<string>>(ThemeSymbol)
\`\`\`

### 适用场景

- 跨层级组件通信
- 全局配置传递
- 插件提供功能`
  },
  {
    id: 'lifecycle',
    title: '生命周期钩子',
    category: 'composition',
    content: `## Vue3 生命周期钩子

Vue3 提供了组合式 API 的生命周期钩子。

### 基本钩子

\`\`\`typescript
import { 
  onBeforeMount, 
  onMounted, 
  onBeforeUpdate, 
  onUpdated,
  onBeforeUnmount,
  onUnmounted 
} from 'vue'

export default {
  setup() {
    onBeforeMount(() => {
      console.log('挂载前')
    })
    
    onMounted(() => {
      console.log('挂载完成')
    })
    
    onBeforeUpdate(() => {
      console.log('更新前')
    })
    
    onUpdated(() => {
      console.log('更新完成')
    })
    
    onBeforeUnmount(() => {
      console.log('卸载前')
    })
    
    onUnmounted(() => {
      console.log('卸载完成')
    })
  }
}
\`\`\`

### 生命周期图示

\`\`\`
创建阶段
  ↓
beforeCreate → setup() → created
  ↓
挂载阶段
  ↓
beforeMount → 渲染 DOM → mounted
  ↓
更新阶段
  ↓
beforeUpdate → 更新 DOM → updated
  ↓
卸载阶段
  ↓
beforeUnmount → 清理 → unmounted
\`\`\``
  },
  {
    id: 'teleport',
    title: 'Teleport 传送门',
    category: 'component',
    content: `## Teleport 传送门

Teleport 允许将组件渲染到 DOM 的其他位置。

### 基本用法

\`\`\`vue
<!-- 将模态框渲染到 body 下 -->
<teleport to="body">
  <div class="modal">
    <p>这是一个模态框</p>
  </div>
</teleport>
\`\`\`

### 条件渲染

\`\`\`vue
<template>
  <button @click="showModal = true">打开模态框</button>
  
  <teleport to="body">
    <div v-if="showModal" class="modal">
      <p>模态框内容</p>
      <button @click="showModal = false">关闭</button>
    </div>
  </teleport>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const showModal = ref(false)
</script>
\`\`\`

### 多个 Teleport 目标

\`\`\`vue
<!-- 多个 teleport 可以渲染到同一个目标 -->
<teleport to="#modals">
  <div>模态框 1</div>
</teleport>

<teleport to="#modals">
  <div>模态框 2</div>
</teleport>
\`\`\`

### 适用场景

- 模态框、弹窗
- Toast 通知
- 悬浮组件`
  }
]
