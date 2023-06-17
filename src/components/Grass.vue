<template>
  <div>
    <NCard>
      <NLayout :native-scrollbar="false" bordered>
        <div :class="$style.container">
          <div v-for="i in days">
            <div :class="$style.grass" />
          </div>
        </div>
      </NLayout>
    </NCard>
  </div>
</template>
<script setup lang="ts">
import { NCard, NLayout } from 'naive-ui'
import { ref } from 'vue'

const days = ref(Array(183).fill(0))
</script>

<style module lang="scss">
.container {
  width: 100%;
  height: 100%;
  gap: 6px;
  display: grid;
  grid-auto-flow: column;
  grid-template-rows: repeat(5, 1fr);
}
.grass {
  height: 12px;
  width: 12px;
  background-color: green;
}
</style>
