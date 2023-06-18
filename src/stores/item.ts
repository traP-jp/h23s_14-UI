import { ref } from 'vue'
import { defineStore } from 'pinia'
import api, { ItemPostScoreEnum, type Item } from '@/api'

export const useItemStore = defineStore('item', () => {
  const items = ref<Item[]>([])
  const fetchItems = async () => {
    api.item
      .itemGet()
      .then((resp) => resp.data)
      .then((data) => {
        items.value = data
      })
  }

  const addItem = async (title: string, description: string, scoreEnum: ItemPostScoreEnum) => {
    api.item
      .itemPost(title, description, scoreEnum)
      .then((resp) => resp.data)
      .then((data) => items.value.push(data))
  }

  return { items, fetchItems, addItem }
})
