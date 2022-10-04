import '../styles/components/rightPanel.sass'
import { useSimulation } from '../providers/simulation' 
import { useState } from 'react'

export const RightPanel = () => {
  const { list } = useSimulation()
  // const [arrayList, setArrayList] = useState<string[]>([])

  // const renderSimulation = () => {
  //   for (const [key, value] of Object.entries(list)) {
  //     console.log(key + ' ' + value)

  //     setArrayList([...arrayList, key[value]])
  //   }
  // }

    let one = Number(list[1]) / 100
    let fifteen = Number(list[15]) / 100
    let thirty = Number(list[30]) / 100
    let ninethy = Number(list[90]) / 100

  return (
    <div id='rightPanel'>
      <h4>VOCÊ RECEBERÁ:</h4>
      <p>Amanhã: <span>{one ? one.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) : 'R$ 0,00'}</span></p>
      <p>Em 15 dias: <span>{fifteen ? fifteen.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) : 'R$ 0,00'}</span></p>
      <p>Em 30 dias: <span>{thirty ? thirty.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) : 'R$ 0,00'}</span></p>
      <p>Em 90 dias: <span>{ninethy ? ninethy.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) : 'R$ 0,00'}</span></p>
    </div>
  )
}