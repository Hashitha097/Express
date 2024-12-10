import ProductModel from "../models/ProductModel";
import { Request, Response } from "express";

export const createProduct = async ( req: Request, res: Response) => {
    const { name, price, category, description} = req.body;

    try {
        const product = new ProductModel();
        product.name = name;
        product.price = price;
        product.category = category;
        product.description = description;
        await product.save();

        return res.status(201).json(product);
    } catch (error: any){
        return res.status(500).json({ message:error.message});
    }
    
}

export const getProducts = async (req: Request, res: Response) => {
    const products = await ProductModel.find();

    return res.status(200).json(products);
}

export const updateProduct = async ( req: Request, res: Response) => {
    const {id} = req.params;
    const { name, price, category, description} = req.body;

    try {
        const product = await ProductModel.findById(id);

        if(!product) {
            return res.status(404).json({message: "Product not found"});
        }

        product.name = name;
        product.price = price;
        product.category = category;
        product.description = description;

        await product.save();

        return res.status(200).json(product);

    } catch (error: any) { 
        return res.status(500).json({message: error.message});
    }
}