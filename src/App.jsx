import './App.css'
import { Header } from './components/Header'
import TaskList from './components/Tasklist'
import { Barra } from './components/Header'
function App() {


  return (
    <>
      <div className='lista'>
        <Header></Header>
        <Barra></Barra>
        <TaskList/>
        
        <button className='borrartodo'>Borrar lista</button>
      </div>
      
    </>
  )
}

export default App
