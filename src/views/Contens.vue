<template>
    <NSpace vertical>
     <Displayeditemes />
     <Notdisplayeditems />
   </NSpace>
 </template>
 <script setup lang="ts">
 import Notdisplayeditems from '@/components/Notdisplayeditems.vue'
 import Displayeditemes from '@/components/displayeditemes.vue';
 import { NSpace } from 'naive-ui'
 </script>
 <style module lang="scss"></style>