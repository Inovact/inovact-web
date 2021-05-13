import React ,{ useRef, useEffect, useState }from 'react';
import Banner from './sections/Banner/Banner';
import About from './sections/About/About';
import Goals from './sections/Goals/Goals';
import Features from './sections/Features/Features'
import Achivements from './sections/Achivement/Achivements';
import Testimonial from './sections/Testimonials/Testimonials'
import Footer from './sections/Footer/Footer';
import { useHistory,Link } from 'react-router-dom';
import logo from './assets/img/logo.png';
import  './sections/NavBar/styles.css';

const getDimensions = ele => {
  const { height } = ele.getBoundingClientRect();
  const offsetTop = ele.offsetTop;
  const offsetBottom = offsetTop + height;
  return {
    height,
    offsetTop,
    offsetBottom,
  };
};

const scrollTo = ele => {
  ele.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};

const Landing = (props) => {

  const [visibleSection, setVisibleSection] = useState();

  const headerRef = useRef(null);
  const homeRef =useRef(null);
  const aboutRef = useRef(null);
  const serviceRef = useRef(null);
  const testimonialRef = useRef(null);
  const contactRef=useRef(null);
  const sectionRefs = [

    { section: "home", ref: homeRef },
    { section: "about", ref: aboutRef },
    { section: "service", ref: serviceRef },
    { section: "testimonial", ref: testimonialRef },
    { section: "contact", ref: contactRef },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const { height: headerHeight } = getDimensions(headerRef.current);
      const scrollPosition = window.scrollY + headerHeight;
      const selected = sectionRefs.find(({ section, ref }) => {
        const ele = ref.current;
        if (ele) {
          const { offsetBottom, offsetTop } = getDimensions(ele);
          return scrollPosition > offsetTop && scrollPosition < offsetBottom;
        }
      });

      if (selected && selected.section !== visibleSection) {
        setVisibleSection(selected.section);
      } else if (!selected && visibleSection) {
        setVisibleSection(undefined);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [visibleSection]);

  window.addEventListener('scroll', function () {
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
  });

  function toggle() {
    let header = document.querySelector('header');
    header.classList.toggle('active');
  }

  return (
    <div>
        <header className="header" ref={headerRef} id='header' >
            <Link to='/' className='logo'>
              <img src={logo} alt="Logo"/>
                <span className="logoname" >Inovact</span>
            </Link>
            
            <ul>

              <li className="home">
                <a  
                className={`header_link ${visibleSection === "home" ? "selected" : ""}`}
                onClick={() => {
                scrollTo(homeRef.current);
                }}  href='#home'  onClick={toggle}>
                Home
                </a>
              </li>

              <li >
                <a 
                className={`header_link ${visibleSection === "about" ? "selected" : ""}`}
                onClick={() => {
                scrollTo(aboutRef.current);
                  }} href='#about' onClick={toggle}>
                About
                </a>
              </li>

              <li >
                <a className={`header_link ${visibleSection === "service" ? "selected" : ""}`}
                      onClick={() => {
                        scrollTo(serviceRef.current);
                      }} href='#service' onClick={toggle}>
                  Services
                </a>
              </li>
              <li >
                <a className={`header_link ${visibleSection === "testimonial" ? "selected" : ""}`}
                      onClick={() => {
                        scrollTo(testimonialRef.current);
                      }}  href='#testimonial' onClick={toggle} >
                  Testimonials
                </a>
              </li>
              <li >
                <a 
                className={`header_link ${visibleSection === "contact" ? "selected" : ""}`}
                onClick={() => {
                scrollTo(contactRef.current);
                }}  href='#contact' onClick={toggle}>
                  Contact
                </a>
              </li>

              <li>     
                <Link 
                to={{ pathname: props.match.url, search: "?login=true" }} 
                onClick={toggle} >Login</Link> 
              </li>

              <li>
                <a href='#home' onClick={toggle}>SignUp</a>
              </li>
              
            </ul>
            <div className='toggle' onClick={toggle} />
       </header>

            <section className='banner' id='home' ref={homeRef}>
            <Banner />
            </section>

            <section className='active' id='about' ref={aboutRef} >
            <About />
            <Goals />
            </section>

            <section className='achivement' id='service' ref={serviceRef} >
            <Features />  
            <Achivements /> 
            </section>

            <section className="testimonial" id='testimonial'  ref={testimonialRef}>
            <Testimonial />
            </section>


            <section id='contact' ref={contactRef}>
            <Footer />
            </section>
  
    </div>
  );
};

export default Landing;
