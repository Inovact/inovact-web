import React, { Component } from 'react';

class Profile extends Component {
  render() {
    return (
      <div>
        <div className='edit-section'>
          <div className='container'>
            <div className='profile-header'>
              <div className='profile-img'>
                <img src='' alt='' />
              </div>
              <div className='profile-nav-info'>
                <h3 className='user-name'>Afif Ahmed</h3>
                <div className='address'>
                  <p className='state'>New York</p>
                  <span className='country'>USA</span>
                </div>
              </div>
              <div className='profile-options'>
                <div className='notifications'>
                  <i className='fa fa-bell'></i>
                  <span className='alert-messages'></span>
                </div>
              </div>
            </div>
            <div className='main-bd'>
              <div className='left-side'>
                <div className='profile-side'>
                  <p className='mobile-no'>
                    <i className='fa fa-phone'></i>
                    +919741226080
                  </p>
                  <p className='user-mail'>
                    <i className='fa fa-envelope'></i>afifahmed456123@gamil.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Profile.propTypes = {};

export default Profile;
