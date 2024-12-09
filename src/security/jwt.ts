import jwt from "jsonwebtoken";
import UserType from "../interfaces/UserType";


export const generateJwt = (user: UserType) => {
    const token = jwt.sign ({
        sub: user.username,
    }, process.env.JWT_SECRET || '' , {
        expiresIn: "1h"
    });

    return token;

}

export const validateJwt = (token: string) => {
    jwt.verify(token, process.env.JWT_SECRET || 'secret', (err, decoded) => {
        if (err) {
            return false;
        } else {
            return true;
        }
    });
}

export const getUsernameFromJwt = (token: string) => {
    const decoded = jwt.decode(token);

    if(decoded !== null) {
        return decoded.sub;
    }

    return null;
}