import expressAsyncHandler from 'express-async-handler';
import User from '../models/user.schema.js';
import {Request, Response} from 'express';

/**
 * @desc Sign up new users
 * @route POST /api/v1/users/create
 * @access Admin || Public
 */

export const signUp = expressAsyncHandler(
    async (req: Request, res: Response) => {
      const {
        username,
        phoneNumber,
      }: { phoneNumber: string, username: string } = req.body;

      const doesUserExists = await User.findOne({username: username});
      if (doesUserExists) {
        res.status(400);
        throw new Error('Username already taken');
      }
      const user = await User.create({username, phoneNumber});

      if (user) {
        // Send emails here
        res.status(201).json({
          id: user._id,
          username: user.username,
          isAdmin: user.isAdmin,
        });
      } else {
        res.status(400);
        throw new Error('Error in sign up. Please try again!');
      }
    });