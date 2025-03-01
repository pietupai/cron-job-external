// import fetch from 'node-fetch';

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function makeRequest() {
  console.log('Starting makeRequest');

  try {
    console.log('Simulated request to https://webhook-x19y.onrender.com/api/poll');
    // const response = await fetch('https://webhook-x19y.onrender.com/api/poll');
    // const data = await response.text();
    // console.log('Response received:', data);
  } catch (error) {
    console.log('Simulated request error:', error.message);
  }

  console.log('Delay for 180 seconds');
  await delay(180000);

  console.log('Delay completed, making next request');
  
  makeRequest();
  console.log('makeRequest called again');
}

// Aloitetaan cron-tehtävä kerran
console.log('Cron job started');
makeRequest();

export default makeRequest;
