import expressAsyncHandler from 'express-async-handler';
import {NextFunction, Request, Response} from 'express';
import jwt, {JwtPayload} from 'jsonwebtoken';

interface UserType {
  name: string,
  phoneNumber: number
}

export interface RequestWithUser extends Request {
  user: UserType;
}

let jwtToken: string;
if (typeof process.env.JWT_SECRET !== 'string') {
  throw new Error('JWT_SECRET is empty');
} else {
  jwtToken = process.env.JWT_SECRET;
}

const authUser = expressAsyncHandler(
    async (req: Request, res: Response, next: NextFunction) => {
      let token: string | null = null;

      if (req.headers.authorization &&
          req.headers.authorization.startsWith('Bearer')) {
        try {
          token = req.headers.authorization.split(' ')[1];

          const verified: JwtPayload | string = jwt.verify(token,
              jwtToken);
          console.log(verified);
          // req.user = await User.findById(verified);
        } catch (err) {
          console.error(err.message);
        }
      }

      if (!token) {
        res.status(401);
        throw new Error('Unauthorized access attempt. Invalid user token');
      }

      next();
    });

export default authUser;