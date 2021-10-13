//definição de porta  --- Porta =   processo que vc tem para escolher qual processo vai atender a requisição
const porta = 3003;

const express = require('express')
const app = express()
const bancoDeDados = require('./bandoDeDados')
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true }))//urlencoded vai retornar uma função middleware

//Declarando metodo usado Get  para obter a lista de produtos
app.get('/produtos', (req, res, next) => {
    res.send(bancoDeDados.getProdutos())
    
})
/* envia uma resposta um objeto      /:id traz um produto especifico pelo id para obter o parametro que veio na url coloca o req.params.id */
app.get('/produtos/:id', (req, res, next) =>{
    res.send(bancoDeDados.getProduto(req.params.id))

})

app.post('/produtos', (req, res, next) => {
    console.log(req.body)
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco  
    })
    res.send(produto)//JSON
})  

//Listen  retorna servidor node
app.listen(porta, () =>{
    console.log(`Servidor executando na porta ${porta}.`)
}) 