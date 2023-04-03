const express = require("express");
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (requisicao, resposta) => {
    //resposta.send("ok!");
    resposta.render("index");
});

app.listen(3333, () => {
    console.log("Server OK!");
});