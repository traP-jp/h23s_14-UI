import api, { type User } from '@/api'
import { parse } from 'date-fns'
import { ref } from 'vue'

export const useUserData = (uid: string) => {
  const userData = ref<User | null>(null)
  const fetchUserData = async () => {
    userData.value = (await api.user.getUser(uid)).data
  }
  const getHistory = () => {
    userData.value?.list?.map((item) => {
      return {
        date: parse(item.date!, 'yyyy-MM-dd', new Date()),
        score: item.score!
      }
    })
  }
  return {
    userData,
    fetchUserData,
    getHistory
  }
}
