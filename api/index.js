import fetch from 'node-fetch';

let isRunning = false;

async function makeRequest() {
  if (isRunning) return;
  isRunning = true;

  try {
    console.log('Making request to https://webhook-x19y.onrender.com/api/poll');
    //const response = await fetch('https://webhook-x19y.onrender.com/api/poll');
    //const data = await response.text();
    //console.log('Response received:', data);
  } catch (error) {
    console.log('Request error:', error.message);
  }

  // Vakio viive 180000 millisekuntia (180 sekuntia)
  const delay = 180000; 
  console.log(`Next request in ${delay / 1000} seconds`);

  // Ajastetaan seuraava pyyntö viiveen jälkeen
  setTimeout(() => {
    isRunning = false;
    makeRequest();
  }, delay);
}

// Aloitetaan cron-tehtävä
makeRequest();
console.log('Cron job started');

export default makeRequest;
