import { jwtVerify } from 'jose';
export const getJwtSecretKey = () => {
    const secretKey = process.env.JWT_SECRET_KEY;
    if (!secretKey) {
        throw new Error('JWT secret key is not available')
    }
    return new TextEncoder().encode(secretKey);
}
export async function jwtVerifyToken(token:string) {
    try {
        const { payload } = await jwtVerify(token, getJwtSecretKey());
        return payload;
    } catch (error) {
        return null;
    }
}