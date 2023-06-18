<template>
    <NCard>
      <NLayout>
        <NLayoutContent style="overflow-y: auto; height: 200px;">
          <div v-for="item in items" :key="item">
            <NRadio>{{ item }}</NRadio>
          </div>
        </NLayoutContent>
      </NLayout>
    </NCard>
  </template>
  
  <script setup lang="ts">
  import { NLayout, NLayoutContent, NRadio, NCard } from 'naive-ui'
  import { ref } from 'vue'
  
  const items = ref([
    'hoge',
    'hogeaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
    'hogeaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
    'hoge',
    'hoge',
    'hoge',
    'hoge',
    'hoge',
    'hoge',
    'hoge',
    'hoge',
    'hoge',
    'hoge',
    'hoge',
    'hoge',
    'hoge'
  ])
  </script>