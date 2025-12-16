const http = require('http');

const testLogin = (email, password) => {
  const data = JSON.stringify({ email, password });

  const options = {
    hostname: 'localhost',
    port: 5000,
    path: '/login',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': data.length
    }
  };

  const req = http.request(options, (res) => {
    let body = '';
    res.on('data', (chunk) => {
      body += chunk;
    });
    res.on('end', () => {
      console.log(`Login test for ${email}:`);
      console.log('Status:', res.statusCode);
      console.log('Response:', body);
      console.log('---');
    });
  });

  req.on('error', (e) => {
    console.error(`Login test failed for ${email}:`, e.message);
  });

  req.write(data);
  req.end();
};

// Test with existing users
testLogin('test@example.com', 'any');
testLogin('s@gmail.com', 'any');
testLogin('r@gmail.com', 'any');
testLogin('c@gmail.com', 'any');

// Test with non-existing user
setTimeout(() => testLogin('nonexistent@example.com', 'any'), 1000);