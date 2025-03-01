import fetch from 'node-fetch';

async function makeRequest() {
  try {
    const response = await fetch('https://webhook-x19y.onrender.com/api/poll');
    const data = await response.text();
    console.log(data);
  } catch (error) {
    console.log('Error:', error.message);
  }
}

setInterval(makeRequest, 180000); // 180000 milliseconds = 180 seconds

export default makeRequest;
