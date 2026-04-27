import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import UserHeader from '../Shared/UserHeader';
import UserFooter from '../Shared/UserFooter';

function DetailPage() {

    const location = useLocation();
    const getId = location.state?.proId;
    console.log("Product Id:", getId);

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
                pi: data.ProductImage
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

    return (
        <>
        <UserHeader />
        <div className="container">
            <div className="row">

                <div className="col-lg-6 col-md-6 mb-3">
                    <div className="card">
                        <img src={pro.pi} alt="product" className="img-fluid" />
                    </div>
                </div>

                <div className="col-lg-6 col-md-6 mb-3" style={{margin: '150px 50px', width: 200}}>
                    <div className="card">
                        <h1>{pro.pn}</h1>
                        <h2>{pro.pp}</h2>
                        <p>{pro.pd}</p> <hr />  
                        <label htmlFor="">Quantity</label> &nbsp;
                        <input type="number" min={1} max={10} /> <br /> <br />
                        <button className='btn btn-warning' style={{padding: '5px 35px'}}> Buy Now</button>
                    </div>
                </div>

            </div>
        </div>
        <UserFooter />
        </>

    )
}

export default DetailPage