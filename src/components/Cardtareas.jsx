
import { FaTrash, FaEdit, FaCheck } from 'react-icons/fa';

function CardTareas (props){
 const {elemento}=props
 return(
    <div className="container">
        <div className="datos">
            <h2>{elemento.descripcion}</h2>
        </div>
        <div className="iconos">
          <button className='editar'> <FaEdit/></button>
          <button className='borrar'> <FaTrash/></button>
          <button className='completar'> <FaCheck/></button>
        </div>
    </div>
 )
}
export {CardTareas}