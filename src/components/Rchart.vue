<template>
  <NCard>
    <NLayout>
      <NLayoutContent>
        <div style="border: 1px solid black; padding: 10px;">
          <Line :data="data" :options="options" />
        </div>
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
  PointElement
} from 'chart.js'
import type { Point } from 'node_modules/chart.js/dist/core/core.controller'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

const points: Point[] = [
  { x: 1, y: 3 },
  { x: 3, y: 9 },
  { x: 7, y: 1 },
  { x: 3, y: 4 }
]

const data: ChartData<'line'> = {
   labels: [1, 2, 3, 4, 5, 6, 7],
   datasets: [
    {
      borderColor: '#ae076f',
      data: points
    }
   ]
}

const options: ChartOptions<'line'> = {
    responsive: true,
    maintainAspectRatio: false
}
</script>
