
// Creating a store For State management Using zustand
   Storing Information further used in other components anytime information wants to be consumed by any other component
   



import { create } from 'zustand'

export const usecount = create((set) => ({
 count:0,
 inccount:(num)=>{
    set((state)=>({count:state.count+num}))
 },
 deccount:(num)=>{
    set((state)=>({count:state.count-num}))
 }
}))

