import { Router } from "express";
import { signupControllers } from "../controllers/signup.controller.js";
import { signinControllers } from "../controllers/signin.Controllers.js";
import { publicationController } from "../controllers/publication.controller.js";
import checkSignup from "../controllers/utils/checkSignup.js";
import checkSignin from "../controllers/utils/checkSignin.js";
import checkPublication from "../controllers/utils/checkPublication.js";
import { seePublications } from "../controllers/seePublications.js";

const router = Router();
//HOME
router.get("/", seePublications);
// REGISTER
router.get("/signup", (req, res) => {
  res.render("signup", { message: "" });
});
router.post("/signup", checkSignup, signupControllers);
// LOGIN
router.get("/signin", (req, res) => {
  res.render("signin", { message: "" });
});
router.post("/signin", checkSignin, signinControllers);
// PUBLICATIONS

router.post("/publication", checkPublication, publicationController);

router.use((req, res, next) => {
  res.status(404).send("¡Lo siento! La página que estás buscando no existe.");
});

export default router;
