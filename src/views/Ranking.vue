<template>
  <NSpace vertical>
    <h1>Ranking</h1>
    <Rchart />
    <Rankinglist />
    <Tabbotton />
  </NSpace>
</template>

<script setup lang="ts">
import Rchart from '@/components/Rchart.vue'
import Rankinglist from '@/components/Rankinglist.vue'
import Tabbotton from '@/components/Tabbottom.vue'
import { NSpace } from 'naive-ui'
</script>

<style module lang="scss"></style>