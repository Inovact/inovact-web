import React from 'react';
import { Link } from 'react-router-dom';

// import landingCover2 from "../../static/21332-teamwork.json";

const LandingNew = () => {
  // React.useEffect(() => {
  //     lottie.loadAnimation({
  //         container: document.querySelector("#landing-cover"),
  //         animationData:landingCover2,
  //     });
  // }, []);

  window.addEventListener('scroll', function () {
    let header = document.querySelector('#header');
    header.classList.toggle('sticky', window.scrollY > 0);
  });

  function toggle() {
    let header = document.querySelector('header');
    header.classList.toggle('active');
  }

  return (
    <div>
      <header id='header'>
        <Link to='/' className='logo'>
          Logo
        </Link>
        <ul>
          <li>
            <a href='#home' onClick={toggle}>
              Home
            </a>
          </li>
          <li>
            <a href='#about' onClick={toggle}>
              About
            </a>
          </li>
          <li>
            <a href='#services' onClick={toggle}>
              Services
            </a>
          </li>
          <li>
            <a href='#team' onClick={toggle}>
              Testimonials
            </a>
          </li>
          <li>
            <a href='#contact' onClick={toggle}>
              Contact
            </a>
          </li>
          <li>
            <a href='#home'>Login</a>
          </li>
          <li>
            <a href='#home'>SignUp</a>
          </li>
        </ul>
        <div className='toggle' onClick={toggle} />
      </header>
      
      <section className='banner' id='home'>
        <h2>
          Carca
          <br />
          <span>for students by students of students</span>
        </h2>
      </section>
      <section className='sec' id='about'>
        <div className='content'>
          <div className='mxw800p'>
            <h3>Who We Are</h3>
            <p>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore u fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum."
            </p>
           
          </div>
        </div>
      </section>
      <section className='sec' id='services'>
        <div className='content'>
          <div className='mxw800p'>
            <h3>Recent Projects and Ideas</h3>
            <p>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className='services'>
            <div className='box'>
              <div id='iconBx'>{/* <img src='' /> */}</div>
              <div id='content'>
                <h2>Project</h2>
                <p>
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor dolore magna aliqua. Ut enim ad minim
                  veniam, quis nostrud.
                </p>
              </div>
            </div>
            <div className='box'>
              <div id='iconBx'>{/* <img src='' /> */}</div>
              <div id='content'>
                <h2>Idea</h2>
                <p>
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor dolore magna aliqua. Ut enim ad minim
                  veniam, quis nostrud.
                </p>
              </div>
            </div>
            <div className='box'>
              <div id='iconBx'>{/* <img src='' /> */}</div>
              <div id='content'>
                <h2>Idea</h2>
                <p>
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor dolore magna aliqua. Ut enim ad minim
                  veniam, quis nostrud.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='sec stats'>
        <div className='content'>
          <div className='mxw800p'>
            <h3>Our Achivements</h3>
            <p>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className='statsBox'>
            <div className='box'>
              <h2>200+</h2>
              <h4>Projects</h4>
            </div>
            <div className='box'>
              <h2>1200+</h2>
              <h4>Ideas Pitched</h4>
            </div>
            <div className='box'>
              <h2>100+</h2>
              <h4>Teams</h4>
            </div>
            <div className='box'>
              <h2>2400+</h2>
              <h4>Students</h4>
            </div>
          </div>
        </div>
      </section>
      <section className='sec' id='team'>
        <div className='content'>
          <div className='mxw800p'>
            <h3>Testimonials</h3>
          </div>
          <div className='teamBx'>
            <div className='member'>
              <div className='imgBx'>{/* <img /> */}</div>
              <div className='details'>
                <div>
                  <h2>
                    John Doe
                    <br />
                    <span>Web Developer</span>
                  </h2>
                </div>
              </div>
            </div>
            <div className='member'>
              <div className='imgBx'>{/* <img /> */}</div>
              <div className='details'>
                <div>
                  <h2>
                    John Doe
                    <br />
                    <span>Web Developer</span>
                  </h2>
                </div>
              </div>
            </div>
            <div className='member'>
              <div className='imgBx'>{/* <img /> */}</div>
              <div className='details'>
                <div>
                  <h2>
                    John Doe
                    <br />
                    <span>Web Developer</span>
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='sec contact ' id='contact'>
        <div className='content'>
          <div className='mxw800p'>
            <h3>Contact Us</h3>
          </div>
          <div className='contactForm'>
            <form>
              <div className='row100'>
                <div className='inputBx50'>
                  <input type='text' name='' placeholder='Full Name' />
                </div>
                <div className='inputBx50'>
                  <input type='text' name='' placeholder='Email Address' />
                </div>
              </div>
              <div className='row100'>
                <div className='inputBx100'>
                  <textarea placeholder='message'></textarea>
                </div>
              </div>
              <div className='row100'>
                <div className='inputBx100'>
                  <input type='submit' value='send' />
                </div>
              </div>
            </form>
          </div>
         
          <p className='copyright'>
            Design and Developed By <a href='www.google.com'>Afif</a>
          </p>
        </div>
      </section>
      <style>
        {`
                    html{
                        scroll-behavior:smooth;
                    }
                    
                    header{
                        position:fixed;
                        top:0;
                        left:0;
                        background:#222;
                        width:100%;
                        display:flex;
                        justify-content:space-between;
                        align-items:center;
                        padding: 40px 20px;
                        z-index:1000;
                        transition:0.6s;
                    }
                    
                    header.sticky{
                        padding:5px 100px;
                        background:#fff;
                        border-bottom: 1px solid (0,0,0,0.1);
                    }
                    
                    header .logo{
                        position:relative;
                        font-weight:500;
                        color:#fff;
                        text-decoration:none;
                        font-size:2rem;
                        text-transform:uppercase;
                        letter-spacing:2px;
                        transition:0.6s;
                    }
                 
                    header ul{
                        position:relative;
                        display:flex;
                        justify-content:center;
                        align-items:center;
                        margin-bottom:0;
                    }
                    
                    header ul li{
                        position:relative;
                        list-style:none;
                        color:#fff;
                    }
                    
                    header ul li a{
                        position:relative;
                        margin:0 15px;
                        text-decoration:none;
                        color:#fff;
                        letter-spacing:2px;
                        font-weight:300;
                        transition:0.6s;
                    } 
                    
                    header.sticky .logo,
                    header.sticky ul li a{
                        color:#000;
                    }
                    
                    .banner{
                        position:relative;
                        margin-top:30px;
                        width:100%;
                        min-height:100vh;
                        transition:0.5s;
                        display:flex;
                        flex-wrap:wrap;
                        justify-content:space-evenly;
                        align-items:center;
                    }
                    
                    .banner h2{
                        color:#222;
                        font-size:50px;
                        text-transform:uppercase;
                        
                        
                    }
                    
                    .banner h2 span{
                        
                        font-size:20px;
                    }
                    
                    .sec{
                        background:#fff;
                        padding:100px;
                        min-height:60vh;
                        display:flex;
                        justify-content:center;
                        align-content:center;   
                    }
                        
                    .sec .content{
                        position:relative;
                        text-align:center;
                        width:100%;
                        align-content:center;
                    }
                    
                    .mxw800p{
                        max-width:800px;
                        margin:0 auto;
                    }
                    
                    h3{
                        font-size:40px;
                        font-weight:200;
                        margin-bottom:10px;
                        color:#222;
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
                    
                    .btn{
                        position:relative;
                        display:inline-block;
                        padding:10px 30px;
                        background:#000;
                        text-decoration:none;
                        color:#fff;
                    }
                        
                    .services{
                        position:relative;
                        display:grid;
                        grid-template-columns:repeat(auto-fit, minmax(300px,1fr));
                        grid-gap:30px;
                        max-width:100%;
                        margin-top:40px;
                    }
                    
                    .services .box{
                        width:300px;
                        margin:0 auto;
                        background:#fff;
                        padding:20px;
                        box-shadow: 0 15px 30px rgba(0,0,0,0.05);
                    }
                    
                    .services .box .iconBx{
                        margin-top:25px;
                        
                    }
                    
                    .services .box .iconBx img{
                        max-width:150px;
                        margin-bottom:15px;
                    }
                    
                    .services .box h2{
                        font-size:18px;
                        margin-bottom:10px;
                        text-transform:uppercase;
                        font-weight:700;
                    }
                    
                    .stats{
                        background:#000;
                        padding-top:250px;
                        margin-top:-250px;
                    }
                    .stats h3,
                    .stats p{
                        color:#fff;
                    }
                    
                    .statsBox{
                        position:relative;
                        display:grid;
                        grid-template-columns:repeat(auto-fit, minmax(250px, 1fr));
                        grid-gap:20px;
                        max-width:100%;
                        margin-top:40px;
                    }
                    
                    .statsBox h2{
                        color:orange;
                        font-size:36px;
                    }
                    
                    .statsBox h4{
                        color:#fff;
                        font-size:16px;
                        font-weight:500;
                        text-transform:uppercase;
                        letter-spacing:2p;
                    }
                    
                    .testimonial .content{
                       align-items:center;
                       margin:auto;
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
                    
                    .contact {
                        background:#000;
                    }
                    
                    .contact h3{
                        color:#fff;
                    }
                    
                    .contact p{
                        color:#fff;
                    }
                    
                    .contactForm{
                        position:relative;
                        max-width:800px;
                        margin:0 auto;
                        display:flex;
                    }
                    
                    .contactForm form{
                        width:100%;
                    }
                    
                    .contactForm .row100{
                        display:flex;
                        width:100%;
                    }
                    
                    .contactForm .row100 .inputBx50{
                        width:50%;
                        margin:0 20px;
                    }
                    
                    .contactForm .row100 .inputBx100{
                        width:100%;
                        margin:0 20px;   
                    }
                    
                    .contactForm .row100 input,
                    .contactForm .row100 textarea{
                        position:relative;
                        border:none;
                        border-bottom:1px solid #fff;
                        color:#fff;
                        background:transparent;
                        width:100%;
                        padding:10px 0;
                        outline:none;
                        font-size:18px;
                        font-weight:300;
                        margin:20px 0;
                        resize:none:
                    }
                    
                    .contactForm .row100 textarea{
                        height:100px;
                    }
                    
                    .contactForm .row100 input::placeholder,
                    .contactForm .row100 textarea::placeholder{
                        color:rgba(255,255,255, 0.5);
                    }
                    
                    .contactForm .row100 input[type="submit"]{
                        background: #fff;
                        color: #000;
                        max-width:100px;
                        text-transform:uppercase;
                        letter-spacing:2px;
                        cursor:pointer;
                        font-weight:500;
                        
                    }
                       
                    .sci{
                        position:relative;
                        display:flex;
                        justify-content:center;
                        align-items:center;
                        margin: 50px 0;
                    } 
                  
                    .sci ul{
                        display:flex;
                    }
                    
                    .sci ul li{
                        list-style:none;
                    }
                    
                    .sci ul li a{
                        text-decoration:none;
                        display:inline-block;
                        margin:0 30px;
                    }
                        
                    .sci ul li a img{
                        filter: invert(1);
                        max-width:40px;
                    }
                    
                    .sci ul li a:hover img{
                        opacity: 0.5;
                    }
                     
                    .copyright a{
                       color: #fff;
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
                        
                        .toggle:before{
                            content:'';
                            position:absolute;
                            top:4px;
                            width:100%;
                            height:2px;
                            background: #000;
                            z-index:1;
                            box-shadow: 0 10px 0 #000;
                            transition: 0.5s;
                        }
                        
                        .toggle:after{
                            content:'';
                            position:absolute;
                            bottom:4px;
                            width:100%;
                            height:2px;
                            background: #000;
                            z-index:1;
                            transition: 0.5s;
                        }
                    
                        header,
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
                        
                        header .logo,
                        header ul li a{
                            color: #000;
                        }
                        
                        .banner{
                            background-position:center;
                        }
                        
                        .banner h2{
                            font-size: 60px;
                            padding:0 50px;
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
                        
                        .sci{
                            margin:20px;
                        }
                        .sci ul li a img{
                            font-size:24px;
                        }
                        
                        
                    }
                    
                    `}
      </style>
    </div>
  );
};

export default LandingNew;
