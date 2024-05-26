"use client"

import React, { useEffect, useState } from 'react'
import { getAllProducts } from "@/services/productServices";
import Context from './ContextCreator';

const ContextProvider = ({children}) => {
    const [user, setUser] = useState();
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        const loadcontext = async ()=>{
            try {
                const productsData = await getAllProducts();
                setProducts(productsData);
              } catch (error) {
                console.error("Error fetching products:", error);
              }
        }
        loadcontext();
    },[])

    return (
        <Context.Provider value={{user, setUser, products, setProducts}}>
            {children}
        </Context.Provider>
    )
}

export default ContextProvider