import { FaTrash, FaEdit, FaCheck } from 'react-icons/fa';
import { useState } from 'react';
import { Button, Text, HStack, Input } from '@chakra-ui/react';

function CardTareas(props) {
  const { elemento, onBorrar, onEditar, tareaEditable, setTareaEditable } = props;
  const [editando, setEditando] = useState(false);
  const [nuevoTitulo, setNuevoTitulo] = useState(elemento.titulo || ''); // Valor inicial con el título actual
  const [nuevaDescripcion, setNuevaDescripcion] = useState(elemento.descripcion || ''); // Valor inicial con la descripción actual
  const [textDecoration, setTextDecoration] = useState(elemento.completada ? 'line-through' : 'none'); // Estado para gestionar la propiedad textDecoration

  const handleBorrar = () => {
    onBorrar(elemento);
  };

  const handleEditar = () => {
    onEditar(elemento);
    setTareaEditable(elemento);
    setEditando(true);
  };

  const aceptarCambios = () => {
    // Aceptar los cambios y salir del modo de edición
    onEditar({ ...elemento, titulo: nuevoTitulo, descripcion: nuevaDescripcion });
    setEditando(false);
    setTareaEditable(null);
  };

  const toggleCompletada = () => {

    // Cambiar la propiedad textDecoration al hacer clic
    setTextDecoration((prevDecoration) => (prevDecoration === 'line-through' ? 'none' : 'line-through'));
  };

  const tareaClase = `container ${elemento.completada ? 'completada' : ''}`;

  return (
    <div className={tareaClase} style={{ marginBottom: '10px', padding: '10px', border: '1px solid #ddd', borderRadius: '5px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
      <HStack align="center">
        {editando ? (
          <>
            {/* No hay campos de entrada durante la edición */}
            <Button
              onClick={aceptarCambios}
              variant="outline"
              colorScheme="teal"
              size="sm"
            >
              Aceptar
            </Button>
          </>
        ) : (
          <Text
            as='abbr'
            fontSize="lg"
            fontWeight="bold"
            textDecoration={textDecoration}
            marginLeft={20}
            flex="1"
          >
            {elemento.titulo && <span>{elemento.titulo}: </span>}
            {elemento.descripcion}
          </Text>
        )}
        <HStack>
          <Button
            onClick={() => {
              setTareaEditable(elemento);
              handleEditar(elemento);
            }}
            variant="outline"
            colorScheme={editando ? 'green' : 'teal'}
            size="sm"
          >
            <FaEdit />
          </Button>
          <Button
            colorScheme='red'
            onClick={handleBorrar}
            variant="outline"
            size="sm"
          >
            <FaTrash />
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={toggleCompletada} // Llamar a la función para cambiar la propiedad textDecoration
          >
            <FaCheck style={{ textDecoration }} />
          </Button>
        </HStack>
      </HStack>
    </div>
  );
}

export { CardTareas };
