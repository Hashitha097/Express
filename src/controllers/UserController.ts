import UserModel from "../models/UserModel";
import { Request, Response } from "express";
import bcrypt from "bcryptjs";

export const createUser = async (req: Request , res: Response) => {
    const { username, password, firstname, lastname, email} = req.body;

    if (!username || !password || !firstname || !lastname || !email) {
        res.status(400).json({ message: "All fields are required"});
    }

    const existingUser = await UserModel.findOne( { username: username});
    if(existingUser) {
        res.status(400).json({ message: "User already exist" });
    }

    try {
        const user = new UserModel();
        user.username = username;
        user.password = await bcrypt.hash(password, 10); // decode password(password ek nopennwnn)
        user.firstname = firstname;
        user.lastname = lastname;
        user.email = email;

        await user.save();

        return res.status(201).json(user);
    } catch (error: any) {
        return res.status(500).json({ message: error.message});
    }
}