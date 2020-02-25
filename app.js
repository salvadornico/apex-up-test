const http = require('http')
const dotenv = require('dotenv')

dotenv.config({ path: "./.env" })
const { PORT = 3000 } = process.env

const greeting = process.env.TEST_VALUE || "Howdy (.env file not working)"

http.createServer((req, res) => {
    res.end(greeting + ' from Node.js\n')
}).listen(PORT)
