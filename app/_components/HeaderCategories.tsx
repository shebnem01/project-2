import Link from 'next/link'
import React from 'react'

const HeaderCategories = () => {
  return (
  
      <nav className="w-[60%] flex items-center">
        <ul className='flex w-full  items-center justify-center gap-[50px]'>
            <li>
                <Link className='font-medium' href="">
                    Men
                </Link>
            </li>
            <li>
                <Link className='font-medium ' href="">
                    Women
                </Link>
            </li>
            <li>
                <Link className='font-medium ' href="">
                    Beauty
                </Link>
            </li>
            <li>
                <Link className='font-medium ' href="">
                    Sport
                </Link>
            </li>
        </ul>
    </nav>

  )
}

export default HeaderCategories