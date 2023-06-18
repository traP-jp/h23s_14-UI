<template>
  <NSpace vertical>
    <Grass :scores="genScores()" :threshold="[0, 0.3, 0.6, 0.9]" />
    <DispayItemSelector />
  </NSpace>
</template>
<script setup lang="ts">
import Grass from '@/components/Grass.vue'
import DispayItemSelector from '@/components/DisplayItemSelector.vue'
import { NSpace } from 'naive-ui'
import { subDays } from 'date-fns'
import { sub } from 'date-fns/esm'

const genScores = () => {
  return new Array(230).fill(0).map((_, i) => {
    return {
      date: subDays(new Date(), i),
      score: Math.random()
    }
  })
}
</script>
<style module lang="scss"></style>
