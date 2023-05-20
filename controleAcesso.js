const express = require('express');
const db = require('./dbConnection');

const router = express.Router();

// Rota para adicionar acesso de um usuário a uma sala
router.post('/', (req, res) => {
  const { idUsuario, idSala } = req.body;

  const query = 'INSERT INTO controle_acesso (id_usuario, id_sala) VALUES (?, ?)';
  db.query(query, [idUsuario, idSala], (err, result) => {
    if (err) {
      console.error('Erro ao adicionar acesso:', err);
      res.status(500).json({ error: 'Erro ao adicionar acesso' });
    } else {
      res.status(200).json({ message: 'Acesso adicionado com sucesso' });
    }
  });
});

// Outras rotas e funcionalidades do serviço de controle de acesso...

module.exports = router;
