<template>
  <NCard style="background-color: lightblue;">
    <NLayout>
      <NLayoutContent>
        <h1 style="font-weight: bold;">aaaaaa</h1>
        <p style="font-size: small;">東工大生活習慣サークル</p>
        <div v-for="(item, index) in nonZeroItems" :key="item.name">
          <span :style="{ color: textColor(index), 'font-size': textSize(index) }">
            {{ index + 1 }}位: {{ item.name }} - {{ item.points }} ポイント
          </span>
        </div>
      </NLayoutContent>
    </NLayout>
  </NCard>
</template>

<script setup lang="ts">
import { NLayout, NLayoutContent, NCard } from 'naive-ui'
import { ref, computed } from 'vue'

const items = ref([
  { name: 't', points: 100 },
  { name: 'r', points: -25 },
  { name: 'a', points: 10 },
  { name: 'p', points: 400 },
  { name: '/', points: -255 }
])

const sortedItems = computed(() => {
  return items.value.slice().sort((a, b) => b.points - a.points)
})

const nonZeroItems = computed(() => {
  return sortedItems.value.filter(item => item.points !== 0)
})

const textColor = index => {
  if (index === 0) return 'gold'
  if (index === 1) return 'silver'
  if (index === 2) return 'peru'
  return 'black'
}

const textSize = index => {
  if (index < 3) return 'large'
  return 'small'
}
</script>

