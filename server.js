const path = require('path');
const express = require('express');
const session = require('express-session');
const app = express();
const PORT = process.env.PORT || 3000;

// Configurar sessão
app.use(session({
    secret: 'secreto',  // Defina uma string segura para a chave secreta da sessão
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }  // Defina como true se estiver usando HTTPS
}));

// Middleware para parsear o body das requisições POST
app.use(express.urlencoded({ extended: true }));

// Servir arquivos estáticos
app.use(express.static(__dirname));

// Rota para servir o arquivo HTML principal
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Rota para exibir a página de cadastro/login
app.get('/cadastro', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages/cadastro.html'));
});

// Rota para o login
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    // Exemplo simples de autenticação - substitua por um banco de dados
    if (username === 'usuario' && password === 'senha123') {
        req.session.loggedin = true;
        req.session.username = username;
        res.redirect('/dashboard');
    } else {
        res.send('Usuário ou senha incorretos!');
    }
});

// Rota para uma página protegida (após login)
app.get('/dashboard', (req, res) => {
    if (req.session.loggedin) {
        res.send(`Bem-vindo, ${req.session.username}! Esta é a página protegida.`);
    } else {
        res.send('Por favor, faça login para acessar esta página.');
    }
});

// Rota para logout
app.get('/logout', (req, res) => {
    req.session.destroy();
    res.redirect('/cadastro');
});

// Iniciar o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});