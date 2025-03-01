// import fetch from 'node-fetch';

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
    console.log(`[${getCurrentTime()}] Simulated request to https://webhook-x19y.onrender.com/api/poll`);
    // const response = await fetch('https://webhook-x19y.onrender.com/api/poll');
    // const data = await response.text();
    // console.log(`[${getCurrentTime()}] Response received:`, data);
  } catch (error) {
    console.log(`[${getCurrentTime()}] Simulated request error:`, error.message);
  }

  console.log(`[${getCurrentTime()}] Next request in 180 seconds`);

  // Viive 180000 millisekuntia (180 sekuntia) ennen seuraavaa pyyntöä
  await delay(180000); 

  console.log(`[${getCurrentTime()}] Delay completed, making next request`);
  
  makeRequest();
}

// Aloitetaan cron-tehtävä kerran
console.log(`[${getCurrentTime()}] Cron job started`);
makeRequest();

export default makeRequest;
