<template>
  <NCard>
    <NLayout>
      <NLayoutContent style="overflow-y: auto; height: 200px;">
        <div v-for="item in items" :key="item">
          <NCheckbox class="custom-checkbox">{{ item }}</NCheckbox>
        </div>
      </NLayoutContent>
    </NLayout>
  </NCard>
</template>

<script setup lang="ts">
import { NLayout, NLayoutContent, NCheckbox, NCard } from 'naive-ui'
import { ref } from 'vue'

const items = ref([
  'hoge',
  'hoge'
])
</script>

<style scoped>
.custom-checkbox {
  font-size: 18px;
  color: #fff;
}

.custom-checkbox input[type="checkbox"] {
  width: 20px;
  height: 20px;
}

.custom-checkbox input[type="checkbox"]:checked + label:before {
  content: "\2713";
  color: #000000;
}

body {
  background-color: #ffffff;
}
</style>
