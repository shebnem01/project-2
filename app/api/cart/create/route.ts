
import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

export async function POST(req: NextRequest) {
    try {

        const body = await req.json()
        const { userId, productId, quantity } = body;

        if (!userId || !productId || typeof quantity !== 'number') {
            return NextResponse.json({ error: 'Invalid data' }, { status: 400 })
        }

        const basket = await prisma.basket.upsert({
            where: { userId },
            update: {},
            create: {
                userId,
                items: {
                    create: {
                        productId,
                        quantity,
                    },
                },
            },
            include: {
                items: true,
            },
        })

        const updatedBasketItem = await prisma.basketItem.upsert({
            where: {
                basketId_productId: {
                    basketId: basket.id,
                    productId: productId,
                },
            },
            update: {
                quantity: {
                    increment: quantity,
                },
            },
            create: {
                basketId: basket.id,
                productId,
                quantity,
            },
        })


        return NextResponse.json({status:'success',message:"Added to cart",data:updatedBasketItem },{ status: 200 })

    } catch (error) {
        console.error('Error adding product to cart:', error)
        return NextResponse.json({ error: 'An unknown error occurred' }, { status: 500 })
    }
}
