import './App.css';
import { Header } from './components/Header';
import TaskList from './components/Tasklist';
import { Barra } from './components/Header';

import { useState , useEffect} from 'react';

function App() {
  const [data, setData] = useState([]);
  const [descripcion, setDescripcion] = useState('');
  const [tareaEditable, setTareaEditable] = useState(null);
  const [completada, setCompletada] = useState(false);
  useEffect(()=>{
  const local =JSON.parse(localStorage.getItem("Task"))
  if (local){
   setData(local)
  }},[])
  function act(datos){
    localStorage.setItem("Task", JSON.stringify(datos))
    setData(datos)
  }
  const handleEditar = (tareaAEditar) => {
    setTareaEditable(tareaAEditar);
  };

  const handleGuardarEdicion = () => {
    setTareaEditable(null);
  };

  const handleBorrar = (tareaABorrar) => {
    const nuevasTareas = data.filter((tarea) => tarea !== tareaABorrar);
    setData(nuevasTareas);
  };

  const handleBorrarLista = () => {
    setData([]); 
  };

  return (
    <div className="lista">
      <Header />
      <Barra setData={setData} data={data} descripcion={descripcion} setDescripcion={setDescripcion} tareaEditable={tareaEditable} setTareaEditable={setTareaEditable} act={act}/>
      <TaskList listaDeTareas={data} onBorrar={handleBorrar} onEditar={handleEditar} completada={completada} setCompletada={setCompletada} />
      <button className="borrartodo" onClick={handleBorrarLista}>Borrar lista</button>
    </div>
  );
}

export default App;
