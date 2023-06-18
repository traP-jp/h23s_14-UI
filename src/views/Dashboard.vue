<template>
  <NSpace vertical>
   <NSpace between>
    <Todayscore />
    <Todayranking />
   </NSpace>
   <DispayItemSelector />
   <Addquest />
   <Grass />
 </NSpace>
</template>
<script setup lang="ts">
import Grass from '@/components/Grass.vue'
import DispayItemSelector from '@/components/DisplayItemSelector.vue'
import Todayscore from '@/components/Todayscore.vue'
import Todayranking from '@/components/Todayranking.vue'
import Addquest from '@/components/Addquest.vue'
import { NSpace } from 'naive-ui'
import type AddquestVue from '@/components/Addquest.vue'
</script>
<style module lang="scss"></style>