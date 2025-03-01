// import fetch from 'node-fetch';

let isRunning = false;

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function getCurrentTime() {
  const now = new Date();
  return now.toTimeString().split(' ')[0]; // Aikaleima muodossa hh:mm:ss
}

async function makeRequest() {
  if (isRunning) return;
  isRunning = true;

  console.log(`[${getCurrentTime()}] Starting makeRequest`);

  try {
    console.log(`[${getCurrentTime()}] Simulated request to https://webhook-x19y.onrender.com/api/poll`);
    // const response = await fetch('https://webhook-x19y.onrender.com/api/poll');
    // const data = await response.text();
    // console.log(`[${getCurrentTime()}] Response received:`, data);
  } catch (error) {
    console.log(`[${getCurrentTime()}] Simulated request error:`, error.message);
  }

  console.log(`[${getCurrentTime()}] Next request in 10 seconds`);

  // Viive 10000 millisekuntia (10 sekuntia) ennen seuraavaa pyyntöä
  await delay(10000); 

  console.log(`[${getCurrentTime()}] Delay completed, making next request`);

  isRunning = false;
  makeRequest();
}

// Aloitetaan cron-tehtävä kerran
console.log(`[${getCurrentTime()}] Cron job started`);
makeRequest();

export default makeRequest;
