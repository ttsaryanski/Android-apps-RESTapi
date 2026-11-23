import { Cocktail } from "../models/Cocktail.js";

import { CocktailServicesTypes } from "../types/ServicesTypes.js";
import { CreateCocktailDataType } from "../validators/cocktails/cocktails.schema.js";
import { CocktailResponseType } from "../types/CocktailTypes.js";

export const cocktailServices: CocktailServicesTypes = {
    async getTop(): Promise<CocktailResponseType[]> {
        const cocktails = await Cocktail.find()
            .sort({ count: -1, title: 1 })
            .select("cocktail_id title count img_url")
            .limit(6)
            .lean();

        return cocktails.map((cocktail) => ({
            cocktail_id: cocktail.cocktail_id,
            title: cocktail.title,
            count: cocktail.count,
            img_url: cocktail.img_url,
        }));
    },

    async incrementCount(data: CreateCocktailDataType): Promise<void> {
        await Cocktail.findOneAndUpdate(
            { cocktail_id: data.cocktail_id },
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
