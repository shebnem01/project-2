import { createNewData } from "@/services/serviceOperation";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
    try {
        const body = await req.json();
        // getsessionu yoxlamaq
        if (!body) {
            // return NextResponse.json({ error: "Request body is missing" }, { status: 400 });
            return NextResponse.error();
        }
        const { name, description, price, brand, category, image, inStock } = body;
        const data = await createNewData({
            tableName: 'product', newData:
            {
                name, description, price: parseFloat(price), brand, category, image, inStock

            }
        });
        if (!data) {
            return NextResponse.error();
        }
        return NextResponse.json({ status: "success", message: "Product added successfully", data },);
    } catch (error) {
        return NextResponse.json({ error: 'An unknown error occurred' }, { status: 500 });
    }
}