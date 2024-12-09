import { Document } from "mongoose";

interface UserType extends Document{
    username: string;
    password: string;
    firstname: string;
    lastname: string;
    email: string;


}

export default UserType;