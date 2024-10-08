'use client'
import { RiSearch2Line } from "react-icons/ri";
import { MdClose } from "react-icons/md";
import { useState } from "react";

const Search = () => {
    const [show, setShow] = useState(false);
    const toggleShow = () => setShow(!show);
    return (
        <div className="relative">
            <button onClick={toggleShow}
                className="w-[50px] h-[50px] flex items-center rounded-full
            justify-center hover:bg-hoverColor text-gray-700"
            >
                <RiSearch2Line size={24} />
            </button>
            {show && (
                <div className="absolute top-0 -left-[800px] w-[550px] flex items-center me-3 bg-gray-100 shadow h-[44px] rounded-md p-4">
                    <span className="text-2xl">
                        <RiSearch2Line />
                    </span>
                    <input
                        className="ps-2 pe-4 h-[44px] bg-transparent w-full outline-none border-none"
                        type="text"
                        placeholder="Type and press enter"
                    />
                    <button  onClick={toggleShow} className="absolute right-2 top-0 h-full ">
                        <MdClose />
                    </button>
                </div>
            )}
        </div>
    );
};

export default Search;
