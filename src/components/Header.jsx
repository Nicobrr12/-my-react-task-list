function Header (){
    return (
        <div>
            <h1>Lista React</h1>
        </div>
    )
}

function Barra(){
    return(
        <div className="add">
        <input type="text" placeholder="Agrega tu tarea" className="input"/>
        <button className="agregar" style={{color:"blue"}}>+</button>
        <p className="pendiente">Tareas pendientes: 3</p>
        </div>
    )
}


export {Header}
export {Barra}