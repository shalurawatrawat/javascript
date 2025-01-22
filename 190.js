const fs = require('fs').promises;
const http = require('http');
async function readConfigAndStartServer(configPath) {
  try {

    const data = await fs.readFile(configPath, 'utf-8');
    const config = JSON.parse(data);
    const { port, host } = config;
    if (!port || !host) {
      throw new Error('Invalid configuration file: Missing "port" or "host".');
    }
    const server = http.createServer((req, res) => {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('Server is running!');
    });

    server.listen(port, host, () => {
      console.log(`Server started at http://${host}:${port}`);
    });
  } catch (error) {
    console.error('Error:', error.message);
  }
}
readConfigAndStartServer('./config.json');
