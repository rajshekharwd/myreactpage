import React from 'react'
import './Navigation.modules.css'

window.onscroll = () => { Navbar()};
const  Navbar = () => {
  const header = document.getElementById("header");
  const navbar = document.getElementById("navbar");
  const scrollPosition = window.scrollY;
 if (scrollPosition > header.offsetTop) {
   navbar.classList.add("sticky");
      } else {
      navbar.classList.remove("sticky");
  }
}


const Navigation = () => {
  return (
<>
     <div id="header">
            <a href="#" target="_blank" class="icon"><i class="bi bi-facebook"></i></a>
            <a href="#" target="_blank" class="icon"><i class="bi bi-twitter"></i></a>
            <a href="#" target="_blank" class="icon"><i class="bi bi-instagram"></i></a>
           <a href="#" target="_blank" class="icon"><i class="bi bi-linkedin"></i></a>
        </div>
    <nav class="navbar navbar-expand-lg navbar-light  " id='navbar'>
      <div className='row'>
        <div className='col-6'>
     <img className="logo " src="/images/images/logo-light.png"/>
     </div>
     <div className='col-6 '>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    
    <div class="collapse navbar-collapse px-2" >
      <ul class="navbar-nav ml-auto ">
        <li class="nav-item active">
          <a class="nav-link" href="#">FEATURES</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">LAYOUTS</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">COMPONENTS</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">APPS</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">THEMES</a>
        </li>
        <button class="btn btn-outline-primary my-2 my-sm-0" type="submit">BUY</button>
      </ul>
    </div>
   </div>
  </div>
  </nav>
  
       
  </> 

  )
};

export default Navigation;