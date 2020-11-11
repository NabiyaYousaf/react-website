import React from "react";
const Contact=()=>{
    return(
<>
<div className="my-5">
  <h1 className="text-center">  CONTACT US</h1>
</div>
<div className="container contact_div">
            <div className="row">
                <div className="col-md-6 col-10 mx-auto">

<form>
<form>
  <div className="form-group">
    <label for="exampleFormControlInput1">Full Name</label>
    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter full name"/>
  </div>
  


  <div className="form-group">
    <label for="exampleFormControlInput1">Phone Number</label>
    <input type="number" className="form-control" id="exampleFormControlInput1" placeholder="phone number"/>
  </div>


  <div className="form-group">
    <label for="exampleFormControlInput1">Email address</label>
    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
  </div>



  
  <div className="form-group">
    <label for="exampleFormControlTextarea1">Message</label>
    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
  <br/>
  <div className="col-12">
  <button class="btn btn-outline-primary" type="submit">Submit form</button>
  </div>
</form>
</form>
</div>
</div>
</div>
</>
    );
}
export default Contact;