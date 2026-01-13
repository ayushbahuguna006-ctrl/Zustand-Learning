
// Creating a store For State management Using zustand
   Storing Information further used in other components anytime information wants to be consumed by any other component
   // Fetching information by the components without props drilling direct one to one interaction between parents and child component between which information is being shared
   // No use of Boiler plates as in Redux


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

