// import fetch from 'node-fetch';

async function makeRequest() {
  try {
    console.log('Simulated request to https://webhook-x19y.onrender.com/api/poll');
    // const response = await fetch('https://webhook-x19y.onrender.com/api/poll');
    // const data = await response.text();
    // console.log('Response received:', data);
  } catch (error) {
    console.log('Simulated request error:', error.message);
  }

  // Vakio viive 180000 millisekuntia (180 sekuntia)
  console.log(`Next request in 180 seconds`);

  // Ajastetaan seuraava pyyntö viiveen jälkeen
  setTimeout(makeRequest, 180000);
}

// Aloitetaan cron-tehtävä
makeRequest();

console.log('Cron job started');

export default makeRequest;
