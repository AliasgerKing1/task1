/* eslint-disable */
import {NavLink} from 'react-router-dom'
let Header = () => {
  return (
<div className="navbar-area header-one" id="navbar">
<div className="header-top">
  <div className="container-fluid">
    <div className="row align-items-center">
      <div className="col-lg-4 col-md-6 col-5">
        <button className="subscribe-btn" data-bs-toggle="modal" data-bs-target="#newsletter-popup">Subscribe<i className="flaticon-right-arrow" /></button>
      </div>
      <div className="col-lg-4 col-md-6 md-none">
        <a className="navbar-brand" href="index.html">
          <img className="logo-light" src="/assets/img/logo-white.webp" alt="logo" />
          <img className="logo-dark" src="/assets/img/logo-white.webp" alt="logo" />
        </a>
      </div>
      <div className="col-lg-4 col-md-6 col-7">
        <ul className="social-profile list-style">
          <li><a href="https://www.fb.com/" target="_blank"><i className="ri-facebook-fill" /></a></li>
          <li><a href="https://www.twitter.com/" target="_blank"><i className="ri-twitter-fill" /></a></li>
          <li><a href="https://www.instagram.com/" target="_blank"><i className="ri-instagram-line" /></a></li>
          <li><a href="https://www.linkedin.com/" target="_blank"><i className="ri-linkedin-fill" /></a></li>
        </ul>
      </div>
    </div>
  </div>
</div>
<div className="container-fluid">
  <nav className="navbar navbar-expand-lg">
    <a className="sidebar-toggler md-none" data-bs-toggle="offcanvas" href="#navbarOffcanvas" role="button" aria-controls="navbarOffcanvas">
      <img src="/assets/img/icons/menubar-white.svg" alt="Image" />
    </a>
    <a className="navbar-brand d-lg-none" href="index.html">
      <img className="logo-light" src="/assets/img/logo-white.webp" alt="logo" />
      <img className="logo-dark" src="/assets/img/logo-white.webp" alt="logo" />
    </a>
    <button type="button" className="search-btn d-lg-none" data-bs-toggle="modal" data-bs-target="#searchModal">
      <i className="flaticon-loupe" />
    </button>
    <a className="navbar-toggler" data-bs-toggle="offcanvas" href="#navbarOffcanvas" role="button" aria-controls="navbarOffcanvas">
      <span className="burger-menu">
        <span className="top-bar" />
        <span className="middle-bar" />
        <span className="bottom-bar" />
      </span>
    </a>
    <div className="collapse navbar-collapse">
      <ul className="navbar-nav mx-auto">
        <li className="nav-item">
          <NavLink to="/" className="nav-link active">
            Home
          </NavLink>
        </li>
        {/* <li className="nav-item">
          <a href="javascript:void(0)" className="dropdown-toggle nav-link active">
            Home
          </a>
          <ul className="dropdown-menu">
            <li className="nav-item">
              <a href="index.html" className="nav-link active">
                Home Demo One
              </a>
            </li>
            <li className="nav-item">
              <a href="index-2.html" className="nav-link">
                Home Demo Two
              </a>
            </li>
            <li className="nav-item">
              <a href="index-3.html" className="nav-link">
                Home Demo Three
              </a>
            </li>
          </ul>
        </li> */}
        <li className="nav-item">
          <a href="javascript:void(0)" className="dropdown-toggle nav-link">
            Games
          </a>
          <ul className="dropdown-menu">
            <li className="nav-item">
              <a href="about.html" className="nav-link">
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a href="contact.html" className="nav-link">
                Contact Us
              </a>
            </li>
            <li className="nav-item">
              <a href="team.html" className="nav-link">
                Team
              </a>
            </li>
            <li className="nav-item">
              <a href="author.html" className="nav-link">
                Author
              </a>
            </li>
            <li className="nav-item">
              <a href="privacy-policy.html" className="nav-link">
                Privacy Policy
              </a>
            </li>
            <li className="nav-item">
              <a href="terms-conditions.html" className="nav-link">
                Terms &amp; Conditions
              </a>
            </li>
            <li className="nav-item">
              <a href="error-404.html" className="nav-link">
                404 Error Page
              </a>
            </li>
          </ul>
        </li>
        <li className="nav-item">
          <a href="javascript:void(0)" className="dropdown-toggle nav-link">
            Social
          </a>
          <ul className="dropdown-menu">
            <li className="nav-item">
              <a href="business.html" className="nav-link">
                Business News
              </a>
            </li>
            <li className="nav-item">
              <a href="business-details.html" className="nav-link">
                Business News Details
              </a>
            </li>
          </ul>
        </li>
        <li className="nav-item">
          <a href="javascript:void(0)" className="dropdown-toggle nav-link">
            Earning
          </a>
          <ul className="dropdown-menu">
            <li className="nav-item">
              <a href="politics.html" className="nav-link">
                Political News
              </a>
            </li>
            <li className="nav-item">
              <a href="politics-details.html" className="nav-link">
                Political News Details
              </a>
            </li>
          </ul>
        </li>
        <li className="nav-item">
          <a href="javascript:void(0)" className="dropdown-toggle nav-link">
            Finance
          </a>
          <ul className="dropdown-menu">
            <li className="nav-item">
              <a href="featured-video.html" className="nav-link">
                Featured Video
              </a>
            </li>
            <li className="nav-item">
              <a href="featured-video-details.html" className="nav-link">
                Featured Video Details
              </a>
            </li>
          </ul>
        </li>
        <li className="nav-item">
          <a href="javascript:void(0)" className="dropdown-toggle nav-link">
            Entertainment
          </a>
          <ul className="dropdown-menu">
            <li className="nav-item">
              <a href="sports.html" className="nav-link">
                Sports News
              </a>
            </li>
            <li className="nav-item">
              <a href="sports-details.html" className="nav-link">
                Sports News Details
              </a>
            </li>
          </ul>
        </li>
        <li className="nav-item">
          <a href="javascript:void(0)" className="nav-link dropdown-toggle">
            MarketPlace
          </a>
          <ul className="dropdown-menu">
            <li className="nav-item">
              <a href="shop-grid.html" className="nav-link">
                Shop Grid
              </a>
            </li>
            <li className="nav-item">
              <a href="shop-left-sidebar.html" className="nav-link">
                Shop Left Sidebar
              </a>
            </li>
            <li className="nav-item">
              <a href="shop-right-sidebar.html" className="nav-link">
                Shop Right Sidebar
              </a>
            </li>
            <li className="nav-item">
              <a href="shop-details.html" className="nav-link">
                Shop Details
              </a>
            </li>
            <li className="nav-item">
              <a href="cart.html" className="nav-link">
                Cart
              </a>
            </li>
            <li className="nav-item">
              <a href="wishlist.html" className="nav-link">
                Wishlist
              </a>
            </li>
            <li className="nav-item">
              <a href="checkout.html" className="nav-link">
                Checkout
              </a>
            </li>
            <li className="nav-item">
              <a href="login.html" className="nav-link">
                Login
              </a>
            </li>
            <li className="nav-item">
              <a href="signup.html" className="nav-link">
                Sign Up
              </a>
            </li>
          </ul>
        </li>
      </ul>
      <div className="others-option d-flex align-items-center">
        {/* <div className="option-item">
          <a className="shopcart" href="cart.html"><i className="flaticon-shopping-cart" /> <span>5</span></a>
        </div> */}
        <div className="option-item">
          <button type="button" className="search-btn" data-bs-toggle="modal" data-bs-target="#searchModal">
            <i className="flaticon-loupe" />
          </button>
        </div>
        <div className="option-item">
          <a href="login.html" className="btn-two">Sign In</a>
        </div>
      </div>
    </div>
  </nav>
</div>
</div>
  );
}

export default Header;

