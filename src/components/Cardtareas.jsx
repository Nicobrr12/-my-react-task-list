import { FaTrash, FaEdit, FaCheck } from 'react-icons/fa';
import { useState } from 'react';
import { Button, ButtonGroup } from '@chakra-ui/react'

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
      <div >
        <Button marginRight={1} onClick={handleEditar}> <FaEdit /></Button>
        <Button marginRight={1}colorScheme='red' onClick={handleBorrar}> <FaTrash /></Button>
        <Button className={`completar ${completada ? 'completada' : ''}`} onClick={toggleCompletada}>
          <FaCheck color={completada ? '' : 'blue'} /> {/* Cambiar el color del icono según el estado */}
        </Button>
      </div>
    </div>
  );
}

export { CardTareas }
