import { Meal } from "../models/Meal.js";

import { MealServicesTypes } from "../types/ServicesTypes.js";
import { CreateMealDataType } from "../validators/meals/meal.schema.js";
import { MealResponseType } from "../types/MealTypes.js";

export const mealServices: MealServicesTypes = {
    async getTop(): Promise<MealResponseType[]> {
        const meals = await Meal.find()
            .sort({ count: -1, title: 1 })
            .select("meal_id title count img_url")
            .limit(6)
            .lean();

        return meals.map((meal) => ({
            meal_id: meal.meal_id,
            title: meal.title,
            count: meal.count,
            img_url: meal.img_url,
        }));
    },

    async incrementCount(data: CreateMealDataType): Promise<void> {
        await Meal.findOneAndUpdate(
            { meal_id: data.meal_id },
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
