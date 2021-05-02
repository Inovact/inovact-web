import React from 'react';
import './styles.css';
const Footer=()=>{
    return(
        <section className='sec contact ' id='contact'>
        <div className='content'>
          <div className='contact-heading'>
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

            <div class=" social col-12 col-sm-6 align-self-center">
              <div class="text-center" >
    
                  <a class="btn btn-social-icon btn-facebook" href="http://www.facebook.com/profile.php?id="><i class=" fa fa-facebook fa-lg"></i></a>
                  <a class="btn btn-social-icon btn-linkedin" href="http://www.linkedin.com/in/"><i class=" fa fa-linkedin  fa-lg"></i></a>
                  <a class="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i class=" fa fa-twitter  fa-lg"></i></a>
                  <a class="btn btn-social-icon btn-youtube" href="http://youtube.com/"><i class=" fa fa-youtube  fa-lg"></i></a>
                  <a class="btn btn-social-icon btn-envelope" href="mailto:"><i class=" fa fa-envelope  fa-lg"></i></a>
              </div>
          </div>

          <div class="row justify-content-center">             
                  <div class="col-auto copywrite">
                      <p>© Copyright 2021 Inovact</p>
                  </div>
          </div>
        
        </div>
      </section>
    );
}
export default Footer;