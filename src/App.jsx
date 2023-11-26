import React, { useState, useEffect } from 'react';
import { Routes } from 'react-router-dom';
import { ChakraProvider, Box, Center, Button, extendTheme, useColorMode } from "@chakra-ui/react";
import {Header} from './components/Header';
import TaskList from './components/Tasklist';
import { Barra } from './components/Header';

const theme = extendTheme({
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
});

const DarkModeToggle = () => {
  const { toggleColorMode } = useColorMode();

  return (
    <Button marginTop={8} marginLeft={4} onClick={toggleColorMode}>
      Modo Oscuro
    </Button>
  );
};

function App() {
  const [data, setData] = useState([]);
  const [descripcion, setDescripcion] = useState('');
  const [titulo, setTitulo] = useState("");
  const [tareaEditable, setTareaEditable] = useState(null);
  const [completada, setCompletada] = useState(false);

  useEffect(() => {
    const local = JSON.parse(localStorage.getItem('Task'));
    if (local) {
      setData(local);
    }
  }, []);

  function actualizarTareas(datos) {
    localStorage.setItem('Task', JSON.stringify(datos));
    setData(datos);
  }

  const handleEditar = (tareaAEditar) => {
    setTareaEditable(tareaAEditar);
  };

  const handleBorrar = (tareaABorrar) => {
    const nuevasTareas = data.filter((tarea) => tarea !== tareaABorrar);
    setData(nuevasTareas);
  };

  const handleBorrarLista = () => {
    setData([]);
  };

  return (
    <Center >
      <Box mx="500">
        <ChakraProvider theme={theme}>
          <Header />
          <Barra
            setData={setData}
            data={data}
            descripcion={descripcion}
            setDescripcion={setDescripcion}
            titulo={titulo}
            setTitulo={setTitulo}
            tareaEditable={tareaEditable}
            setTareaEditable={setTareaEditable}
            act={actualizarTareas}
          />
          <TaskList
            listaDeTareas={data}
            titulo={titulo}
            setTitulo={setTitulo}
            onBorrar={handleBorrar}
            onEditar={handleEditar}
            completada={completada}
            setCompletada={setCompletada}
            setData={setData}
            data={data}
            tareaEditable={tareaEditable}
            setTareaEditable={setTareaEditable}
          />
          <Button marginTop={8} marginLeft={4} colorScheme='red' className="borrartodo" onClick={handleBorrarLista}>
            Borrar lista
          </Button>
          <DarkModeToggle></DarkModeToggle>
        </ChakraProvider>
      </Box>
    </Center>
  );
}

export default App;
