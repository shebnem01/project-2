'use client'
import Link from 'next/link'
import React from 'react'
const categories = [
    'Men', 'Women', 'Beauty', 'Sport'
]
const HeaderCategories = () => {
    return (
        <nav className="w-[60%] flex items-center">
            <ul className='flex w-full  items-center justify-center gap-[50px]'>
                {categories.map((cat, _i) => (
                    <li className='cusror-pointer' key={_i}>
                        <Link href={`/products?category=${cat}`}>{cat}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default HeaderCategories