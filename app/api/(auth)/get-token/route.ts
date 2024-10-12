import { jwtVerifyToken } from "@/lib/jwt";
import { NextRequest, NextResponse } from "next/server";


export async function GET(req: NextRequest) {
    const cookies = req.cookies;
    const { value: token } = cookies.get('token') ?? { value: null };
    const verifiedToken =token &&  await jwtVerifyToken(token);

    if (!verifiedToken) {
        return NextResponse.json({ status: 401, message: "Unauthorized: Invalid token" });
    }

    return NextResponse.json({ status: 200, data:verifiedToken });
}



