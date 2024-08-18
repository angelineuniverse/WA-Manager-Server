import express from 'express';
import { store, index } from '../Controller/UserController.ts';
const routerUser = express.Router();

routerUser.get('/', index); // user -> GET index
routerUser.post('/', store); // user -> POST store

export default routerUser;