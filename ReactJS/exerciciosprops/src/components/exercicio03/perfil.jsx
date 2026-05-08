
import "./perfil.css"

function Perfil ( {nome, idade, profissao} ) {

    return (
     < p className="p"> 

     <span className="p__line">
        <strong>Nome do Funcionario:</strong>
        {nome}
     </span>

     <span className="p_line">
        <strong>Idade:</strong>
        {idade}
     </span>

     <span className="p_line">
        <strong>Profissão:</strong>
        {profissao}
     </span>
     
     </p> 
    )
}

export default Perfil

