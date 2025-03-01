import fetch from 'node-fetch';

async function makeRequest() {
  try {
    console.log('Making request to https://webhook-x19y.onrender.com/api/poll');
    //const response = await fetch('https://webhook-x19y.onrender.com/api/poll');
    const data = await response.text();
    console.log('Response received:', data);
  } catch (error) {
    console.log('Request error:', error.message);
  }
}

setInterval(makeRequest, 180000); // 180000 milliseconds = 180 seconds

// Jotta Vercel ei lopeta prosessia liian aikaisin, pidetään sovellus aktiivisena.
console.log('Cron job is running');

export default makeRequest;
