// Objeto  com o atributo id e o get retorna ele msm 
const sequence = {
    _id: 1,
    get id() {
        return this._id++
    }
}

const produtos = {}

function salvarProduto(produto) {
    // se o id do produto não estiver setado 
    console.log(produto)
     produto.id = sequence.id
    // Se o produto ja estiver setado ele substitui pela versão mais nova
    produtos[produto.id] = produto
    return produto

}

    //pegar o produto pelo id 
 function getProduto(id){
     return produtos[id] || {}
 }
 // Funçao para retornar os valores que estão dentro de produtos
 function getProdutos(){
     return Object.values(produtos)
 }

 //module.exports = {salvarProduto, //getProduto, getProdutos}
 module.exports = {getProdutos, salvarProduto, getProduto}

