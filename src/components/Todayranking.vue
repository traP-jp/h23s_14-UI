<template>
  <NCard>
    <NLayout>
      <NLayoutContent>
        <span style="font-size: 24px">今日のランキング</span>
      </NLayoutContent>
      <NLayoutContent>{{ rank }}</NLayoutContent>
    </NLayout>
  </NCard>
</template>
<script setup lang="ts">
import { NLayout, NLayoutContent, NRadio, NCard } from 'naive-ui'
const props = defineProps<{
  rank: number
}>()
</script>
