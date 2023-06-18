<template>
    <NSpace vertical>
     <Displayeditemes />
     <Notdisplayeditems />
     <Tabbotton />
   </NSpace>
</template>
<script setup lang="ts">
 import Notdisplayeditems from '@/components/Notdisplayeditems.vue'
 import Displayeditemes from '@/components/Displayeditemes.vue';
 import Tabbotton from '@/components/Tabbottom.vue'
 import { NSpace } from 'naive-ui'
</script>
<style module lang="scss"></style>