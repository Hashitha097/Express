import mongoose, { Schema } from "mongoose";
import UserType from "../interfaces/UserType";

const UserSchema = new Schema<UserType> ({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    firstname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    }
});

const UserModel = mongoose.model<UserType>('User',UserSchema);

export default UserModel;