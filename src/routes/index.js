import { Router } from "express";
import { signupControllers } from "../controllers/signup.controller.js";
import { signinControllers } from "../controllers/signin.Controllers.js";
import { publicationController } from "../controllers/publication.controller.js";
import checkSignup from "../controllers/utils/checkSignup.js";
import checkSignin from "../controllers/utils/checkSignin.js";
import checkPublication from "../controllers/utils/checkPublication.js";
import { seePublications } from "../controllers/seePublications.js";
import { myCount } from "../controllers/myCount.js";
import { autentication } from "../controllers/utils/autentication.js";

const router = Router();
//HOME
router.get("/", seePublications);
// REGISTER
router.get("/signup", (req, res) => {
  res.render("signup", { message: "" });
});
router.post("/signup", checkSignup, signupControllers);
// LOGIN
router.get("/signin", autentication, (req, res) => {
  res.render("index", { message: "", titles:"", messages:"", files:"", dates:"" });
});
router.post("/signin", checkSignin, signinControllers);
// PUBLICATIONS

router.post("/publication", checkPublication, publicationController);

//MY COUNT
router.get("/my_count/:opc", myCount)

router.use((req, res, next) => {
  res.status(404).send("¡Lo siento! La página que estás buscando no existe.");
});

export default router;
