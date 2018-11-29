const express = require('express')
const app = express()
const port = 3000


//Import template engine
app.set('view engine', 'ejs');


app.use(express.static('./'));

// aRoutes starting homepage
app.get('/', ((req, res) => res.render('index')))

// aRoutes to donate page

app.get('/donate', ((req, res) => res.render('donate')))


app.listen(port, () => console.log(`Example app listening on port ${port}!`))