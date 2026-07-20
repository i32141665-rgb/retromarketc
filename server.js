const http = require('http');

const PORT = 3000;

// Твой HTML-код сайта прямо внутри сервера
const htmlContent = `
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ретро Маркет</title>
    <style>
        body {
            font-family: 'Courier New', Courier, monospace;
            background-color: #1a1a1a;
            color: #00ff00;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 100vh;
            margin: 0;
        }
        .container {
            text-align: center;
            border: 2px solid #00ff00;
            padding: 30px;
            box-shadow: 0 0 15px #00ff00;
            background-color: #000;
        }
        h1 { margin-bottom: 10px; }
        p { color: #888; }
    </style>
</head>
<body>
    <div class="container">
        <h1>Ретро Маркет</h1>
        <p>Добро пожаловать. Сервер полностью готов и работает!</p>
    </div>
</body>
</html>
`;

const server = http.createServer((req, res) => {
    // Отдаем HTML-страницу на любой запрос к сайту
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(htmlContent);
});

server.listen(PORT, () => {
    console.log(`=== СЕРВЕР ЗАПУЩЕН ===`);
    console.log(`Открой в браузере: http://localhost:${PORT}`);
});
