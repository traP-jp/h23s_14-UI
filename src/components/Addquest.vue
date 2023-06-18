<template>
  <NButton @click="onClick">
    <NLayout>
      <NLayoutContent>
        <span style="font-size: 24px"> + 項目追加</span>
      </NLayoutContent>
    </NLayout>
  </NButton>
  <NModal v-model:show="showDialog">
    <NCard
      style="width: 400px"
      title="項目追加"
      :bordered="true"
      size="huge"
      role="dialog"
      aria-modal="true"
    >
      <NInput v-model="itemTitle" />
      <NButton @click="onAddButtonClicked">追加</NButton>
    </NCard>
  </NModal>
</template>
<script setup lang="ts">
import api from '@/api'
import {
  NLayout,
  NLayoutContent,
  NRadio,
  NCard,
  NDialog,
  useDialog,
  NModal,
  NInput,
  NButton
} from 'naive-ui'
import { ref } from 'vue'
const showDialog = ref(false)
const itemTitle = ref('')
const onClick = () => {
  showDialog.value = true
}
const onAddButtonClicked = async () => {
  await api.item.itemPost(itemTitle.value, '', 'good')
  itemTitle.value = ''
  showDialog.value = false
}
</script>
