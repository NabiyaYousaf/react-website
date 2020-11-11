import React from "react";
import pic1 from "../src/images/stage.jpg";
const Card=()=>{
    return(
        <>
        <div className="card mt-5 col-md-6 col-10" style={{width:'300px',height:'300hv', float:'left', marginLeft:'3%'}}>
  <img src={pic1} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">STAGE DECORATION</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary position">Go somewhere</a>
  </div>
</div>
        </>
    );
}
export default Card;