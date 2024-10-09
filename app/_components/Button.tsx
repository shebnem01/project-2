
import React, { ReactNode } from "react"
interface ButtonProps {
    background: string,
    color: string,
    title:string,
}

const Button:React.FC<ButtonProps> = ({title,background,color}) => {
    return (
       <button className={`text-xs rounded-3xl shadow-md py-2 px-4 ${background} ${color}`}>{title}</button>
    )
}

export default Button