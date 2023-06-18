<template>
  <NSpace vertical>
    <NSpace between>
      <Todayscore />
      <Todayranking />
    </NSpace>
    <Quest />
    <Addquest />
    <Grass />
    <Tabbottom />
  </NSpace>
</template>

<script setup lang="ts">
import Grass from '@/components/Grass.vue'
import Quest from '@/components/Quest.vue'
import Todayscore from '@/components/Todayscore.vue'
import Todayranking from '@/components/Todayranking.vue'
import Addquest from '@/components/Addquest.vue'
import Tabbottom from '@/components/Tabbottom.vue'
import { NSpace } from 'naive-ui'
import type QuestVue from '@/components/Quest.vue'
</script>

<style module lang="scss">
</style>