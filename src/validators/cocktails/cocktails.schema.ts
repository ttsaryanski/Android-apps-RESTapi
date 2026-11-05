import { z } from "zod";

export const createCocktailSchema = z.object({
    title: z
        .string()
        .min(1, "Cocktail title must be at least 1 characters long")
        .trim(),
    cocktail_id: z.number(),
    img_url: z.url("Invalid file URL!"),
});
export type CreateCocktailDataType = z.infer<typeof createCocktailSchema>;
