import React from 'react'
import {Link} from "react-router-dom";
import {HashLink} from "react-router-hash-link";

const Product = () => {
  return ( 
    <nav>
        {/* <h1>Products</h1> */}
        <main>
            <HashLink to={"/#home"}>Category 1</HashLink>
            <Link to={"/contact"}>Category 2</Link>
            <HashLink to={"/#about"}>Category 3</HashLink>    
            {/* hm <a> tag se particular us div pr jump kr jaate h but <a> tag load hota h jo hm react m nhi chahte
             isliye hashlink ka use krte h <a> tag or <link> dono ki functionality use ho    */}

            {/* #about isliye hm ek div bnayenge usko id #about de denge to scroll hokr uspr aa jaega */}
            {/* <HashLink to={"/#brands"}>Brands</HashLink> */}
            <HashLink to={"/#brands"}>Category 4</HashLink>
 
        </main>
    </nav>

  )
}

export default Product;





