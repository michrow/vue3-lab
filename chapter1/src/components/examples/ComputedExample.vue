<script setup lang="ts">
import { ref, computed } from 'vue'

const price = ref(100)
const quantity = ref(2)
const discount = ref(0)

const subtotal = computed(() => {
  return price.value * quantity.value
})

const discountAmount = computed(() => {
  return subtotal.value * (discount.value / 100)
})

const total = computed(() => {
  return subtotal.value - discountAmount.value
})

const discountOptions = [0, 5, 10, 15, 20]
</script>

<template>
  <div class="example-computed">
    <h4>购物车计算器</h4>
    
    <div class="input-group">
      <label>单价：</label>
      <input v-model.number="price" type="number" min="0" />
      <span class="unit">元</span>
    </div>
    
    <div class="input-group">
      <label>数量：</label>
      <input v-model.number="quantity" type="number" min="1" />
      <span class="unit">件</span>
    </div>
    
    <div class="input-group">
      <label>折扣：</label>
      <select v-model.number="discount">
        <option v-for="opt in discountOptions" :key="opt" :value="opt">
          {{ opt }}%
        </option>
      </select>
    </div>
    
    <div class="calculation-result">
      <div class="calc-row">
        <span>小计：</span>
        <span class="amount">{{ subtotal.toFixed(2) }} 元</span>
      </div>
      <div class="calc-row discount">
        <span>折扣：</span>
        <span class="amount">-{{ discountAmount.toFixed(2) }} 元</span>
      </div>
      <div class="calc-row total">
        <span>总计：</span>
        <span class="amount">{{ total.toFixed(2) }} 元</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.example-computed {
  padding: 20px;
}

.example-computed h4 {
  margin: 0 0 20px;
  color: #1a202c;
}

.input-group {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 15px;
}

.input-group label {
  width: 60px;
  font-size: 0.95rem;
  color: #4a5568;
}

.input-group input,
.input-group select {
  flex: 1;
  padding: 10px 12px;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  font-size: 0.95rem;
  outline: none;
  transition: border-color 0.2s;
}

.input-group input:focus,
.input-group select:focus {
  border-color: #42b883;
}

.input-group .unit {
  color: #718096;
  font-size: 0.9rem;
}

.calculation-result {
  margin-top: 20px;
  padding: 15px;
  background: #f8fafc;
  border-radius: 8px;
}

.calc-row {
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  border-bottom: 1px solid #e2e8f0;
}

.calc-row:last-child {
  border-bottom: none;
}

.calc-row span:first-child {
  color: #718096;
}

.calc-row .amount {
  font-weight: 600;
  color: #1a202c;
}

.calc-row.discount .amount {
  color: #ed8936;
}

.calc-row.total {
  padding-top: 15px;
}

.calc-row.total .amount {
  font-size: 1.2rem;
  color: #42b883;
}
</style>
