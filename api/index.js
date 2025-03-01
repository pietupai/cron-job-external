const http = require('http');

function makeRequest() {
  http.get('https://webhook-x19y.onrender.com/api/poll', (resp) => {
    let data = '';

    resp.on('data', (chunk) => {
      data += chunk;
    });

    resp.on('end', () => {
      console.log(data);
    });

  }).on('error', (err) => {
    console.log('Error: ' + err.message);
  });
}

setInterval(makeRequest, 180000); // 10000 milliseconds = 10 seconds

module.exports = makeRequest;
