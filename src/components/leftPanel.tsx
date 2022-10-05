import { Input } from './input'
import '../styles/components/leftPanel.sass'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import api from '../services/api'
import { useSimulation } from '../providers/simulation' 

interface Simulation {
  amount: number
  installments: number
  mdr: number
}

export const LeftPanel = () => {
  const { setList } = useSimulation()

  const simulationSchema = yup.object().shape({
    amount: yup.number().typeError('Obrigatório valor numérico').required('Campo obrigatório***'),
    installments: yup.number().typeError('Obrigatório valor numérico').max(12, 'Máximo de 12 parcelas').required('Campo obrigatório***'),
    mdr: yup.number().typeError('Obrigatório valor numérico').required('Campo obrigatório***'),
  })
  
  const { register, handleSubmit, formState: { errors } } = useForm<Simulation>({
    resolver: yupResolver(simulationSchema)  
  })
  
  const handleSimulation = handleSubmit((data) => {
    api.post('', data, { headers: { 'Content-Type': 'application/json' }}
    ).then(response => setList(response.data))
    .catch((err) => console.log(err))      
  })
  
  return (
  <div id="leftPanel">
    <h2>Simule sua Antecipação</h2>
    <form onSubmit={handleSimulation}>
      <Input name='amount' register={register} label='Informe o valor da venda *' placeholder='ex: R$1.000,00'/>
      <span>{errors.amount?.message}</span>

      <Input name='installments' register={register} label='Número de parcelas *' placeholder='ex: 4'/>
      <span>{errors.installments?.message}</span>
      <p>Máximo de 12 parcelas</p>

      <Input name='mdr' register={register} label='Percentual de MDR *' placeholder='ex: 1 ou 1.6'/>
      <span>{errors.mdr?.message}</span>

      <button type='submit'>Calcular</button>
    </form>
  </div>
  )
}
