
import { Button } from '@chakra-ui/react'
import { Input } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'


function Header() {
  return (
    <div >
      <h1>Lista de Tareas</h1>
    </div>
  );
}

function Barra(props) {
  const { data, descripcion, setDescripcion, tareaEditable, setTareaEditable, act } = props;

  const agregarDescripcion = () => {
    if (descripcion.trim() !== '') {
      if (tareaEditable) {
        const nuevasTareas = data.map((tarea) =>
          tarea === tareaEditable
            ? { id: tarea.id, descripcion, completada: tarea.completada }
            : tarea
        );

        act(nuevasTareas);
        setTareaEditable(null);
      } else {
        const newId = data.length > 0 ? Math.max(...data.map((tarea) => tarea.id)) + 1 : 1;
        act([...data, { id: newId, descripcion, completada: false }]);
      }
      setDescripcion('');
    }
  };

  return (
    <div>
      <div className="add">
        <Input
          marginTop={4}
          type="text"
          placeholder="Agrega tu tarea"
          className="input"
          value={descripcion}
          onKeyDown={(event) => {
            if (event.key === 'Enter') {
              agregarDescripcion(); // Llama a la función sin argumentos
            }
          }}
          onChange={(e) => setDescripcion(e.target.value)}
        />
        <Button colorScheme='blue' variant='solid' marginTop={4}  marginLeft={3}  onClick={agregarDescripcion}>
          {tareaEditable ? 'Guardar' : '+'}
        </Button>
      </div>
      <div className="pendiente">
        <Text as='abbr'>Tareas: {data.length}</Text>
      </div>
    </div>
  );
}

export { Header, Barra };
