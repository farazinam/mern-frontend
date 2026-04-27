import React from 'react'
import { useAuth } from '../ContextAPI'
import { Link } from 'react-router-dom'

function AdminHeader() {

 
  return (
   <div>
  <meta charSet="utf-8" />
  <title>DASHMIN - Bootstrap Admin Template</title>
  <meta content="width=device-width, initial-scale=1.0" name="viewport" />
  <meta content name="keywords" />
  <meta content name="description" />
  {/* Favicon */}
  <link href="AdminAsset/img/favicon.ico" rel="icon" />
  {/* Google Web Fonts */}
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
  <link href="https://fonts.googleapis.com/css2?family=Heebo:wght@400;500;600;700&display=swap" rel="stylesheet" />
  {/* Icon Font Stylesheet */}
  <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css" rel="stylesheet" />
  <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css" rel="stylesheet" />
  {/* Libraries Stylesheet */}
  <link href="AdminAsset/lib/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet" />
  <link href="AdminAsset/lib/tempusdominus/css/tempusdominus-bootstrap-4.min.css" rel="stylesheet" />
  {/* Customized Bootstrap Stylesheet */}
  <link href="AdminAsset/css/bootstrap.min.css" rel="stylesheet" />
  {/* Template Stylesheet */}
  <link href="AdminAsset/css/style.css" rel="stylesheet" />
  <div className="container-xxl position-relative bg-white d-flex p-0">
    {/* Spinner Start */}
    {/* <div id="spinner" className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
      <div className="spinner-border text-primary" style={{width: '3rem', height: '3rem'}} role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div> */}
    {/* Spinner End */}
    {/* Sidebar Start */}
    <div className="sidebar pe-4 pb-3">
      <nav className="navbar bg-light navbar-light">
        <a href="index.html" className="navbar-brand mx-4 mb-3">
          <h3 className="text-primary"><i className="fa fa-hashtag me-2" />DASHMIN</h3>
        </a>
        <div className="d-flex align-items-center ms-4 mb-4">
          <div className="position-relative">
            <img className="rounded-circle" src="AdminAsset/img/user.jpg" alt style={{width: 40, height: 40}} />
            <div className="bg-success rounded-circle border border-2 border-white position-absolute end-0 bottom-0 p-1" />
          </div>
          <div className="ms-3">
            <h6 className="mb-0">Jhon Doe</h6>
            <span>Admin</span>
          </div>
        </div>
        <div className="navbar-nav w-100">
          <a href="index.html" className="nav-item nav-link active"><i className="fa fa-tachometer-alt me-2" />Dashboard</a>
          <div className="nav-item dropdown">
            <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown"><i className="fa fa-laptop me-2" />Product</a>
            <div className="dropdown-menu bg-transparent border-0">
              <Link to='/addproduct' className="dropdown-item">Add Product</Link>
              <Link to='/viewproduct' className="dropdown-item">View product</Link>
            </div>
          </div>
          <a href="widget.html" className="nav-item nav-link"><i className="fa fa-th me-2" />Widgets</a>
          <a href="form.html" className="nav-item nav-link"><i className="fa fa-keyboard me-2" />Forms</a>
          <a href="table.html" className="nav-item nav-link"><i className="fa fa-table me-2" />Tables</a>
          <a href="chart.html" className="nav-item nav-link"><i className="fa fa-chart-bar me-2" />Charts</a>
          <div className="nav-item dropdown">
            <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown"><i className="far fa-file-alt me-2" />Pages</a>
            <div className="dropdown-menu bg-transparent border-0">
              <a href="signin.html" className="dropdown-item">Sign In</a>
              <a href="signup.html" className="dropdown-item">Sign Up</a>
              <a href="404.html" className="dropdown-item">404 Error</a>
              <a href="blank.html" className="dropdown-item">Blank Page</a>
            </div>
          </div>
        </div>
      </nav>
    </div>
    {/* Sidebar End */}
    {/* Content Start */}
  
    </div>
    </div>

  )
}

export default AdminHeader