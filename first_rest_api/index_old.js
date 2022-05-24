const express = require('express');
const app=express();

app.get('/', function (req,res) {
    res.send('<h1> Bonjour </h1>');
})

app.post('/:name', function (req,res) {
    res.send(`<h1> Hello ${req.params.name}  </h1>`);
})

app.put('/', function (req,res) {
    res.send('<h1> Hi </h1>');
})

app.delete('/', function (req,res) {
    res.send('<h1> Good Morning </h1>');
})

var quotes = {
    'einstein' : 'We cannot solve our problems with the same thinking we used when we created them',
    'crockford' : 'Good architecture is necessary to give programs enough structure to be able to grow large without collapsing into a puddle of confusion.'
}
app.get('/quotes/:name', function (req,res) {
    if(!quotes[req.params.name])
        return res.status(400).send('Name not found');
    res.send(`<h1>  ${quotes[req.params.name]}  </h1>`);
})
app.use(express.json())
app.post('/test/body', function (req,res) {
    res.send(req.body);
})
app.listen(3000,function () {
    console.log('Server running on 3000');
})