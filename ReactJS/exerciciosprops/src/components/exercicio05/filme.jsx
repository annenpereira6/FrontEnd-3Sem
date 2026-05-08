import "./filme.css"

function Filme( {titulo, ano, genero, nota} ) {
    
    return (
    <p> Filme: {titulo} - Ano do lancamento: {ano} - Genero do Filme:  {genero} - Nota: {nota} </p>
    );
}

export default Filme