<template>
  <NCard>
    <NLayout>
      <NLayoutContent style="overflow-y: auto; height: 200px;">
        <div v-for="(item, index) in items" :key="item">
          {{ index + 1 }}位: {{ item }}
        </div>
      </NLayoutContent>
    </NLayout>
  </NCard>
</template>

<script setup lang="ts">
import { NLayout, NLayoutContent, NCard } from 'naive-ui'
import { ref } from 'vue'

const items = ref([
  'hoge',
  'hogeaaaaaaaaaaaaaa',
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
