<template>
  <NSpace vertical>
    <Rchart :daysScore="mockDaysScores" />
    <Rankinglist :ranking="mockRank" />
  </NSpace>
</template>
<script setup lang="ts">
import Rchart, { type DaysScore } from '@/components/Rchart.vue'
import Rankinglist, { type Rank } from '@/components/Rankinglist.vue'
import { NSpace } from 'naive-ui'
import { subDays } from 'date-fns'
import { onMounted, ref } from 'vue'
import api from '@/api'

const ranks = ref<Rank[]>([])
const daysScores = ref<DaysScore[]>([])

onMounted(async () => {
  // const rankingData = (await api.user.userRankingGet(100)).data
  // ranks.value = rankingData.map((v) => {
  //   return {
  //     uid: v.uid,
  //     score: v.dataset!.map((item) => item.score!).reduce((sum, item) => sum + item, 0)
  //   }
  // })
  ranks.value = mockRank
  daysScores.value = mockDaysScores
})

const mockRank: Rank[] = [
  { uid: 'itt', score: 20 },
  { uid: 'itt4', score: 13 },
  { uid: 'itt3', score: 15 },
  { uid: 'itt2', score: 10 }
]
const mockDaysScores: DaysScore[] = [
  {
    uid: 'itt2',
    scores: [
      {
        day: subDays(new Date(), 3),
        score: 5
      },
      {
        day: subDays(new Date(), 2),
        score: 3
      },
      {
        day: subDays(new Date(), 1),
        score: 4
      }
    ]
  },
  {
    uid: 'itt',
    scores: [
      {
        day: subDays(new Date(), 3),
        score: 3
      },
      {
        day: subDays(new Date(), 2),
        score: 2
      },
      {
        day: subDays(new Date(), 1),
        score: 4
      }
    ]
  }
]
</script>
<style module lang="scss"></style>
