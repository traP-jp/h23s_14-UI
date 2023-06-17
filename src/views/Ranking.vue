<template>
    <NSpace vertical>
     <Rchart/>
     <Rankinglist/>
   </NSpace>
 </template>
 <script setup lang="ts">
 import Rchart from '@/components/Rchart.vue'; 
 import Rankinglist from '@/components/Rankinglist.vue';
 import { NSpace } from 'naive-ui'
 </script>
 <style module lang="scss"></style>