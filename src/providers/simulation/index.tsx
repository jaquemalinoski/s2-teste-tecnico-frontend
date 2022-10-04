import { createContext, useContext, useState } from 'react'

const SimulationContext = createContext({ list: '', setList: (list: '') => { } })

export const SimulationProvider = ({children}:any) => {
  const [list, setList] = useState<string>('')

  return (
    <SimulationContext.Provider value={{list, setList}}>
      {children}
    </SimulationContext.Provider>
  )
}

export const useSimulation = () => useContext(SimulationContext);
