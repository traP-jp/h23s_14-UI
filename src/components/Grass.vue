<template>
  <NCard>
    <NLayout :native-scrollbar="false">
      <div :class="$style.container">
        <div
          :class="$style.weekText"
          v-for="i in ['S', 'M', 'T', 'W', 'T', 'F', 'S']"
          :key="i"
          :style="{ justifySelf: 'right' }"
        >
          {{ i }}
        </div>
        <div v-for="i in fixedScores" :key="i.date.toString()">
          <div
            v-if="i.label === 'item'"
            :class="$style.grass"
            :style="{ backgroundColor: grassColor(i.score) }"
          />
          <div v-else></div>
        </div>
      </div>
    </NLayout>
    {{ fixedScores }}
  </NCard>
</template>
<script setup lang="ts">
import { compareAsc, getDay, subDays } from 'date-fns'
import { NCard, NLayout } from 'naive-ui'
import { computed } from 'vue'

const props = defineProps<{
  scores: { date: Date; score: number }[]
  threshold: number[]
}>()
type FixedScore =
  | {
      label: 'item'
      date: Date
      score: number
    }
  | { label: 'empty'; date: Date }

const fixedScores = computed(() => {
  const sorted = props.scores.sort((a, b) => compareAsc(b, a)).reverse()
  const firstWeek = getDay(sorted[0].date)
  const emptyArr: { label: 'empty'; date: Date }[] = new Array(firstWeek)
    .fill({ label: 'empty', date: Date() })
    .map((_, i) => {
      return {
        label: 'empty',
        date: subDays(sorted[0].date, firstWeek - i)
      }
    })
  console.log(emptyArr)
  return [
    ...emptyArr,
    ...props.scores.map((x) => {
      return { label: 'item', date: x.date, score: x.score }
    })
  ]
})
const grassColor = (x: number) => {
  if (x < 0) {
    return '#ffffff00'
  } else if (x < props.threshold[0]) {
    return '#aaaaaa'
  } else if (x < props.threshold[1]) {
    return '#999999'
  } else if (x < props.threshold[2]) {
    return '#777777'
  } else if (x < props.threshold[3]) {
    return '#222222'
  } else {
    return '#000000'
  }
}
</script>

<style module lang="scss">
.container {
  overflow-x: scroll;
  min-width: 0px;
  display: grid;
  grid-auto-flow: column;
  gap: 4px;
  justify-content: start;
  grid-template-rows: repeat(7, 12px);
  grid-auto-columns: 12px;
  align-items: center;
}
.grass {
  height: 12px;
  width: 12px;
  background-color: green;
}
.weekText {
  font-size: 12px;
}
</style>
