import express from 'express';

const app = express();

app.get('/test', (req, res) => {
  return res.send('Olá NLw');
});

app.post('/test-post', (req, res) => {
  return res.send('metodo post');
});

app.listen(3000, () => console.log('Server is running'));
