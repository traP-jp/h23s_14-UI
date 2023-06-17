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
        <div v-for="i in scores">
          <div :class="$style.grass" :style="{ backgroundColor: grassColor(i.score) }" />
        </div>
      </div>
    </NLayout>
  </NCard>
</template>
<script setup lang="ts">
import { NCard, NLayout, NLayoutContent } from 'naive-ui'
import { ref, computed } from 'vue'

const props = defineProps<{
  scores: { date: Date; score: number }[]
  threshold: number[]
}>()
const fixedScores = computed(() => {
  // const d = props.scores[0].date.getWeek
  return 1
})
const grassColor = (x: number) => {
  if (x < props.threshold[0]) {
    return '#ffffff'
  } else if (x < props.threshold[1]) {
    return '#aaaaaa'
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
