import { Router} from "express";
const router = Router();
import { check } from "express-validator";
const { auth } = require("../../controllers/auth/auth.controller");


router.post("/user/login", 

  [
    check("userName", "El nombre-usuario es obligatorio").not().isEmpty(),
    check("pass", "El password debe ser minimo de 8 caracteres").isLength({
      min: 8,
    })
  ],

  auth);

export default router;