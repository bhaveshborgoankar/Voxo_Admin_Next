import React from 'react';
import { Archive, LogOut, Phone, Settings, Users } from 'react-feather';

const HeaderNav = () => {
  return (
    <ul className='nav-menus'>
      <li>
        <span className='header-search'>
          <span className='lnr lnr-magnifier'></span>
        </span>
      </li>
      <li className='onhover-dropdown'>
        <div className='notification-box'>
          <span className='lnr lnr-alarm'></span>
          <span className='badge rounded-pill badge-theme'>4</span>
        </div>
        <ul className='notification-dropdown onhover-show-div'>
          <li>
            <span className='lnr lnr-alarm'></span>
            <h6 className='f-18 mb-0'>Notitications</h6>
          </li>
          <li>
            <p>
              <i className='fa fa-circle-o me-3 font-primary'></i>Delivery processing <span className='pull-right'>10 min.</span>
            </p>
          </li>
          <li>
            <p>
              <i className='fa fa-circle-o me-3 font-success'></i>Order Complete<span className='pull-right'>1 hr</span>
            </p>
          </li>
          <li>
            <p>
              <i className='fa fa-circle-o me-3 font-info'></i>Tickets Generated<span className='pull-right'>3 hr</span>
            </p>
          </li>
          <li>
            <p>
              <i className='fa fa-circle-o me-3 font-danger'></i>Delivery Complete<span className='pull-right'>6 hr</span>
            </p>
          </li>
          <li>
            <a className='btn btn-primary' href='#javascript'>
              Check all notification
            </a>
          </li>
        </ul>
      </li>

      <li>
        <div className='mode'>
          <span className='lnr lnr-moon'></span>
        </div>
      </li>

      <li className='onhover-dropdown'>
        <span className='lnr lnr-bubble'></span>
        <ul className='chat-dropdown onhover-show-div'>
          <li>
            <span className='lnr lnr-bubble'></span>
            <h6 className='f-18 mb-0'>Message Box</h6>
          </li>
          <li>
            <div className='media'>
              <img className='img-fluid rounded-circle me-3' src='/assets/images/user/1.jpg' alt='user1' />
              <div className='status-circle online'></div>
              <div className='media-body'>
                <span>Erica Hughes</span>
                <p>Lorem Ipsum is simply dummy...</p>
              </div>
              <p className='f-12 font-success'>58 mins ago</p>
            </div>
          </li>
          <li>
            <div className='media'>
              <img className='img-fluid rounded-circle me-3' src='/assets/images/user/2.png' alt='user2' />
              <div className='status-circle online'></div>
              <div className='media-body'>
                <span>Kori Thomas</span>
                <p>Lorem Ipsum is simply dummy...</p>
              </div>
              <p className='f-12 font-success'>1 hr ago</p>
            </div>
          </li>
          <li>
            <div className='media'>
              <img className='img-fluid rounded-circle me-3' src='/assets/images/user/3.png' alt='user3' />
              <div className='status-circle offline'></div>
              <div className='media-body'>
                <span>Ain Chavez</span>
                <p>Lorem Ipsum is simply dummy...</p>
              </div>
              <p className='f-12 font-danger'>32 mins ago</p>
            </div>
          </li>
          <li className='text-center'>
            <a className='btn btn-primary' href='#javascript'>
              View All
            </a>
          </li>
        </ul>
      </li>

      <li className='maximize'>
        <a className='text-dark' href='#javascript'>
          <span className='lnr lnr-frame-expand'></span>
        </a>
      </li>
      <li className='profile-nav onhover-dropdown pe-0 me-0'>
        <div className='media profile-media'>
          <img className='user-profile rounded-circle' src={'/assets/images/users/4.jpg'} alt='' />
          <div className='user-name-hide media-body'>
            <span>Emay Walter</span>
            <p className='mb-0 font-roboto'>
              Admin<i className='middle fa fa-angle-down'></i>
            </p>
          </div>
        </div>
        <ul className='profile-dropdown onhover-show-div'>
          <li>
            <a href='#javascript'>
              <Users />
              <span>Users</span>
            </a>
          </li>
          <li>
            <a href='#javascript'>
              <Archive />
              <span>Orders</span>
            </a>
          </li>
          <li>
            <a href='#javascript'>
              <Phone />
              <span>Support Tickets</span>
            </a>
          </li>
          <li>
            <a href='#javascript'>
              <Settings />
              <span>Settings</span>
            </a>
          </li>
          <li>
            <a href='#javascript'>
              <LogOut />
              <span>Log out</span>
            </a>
          </li>
        </ul>
      </li>
    </ul>
  );
};

export default HeaderNav;
