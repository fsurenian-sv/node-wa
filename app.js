import express from 'express';
import bodyParser from 'body-parser';

const catchAll = (req, res) => res.send('UP AND RUNNING');

const app = express();
app.use(bodyParser.json());
app.use(catchAll);

app.listen(8080);
