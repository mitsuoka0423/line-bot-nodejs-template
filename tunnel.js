const ngrok = require('ngrok');

const port = process.env.PORT || 13000;

ngrok.connect(port).then((url) => {
  console.log(url);
});
