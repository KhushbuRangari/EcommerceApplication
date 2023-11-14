
import React from 'react'
import './products.css';
import Card from './Card';
import Layout from '../layouts/Layout';
export default function Products() {
    // { products, captureSearch }
    //  console.log(products,"THIS IS PRODUCTS");
    const captureSearch='apple'
    const products=[{
        id:1,
        title:"Apple phone",
        brand:"Apple",
        img:[{}]
    }]

    const filteredProduct = products.filter((product) => {
        // console.log(product.brand.toLowerCase(),"****",captureSearch.toLowerCase());
        if (product.brand.toLowerCase().trim() === captureSearch.toLowerCase().trim()) {
            return product;
        }
    })

    let cardStyle = {
        listStyleType: 'none',
        borderRadius: '12px',
        borderShadow: '1px 10px 10px gray',
        position: "relative",
        width: "100%",
        padding: '12px',
        // marginBottom: "6%",
        //  marginLeft: "2%",
        // marginBottom:'20%',
        // marginTop: "30px",
        // display: "inlineBlock",
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        height: "400px",

    }
    //   console.log(filteredProduct,"THIS IS PRODUCTS");
    return (
        <Layout>
            <div style={cardStyle}>
                {
                    filteredProduct.length !== 0 ? filteredProduct.map((ele) => {

                        return <Card products={ele} />
                    })
                        :
                        <>

                            {products.map((product, index) => {
                                return (
                                    <>
                                        <Card products={product} key={index} />

                                    </>)
                            })}

                        </>


                }

            </div >
        </Layout>
    )
}
