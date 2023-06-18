<template>
  <NSpace vertical>
    <NSpace between>
      <Todayscore :score="todayScore!" />
      <Todayranking :rank="todayRank!" />
    </NSpace>
    <Quest :quests="myQuests" />
    <Addquest />
    <!-- <Grass /> -->
    <Tabbotton />
  </NSpace>
</template>

<script setup lang="ts">
import Grass from '@/components/Grass.vue'
import Quest, { type QuestItem } from '@/components/Quest.vue'
import Todayscore from '@/components/Todayscore.vue'
import Todayranking from '@/components/Todayranking.vue'
import Addquest from '@/components/Addquest.vue'
import Tabbotton from '@/components/Tabbottom.vue'
import { NSpace } from 'naive-ui'
import { onMounted, ref } from 'vue'
import { useMeStore } from '@/stores/me'
import { storeToRefs } from 'pinia'
import api from '@/api'

const meStore = useMeStore()
const { me, todayRank, todayScore, myQuests } = storeToRefs(meStore)
onMounted(async () => {
  meStore.fetchMe()
})
</script>

<style module lang="scss"></style>
