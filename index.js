import express from "express"
import homepage from "./router/homepage.router.js";
import navbar from "./router/navbar.router.js";
import menupage from "./router/menupage.router.js";
import aboutpage from "./router/aboutpage.router.js";
import contactpage from "./router/contactpage.router.js";
import restrictWorkingHours from "./middleware/restricted.middleware.js";
const app = express();
const port = 3000;
app.use(restrictWorkingHours)
app.use("/" , navbar)
app.use("/home" , homepage)
app.use("/menu" , menupage)
app.use("/about" , aboutpage)
app.use("/contact" , contactpage)
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
