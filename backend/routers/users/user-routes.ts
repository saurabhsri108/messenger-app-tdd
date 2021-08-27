import express from 'express';
import authUser from '../../middlewares/auth.middleware.js';
import {signUp} from '../../controllers/users.controllers.js';

const userRoutes = express.Router();

userRoutes.post('/create', signUp);

userRoutes.route('/').get(authUser, () => {
  console.log('Welcome after auth');
});

export default userRoutes;