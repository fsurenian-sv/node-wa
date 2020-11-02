import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import contactsRouter from './src/contacts/router.js';
import messagesRouter from './src/messages/router.js';
import callsRouter from './src/calls/router.js';

dotenv.config();

const healthCheck = (req, res) => res.status(200).json({ status: 'up and running' });

const app = express();
app.use(bodyParser.json());
app.use('/contacts', contactsRouter);
app.use('/messages', messagesRouter);
app.use('/calls', callsRouter);
app.use(healthCheck);

app.listen(process.env.PORT);
