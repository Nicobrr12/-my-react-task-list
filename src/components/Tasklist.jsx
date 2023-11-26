import { CardTareas } from "./Cardtareas";
function TaskList(props) {
  const {
    listaDeTareas,
    onBorrar,
    onEditar,
    titulo,
    setTitulo,
    setData,
    data,
    tareaEditable,
    setTareaEditable
  } = props;

  return (
    <div>
      {listaDeTareas.map((elemento, index) => (
        <CardTareas
          key={index}
          elemento={elemento}
          onBorrar={onBorrar}
          onEditar={onEditar}
          titulo={titulo}
          setTitulo={setTitulo}
          setData={setData}
          data={data}
          tareaEditable={tareaEditable}
          setTareaEditable={setTareaEditable}
        />
      ))}
    </div>
  );
}

export default TaskList;