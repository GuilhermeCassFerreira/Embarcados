const express = require('express');
const axios = require('axios');

const app = express();
const PORT = 3000;

app.use(express.json());

// Rota para cadastrar uma sala
app.post('/cadastro-salas/salas', async (req, res) => {
  try {
    const response = await axios.post('http://localhost:3001/salas', req.body);
    res.status(response.status).json(response.data);
  } catch (error) {
    console.error('Erro ao cadastrar sala:', error);
    res.status(500).json({ error: 'Erro ao cadastrar sala' });
  }
});

// Rota para cadastrar um usuário
app.post('/cadastra-usuario/usuarios', async (req, res) => {
  try {
    const response = await axios.post('http://localhost:3002/usuarios', req.body);
    res.status(response.status).json(response.data);
  } catch (error) {
    console.error('Erro ao cadastrar usuário:', error);
    res.status(500).json({ error: 'Erro ao cadastrar usuário' });
  }
});

// Rota para verificar a liberação de acesso de um usuário a uma sala
app.post('/liberacao-acesso/liberar-acesso', async (req, res) => {
  try {
    const response = await axios.post('http://localhost:3003/liberar-acesso', req.body);
    res.status(response.status).json(response.data);
  } catch (error) {
    console.error('Erro ao verificar liberação de acesso:', error);
    res.status(500).json({ error: 'Erro ao verificar liberação de acesso' });
  }
});

// Rota para obter o controle de acesso de um usuário a uma sala
app.get('/controle-acesso/:idUsuario/:idSala', async (req, res) => {
  const { idUsuario, idSala } = req.params;

  try {
    const response = await axios.get(`http://localhost:3004/${idUsuario}/${idSala}`);
    res.status(response.status).json(response.data);
  } catch (error) {
    console.error('Erro ao obter controle de acesso:', error);
    res.status(500).json({ error: 'Erro ao obter controle de acesso' });
  }
});

// Rota para registrar o acesso a uma sala
app.post('/registro-acessos', async (req, res) => {
  try {
    const response = await axios.post('http://localhost:3005/acessos', req.body);
    res.status(response.status).json(response.data);
  } catch (error) {
    console.error('Erro ao registrar acesso:', error);
    res.status(500).json({ error: 'Erro ao registrar acesso' });
  }
});

// Iniciar o servidor do API Gateway
app.listen(PORT, () => {
  console.log(`API Gateway rodando na porta ${PORT}`);
});
