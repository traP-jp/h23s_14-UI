<template>
  <NCard>
    <NLayout>
      <NLayoutContent style="overflow-y: auto; height: 200px">
        <div v-for="(item, index) in ranking" :key="item.uid">
          {{ index + 1 }}位: {{ item.uid }}: {{ item.score }}点
        </div>
      </NLayoutContent>
    </NLayout>
  </NCard>
</template>

<script setup lang="ts">
import { NLayout, NLayoutContent, NCard } from 'naive-ui'
import { ref } from 'vue'

export type Rank = {
  uid: string
  score: number
}
const props = defineProps<{
  ranking: Rank[]
}>()
</script>
