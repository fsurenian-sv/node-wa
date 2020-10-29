import express from 'express';
import { getContacts } from './ctrl.js';

const router = express.Router();

router.get('/', getContacts);

export default router;
