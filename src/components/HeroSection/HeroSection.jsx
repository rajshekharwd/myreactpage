import React from 'react'
import'./HeroSection.modules.css'


const HeroSection = () => {
  return (
    <div class="hero-section">
    <div class="container">
      <div class="row ">
        <div class="col-md-4  mt-30 left-part hero-section-title">
          <h4>MAGIC IS IN THE DETAILS</h4>
          <p class="white mb-5">Gogo is the combination of good design, quality code and attention for details.
We used same design language for components, layouts, apps and other parts of the template.
<br></br>Hope you enjoy it!</p>
<a class="btn btn-light btn-outline-success btn-xl mr-2 mb-2" href="/app" target="_blank">VIEW NOW <i class="simple-icon-arrow-right"></i></a>
        </div>
        <div class="col-md-8 right-part">
          
          <img  src="/images/images/home-hero.png" className='home-hero1'></img>
        </div>
        
      </div>
      
      <div class="flex-container">
  <div class="box">
  <i class="bi bi-mouse large-icon"></i>
    <h5 className='box-title'>Right Click Menu</h5>
    <p className='box-text'>Increases overall usability of the project by providing additional actions menu.</p>
  </div>
  <div class="box">
  <i class="bi bi-music-player large-icon"></i>
    <h5 className='box-title'>Video Player</h5>
    <p className='box-text'>Carefully themed multimedia players powered by Video.js library with Youtube support.</p>
  </div>

  <div class="box">
  <i class="bi bi-keyboard large-icon"></i>
    <h5 className='box-title'>Keyboard Shortcuts</h5>
    <p className='box-text'>Easily configurable keyboard shortcuts plugin that highly improves user experience.</p>
  </div>
  <div class="box">
  <i class="bi bi-server large-icon"></i>
    <h5 className='box-title'>Server</h5>
    <p className='box-text'>Three states two panels icon menu that looks good, auto resizes and does the job well.</p>
  </div>
</div>
    </div>
    </div>
  
  
  
  );
};

export default HeroSection;