const express = require('express');
const app = express();

const ggs = [
    {id:1, name: 'gg1'},
    {id:2, name: 'gg2'},
    {id:3, name: 'gg3'}
]

app.get('/', (req, res) => {
    res.send('Hello World');
});


app.get('/api/ggs' , (req, res) => {
    res.send(gg);
});

app.get('/api/ggs/:id', (req, res) => {
   const gg =  ggs.find(e => e.id === parseInt(req.params.id));
   if (!gg) res.status(404).send('The gg with the given ID was false')
   res.send(gg);
});

 const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`listening on port ${port} ..`));