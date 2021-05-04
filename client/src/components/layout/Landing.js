import React from 'react';
import NavBar from './sections/NavBar/Navbar';

import Banner from './sections/Banner/banner';
import About from './sections/About/aboutUs';
import Goals from './sections/Goals/Goals';
import Features from './sections/Features/Features'
import Achivements from './sections/Achivement/Achivements';
import Testimonial from './sections/Testimonials/Testimonials'

import Footer from './sections/Footer/Footer';

const Landing = () => {
 
  return (
    <div>
     
 <NavBar />
      <section className='banner' id='home'>
        <Banner />
      </section>

      <section className='' id='about'>
        <About />
      </section>

      <section className='goals'>
        <Goals />
      </section>

      <section className='achivement' id='services' >
        <Features />  
    
        <Achivements />
      </section>

      <section className="testimonails" id='testimonial'>
      <Testimonial />
      </section>

   
   <section id='contact' >
       <Footer />
   </section>
      <style>
        {`
                    html{
                        scroll-behavior:smooth;
                    }
                
                    
                     ul .react-multi-carousel-track li .react-multi-carousel-item{

                          -webkit-text-size-adjust: 100%;
                        line-height: 1.5;
                        font-weight: normal;
                        color: rgba(0,0,0,0.87);
                        font-size: 14px;
                        font-family: Poppins !important;
                        -webkit-font-smoothing: antialiased;
                        box-sizing: inherit;
                        list-style-type: none;
                        flex: 1 1 auto;
                        position: relative;
                        width: 600px;
                    }
                 
                 
                   
                   
                        
                    p{
                        position:relative;
                        font-size:18px;
                        font-weight:300;
                        margin-bottom:20px;
                        letter-spacing:1px;
                        color:#222;
                        text-align:center;
                    }
                    

                    .teamBx{
                        position:relative;
                        display:grid;
                        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                        grid-gap:40px;
                        max-width:100%;
                        margin-top:40px;
                        
                       
                    }
                    
                    .teamBx .member{
                        position:relative;
                        background:#000;
                        min-height:350px;
                        width:300px;
                        margin:0 auto;
                        display:flex;
                        justify-content:center;
                        align-items:center;
                    }
                    
                    .teamBx .member .imgBx{
                        position:relative;
                        top:0;
                        left:0;
                        width:100%;
                        height:100%;
                    }
                          
                    .teamBx .member .imgBx img{
                        position:absolute;
                        top:0;
                        left:0;
                        width:100%;
                        height:100%;
                        object-fit:cover;
                    }
                    
                    .teamBx .member .details{
                        position:absolute;
                        top:0;
                        left:0;
                        width:100%;
                        height:100%;
                        display:flex;
                        justify-content:center;
                        align-items:center;
                        background:#000;
                        transition:0.2s;
                        opacity:0;
                    }
                    .teamBx .member:hover .details{
                        opacity:1;
                        transition:1s;
                    }
                    .teamBx .member .details h2{
                        color:#fff;
                        text-transform:uppercase;
                        font-size:20px;
                        letter-spacing:1px;
                    }
                        
                    .teamBx .member .details h2 span{
                        display:block;
                        font-size:12px;
                        font-weight:300;
                    }
                    
                    
                    
                    .toggle{
                       display:none;
                    }
                    
                    @media (max-width:992px){
                        .toggle{
                            display: block;
                            position: relative;
                            width: 30px;
                            height:30px;
                            cursor:pointer;
                        }
                        header.sticky .toggle:before{
                            content:'';
                            position:absolute;
                            top:4px;
                            width:100%;
                            height:2px;
                            color:#000;
                            background: #000;
                            z-index:1;
                            box-shadow: 0 10px 0 #000;
                            transition: 0.5s;
                        }
                        header.sticky .toggle:after{
                            content:'';
                            position:absolute;
                            bottom:4px;
                            width:100%;
                            height:2px;
                            background: #000;
                            z-index:1;
                            transition: 0.5s;
                        }
                        .toggle:before{
                            content:'';
                            position:absolute;
                            top:4px;
                            width:100%;
                            height:2px;
                            color:#fff;
                            background: #fff;
                            z-index:1;
                            box-shadow: 0 10px 0 #fff;
                            transition: 0.5s;
                        }
                        
                        .toggle:after{
                            content:'';
                            position:absolute;
                            bottom:4px;
                            width:100%;
                            height:2px;
                            background: #fff;
                            z-index:1;
                            transition: 0.5s;
                        }
                    
                        header,{
                            padding: 5px 50px;
                            background-color:#020652;
                            
                        }
                        header.sticky{
                            padding: 5px 50px;
                            background:#fff;
                        }
                        
                        header ul {
                            position:absolute;
                            top:60px;
                            left:0;
                            width:100%;
                            height:100vh;
                            text-align:center;
                            overflow:auto;
                            background:#fff;
                            visibility:hidden;
                            opacity:0;
                        }
                        
                        header.active ul{
                            visibility:visible;
                            opacity:1;
                            display:block;
                            padding-top:20px;
                        }
                            
                        header.active ul li a{
                            display:inline-block;
                            margin:10px 0;
                            font-size: 20px;
                        }
                        header .logoname {
                            color:#fff;
                        }
                        header .logo,
                        header ul li a{
                            color:#000;
                           
                            margin:0px;
                        }
                        
                    
                     
                        
                        .sec{
                            padding: 100px 50px 50px 50px;
                        }
                        
                        .services .box{
                            width:100%;
                        }
                        
                        .stats{
                            padding-top:250px;
                        }
                        
                        .row100{
                            flex-direction:column;
                        }
                        
                        .contactForm .row100 .inputBx50,
                        .contactForm .row100 .inputBx100{
                            width:100%;
                            margin:0;
                        }
                        
                      
                        
                    }
                    
                    `}
      </style>
    </div>
  );
};

export default Landing;
