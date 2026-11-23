import { z } from "zod";

const cocktailIdSchema = z.union([
    z.string().trim().min(1),
    z.number().int().positive().transform(String),
]);

export const createCocktailSchema = z.object({
    title: z
        .string()
        .min(1, "Cocktail title must be at least 1 characters long")
        .trim(),
    cocktail_id: cocktailIdSchema,
    img_url: z.url("Invalid file URL!"),
});
export type CreateCocktailDataType = z.infer<typeof createCocktailSchema>;
