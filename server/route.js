import express from 'express';
import { getUsers, addUser, getUserById, editUser, deleteUser } from '../controller/user-controller.js';

const router = express.Router();

router.get('/', getUsers);
router.post('/new', addUser);
router.get('/:id', getUserById);
router.put('/:id', editUser);
router.get('/show',getUsers);
router.delete('/:id', deleteUser);

export default router;