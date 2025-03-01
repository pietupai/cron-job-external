async function makeRequest() {
  try {
    const fetch = await import('node-fetch');
    const response = await fetch.default('https://webhook-x19y.onrender.com/api/poll');
    const data = await response.text();
    console.log(data);
  } catch (error) {
    console.log('Error:', error.message);
  }
}

setInterval(makeRequest, 180000); // 180000 milliseconds = 180 seconds

module.exports = makeRequest;
