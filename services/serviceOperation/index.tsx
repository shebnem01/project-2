import prisma from '@/lib/prisma'
import { Prisma } from '@prisma/client';

interface CreateNewDataProps<T> {
    tableName: string,
    newData?: T
}
export async function createNewData<T>({ tableName, newData }: CreateNewDataProps<T>) {
    try {
        let data;
        switch (tableName) {
            case 'product':
                data = await prisma.product.create({ data: newData as Prisma.ProductCreateInput });
                break;
            case 'user':
                data = await prisma.user.create({ data: newData as Prisma.UserCreateInput });
                break;

            default:
                throw new Error(`Unknown table name: ${tableName}`);
        }
        return data;
    } catch (error) {
        return { error: (error as Error).message };
    }
}

export async function getAllData<T>({ tableName }: CreateNewDataProps<T>) {
    try {
        let data;
        switch (tableName) {
            case 'product':
                data = await prisma.product.findMany();
                break;

            default:
                throw new Error(`Data not found`);
        }
        return data;
    } catch (error) {
        return { error: (error as Error).message };
    }
}
