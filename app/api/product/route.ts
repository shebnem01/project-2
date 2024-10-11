import { getAllData } from "@/services/serviceOperation"
import { NextResponse } from "next/server";

export const GET = async () => {
    try {
        const product = await getAllData({ tableName: "product" });

        if ('error' in product) {
            return NextResponse.json({ status: 'error', message: product.error }, { status: 500 });
        }
        return NextResponse.json({ status: 'success', data: product }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ status: 'error', message: 'Internal server error' }, { status: 500 });

    }
}
