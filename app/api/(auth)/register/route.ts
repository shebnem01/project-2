import { NextRequest, NextResponse } from "next/server";
import bcrypt from 'bcrypt'
import { createNewData } from "@/services/serviceOperation";

export async function POST(req: NextRequest) {
    const { name, email, password } = await req.json();

    const hashedPassword = await bcrypt.hash(password, 12);
    const newData = { name, email, hashedPassword }

    const data = await createNewData({ tableName: 'user', newData });

    if ('error' in data) {
        if (data.error.includes('Unique constraint failed on the constraint: `User_email_key`')) {
            return NextResponse.json({
                status: 'error',
                message: 'This email address is already in use. Please choose another one.'
            }, { status: 409 });
        }
    }
    return NextResponse.json({ status: 'success', data })
}