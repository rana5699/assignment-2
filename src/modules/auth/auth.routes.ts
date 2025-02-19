import { Router } from 'express';
import { authControlers } from './auth.controlers';
import validateRequest from '../../middlewares/validatedRequest';
import { authValidation } from './auth.validation';

const authRouter = Router();

authRouter.post(
  '/auth/login',
  validateRequest(authValidation.loginInfoValidationSchema),
  authControlers.loginUser,
);

authRouter.post(
  '/auth/change-password/:userId',
  validateRequest(authValidation.changePasswordValidationSchema),
  authControlers.chnagePassword,
);

export default authRouter;
