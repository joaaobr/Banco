const express = require('express')
const app = express()
const UserModel = require('./models/connect.user')



app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.json())
app.use(express.static(__dirname + '/public'))

//1 ok
app.get('/cad/primeira-etapa', (req, res) => {
    res.render('create-acount/primeira-etapa')
})

// 2 
app.get('/cad/segunda-etapa/:id', (req, res) => {
    const id = req.params.id
    res.render('create-acount/segunda-etapa', { id })
})

// 3
app.get('/cad/terceira-etapa/:id', (req, res) => {
    const id = req.params.id
    res.render('create-acount/terceira-etapa', { id })
})
// 4
app.get('/cad/quarta-etapa/:id', (req, res) => {
    const id = req.params.id
    res.render('create-acount/quarta-etapa', { id })
})


app.get('/login', (req, res) => {
    res.render('login')
})

app.post('/login', async(req, res) => {
    try {
        const users = await UserModel.find(req.body)
         //console.log('Body: '+req.body)
         //console.log(users[0])
        if(users[0]) {
            const dados = {
                nome: users[0].nome,
                sobrenome: users[0].sobrenome,
                cpf: users[0].cpf,
                email: users[0].email,
                id: users[0]._id,
                saldo: users[0].saldo,
                logado: true
            }

            
            //console.log(dados)
            res.status(200).json(dados)
        }else if(users[0] == undefined) {
            res.status(500).json({ logado: false })
        }
        
    } catch (error) {
        console.log(error)
        res.status(500).json({error})
    }
})


app.post('/create-acount', async(req, res) => {
    try {
        console.log(req.body)
        const user = await UserModel.create(req.body)
        console.log('user: '+ user)
        const idUser = user
        console.log('ID: '+user._id)
        res.status(201).json({ id: user._id })
    }
    catch(error) {
        console.log(error)
        res.status(500).json(error)
    }
})


app.post('/update', async(req, res) => {
    try {
        //const id = req.params.id
        console.log('body: '+req.body)
        console.log('id: '+ req.body.id)
        const user = await UserModel.findByIdAndUpdate(req.body.id, req.body, {new: true})
        const dados = {
            nome: user.nome,
            sobrenome: user.sobrenome,
            cpf: user.cpf,
            email: user.email,
            id: user._id,
            saldo: user.saldo,
            logado: true
        } 
        console.log('user: ' , dados)
        //console.log(user)
        res.status(200).json(dados)
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
})



app.get('/', (req, res) => {
    res.render('index')
})


app.post('/EnviarSaldo', async(req, res) => {
    try {
        const search_user = await UserModel.find(req.body.cpf)

        console.log('search user: ' + search_user)

        const dados = {
            cpf: search_user.cpf,
            saldo: search_user.saldo,
            id: search_user.id
        }

        console.log('dados: ' + dados)

        res.status(200).json(dados)
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
})



app.listen(3003)