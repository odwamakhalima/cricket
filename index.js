var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var CricketScoreKeeper = require('./cricketFact')

var cricFact = CricketScoreKeeper()

const exphbs  = require('express-handlebars');

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(bodyParser.urlencoded({ extended: false }))


app.use(express.static('public'))
// parse application/json
app.use(bodyParser.json())

app.get('/',function(req,res){
    res.render('index',{score:cricFact.over()})
})

app.get('/update',function(req,res){
    res.render('index',{score:cricFact.over()})
})

app.post('/update', function (req, res) {

    cricFact.add(req.body.lists,
    );

    console.log(req.body.lists)
    res.redirect('/')

})

var PORT = process.env.PORT || 5000

app.listen(PORT,function(){
    console.log('server started',PORT)
})