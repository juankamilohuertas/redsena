import express from "express";
import router from "./routes/index.js";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = fileURLToPath(import.meta.resolve("../"));

//start express
const app = express();

//atatic routes
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "node_modules")));

//ejs template engine configuration
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

//settings for reading files (json/forms)
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//page main
app.use(router);

//server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server on port: ${port}`);
});
