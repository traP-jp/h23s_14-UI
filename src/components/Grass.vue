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
          <div :class="$style.grass" />
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
}>()
const fixedScores = computed(() => {
  // const d = props.scores[0].date.getWeek
  return 1
})
</script>

<style module lang="scss">
.container {
  // width: 100%;
  overflow-x: scroll;
  height: 160px;
  min-width: 0px;
  gap: 6px;
  display: grid;
  grid-auto-flow: column;
  gap: 8px;
  justify-content: start;
  grid-template-rows: repeat(7, 12px);
  grid-auto-columns: auto;
  align-items: center;
}
.grass {
  height: 16px;
  width: 16px;
  background-color: green;
}
.weekText {
  font-size: 12px;
}
</style>
