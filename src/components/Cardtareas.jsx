import { FaTrash, FaEdit, FaCheck } from 'react-icons/fa';
import { useState } from 'react';

function CardTareas(props) {
  const { elemento , onBorrar, onEditar} = props;
  
  const [completada, setCompletada] = useState(false);

  const handleBorrar = () => {
    onBorrar(elemento);
  };

  const handleEditar = () => {
    onEditar(elemento);
  };

  const toggleCompletada = () => {
    setCompletada(!completada);
  };

  const tareaClase = `container ${completada ? 'completada' : ''}`;

  return (
    <div className={tareaClase}>
      <div className="datos">
        <h2>{elemento.descripcion}</h2>
      </div>
      <div className="iconos">
        <button className='editar' onClick={handleEditar}> <FaEdit /></button>
        <button className='borrar' onClick={handleBorrar}> <FaTrash /></button>
        <button className={`completar ${completada ? 'completada' : ''}`} onClick={toggleCompletada}>
          <FaCheck color={completada ? '' : 'black'} /> {/* Cambiar el color del icono según el estado */}
        </button>
      </div>
    </div>
  );
}

export { CardTareas }
