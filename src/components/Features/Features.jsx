import React from 'react'
import './Features.modules.css'

const Features = () => {
  return (
<>
<div className="Features-section">
    <div className="container">
      <div className="row home-row">
      <div class="col-12 offset-0 col-lg-8 offset-lg-2 text-center Features-section-title">
        <h1>Features At a Glance</h1>
        <p>We tried to create an admin theme that we would like to use ourselves so we listed our priorities. We would like to have a theme that is not over complicated to use, does the job well, contains must have omponents and looks really nice.</p>
        </div>
        <div className="col-12 col-md-6 col-lg-6 left-part-title">
          <h5>Pleasant Design</h5>
          <p className="white mb-5">As a web developer we enjoy to work on something looks nice. It is not an absolute necessity but it really motivates us that final product will look good for user point of view.<br></br>
          So we put a lot of work into colors, icons, composition and design harmony. Themed components and layouts with same design language.<br></br>
<br></br>We kept user experience principles always at the heart of the design process.</p>
 </div>
        <div className="col-12 col-md-6 col-lg-6 ">
          <img  src="/images/images/plesant-design.png" className='home-hero'></img>
        </div>
        </div>
        
        
        <div className="row ">
        <div class="col-12 col-md-6 col-lg-8 ">
                <img alt="Extra Responsive" src="/images/images/extra-responsive.png "className='home-hero f-img'></img>
                </div>
                <div class="col-12 col-md-6 col-lg-4 left-part-title ">
                    <h5>Extra Responsive</h5>
                  <p> Xxs breakpoint is for smaller screens that has a resolution lower than 420px. Xs works between 576px and 420px.
                     Xxl breakpoint is for larger screens that has a resolution higher than
                      1440px. Xl works between 1200px and 1440px.<br></br>With this approach
                       we were able to create better experiences for smaller and larger 
                       screens.</p>
            </div>
      </div>
      <div className="row ">
       
         <div class="col-12 col-md-6 col-lg-4 left-part-title ">
                    <h5>Superfine Charts</h5>
                  <p>Using charts is a good way to visualize data but they often look ugly and break the rhythm of design.<br></br>
                  We concentrated on a single chart library and tried to create charts that look good with color, opacity, border and shadow.<br></br> 
                  Used certain plugins and created some to make charts even more useful and beautiful.</p>
            </div>
            <div class="col-12 col-md-6 col-lg-8 ">
                <img alt="Extra Responsive" src="/images/images/superfine-charts.png "className='home-hero '></img>
                </div>
      </div>
      <div className="row ">
        <div class="col-12 col-md-6 col-lg-8 ">
                <img alt="Extra Responsive" src="/images/images/layouts-for-the-job.png "className='home-hero f-img'></img>
                </div>
                <div class="col-12 col-md-6 col-lg-4 left-part-title ">
                    <h5>Layouts for the Job</h5>
                  <p> Layouts are the real thing, they need to be accurate and right for the job. They should be functional for both user and developer.<br></br>
                  We created lots of different layouts for different jobs.<br></br>
                  Listing pages with view mode changing capabilities, shift select and select all functionality, application layouts with an additional menu, authentication and error layouts which has a different design than the other pages were our main focus. We also created details page with tabs that can hold many components.</p>

            </div>
      </div>
      <div className="row ">
        
                <div class="col-12 col-md-6 col-lg-4 left-part-title ">
                    <h5>Smart Menu</h5>
                  <p> Instead of good old single panel menus with accordion structure that looks over complicated, we created 2 panels and categorized pages accordingly.<br></br>
                  With this approach
                  The default menu auto hides sub panel when resolution is under some breakpoint to open some space. You may also hide menu completely or use only main panel open only.</p>
            </div>
            <div class="col-12 col-md-6 col-lg-8 ">
                <img alt="Extra Responsive" src="/images/images/smart-menu.png "className='home-hero'></img>
                </div>
      </div>
      

      </div>
      </div>
      
      
      
      </>
    
  )
}

export default Features