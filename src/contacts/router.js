import express from 'express';
import { getContacts, getContact, createContact, updateContact, deleteContact } from './ctrl.js';

const router = express.Router();

router.get('/:id', getContact);
router.get('/', getContacts);
router.post('/', createContact);
router.put('/:id', updateContact);
router.delete('/:id', deleteContact);

export default router;
