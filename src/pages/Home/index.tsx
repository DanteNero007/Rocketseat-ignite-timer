import { HandPalm, Play } from 'phosphor-react'
import {HomeContainer, StartCountDownButton, StopCountDownButton } from './styles'
import { FormProvider, useForm  } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod';
import { NewCycleForm } from './components/NewCycleForm';
import { CountDown } from './components/CountDown';
import { CyclesContext } from '../../contexts/CyclesContext';
import { useContext } from 'react';


   
export function Home() {

  const { createNewCycle, interruptCycle, activeCycle } =  useContext(CyclesContext)
 
  const newCycleFormValidationSchema = zod.object({
    task: zod.string().min(1, 'informe a tarefa'),
    minutesAmount: zod.number().min(1, 'O intervaleo precisa ser de no minimo 5  minutos')
    .max(60, 'o intervalo precisa ser de no maximo 60 minutos'),
  })

  type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>


  const newCycleForm = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema ),
    defaultValues:{
      task:'',
      minutesAmount:0,
    }
 })

 const { handleSubmit, watch, reset  } = newCycleForm  

  

     //console.log(cycles)

    
  //  interface NewCycleFormData{
  //   task: string;
  //   minutesAmount: number;
  //  }
  
  

   
    //console.log(activeCycle)

    const task = watch('task')
    const isSubmitDisable = !task;

   //console.log(formState.errors);

   function handleCreateNewCycle(data: NewCycleFormData){
    createNewCycle(data);
    reset();
   }
   
   
  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)}  action="">        
        
        <FormProvider {...newCycleForm } >
          <NewCycleForm /> 
        </FormProvider>
        
        <CountDown />
      
       {activeCycle ?
        (
          <StopCountDownButton onClick={interruptCycle} type="submit">
          <HandPalm size={24} />
          Interromper
        </StopCountDownButton>
        ) :
        (
          <StartCountDownButton disabled={isSubmitDisable} type="submit">
          <Play size={24} />
          Começar
        </StartCountDownButton>
        )
      }
      
      </form>
    </HomeContainer>
  )
}
