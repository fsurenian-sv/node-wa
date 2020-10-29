import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

dotenv.config();

const healthCheck = (req, res) => res.status(200).json({ status: 'up and running' });

const app = express();
app.use(bodyParser.json());
app.use(healthCheck);

app.listen(process.env.PORT);
