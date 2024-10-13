import { getAllData } from "@/services/serviceOperation";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req:NextRequest) => {
    try {
        console.log('saaaaa',req.url)
        const { searchParams } = new URL(req.url);
        const category = searchParams.get('category'); 

        const product = await getAllData({ tableName: "product" });

        if ('error' in product) {
            return NextResponse.json({ status: 'error', message: product.error }, { status: 500 });
        }

        let filteredProducts = product;

        if (category) {
            filteredProducts = product.filter(item => item.category === category);
        }

        return NextResponse.json({ status: 'success', data: filteredProducts }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ status: 'error', message: 'Internal server error' }, { status: 500 });
    }
};
