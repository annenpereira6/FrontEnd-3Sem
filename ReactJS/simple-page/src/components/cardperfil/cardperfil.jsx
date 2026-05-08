 import Luan from "../../assets/logoPerfil.jpg";
 import "./cardperfil.css"

function CardPerfil() {
    return (
        <div className="card-perfil">
        <img className="card-perfil__image" src={Luan} alt="image do usuario" /> 
        </div>
    )
}


export default CardPerfil