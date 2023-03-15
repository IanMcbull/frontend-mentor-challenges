import {defineStore} from "pinia"
import { reactive } from "vue"
import reactionIcon from "@/assets/images/icon-reaction.svg"
import memoryIcon from "@/assets/images/icon-memory.svg"
import verbalIcon from "@/assets/images/icon-verbal.svg"
import visionIcon from "@/assets/images/icon-visual.svg"
export const useDataStore = defineStore('data',()=>{
  const userData = reactive([
    {
      "category": "Reaction",
      "score": 80,
      "text-color":"text-Light-red",
      "bg-color":"bg-Light-red-transparent",
      "icon": reactionIcon
    },
    {
      "category": "Memory",
      "score": 92,
      "text-color":"text-Orange-yellow",
      "bg-color":"bg-Orange-yellow-transparent",
      "icon": memoryIcon
    },
    {
      "category": "Verbal",
      "score": 61,
      "text-color":"text-Green-teal",
      "bg-color":"bg-Green-teal-transparent",
      "icon": verbalIcon
    },
    {
      "category": "Visual",
      "score": 72,
      "text-color":"text-Cobalt-blue",
      "bg-color":"bg-Cobalt-blue-transparent",
      "icon": visionIcon
    }
  ])
  return {
        userData    
  }
})