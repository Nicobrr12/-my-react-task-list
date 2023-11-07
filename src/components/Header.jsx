import React, { useState } from 'react';

function Header() {
  return (
    <div>
      <h1>Lista React</h1>
    </div>
  );
}

function Barra(props) {
  const {data, descripcion, setDescripcion, tareaEditable, setTareaEditable , act } = props;

  const agregarDescripcion = (descripcion) => {
    if (descripcion.trim() !== '') {
      if (tareaEditable) {
        const nuevasTareas = data.map((tarea) => {
          if (tarea === tareaEditable) {
            return { id: tarea.id, descripcion, completada: tarea.completada };
          }
          return tarea;
        });
       
        act(nuevasTareas);
        setTareaEditable(null);
      } else {
        // Genera un nuevo ID para la tarea
        const newId = data.length > 0 ? Math.max(...data.map((tarea) => tarea.id)) + 1 : 1;
       
        act([...data, { id: newId, descripcion, completada: false }]);
      }
      setDescripcion('');
    }
  };

  return (
    <div className="padre">
      <div className="add">
        <input
          type="text"
          placeholder="Agrega tu tarea"
          className="input"
          value={descripcion}
          onKeyDown={(event) => {if(event.key === 'Enter'){agregarDescripcion(descripcion)}}}
          onChange={(e) => setDescripcion(e.target.value)}
        />
        <button className="agregar" style={{ color: 'blue' }} onClick={agregarDescripcion}>
          {tareaEditable ? 'Guardar' : '+'}
        </button>
      </div>
      <div className="pendiente">
        <p>Tareas: {data.length}</p>
      </div>
    </div>
  );
}

export { Header, Barra };
