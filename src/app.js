const fs = require ('fs')
const path = require ('path')
const express = require ('express')

const app = express()

app.set(__dirname, path.join('views', './views'))
app.set('view engine', 'ejs')

app.use(express.static(path.join(__dirname, '/public/')))

get.route('/')
    .get((req, res) => {
        res.render('index, title:')
    })

app.listen('3000', () => {
    console.log('PS Project Running on port 3000!')
})