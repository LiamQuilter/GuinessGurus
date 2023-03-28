import { defineStore } from 'pinia'

export const usestoreComments = defineStore('storeComments', {
  state: () => {
    return { 
        count: 0 
    }
  },
})
