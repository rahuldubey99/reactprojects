import React, { useState } from 'react';
const Contact =()=>{
    const [data ,setData] = useState({
        fullname:"",
        phone:"",
        email:"",
        msg:""

    })
    const InputEvent = (event) =>{
        const {name, value} = event.target;
        setData((preVal) =>{
            return{...preVal,
            [name]:value,}
        }) 
    }
    const formSubmit = (e) =>{
        e.preventDefault();
        alert(`name:${data.fullname} \n phone:${data.phone}`);

    }
    return(
        <>
            <div className="my-5">
                <h1 className="text-center">Contact Us</h1>
            </div>
            <div className="container contact_div">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        <form onSubmit={formSubmit}>
                            <div className="form-group">
                                <label for="exampleFormControlInput1">Name</label>
                                <input type="text" className="form-control" id="exampleFormControlInput1" name="fullname" value={data.fullname} onChange={InputEvent} placeholder="Enter your name" required/>
                            </div>
                            <div className="form-group">
                                <label for="exampleFormControlInput1">Ph.no</label>
                                <input type="number" className="form-control" id="exampleFormControlInput2" name="phone" value={data.phone} onChange={InputEvent} placeholder="Enter your mobile no" required/>
                            </div>
                            <div className="form-group">
                                <label for="exampleFormControlInput1">Email address</label>
                                <input type="email" className="form-control" id="exampleFormControlInput1" name="email" value={data.email} onChange={InputEvent} placeholder="name@example.com" required/>
                            </div>
                            <div className="form-group">
                                <label for="exampleFormControlTextarea1">Example textarea</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name="msg" value={data.msg} onChange={InputEvent} required></textarea>
                            </div>
                            <div className="col-12 mt-2">
                                <button type="submit" className="btn btn-outline-primary">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
 export default Contact; 