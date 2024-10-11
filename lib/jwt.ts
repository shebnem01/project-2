import { jwtVerify } from "jose";
import { getJwtSecretKey } from "./auth";

export async function jwtVerifyToken(token:string) {
    try {
        const { payload } = await jwtVerify(token, getJwtSecretKey());
        return payload;
    } catch (error) {
        return null;
    }
}