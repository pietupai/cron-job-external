// import fetch from 'node-fetch';

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function makeRequest() {
  try {
    console.log('Simulated request to https://webhook-x19y.onrender.com/api/poll');
    // const response = await fetch('https://webhook-x19y.onrender.com/api/poll');
    // const data = await response.text();
    // console.log('Response received:', data);
  } catch (error) {
    console.log('Simulated request error:', error.message);
  }

  console.log(`Next request in 180 seconds`);

  // Viive 180000 millisekuntia (180 sekuntia) ennen seuraavaa pyyntöä
  await delay(180000); 

  console.log('Delay completed, making next request');
  
  // Suoritetaan seuraava pyyntö
  makeRequest();
  console.log('makeRequest called again');
}

// Aloitetaan cron-tehtävä
makeRequest();
console.log('Cron job started');

export default makeRequest;
