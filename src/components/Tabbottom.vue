<template>
  <div class="tab-button" @click="toggleTab">
    <span>タブを開く</span>
  </div>
  <div v-if="showTab" class="tab-content">
    <!-- ここにタブの内容を書く -->
    <NCard>
      <h3>TrapID: {{ trapID }}</h3>
      <p>personalscore: {{ personalscore }}</p>
      <p>contens: {{ contens }}</p>
      <p>ranking: {{ ranking }}</p>
    </NCard>
    <!-- タブを閉じるボタン -->
    <button @click="closeTab">タブを閉じる</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { NCard } from 'naive-ui'

const showTab = ref(false) // タブの表示状態を管理する変数

// タブの表示状態を切り替える関数
const toggleTab = () => {
  showTab.value = !showTab.value
}

// タブを閉じる関数
const closeTab = () => {
  showTab.value = false
}

const trapID = ref('12345')
const personalscore = ref(100)
const contens = ref('This is the contents.')
const ranking = ref(1)
</script>

<style scoped lang="scss">
.tab-button {
  position: absolute; // 絶対位置指定
  top: 0; // 左上に配置
  left: 0;
  width: 100px; // 長方形の幅
  height: 50px; // 長方形の高さ
  background-color: lightblue; // 長方形の背景色
  display: flex; // フレックスボックスレイアウト
  align-items: center; // 縦方向に中央揃え
  justify-content: center; // 横方向に中央揃え
}

.tab-content {
  position: absolute; // 絶対位置指定
  top: 0; // 左上に配置
  left: 0;
  width: 50%; // 長方形の幅
  height: 100%; // 長方形の高さ
  background-color: rgb(35, 35, 35); // 長方形の背景色
}
</style>
