import { Cycle } from "./reducer";

export enum ActiveTypes{
    ADD_NEW_CYCLE = 'ADD_NEW_CYCLE',
    INTERRUPT_CURRENT_CYCLE = 'INTERRUPT_CURRENT_CYCLE',
    MARK_CURRENT_CYCLE_AS_FINISHED = 'MARK_CURRENT_CYCLE_AS_FINISHED',    
}

export function addNewCycleAction(newCycle: Cycle){
    return {
        type: ActiveTypes.ADD_NEW_CYCLE,
        payload:{
          newCycle
        }
       }
}

export function markupCurrentCycleAsFinishedAction(){
    return {
        type: ActiveTypes.MARK_CURRENT_CYCLE_AS_FINISHED ,
        // payload:{
        //   activeCycleId
        // }
      }
}

export function interruptCurrentCycleAction(){
    return {
        type:ActiveTypes.INTERRUPT_CURRENT_CYCLE,
      }
}













