<template>
  <NSpace vertical>
    <Grass :scores="genScores()" :threshold="[0, 0.3, 0.6, 0.9]" />
    <DispayItemSelector :selectedItem="selectedItem" @change="onChange" />
  </NSpace>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue'
import Grass from '@/components/Grass.vue'
import DispayItemSelector from '@/components/DisplayItemSelector.vue'
import { NSpace } from 'naive-ui'
import { subDays } from 'date-fns'
import { useUserData } from '@/composables/useUserData'

const { userData, fetchUserData, getHistory } = useUserData('itt')

onMounted(async () => {
  fetchUserData()
})

const selectedItem = ref<string | 'all'>('all')
const onChange = (v: string | 'all') => {
  selectedItem.value = v
}

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
