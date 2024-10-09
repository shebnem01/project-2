import prisma from '@/lib/prisma'
import { Prisma } from '@prisma/client';
// POST
interface CreateNewDataProps<T> {
    tableName: string,
    newData: T
}
export async function createNewData<T>({ tableName, newData }: CreateNewDataProps<T>) {
    try {
        let data;
        switch (tableName) {
            case 'product':
                data = await prisma.product.create({ data: newData as Prisma.ProductCreateInput });
                break;

                default:
                    throw new Error(`Unknown table name: ${tableName}`);
        }
        return data;
    } catch (error) {
        return { error: (error as Error).message };
    }
}
