const express = require('express')
const app = express()
const UserModel = require('./models/connect.user')



app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.json())
app.use(express.static(__dirname + '/public'))

app.get('/createAcount', (req, res) => {
    res.render('createAcount')
})

app.get('/login', (req, res) => {
    res.render('login')
})

app.post('/login', async(req, res) => {
    try {
        const users = await UserModel.find(req.body)
         console.log(req.body)
         console.log(users[0])
        if(users[0]) {
            const dados = {
                nome: users[0].nome,
                cpf: users[0].cpf,
                logado: true
            }
            //console.log(dados)
            res.status(200).json(dados)
        }
        
    } catch (error) {
        res.status(500).json(error)
    }
})


app.post('/createAcount', async(req, res) => {
    try {
        console.log(req.body)
        const user = await UserModel.create(req.body)

        res.status(201).json(user)
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
})



app.get('/', (req, res) => {
    res.render('index')
})







app.listen(3000)