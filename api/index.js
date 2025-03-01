import fetch from 'node-fetch';
import http from 'http';

async function makeRequest() {
  try {
    console.log('Making request to https://webhook-x19y.onrender.com/api/poll');
    const response = await fetch('https://webhook-x19y.onrender.com/api/poll');
    const data = await response.text();
    console.log('Response:', data);
  } catch (error) {
    console.log('Error:', error.message);
  }
}

setInterval(makeRequest, 180000); // 180000 milliseconds = 180 seconds

// Luodaan HTTP-palvelin, jotta Vercel hyväksyy deployn
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Cron job is running\n');
});

export default server;
