import { getAllData } from "@/services/serviceOperation"
import { NextResponse } from "next/server";

export const GET = async () => {
    try {
        const products = await getAllData({ tableName: "product" });
        if (!products) {
            return NextResponse.error();
        }
        return NextResponse.json({ status: 'success', data: products })
    } catch (error) {
        console.error("Error fetching products:", error);
    }
}
