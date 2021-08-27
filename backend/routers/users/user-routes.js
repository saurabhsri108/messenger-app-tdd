import express from 'express';
import authUser from '../../middlewares/auth.middleware.js';
import { signUp } from '../../controllers/users.controllers.js';
var userRoutes = express.Router();
userRoutes.post('/create', signUp);
userRoutes.route('/').get(authUser, function () {
    console.log('Welcome after auth');
});
export default userRoutes;
//# sourceMappingURL=user-routes.js.map