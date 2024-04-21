import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app = express();
const PORT = process.env.PORT || 3000;

// Servindo arquivos estáticos (CSS, JS, imagens)
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.redirect('/home');
});

app.get('/home', (req, res) => {
    res.sendFile(__dirname + '/public/pages/home.html');
});
app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/public/pages/login.html');
});

// Iniciando o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
