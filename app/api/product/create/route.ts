import { createNewData } from "@/services/serviceOperation";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
    try {
        const body = await req.json();

        if (!body) {
            return NextResponse.json({ error: "Request body is missing" }, { status: 400 });

        }
        const { name, description, price, brand, category, image, inStock } = body;
        const data = await createNewData({
            tableName: 'product', newData:
            {
                name, description, price: parseFloat(price), brand, category, image, inStock

            }
        });
        if ('error' in data) {
            return NextResponse.json({ status: 'error', error: data.error });
        }
        return NextResponse.json({ status: "success", message: "Product added successfully", data },);
    } catch (error) {
        return NextResponse.json({ error: 'An unknown error occurred' }, { status: 500 });
    }
}