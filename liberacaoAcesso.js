const express = require('express');
const db = require('./dbConnection');

const router = express.Router();

// Rota para verificar se um usuário tem acesso a uma sala
router.post('/', (req, res) => {
  const { idUsuario, idSala } = req.body;

  const query = 'SELECT * FROM controle_acesso WHERE id_usuario = ? AND id_sala = ?';
  db.query(query, [idUsuario, idSala], (err, result) => {
    if (err) {
      console.error('Erro ao verificar acesso:', err);
      res.status(500).json({ error: 'Erro ao verificar acesso' });
    } else {
      if (result.length > 0) {
        res.status(200).json({ acesso: true });
      } else {
        res.status(200).json({ acesso: false });
      }
    }
  });
});

// Outras rotas e funcionalidades do serviço de liberação de acesso...

module.exports = router;
