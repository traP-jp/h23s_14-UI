<template>
    <NSpace vertical>
     <NCard>
      <NLayout>
        <NLayoutContent>
            <span style="font-size: 50px;"> タイトル</span>
        </NLayoutContent>
      </NLayout>
     </NCard>
     <TrapID/>
     <Passwordentry/>
     <BottamofLogin/>
   </NSpace>
 </template>
 <script setup lang="ts">
 import TrapID from '@/components/TrapID.vue';
 import Passwordentry from '@/components/Passwordentry.vue';
 import BottamofLogin from '@/components/BottamofLogin.vue';
 import { NSpace } from 'naive-ui'
 </script>
 <style module lang="scss"></style>