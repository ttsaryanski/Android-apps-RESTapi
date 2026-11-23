import { z } from "zod";

const mealIdSchema = z.union([
    z.string().trim().min(1),
    z.number().int().positive().transform(String),
]);

export const createMealSchema = z.object({
    title: z
        .string()
        .min(1, "Meal title must be at least 1 characters long")
        .trim(),
    meal_id: mealIdSchema,
    img_url: z.url("Invalid file URL!"),
});
export type CreateMealDataType = z.infer<typeof createMealSchema>;
