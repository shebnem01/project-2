import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET(req: NextRequest, { params }: { params: { userId: string } }) {
    const { userId } = params;

    try {
        const basket = await prisma.basket.findUnique({
            where: { userId },
            include: { items: { include: { product: true } } },
        });

        if (!basket) {
            return NextResponse.json({ items: [] }, { status: 200 });
        }

        return NextResponse.json(basket, { status: 200 });
    } catch (error) {
        console.error( error);
       
    }
}
