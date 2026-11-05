import { Router } from "express";

import { cocktailControllers } from "../../controllers/cocktailControlers.js";
import { cocktailServices } from "../../services/cocktailServices.js";

const router = Router();

router.use("/", cocktailControllers(cocktailServices));

export default router;
