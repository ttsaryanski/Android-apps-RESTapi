import { Cocktail } from "../models/Cocktail.js";

import { CocktailServicesTypes } from "../types/ServicesTypes.js";
import { CreateCocktailDataType } from "../validators/cocktails/cocktails.schema.js";
import { CocktailResponseType } from "../types/CocktailTypes.js";

export const cocktailServices: CocktailServicesTypes = {
    async getTop(): Promise<CocktailResponseType[]> {
        const cocktails = await Cocktail.find()
            .sort({ count: -1, title: 1 })
            .select("-__v")
            .limit(6)
            .lean();

        return cocktails.map((cocktail) => ({
            _id: cocktail._id.toString(),
            title: cocktail.title,
            cocktail_id: cocktail.cocktail_id,
            img_url: cocktail.img_url,
            count: cocktail.count,
            createdAt: cocktail.createdAt,
            updatedAt: cocktail.updatedAt,
        }));
    },

    async incrementCount(data: CreateCocktailDataType): Promise<void> {
        const cocktailId = Number(data.cocktail_id);

        await Cocktail.findOneAndUpdate(
            { cocktail_id: cocktailId },
            {
                $set: {
                    title: data.title,
                    img_url: data.img_url,
                },
                $inc: { count: 1 },
            },
            {
                upsert: true,
                runValidators: true,
                setDefaultsOnInsert: true,
            }
        );
    },
};
