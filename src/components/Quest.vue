<template>
  <NCard>
    <NLayout>
      <NLayoutContent>
        <NSpace vertical>
          <div v-for="item in quests" :key="item.title">
            <NButton dashed>
              {{ item.title }}
            </NButton>
          </div>
        </NSpace>
      </NLayoutContent>
    </NLayout>
  </NCard>
</template>

<script setup lang="ts">
import { NLayout, NLayoutContent, NCard, NButton, NSpace } from 'naive-ui'
import { ref } from 'vue'

export type QuestItem = {
  title: string
  kind: 'great' | 'good' | 'bad' | 'terrible'
  completion: boolean
}

const props = defineProps<{
  quests: QuestItem[]
}>()
</script>
