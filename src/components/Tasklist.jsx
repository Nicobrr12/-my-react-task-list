import { listaDeTareas } from "../data";
import { CardTareas } from "./Cardtareas";
function TaskList() {
  
  return (
    <div>
     {
      listaDeTareas.map((elemento, index)=>{
       return(
        <CardTareas key ={index} elemento={elemento}/>
       )
      })
     }
 
    </div>
  )
}

export default TaskList;
