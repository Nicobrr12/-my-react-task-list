// Importaciones de bibliotecas y estilos
import React, { useState, useEffect } from 'react';
import { ChakraProvider } from '@chakra-ui/react'
import './App.css';
import { Header } from './components/Header';
import TaskList from './components/Tasklist';
import { Barra } from './components/Header';
import { Button} from '@chakra-ui/react'
import { Input } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'

// Componente de formulario de inicio de sesión
function LoginForm({ onLogin, setError }) {
  const [usuario, setUsuario] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (usuario.trim().toLowerCase() === 'nicolas') {
      onLogin(usuario);
      setError(null);
    } else {
      setError('Usuario incorrecto');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
      <Text as='abbr'>Nombre de Usuario: Nicolas</Text>
         
        <Input
        marginTop={3}
        placeholder="Ingrese su Usuario"
          type="text"
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
        />
      </label>
      <Button marginTop={3} type="submit">Iniciar Sesión</Button>
    </form>
  );
}

// Componente principal de la aplicación
function App() {
  // Estados de la aplicación
  const [data, setData] = useState([]);
  const [descripcion, setDescripcion] = useState('');
  const [tareaEditable, setTareaEditable] = useState(null);
  const [completada, setCompletada] = useState(false);
  const [sesionIniciada, setSesionIniciada] = useState(false);
  const [error, setError] = useState(null);

  // Efecto para cargar datos desde el almacenamiento local al inicio
  useEffect(() => {
    const local = JSON.parse(localStorage.getItem('Task'));
    if (local) {
      setData(local);
    }
  }, []);

  // Función para actualizar las tareas
  function actualizarTareas(datos) {
    localStorage.setItem('Task', JSON.stringify(datos));
    setData(datos);
  }

  // Función para manejar la edición de tareas
  const handleEditar = (tareaAEditar) => {
    setTareaEditable(tareaAEditar);
  };

  

  // Función para borrar una tarea
  const handleBorrar = (tareaABorrar) => {
    const nuevasTareas = data.filter((tarea) => tarea !== tareaABorrar);
    setData(nuevasTareas);
  };

  // Función para borrar la lista completa de tareas
  const handleBorrarLista = () => {
    setData([]);
  };

  // Función para manejar el inicio de sesión
  const handleLogin = () => {
    setSesionIniciada(true);
    setError(null);
  };

  // Función para manejar el cierre de sesión
  const handleLogout = () => {
    setSesionIniciada(false);
    setError(null);
  };

  // Renderizado del componente
  return (
    <div className="lista">
      <ChakraProvider>

      <Header />

      {/* Condicional renderizado basado en el estado de inicio de sesión */}
      {sesionIniciada ? (
        <>
          <Barra
            setData={setData}
            data={data}
            descripcion={descripcion}
            setDescripcion={setDescripcion}
            tareaEditable={tareaEditable}
            setTareaEditable={setTareaEditable}
            act={actualizarTareas}
          />
          <TaskList
            listaDeTareas={data}
            onBorrar={handleBorrar}
            onEditar={handleEditar}
            completada={completada}
            setCompletada={setCompletada}
          />
          <Button  colorScheme='red'className="borrartodo" onClick={handleBorrarLista}>
            Borrar lista
          </Button>
          <Button  colorScheme='gray'onClick={handleLogout}>Cerrar Sesión</Button>
        </>
      ) : (
        <>
          <LoginForm onLogin={handleLogin} setError={setError} />
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </>
      )}
      </ChakraProvider>
    </div>
  );
}

// Exportación del componente principal
export default App;
