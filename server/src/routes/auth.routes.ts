import {authRegister, authLogin} from "../controllers/auth-controller";
import {refreshToken} from "../controllers/refresh-token-controller";

import {Router} from "express";

const authRoutes = Router();

authRoutes.post("/register", authRegister);
authRoutes.post("/login", authLogin);

authRoutes.post("/refresh", refreshToken);

export {authRoutes};
