import { Router } from "express";

import noteRoutes from "./note/noteController.js";
import mealRoutes from "./meal/mealController.js";
import cocktailRoutes from "./cocktail/cocktailController.js";

const routes = Router();

routes.use("/notes", noteRoutes);
routes.use("/meals", mealRoutes);
routes.use("/cocktails", cocktailRoutes);

export default routes;
