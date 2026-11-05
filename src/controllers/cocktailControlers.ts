import { Router, Request, Response } from "express";

import { asyncErrorHandler } from "../utils/errorUtils/asyncErrorHandler.js";
import { CustomError } from "../utils/errorUtils/customError.js";

import { CocktailServicesTypes } from "../types/ServicesTypes.js";
import { createCocktailSchema } from "../validators/cocktails/cocktails.schema.js";

export function cocktailControllers(cocktailServices: CocktailServicesTypes) {
    const router = Router();

    router.get(
        "/top",
        asyncErrorHandler(async (req: Request, res: Response) => {
            const cocktails = await cocktailServices.getTop();
            res.status(200).json(cocktails);
        })
    );

    router.post(
        "/increment",
        asyncErrorHandler(async (req: Request, res: Response) => {
            const resultData = createCocktailSchema.safeParse(req.body);

            if (!resultData.success) {
                throw new CustomError(resultData.error.issues[0].message, 400);
            }

            await cocktailServices.incrementCount(resultData.data);
            res.status(204).end();
        })
    );

    return router;
}
