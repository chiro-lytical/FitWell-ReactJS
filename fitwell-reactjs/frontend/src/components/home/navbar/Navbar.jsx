import React from 'react'
import "./Navbar.css"
import logo from "../../../assets/img/Logo/logo.png"

const Home = () => {
  return (
    
    <div class="container-fluid container-fluid1">
      <nav class="navbar navbar1 navbar-expand-lg navbar-dark fixed-top bg-black p-0">
      <a class="navbar-brand navbarlogo" href="fitwell Logo">
        <img src={logo} alt="fitwell Logo.png"/>
      </a>
      <button class="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse collap " id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 navbar-list-items">
          <li class="nav-item nav-item1 mx-2">
            <a class="nav-link " aria-current="page" href="./">HOME</a>
          </li>
          <li class="nav-item nav-item1 mx-2">
            <a class="nav-link" href="./about">ABOUT US</a>
          </li>
          <li class="nav-item nav-item1 mx-2">
            <a class="nav-link" href="./services">SERVICES</a>
          </li>
          <li class="nav-item nav-item1 mx-2">
            <a class="nav-link" href="./products">PRODUCTS</a>
          </li>
          <li class="nav-item nav-item1 mx-2">
            <a class="nav-link" href="./centres">CENTRES</a>
          </li>
          <li class="nav-item nav-item1 mx-2">
            <a class="nav-link" href="./reviews">REVIEWS</a>
          </li>
          <li class="nav-item nav-item1 mx-2">
            <a class="nav-link" href="./contact">CONTACT US</a>
          </li>
        </ul>
      </div>
      {/* <% if(loginStatus==0){ %> */}
        <div class="signinup">
          <ul class="navbar-nav me-auto mb-2 navbar-list-items">
            <li class="nav-item nav-item1 mx-2">
              <a class="nav-link" href="./signin">SIGN IN</a>
            </li>
            <li class="nav-item nav-item1 mx-2">
              <a class="nav-link" href="./signup">SIGN UP</a>
            </li>
          </ul>
        </div>   
      {/* <% } else{ %> */}
        <div class="dropdown">
          <button class="btn dropdown-toggle" style={{color: 'aliceblue', border: 'none'}} type="button" data-bs-toggle="dropdown" aria-expanded="false">
            My Account
          </button>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="./user_Dashboard_home">Dashboard</a></li>
            <li><a class="dropdown-item" href="./user_Dashboard_cart">Cart</a></li>
            <li><a class="dropdown-item" href="/userlogout">Logout</a></li>
          </ul>
        </div>
      {/* // <%} %> */}
      


  </nav>
    </div>
  )
}

export default Home