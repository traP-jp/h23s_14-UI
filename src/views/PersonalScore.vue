<template>
  <NSpace vertical>
    <Grass :scores="new Array(234).fill(0)" />
    <DispayItemSelector />
  </NSpace>
</template>
<script setup lang="ts">
import Grass from '@/components/Grass.vue'
import DispayItemSelector from '@/components/DisplayItemSelector.vue'
import { NSpace } from 'naive-ui'
</script>
<style module lang="scss"></style>
