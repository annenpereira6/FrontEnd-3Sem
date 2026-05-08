import Produto from "../exercicio02/produto"
import "./Produtos.css"

function Produtos() {
    const Produtos = [
        {
            nome: "Tenis de marca",
            preco: 550,
            descricao: "Tenis chique!!"
        },

        {
            nome: "Camiseta de marca",
            preco: 270,
            descricao: "Camiseta chique e confortavel!!"
        }
    ]

    return (
        Produtos.map((produtinho) => {
            return (
                <Produto
                    nome={produtinho.nome}
                    preco={produtinho.preco}
                    descricao={produtinho.descricao}
                />
            )
        })
    )

}

export default Produtos