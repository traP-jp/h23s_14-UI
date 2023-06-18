<template>
  <NCard>
    <NLayout>
      <NLayoutContent>
        <!-- <div style="border: 1px solid black; padding: 10px"> -->
        <Line :data="data" :options="options" />
        <!-- </div> -->
      </NLayoutContent>
    </NLayout>
  </NCard>
</template>

<script setup lang="ts">
import { NLayout, NLayoutContent, NRadio, NCard } from 'naive-ui'
import { Line } from 'vue-chartjs'
import {
  Chart as ChartJS,
  type ChartData,
  type ChartOptions,
  CategoryScale,
  LinearScale,
  LineElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  type ChartDataset
} from 'chart.js'
import type { Point } from 'node_modules/chart.js/dist/core/core.controller'
import { computed } from 'vue'
import { compareAsc, daysInWeek, format } from 'date-fns'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

export type DaysScore = {
  uid: string
  scores: {
    day: Date
    score: number
  }[]
}
const props = defineProps<{
  daysScore: DaysScore[]
}>()

const fixedScore = computed(() =>
  props.daysScore.map(({ uid, scores }) => {
    const sortedArr = Array.from(scores).sort((a, b) => compareAsc(a.day, b.day))
    let accumScores = Array.from(sortedArr)
    for (let i = 1; i < accumScores.length; ++i) {
      accumScores[i].score += accumScores[i - 1].score
    }
    const ret: ChartDataset<'line', (number | null)[]> = {
      label: uid,
      data: accumScores.map((x) => x.score),
      backgroundColor: randomColor()
    }
    return ret
  })
)

const randomColor = () => {
  const r = () => Math.floor(Math.random() * 255)
  return `rgb(${r()},${r()},${r()})`
}

const data: ChartData<'line'> = {
  labels: props.daysScore[0].scores.map((s) => format(s.day, 'MM/dd')),

  datasets: fixedScore.value
}

const options: ChartOptions<'line'> = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    x: {
      display: true
    },
    y: {
      display: true
    }
  }
}
</script>
