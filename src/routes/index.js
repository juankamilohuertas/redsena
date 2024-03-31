import { Router } from "express";
import { signupControllers } from "../controllers/signup.controller.js";
import { signinControllers } from "../controllers/signin.Controllers.js";
import checkSignup from "../controllers/utils/checkSignup.js";
import checkSignin from "../controllers/utils/checkSignin.js";

const router = Router();

router.get("/", (req, res) => {
  res.render("index", { message: "" });
});

router.get("/signup", (req, res) => {
  res.render("signup", { message: "" });
});
router.post("/signup", checkSignup, signupControllers);

router.get("/signin", (req, res) => {
  res.render("signin", { message: "" });
});

router.post("/signin", checkSignin, signinControllers);

router.use((req, res, next) => {
  res.status(404).send("¡Lo siento! La página que estás buscando no existe.");
});

export default router;
