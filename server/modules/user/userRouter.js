import express from 'express';
import { isEmpty } from 'lodash';

import UserService from './UserService';

const userRouter = express.Router();
const userService = new UserService();

userRouter.post('/signup', async (req, res) => {
  const credentials = await userService.create(req.body);

  res.json(credentials).status(200);
});

userRouter.post('/login', async (req, res) => {
  const credentials = await userService.authenticate(req.body);

  res.json(credentials).status(200);
});

export default userRouter;
