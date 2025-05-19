let http = require('http');
let fs = require('fs');
require('dotenv').config()


fs.writeFile("index.html",
    `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1 style = "color : red">hello world 123</h1>
</body>
</html>
    `,
    (err) => {
        if (err) throw err;
    }
)

http.createServer((req, res) => {

    fs.readFile('index.html', "utf8", (err, data) => {
        if (err) {
        throw err    
        }
        res.writeHead(200, { "content-type": 'text/html' });
        res.write(data);
        res.end()
    })



}).listen(process.env.port, () => console.log('server is running'))