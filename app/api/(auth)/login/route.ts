import { getDataByUnique } from "@/services/serviceOperation";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from 'bcrypt';
import { SignJWT } from "jose";
import { getJwtSecretKey } from "@/lib/auth";


export async function POST(req: NextRequest) {
    const { email, password } = await req.json();

    const user = await getDataByUnique({ tableName: 'user', where: { email } });

    if (!user || !user.hashedPassword) {
        return NextResponse.json({ error: 'Invalid email or password!' }, { status: 400 });

    }
    const isValidPassword = await bcrypt.compare(password, user.hashedPassword);

    if (!isValidPassword) {
        return NextResponse.json({ error: 'Password is wrong' }, { status: 401 });

    }

    const token = await new SignJWT({
        email: user.email,
        name:user.name,
        role:user.role

    }).setProtectedHeader({
        alg: 'HS256'
    }).setIssuedAt()
        .setExpirationTime('1h')
        .sign(getJwtSecretKey());

    if (token) {
        const response = NextResponse.json({ status: 'success', message: 'Login successful', user  });
        response.cookies.set({
            name: 'token',
            value: token,
            path: '/'
        })
        return response;
    }

}