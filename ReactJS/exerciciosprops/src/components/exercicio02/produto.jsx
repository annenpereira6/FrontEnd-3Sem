import "./produto.css"

function Produto( {nome, preco, descricao}) {
    return (
    <p>{nome} - do Produto -  R$ {preco} - {descricao} do produto</p>
    )
}

export default Produto