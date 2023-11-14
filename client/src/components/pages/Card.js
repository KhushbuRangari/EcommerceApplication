import React from 'react'



export default function Card({ products }) {
  const productsArray = Object.values(products);
  // console.log(products, "CARD PRODUCT");


  let imageStyle = {
    width: "100%",
    height: "150px"
  }
  let cardSt = {
    // position: "relative",
    // width: "880px",
    //   // marginBottom: "6%",
    // marginLeft: "10%",
    // marginTop: "30px",
    // // display: "inlineBlock",
    // display: "flex",
    // // flexWrap: "wrap",
    // alignItems: "center",
    // // flexdirection: 'row',
    width:'20%',
    height: "80%",
    margingBottom: "10px"
  }

  return (
    <div className="col-sm-4 card products " id={products.title} style={cardSt}>
      <img className="prdImg card-img-top" src={products.thumbnail} alt="..." style={imageStyle} />
      <div className="card-body align-self-center" >
        <h5 className="card-title prdName" style={{ color: 'grey' }}>{products.brand}</h5>
        <h5 className="card-title prdName" >{products.title}</h5>
        {/* <p className="card-text"  style={{textAlign:'justify','textJustify':'inter-word'}}>{products.description}</p> */}
        <table style={{ margin: "0" }}>
          <tr >
            <td style={{ textAlign: "left" }}>
              <p className="card-text prdPrice" style={{ fontWeight: "bold" }} >Price: $ {products.price}</p>
            </td>
            <td style={{ textAlign: "right", paddingLeft: '20px' }}>
              <a href="/" className="btn addToCart mx-3" style={{ borderRadius: '10px', border: 'none', backgroundColor: '#262153', color: 'white', padding: "10px" }}><i className="fa fa-plus" style={{ fontSize: "14px", paddingRight: '10px' }}>   </i>   Add</a>
            </td>

          </tr>

        </table>
      </div>

      {/* <!-- Products Section --> */}
      {/* <div className="row">
        <div className="col-sm-2"> */}
      {/* <ul id="list1" >
        <li key={products.id}> */}
      {/* <div className="card products" id={products.title}>
        <img className="prdImg card-img-top" src={products.thumbnail} alt="..." style={imageStyle} />
        <div className="card-body align-self-center" >
          <h5 className="card-title prdName" >{products.title}</h5>
          <p className="card-text" >{products.description}</p>
          <p className="card-text prdPrice" style={{ fontWeight: "bold" }} >Price: $ {products.price}</p>

        </div>
        <a href="/" className="btn btn-outline-primary addToCart">Add to Cart</a>
      </div> */}
      {/* </li>
      </ul> */}
      {/* </div>
      </div> */}


    </div>
  )
}
