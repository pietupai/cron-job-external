import fetch from 'node-fetch';
import express from 'express';

const PORT = process.env.PORT || 3000;
const app = express();

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function getCurrentTime() {
  const now = new Date();
  return now.toTimeString().split(' ')[0]; // Aikaleima muodossa hh:mm:ss
}

async function makeRequest() {
  console.log(`[${getCurrentTime()}] Starting makeRequest`);

  try {
    console.log(`[${getCurrentTime()}] Making request to https://webhook-x19y.onrender.com/api/poll`);
    const response = await fetch('https://webhook-x19y.onrender.com/api/poll');
    const data = await response.text();
    console.log(`[${getCurrentTime()}] Response received:`, data);
  } catch (error) {
    console.log(`[${getCurrentTime()}] Request error:`, error.message);
  }

  console.log(`[${getCurrentTime()}] Next request in 300 seconds`);

  // Viive 300000 millisekuntia (300 sekuntia) ennen seuraavaa pyyntöä
  await delay(300000);

  console.log(`[${getCurrentTime()}] Delay completed, making next request`);
  
  makeRequest();
}

app.get('/api', (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.setHeader('Cache-Control', 'no-cache');
  console.log('Get /api');
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Ok\n');
});

// Käynnistetään Express-palvelin
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`[${getCurrentTime()}] Cron job started`);
  makeRequest();
});

export default makeRequest;
