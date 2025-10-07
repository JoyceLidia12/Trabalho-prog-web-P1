const express = require('express');
const corsMiddleware = require('./middlewares/cors');
const loggerMiddleware = require('./middlewares/logger');
const authMiddleware = require('./middlewares/auth');
const animalsRouter = require('./routes/animals');
const speciesRouter = require('./routes/species');

const app = express();
app.use(express.json());

// CORS
app.use(corsMiddleware);

// Logs antes do handler
app.use(loggerMiddleware.before);

// Rota pública para gerar token
app.post('/token', (req, res, next) => {
  const { generateToken } = require('./middlewares/auth');
  try {
    const token = generateToken();
    res.status(201).json({ token });
  } catch (err) {
    next(err);
  }
});

// Middleware de autenticação
app.use(authMiddleware);

// Rotas
app.use('/animais', animalsRouter);
app.use('/especies', speciesRouter);

// Logs depois dos handlers
app.use(loggerMiddleware.after);

// Tratamento de erros
app.use((err, req, res, next) => {
  console.error('ERROR HANDLER:', err);
  if (!err.status) {
    return res.status(500).json({ error: 'Erro interno do servidor' });
  }
  res.status(err.status).json({ error: err.message });
});

module.exports = app;
