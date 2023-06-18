<template>
    <NCard>
      <NLayout>
        <NLayoutContent>
          <div style="display: flex; align-items: center;">
            <span style="font-size: 24px; margin-right: 10px;">タイトル</span>
            <NSelect v-model="score" :options="options" style="width: 100px;" />
          </div>
          <NInput v-model="title" style="border: 1px solid black; padding: 10px; margin-top: 10px;" />
        </NLayoutContent>
      </NLayout>
    </NCard>
  </template>
  
  <script setup lang="ts">
  import { NLayout, NLayoutContent, NSelect, NInput, NCard } from 'naive-ui'
  import { ref } from 'vue'
  
  const score = ref(null)
  const title = ref('')
  const options = [
    { label: '-2', value: '-2' },
    { label: '-1', value: '-1' },
    { label: '1', value: '1' },
    { label: '2', value: '2' }
  ]
  </script>
  
  <style>
  .n-select {
    --select-border-color-hover: #4fc08d;
    --select-border-color-focus: #4fc08d;
  }
  </style>
  