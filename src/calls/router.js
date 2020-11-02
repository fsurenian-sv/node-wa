import express from 'express';
import { getCalls, getCall, createCall, deleteCall } from './ctrl.js';

const router = express.Router();

router.get('/:id', getCall);
router.get('/', getCalls);
router.post('/', createCall);
router.delete('/:id', deleteCall);

export default router;
