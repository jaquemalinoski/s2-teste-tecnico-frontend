import { LeftPanel } from '../components/leftPanel'
import { RightPanel } from '../components/rightPanel'
import '../styles/pages/dashboard.sass'

export const Dashboard = () =>{
  return (
    <div id='dashboard'>
      <LeftPanel/>
      <RightPanel/>
    </div>
  )
}