import UserHeader from '../Shared/UserHeader'
import UserFooter from '../Shared/UserFooter'
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function UserIndex() {

  const navigate = useNavigate();

    const handleDetailPage = (id) => {
    navigate('/detailpage', { state: { proId: id } })
  }
  
  
  const [pro, setPro] = useState([]);
  const [search, setSearch] = useState("");  ///////
  
  const handleChange = (e) => {  //////
  setSearch(e.target.value);
};

const filteredProducts = pro.filter((p) => /////
  p.ProductName?.toLowerCase().includes(search?.toLowerCase() || "") ||
  p.ProductDescription?.toLowerCase().includes(search?.toLowerCase() || "")
);

    const fetchRecords = async() => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/product`);
      const data = response.data;
      setPro(data);
      console.log(data);
    }
    catch (error) {
      console.log("Error Occured: ", error);
    }
  }

  useEffect(() =>{
    fetchRecords()
  }, [])

  return (
        <div>
          <UserHeader />




  {/* Start Portfolio Section */}
  <section id="portfolio" className="portfolio-section-1">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="section-title text-center wow fadeInDown" data-wow-duration="2s" data-wow-delay="50ms">
            <h2>Our Products</h2>
            <p>Duis aute irure dolor in reprehenderit in voluptate</p>
            <label htmlFor="">Find</label> &nbsp;
            <input type="text" onChange={handleChange} />
            {/* <button style={{marginLeft: 2}} onClick={handleClick}>Search</button> */}
          </div>                        
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          {/* Start Portfolio items */}
          <ul id="portfolio-list">
             {/* {pro.map(p =>( */}

              {filteredProducts.map((p) => (
          
            <li key={p._id} className="wow fadeInLeft" data-wow-duration="2s" data-wow-delay="300ms">
              <div className="portfolio-item">
                <img src={p.ProductImage} className="img-responsive" alt="" />  
                <div className="portfolio-caption">
                  <h4>{p.ProductName}</h4>
                  <p>{p.ProductDescription}</p>
                  <button onClick={() => (handleDetailPage(p._id))} data-toggle="modal" className="link-1"><i className="fa fa-list" /></button>
                  <a href="#" className="link-2"><i class="bi bi-bag"></i></a>
                </div>
              </div>
            </li>
             ))}
          </ul>
          {/* End Portfolio items */}
        </div>
      </div>
    </div>
  </section>



  
  {/* End Client Section */}
<UserFooter />
</div>

  )
}

export default UserIndex