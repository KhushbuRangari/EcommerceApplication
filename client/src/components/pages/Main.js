import React from 'react'
import './Main.css'
import Products from './Products';
import Category from './category';
import Search from './search';

export default function Main({products,captureSearch}) {
    return (
        <div className='main'>
            
            <Products products={products} captureSearch={captureSearch}/>
            <Category products={products} />
            <Search products={products}/>
        </div>
    )
}
