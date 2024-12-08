import exp from "constants";
import CategoryModel from "../models/CategoryModel";
import { Request, Response } from "express";

export const createCategory = async (req: Request, res: Response) => {
    const name = req.body.name;

    try {
        const category = new CategoryModel();
        category.name = name;
        await category.save();

        return res.status(201).json(category);
    } catch (error: any) {
        return res.status(500).json({message: error.message});
    }
}

export const getCategories = async (req: Request, res: Response) => {
    const categories = await CategoryModel.find();

    return res.status(200).json(categories);
}