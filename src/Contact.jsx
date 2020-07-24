import React, { useState } from 'react';

const Contact=()=>
{
  const [data,setData]=useState({
      fullname:'',
      phoneno:'',
      email:'',
      mobileno:'',
      comments:'',

  })
  const InputEvent=(event)=>
  {
    const {name,value}=event.target;
    setData((preVal)=>
    {
   return {
        ...preVal,
        [name]:value,
   }
    })
  }
  const formSubmit=(e)=>
  {
  e.preventDefault();
  alert(` My name is ${data.fullname} .My Email is ${data.email}.
     My phone no is ${data.phoneno}. and mobile no is ${data.mobileno}.
     comments is ${data.comments}`);
  }
  return(
    <>
    <div className="my-5">
     <h1 className="text-center">Contact Us</h1>
    </div>
    <div className="container contact_div">
      <div className="row">
        <div className="col-md-6 col-10 mx-auto">
          <form onSubmit={formSubmit}
          >
          <div class="mb-2">
  <label for="exampleFormControlInput1" class="form-label">Email address</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" 
  name="email"
  value={data.email}
  onChange={InputEvent}
  placeholder="name@example.com"/>
</div>
   <div class="mb-2">
  <label for="exampleFormControlInput1" class="form-label">Enter your Full name</label>
  <input type="text" class="form-control" id="exampleFormControlInput1" 
   name="fullname"
  value={data.fullname}
  onChange={InputEvent}
  placeholder="Enter Name"/>
</div>
   <div class="mb-2">
  <label for="exampleFormControlInput1" class="form-label">phone No</label>
  <input type="number" class="form-control" id="exampleFormControlInput1"
   name="phoneno"
  value={data.phoneno}
  onChange={InputEvent}
   placeholder="Phone No"/>
</div>
   <div class="mb-2">
  <label for="exampleFormControlInput1" class="form-label">Mobile no.</label>
  <input type="number" class="form-control" id="exampleFormControlInput1"
     name="mobileno"
  value={data.mobileno}
  onChange={InputEvent}
   placeholder="Mobile no"/>
</div>
<div class="mb-2">
  <label for="exampleFormControlTextarea1" class="form-label">Comments</label>
  <textarea class="form-control"
   name="comments"
  value={data.comments}
  onChange={InputEvent}
   id="exampleFormControlTextarea1" rows="2"></textarea>
</div>
 <div class="col-6">
    <button class="btn btn-outline-primary" type="submit">Submit form</button>
  </div>
          </form>
        </div>
      </div>
    </div>
       
    </>
  )

  
}

export default Contact;
