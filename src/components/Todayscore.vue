<template>
  <NCard huge>
    <NLayout>
      <NLayoutContent>
        <span style="font-size: 24px">今日のスコア</span>
      </NLayoutContent>
      <NLayoutContent>{{ score }}</NLayoutContent>
    </NLayout>
  </NCard>
</template>
<script setup lang="ts">
import { NLayout, NLayoutContent, NCard } from 'naive-ui'
const props = defineProps<{
  score: number
}>()
</script>
