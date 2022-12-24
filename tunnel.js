require('dotenv').config();
const ngrok = require('ngrok');

const port = process.env.PORT || 13000;

const main = async () => {
  const url = await ngrok.connect(port);
  console.log(`Tunneling local ${port} port to ${url}`);

  const response = await fetch('https://api.line.me/v2/bot/channel/webhook/endpoint', {
    method: 'PUT',
    headers: {
      'Authorization': `Bearer ${process.env.CHANNEL_ACCESS_TOKEN}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ endpoint: url }),
  });
  if (response.status >= 400) {
    const e = await response.json();
    throw new Error(e.message);
  }

  console.log('LINE webhook endpoint is updated.');
};

main();
