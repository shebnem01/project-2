import Link from 'next/link'
import { IoBagHandleOutline } from "react-icons/io5";
import HeaderCategories from './HeaderCategories';
import Search from './Search';
import UserMenu from './UserMenu';
import BasketMenu from './BasketMenu';

const Header = () => {
    return (
        <header>
            <div className="container px-[120px]  mx-auto py-2 ">
                <div className="flex items-center justify-between">
                    <Link className='w-[20%] flex items-center gap-1 text-3xl font-bold text-green-700 uppercase' href='/'>
                        Shop<IoBagHandleOutline />
                    </Link>
                    <HeaderCategories />
                    <div className='w-[20%] flex justify-end gap-2 items-center'>
                        <Search />
                        <UserMenu />
                        <BasketMenu />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header