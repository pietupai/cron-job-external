// import fetch from 'node-fetch';

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function getCurrentTime() {
  const now = new Date();
  return now.toTimeString().split(' ')[0]; // Aikaleima muodossa hh:mm:ss
}

async function makeRequest() {
  try {
    console.log(`[${getCurrentTime()}] Simulated request to https://webhook-x19y.onrender.com/api/poll`);
    // const response = await fetch('https://webhook-x19y.onrender.com/api/poll');
    // const data = await response.text();
    // console.log(`[${getCurrentTime()}] Response received:`, data);
  } catch (error) {
    console.log(`[${getCurrentTime()}] Simulated request error:`, error.message);
  }
}

function startCronJob() {
  setTimeout(async function executeRequest() {
    console.log(`[${getCurrentTime()}] Starting makeRequest`);
    await makeRequest();
    console.log(`[${getCurrentTime()}] Request completed. Next request in 180 seconds`);

    // Ajastetaan seuraava pyyntö 180 sekunnin jälkeen
    setTimeout(executeRequest, 180000);
  }, 180000);
}

// Aloitetaan cron-tehtävä
console.log(`[${getCurrentTime()}] Cron job started`);
startCronJob();

export default makeRequest;
