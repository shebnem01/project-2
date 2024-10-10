import { getAllData } from "@/services/serviceOperation"
import { NextResponse } from "next/server";

export const GET = async () => {
    try {
        const products = await getAllData({ tableName: "product" });

        if ('error' in products) {
            return NextResponse.json({ status: 'error', message: products.error }, { status: 500 });
        }
        return NextResponse.json({ status: 'success', data: products }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ status: 'error', message: 'Internal server error' }, { status: 500 });

    }
}
