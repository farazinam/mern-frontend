import React from 'react'
import { useState } from 'react'
import axios from 'axios';
import AdminHeader from '../../Shared/AdminHeader';
import Navbar from '../../Shared/Navbar';

function AddPro() {
    const [pro, setPro] = useState({
        pn: "",
        pp: "",
        pd: "",
        pi: null
    })

    const handleChange = (e) => {
        if (e.target.name == "pi") {
            setPro({ ...pro, pi: e.target.files[0] })
        }
        else {
            setPro({ ...pro, [e.target.name]: e.target.value })
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(pro);

        const formData = new FormData();
        formData.append("pn", pro.pn)
        formData.append("pp", pro.pp)
        formData.append("pd", pro.pd)
        formData.append("pi", pro.pi)

        try {
            axios.post("http://localhost:3000/product", formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            });
        }

        catch (error) {
            console.log("Error Occured: ", error);
        }

    }

    return (

        <>
            <AdminHeader />
            <div className="content">
                {/* Navbar Start */}
                <Navbar />
                {/* Navbar End */}
                <div className="container-fluid pt-4 px-4">
                    <div className="row g-4">
                        <div className="col-sm-12 col-xl-6">
                            <div className="bg-light rounded h-100 p-4">
                                <h6 className="mb-4">Add Product</h6>
                                <form>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputEmail1" className="form-label">Product Name</label>
                                        <input type="text" name="pn" placeholder='Product Name' onChange={handleChange} className="form-control" />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Product Price</label>
                                        <input type="text" name="pp" placeholder='Product Price' onChange={handleChange} className="form-control" />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Product Description</label>
                                        <input type="text" name="pd" placeholder='Product Description' onChange={handleChange} className="form-control" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                        <input type="file" name="pi"  onChange={handleChange} className="form-control" />
                                    </div>
                                   
                                     <button onClick={handleSubmit} className='btn btn-primary'>Add Product</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default AddPro