import express from 'express';
const app = express();

// middleware
import notfoundMiddleWare from './middleware/not-found.js';
import errorHandlerMiddleware from './middleware/error-handler.js';

app.get('/', (req, res) => {
  throw new Error('error');
  res.send('Wellcome!');
});

app.use(notfoundMiddleWare);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is listening on port ${port}...`);
});
