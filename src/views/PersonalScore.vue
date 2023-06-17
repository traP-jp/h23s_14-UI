<template>
  <NSpace vertical>
    <Grass :scores="genScores()" :threshold="[0, 10, 20, 30]" />
    <DispayItemSelector />
  </NSpace>
</template>
<script setup lang="ts">
import Grass from '@/components/Grass.vue'
import DispayItemSelector from '@/components/DisplayItemSelector.vue'
import { NSpace } from 'naive-ui'
import { subDays } from 'date-fns'

const genScores = () => {
  return new Array(234).fill(0).map((_, i) => {
    return {
      date: subDays(new Date(), i),
      score: Math.random()
    }
  })
}
</script>
<style module lang="scss"></style>
