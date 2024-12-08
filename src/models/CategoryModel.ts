import mongoose, { Schema } from "mongoose";
import CategoryType from "../interfaces/CategoryType";

const categorySchema = new Schema<CategoryType> ( {
    name: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

const CategoryModel =mongoose.model<CategoryType>('Category', categorySchema);

export default CategoryModel;