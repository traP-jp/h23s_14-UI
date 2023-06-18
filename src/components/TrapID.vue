<template>
    <NCard>
      <NLayout>
        <NLayoutContent>
          <span style="font-size: 24px;">TrapID</span>
          <div style="border: 1px solid black; padding: 10px;">
            <input v-model="text" placeholder="ここに入力してください">
            <p>{{ text }}</p>
          </div>
        </NLayoutContent>
      </NLayout>
    </NCard>
  </template>
  
  <script setup lang="ts">
  import { NLayout, NLayoutContent, NCard } from 'naive-ui'
  import { ref } from 'vue'
  
  const text = ref('')
  </script>
  