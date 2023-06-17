<template>
  <NCard>
    <NLayout>
      <NRadio
        name="display-item"
        :value="'all'"
        :checked="selectedItem === 'all'"
        @change="handleChange"
        >全て
      </NRadio>
      <NLayoutContent v-for="item in items" :key="item.id">
        <NRadio
          name="display-item"
          :value="item.id"
          :checked="selectedItem === item.id"
          @change="handleChange"
          >{{ item.title }}
        </NRadio>
      </NLayoutContent>
    </NLayout>
  </NCard>
</template>
<script setup lang="ts">
import { NLayout, NLayoutContent, NRadio, NCard } from 'naive-ui'
import { onMounted, ref } from 'vue'
import { useItemStore } from '@/stores/item'
import { storeToRefs } from 'pinia'

const props = defineProps<{}>()
const itemStore = useItemStore()
const { items } = storeToRefs(itemStore)
const selectedItem = ref<string | null>(null)
const gen = () => {
  return { id: String(Math.random()), title: 'hoge', score: 20 }
}
onMounted(async () => {
  await itemStore.fetchItems()
  items.value.push(gen())
  items.value.push(gen())
  items.value.push(gen())
  items.value.push(gen())
  items.value.push(gen())
  items.value.push(gen())
})

const handleChange = (e: Event) => {
  selectedItem.value = (e.target as HTMLInputElement).value
}
</script>
