
import { useContext } from "react";
import { useFormContext } from "react-hook-form";
import { CyclesContext } from "../../../../contexts/CyclesContext";
import { FormContainer, MinutesAmountInput, TaskInput } from "./styles";



export function NewCycleForm(){
  
  const { activeCycle } = useContext(CyclesContext);
  const { register }  = useFormContext()  
  
  return(
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em </label>
          <TaskInput 
            type="text"
            id="task" 
            placeholder="De um nome para o seu projeto"
            list="task-suggestions"
            disabled ={!!activeCycle}
            {...register('task')}

          />
          <datalist id="task-suggestions">
            <option value="Projeto 1" />
            <option value="Projeto 2" />
            <option value="Projeto 3" />
            <option value="banana" />

          </datalist>

          <label htmlFor="minutesAmount">durante</label>
          
          <MinutesAmountInput 
            type="number" 
            id="minutesAmount" 
            placeholder="00"
            step={5}
            min={0}
            max={60}
            disabled ={!!activeCycle}
            {...register('minutesAmount',{ valueAsNumber: true })}
          />

          <span>minutes.</span>
        </FormContainer>

    )
}

