import React from "react";
import { CardTareas } from "./Cardtareas";

function TaskList(props) {
  const { listaDeTareas, onBorrar ,onEditar} = props;

  return (
    <div>
      {listaDeTareas.map((elemento, index) => (
        <CardTareas key={index} elemento={elemento} onBorrar={onBorrar} onEditar={onEditar}  />
      ))}
    </div>
  );
}

export default TaskList;
