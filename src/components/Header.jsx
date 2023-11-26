import { Button, Input, Text, Flex } from '@chakra-ui/react';
import { useEffect } from 'react';



function Header() {
  return (
    <Flex align="center"  >
      <Text as="h1" fontSize="x3" fontWeight="bold" whiteSpace="nowrap">
        Lista de Tareas
      </Text>
    </Flex>
  );
}




const Barra = (props) => {
  const {
    data,
    titulo,
    setTitulo,
    descripcion,
    setDescripcion,
    tareaEditable,
    setTareaEditable,
    act
  } = props;

  useEffect(() => {
    // Actualiza el estado local del componente Barra cuando cambia la tareaEditable
    if (tareaEditable) {
      setTitulo(tareaEditable.titulo || '');
      setDescripcion(tareaEditable.descripcion || '');
    } else {
      // Limpia los campos cuando no hay tareaEditable
      setTitulo('');
      setDescripcion('');
    }
  }, [tareaEditable]);

  const agregarDescripcion = (event) => {
    event.preventDefault();

    // Validación: el título debe tener al menos 3 caracteres
    if (titulo.trim().length < 3) {
      alert('El título de la tarea debe tener al menos 3 caracteres.');
      return;
    }

    // Si pasa la validación, agregar o editar la tarea
    if (tareaEditable) {
      const nuevasTareas = data.map((tarea) =>
        tarea === tareaEditable ? { ...tarea, titulo, descripcion } : tarea
      );

      act(nuevasTareas);
      setTareaEditable(null);
    } else {
      act([...data, { titulo, descripcion, completada: false }]);
    }

    // Limpiar los campos
    setTitulo('');
    setDescripcion('');
  };

  return (
    <Flex direction="column" align="center" justify="center" py={4}>
      <form onSubmit={agregarDescripcion}>
        <Flex direction="column" align="center" justify="center" mb={4}>
          <Input
            type="text"
            placeholder="Agrega el título de la tarea"
            className="input"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            mb={3}
          />
          <Input
            type="text"
            placeholder="Agrega la descripción de la tarea"
            className="input"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            mb={3}
          />
          <Button colorScheme="blue" variant="solid" type="submit">
            Agregar
          </Button>
        </Flex>
      </form>
      <Text as="abbr" fontSize="md">
        Tareas: {data.length}
      </Text>
    </Flex>
  );
};

export { Header, Barra };
