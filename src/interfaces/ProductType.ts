import CategoryType from "./CategoryType";
import { Document } from "mongoose";


interface ProductType extends Document {
    name: string;
    price: number;
    description: string;
    category: CategoryType;
    createdAt: Date;
    updatedAt: Date;
}

export default ProductType;