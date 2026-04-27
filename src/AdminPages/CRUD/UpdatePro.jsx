import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import AdminHeader from '../../Shared/AdminHeader';
import Navbar from '../../Shared/Navbar';

function UpdatePro() {

    const navigate = useNavigate(); // for redirection form update page to view when update

    const location = useLocation();
    const getId = location.state?.proId;
    console.log("User Id:" , getId);

    const [pro, setPro] = useState({
        pn: "",
        pp: "",
        pd: "",
        pi: null
    })

    const getProduct = async () => {
        try {
            const response = await axios.get(`http://localhost:3000/product/${getId}`);
            const data = response.data;
            console.log("Response :", data);
            setPro({
                pn: data.ProductName,
                pp: data.ProductPrice,
                pd: data.ProductDescription,
                pi: null
            }
            )
        }
        catch (error) {
            console.log("Error Occured: ", error);
        }
    }

    useEffect(() => {
        getProduct()
    }, [])

    const handleChange = (e) => {
        if (e.target.name === "pi") {
            setPro({ ...pro, pi: e.target.files[0] });
        } else {
            setPro({ ...pro, [e.target.name]: e.target.value });
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("pn", pro.pn);
        formData.append("pp", pro.pp);
        formData.append("pd", pro.pd);

        if (pro.pi) {
            formData.append("pi", pro.pi);
        }

        try {
            await axios.put(`http://localhost:3000/product/${getId}`,
                formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
    );
            alert("Updated Successfully");

            navigate("/viewproduct"); // for redirection to view product
        }
        catch (error) {
            console.log("Error Occured: ", error);
        }
    }


    return (
        // <div>
        //     <input type="text" name="pn" value={pro.pn} placeholder='Product Name' onChange={handleChange} /> <br />
        //     <input type="text" name="pp" value={pro.pp} placeholder='Product Price' onChange={handleChange} /> <br />
        //     <input type="text" name="pd" value={pro.pd} placeholder='Product Description' onChange={handleChange} /> <br />
        //     <input type="file" name="pi" onChange={handleChange} /> <br />
        //     <button onClick={handleSubmit}>Update Product</button>
        // </div>

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
                                <h6 className="mb-4">Edit Product</h6>
                                <form>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputEmail1" className="form-label">Product Name</label>
                                        <input type="text" name="pn" value={pro.pn} placeholder='Product Name' onChange={handleChange} className="form-control" />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Product Price</label>
                                        <input type="text" name="pp" value={pro.pp} placeholder='Product Price' onChange={handleChange} className="form-control" />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Product Description</label>
                                        <input type="text" name="pd" value={pro.pd} placeholder='Product Description' onChange={handleChange} className="form-control" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                        <input type="file" name="pi"  onChange={handleChange} className="form-control" />
                                    </div>
                                   
                                     <button onClick={handleSubmit} className='btn btn-primary'>Update Product</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UpdatePro