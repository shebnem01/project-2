
export interface ButtonProps {
    background: string,
    color: string,
    title:string,
}
export interface ProductProps {
    name: string,
    description: string,
    price: number,
    brand: string,
    category: string,
    inStock: boolean,
    image: string,
}
 export interface User {
    name: string;
    email: string;
    role: string;
    userId:string
}