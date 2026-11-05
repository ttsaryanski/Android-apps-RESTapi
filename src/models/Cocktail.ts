import mongoose, { Schema, Document } from "mongoose";

export interface ICocktail extends Document {
    title: string;
    cocktail_id: number;
    img_url: string;
    count: number;
    createdAt: Date;
    updatedAt: Date;
}

const CocktailSchema = new Schema<ICocktail>({
    title: {
        type: String,
        required: [true, "Cocktail title is required"],
        minlength: [1, "Cocktail title must be at least 1 characters long"],
    },
    cocktail_id: { type: Number, required: [true, "Cocktail ID is required"] },
    img_url: { type: String, required: [true, "Image URL is required"] },
    count: { type: Number, default: 0 },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

export const Cocktail = mongoose.model<ICocktail>("Cocktail", CocktailSchema);
