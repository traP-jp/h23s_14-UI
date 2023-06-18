import { ref, computed } from 'vue'
import { defineStore, storeToRefs } from 'pinia'
import api, { ItemPostScoreEnum, type Item, type User } from '@/api'
import { useItemStore } from './item'
import { parse } from 'date-fns'

type QuestItem = {
  title: string
  kind: 'great' | 'good' | 'bad' | 'terrible'
  completion: boolean
}
export const useMeStore = defineStore('me', () => {
  const me = ref<User | null>(null)
  const todayScore = ref<number | null>(null)
  const todayRank = ref<number | null>(null)

  const { items } = storeToRefs(useItemStore())
  const fetchMe = async () => {
    // me.value = (await api.user.getMe()).data
    todayScore.value = 1
    todayRank.value = 4
  }
  const myQuests = computed((): QuestItem[] => [
    {
      title: 'あああああああああああああ',
      kind: 'good',
      completion: false
    },
    {
      title: 'ああああああああああああ',
      kind: 'bad',
      completion: false
    },
    {
      title: 'いいいいいいいいいいい',
      kind: 'terrible',
      completion: true
    },
    {
      title: 'うううううううううううううう',
      kind: 'great',
      completion: false
    }
  ])
  // items.value.map((item) => {})
  const reportTask = async () => {}

  return { me, fetchMe, myQuests, reportTask, todayScore, todayRank }
})
