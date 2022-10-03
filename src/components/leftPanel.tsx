import { Input } from './input'
import '../styles/components/leftPanel.sass'
// import CurrencyInput from 'react-currency-input-field'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

interface Simulation {
  value: number
  installments: number
  mdr: number
  days: number
}

export const LeftPanel = () => {
  const simulationSchema = yup.object().shape({
    value: yup.string().required('Campo obrigatório***'),
    installments: yup.string().required('Campo obrigatório***'),
    mdr: yup.string().required('Campo obrigatório***'),
    days: yup.string().required('Campo obrigatório***')
  })

  const { register, handleSubmit, formState: { errors } } = useForm<Simulation>({
    resolver: yupResolver(simulationSchema)  
  })

  const handleSimulation = handleSubmit((data) => {
    console.log(data)
  })

  console.log(errors.value?.message)

  return (
  <div id="leftPanel">
    <h2>Simule sua Antecipação</h2>
    <form onSubmit={handleSimulation}>
      <Input name='value' register={register} label='Informe o valor da venda *' placeholder='ex: R$1.000,00'/>
      <span>{errors.value?.message}</span>

      <Input name='installments' register={register} label='Número de parcelas *' placeholder='ex: 4'/>
      <span>{errors.installments?.message}</span>
      <p>Máximo de 12 parcelas</p>

      <Input name='mdr' register={register} label='Percentual de MDR *' placeholder='ex: 1.6'/>
      <span>{errors.mdr?.message}</span>

      <Input name='days' register={register} label='Dias a calcular *' placeholder='ex: 30, 40, 50, 60'/>
      <span>{errors.days?.message}</span>
      <p>Separado por vírgula</p>

      <button type='submit'>Calcular</button>
    </form>
  </div>
  )
}
