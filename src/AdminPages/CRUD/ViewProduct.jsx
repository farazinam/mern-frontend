import { useEffect } from 'react';
import { useState } from 'react'
import axios from 'axios';

import { useNavigate } from "react-router-dom";
import AdminHeader from '../../Shared/AdminHeader';
import Navbar from '../../Shared/Navbar';

function ViewPro() {

  //Update
  const navigate = useNavigate();

  const handleUpdate = (id) => {
    navigate('/updateproduct', { state: { proId: id } })
  }

  const [pro, setPro] = useState([]);

  //Delete
  const handleDelete = (id) => {
    try {
      axios.delete(`http://localhost:5000/delete/${id}`);
      setPro(pro.filter(u => u._id != id));
      // console.log(data);
      alert("Record Deleted")
    }
    catch (error) {
      console.log("Error Occured: ", error);
    }
  }


  const fetchRecords = async () => {
    try {
      const response = await axios.get("http://localhost:5000/product");
      const data = response.data;
      setPro(data);
      console.log(data);
    }
    catch (error) {
      console.log("Error Occured: ", error);
    }
  }

  useEffect(() => {
    fetchRecords()
  }, [])

  return (

    <>
      <AdminHeader />
      <div className="content">
        {/* Navbar Start */}
        <Navbar />
        {/* Navbar End */}

        <div className="container-fluid pt-4 px-4">
          <div className="row g-4">
            <div className="col-sm-12">
              <div className="bg-light rounded h-100 p-4">
                <h6 className="mb-4">Products</h6>
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th>Product ID</th>
                      <th>Product Name</th>
                      <th>Product Price</th>
                      <th>Product Description</th>
                      <th>Product Image</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>

                    {pro.map(p => (
                      <tr key={p._id}>
                        <td>{p._id}</td>
                        <td>{p.ProductName}</td>
                        <td>{p.ProductPrice}</td>
                        <td>{p.ProductDescription}</td>
                        <td> <img src={p.ProductImage} alt="" width={100} /> </td>
                        <td>
                          <button onClick={() => (handleUpdate(p._id))} className='btn btn-warning m-2'>Edit</button>
                          <button onClick={() => (handleDelete(p._id))} className='btn btn-danger m-2'>Delete</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>


      </div>
    </>


  )
}

export default ViewPro