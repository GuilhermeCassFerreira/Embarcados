const express = require('express');
const bodyParser = require('body-parser');
//const cadastroSalasRouter = require('./cadastro-salas');
//const cadastroUsuarioRouter = require('./cadastro-usuario');
const liberacaoAcessoRouter = require('./liberacaoAcesso');
const controleAcessoRouter = require('./controleAcesso');
const registroAcessoRouter = require('./registroAcessos');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Roteadores
//app.use('/cadastro-salas', cadastroSalasRouter);
//app.use('/cadastro-usuario', cadastroUsuarioRouter);
app.use('/liberacaoAcesso', liberacaoAcessoRouter);
app.use('/controleAcesso', controleAcessoRouter);
app.use('/registroAcessos', registroAcessoRouter);

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
