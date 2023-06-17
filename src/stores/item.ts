import { ref } from 'vue'
import { defineStore } from 'pinia'
import api, { type Item } from '@/api'

export const useItemStore = defineStore('item', () => {
  const items = ref<Item[]>([])
  const fetchItems = async () => {
    const resp = await api.item.itemGet()
    items.value = resp
  }

  return { items, fetchItems }
})
