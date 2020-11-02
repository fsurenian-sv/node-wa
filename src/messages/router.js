import express from 'express';
import { getMessages, getMessage, createMessage, updateMessage, deleteMessage } from './ctrl.js';

const router = express.Router();

router.get('/:id', getMessage);
router.get('/', getMessages);
router.post('/', createMessage);
router.put('/:id', updateMessage);
router.delete('/:id', deleteMessage);

export default router;
