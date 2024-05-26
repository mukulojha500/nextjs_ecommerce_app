"use client"

import React, { useContext } from 'react'
import Image from 'next/image'
import { FiSearch } from "react-icons/fi";
import Context from '@/context/ContextCreator';

export default function Navbar() {
    const context = useContext(Context)
    const [input, setInput]

    const handleSearch = ()=>{

    }

    return (
        <div className='flex justify-between text-center bg-blue-700 h-20 items-center pr-5 pl-5'>
            <div className='p-3'>
                <Image src='/ekart-high-resolution-logo-transparent.png' alt="logo" width={50} height={100} />
            </div>
            <div className='flex justify-center items-center flex-grow mr-5 h-12'>
                <input type='text' placeholder='search products' className='w-full h-full' />
                <button className='flex justify-center items-center bg-white h-full w-10 hover:bg-yellow-400' onClick={handleSearch}>
                    <FiSearch />
                </button>
            </div>
            <div className="flex items-center space-x-4 h-12">
                <button className="bg-blue-500 text-white px-4 py-1 rounded h-full hover:bg-yellow-400">Login</button>
                <button className="bg-blue-500 text-white px-4 py-1 rounded h-full hover:bg-yellow-400">My Kart: 0</button>
            </div>
        </div>
    )
}