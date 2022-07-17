import express from 'express';
const app = express();

// middleware
import notfoundMiddleWare from './middleware/not-found.js';

app.get('/', (req, res) => {
  res.send('Wellcome!');
});

app.use(notfoundMiddleWare);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is listening on port ${port}...`);
});
