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
