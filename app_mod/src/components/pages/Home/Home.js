/* eslint-disable */
import React, {useState, useEffect} from 'react';
import {NavLink} from 'react-router-dom'
import Header from '../../shared/Header'
import Footer from '../../shared/Footer'
import {getModApp} from '../../../Services/ModAppService'
let Home = () => {
    let [currentCarouselItem, setCurrentCarouselItem] = useState(2);
    let [modAppData, setModAppData] = useState([]);
    let updateNextCarousel = () => {
        if (currentCarouselItem < 4)
        setCurrentCarouselItem(currentCarouselItem + 1)
        if (currentCarouselItem === 4)
        setCurrentCarouselItem(1)
    }
    let updatePrevCarousel = () => {
        if (currentCarouselItem < 1)
        setCurrentCarouselItem(currentCarouselItem - 1)
        if (currentCarouselItem === 1)
        setCurrentCarouselItem(4)
    }

    let getModAppFun = async () => {
let result = await getModApp();
setModAppData(result.data)
// console.log(result.data)
    }

    useEffect(()=> {
      getModAppFun()
    }, [])
  return (
  <>
  {/* <div className="loader-wrapper">
    <div className="loader" />
    <div className="loader-section section-left" />
    <div className="loader-section section-right" />
  </div> */}
  {/* <div className="switch-theme-mode">
    <label id="switch" className="switch">
      <input type="checkbox" onchange="toggleTheme()" id="slider" />
      <span className="slider round" />
    </label>
  </div> */}
<Header />
  <div className="responsive-navbar offcanvas offcanvas-end" data-bs-backdrop="static" tabIndex={-1} id="navbarOffcanvas">
    <div className="offcanvas-header">
      <a href="index.html" className="logo d-inline-block">
        <img className="logo-light" src="/assets/img/logo.webp" alt="logo" />
        <img className="logo-dark" src="/assets/img/logo-white.webp" alt="logo" />
      </a>
      <button type="button" className="close-btn" data-bs-dismiss="offcanvas" aria-label="Close">
        <i className="ri-close-line" />
      </button>
    </div>
    <div className="offcanvas-body">
      <div className="accordion" id="navbarAccordion">
        <div className="accordion-item">
          <button className="accordion-button collapsed active" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
            Home
          </button>
          <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#navbarAccordion">
            <div className="accordion-body">
              <div className="accordion" id="navbarAccordion2">
                <div className="accordion-item">
                  <a className="accordion-link active" href="index.html">
                    Home Demo One
                  </a>
                </div>
                <div className="accordion-item">
                  <a className="accordion-link" href="index-2.html">
                    Home Demo Two
                  </a>
                </div>
                <div className="accordion-item">
                  <a className="accordion-link" href="index-3.html">
                    Home Demo Three
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapbaxour" aria-expanded="false" aria-controls="collapbaxour">
            Pages
          </button>
          <div id="collapbaxour" className="accordion-collapse collapse" data-bs-parent="#navbarAccordion">
            <div className="accordion-body">
              <div className="accordion" id="navbarAccordion45">
                <div className="accordion-item">
                  <a className="accordion-link" href="about.html">
                    About Us
                  </a>
                </div>
                <div className="accordion-item">
                  <a className="accordion-link" href="contact.html">
                    Contact Us
                  </a>
                </div>
                <div className="accordion-item">
                  <a href="team.html" className="accordion-link">
                    Team
                  </a>
                </div>
                <div className="accordion-item">
                  <a href="author.html" className="accordion-link">
                    Author
                  </a>
                </div>
                <div className="accordion-item">
                  <a href="privacy-policy.html" className="accordion-link">
                    Privacy Policy
                  </a>
                </div>
                <div className="accordion-item">
                  <a href="terms-conditions.html" className="accordion-link">
                    Terms &amp; Conditions
                  </a>
                </div>
                <div className="accordion-item">
                  <a href="error-404.html" className="accordion-link">
                    404 Error Page
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            Business
          </button>
          <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#navbarAccordion">
            <div className="accordion-body">
              <div className="accordion" id="navbarAccordion7">
                <div className="accordion-item">
                  <a href="business.html" className="accordion-link">
                    Business News
                  </a>
                </div>
                <div className="accordion-item">
                  <a href="business-details.html" className="accordion-link">
                    Business News Details
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            Politics
          </button>
          <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#navbarAccordion">
            <div className="accordion-body">
              <div className="accordion" id="navbarAccordion30">
                <div className="accordion-item">
                  <a href="politics.html" className="accordion-link">
                    Political News
                  </a>
                </div>
                <div className="accordion-item">
                  <a href="politics-details.html" className="accordion-link">
                    Political News Details
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
            Video
          </button>
          <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#navbarAccordion">
            <div className="accordion-body">
              <div className="accordion" id="navbarAccordion11">
                <div className="accordion-item">
                  <a href="featured-video.html" className="accordion-link">
                    Featured Video
                  </a>
                </div>
                <div className="accordion-item">
                  <a href="featured-video-details.html" className="accordion-link">
                    Featured Video Details
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFourth" aria-expanded="false" aria-controls="collapseFourth">
            Sports
          </button>
          <div id="collapseFourth" className="accordion-collapse collapse" data-bs-parent="#navbarAccordion">
            <div className="accordion-body">
              <div className="accordion" id="navbarAccordion111">
                <div className="accordion-item">
                  <a href="sports.html" className="accordion-link">
                    Sports News
                  </a>
                </div>
                <div className="accordion-item">
                  <a href="sports-details.html" className="accordion-link">
                    Sports News Details
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
            Shop
          </button>
          <div id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#navbarAccordion">
            <div className="accordion-body">
              <div className="accordion" id="navbarAccordion70">
                <div className="accordion-item">
                  <a href="shop-grid.html" className="accordion-link">
                    Shop Grid
                  </a>
                </div>
                <div className="accordion-item">
                  <a href="shop-left-sidebar.html" className="accordion-link">
                    Shop Left Sidebar
                  </a>
                </div>
                <div className="accordion-item">
                  <a href="shop-right-sidebar.html" className="accordion-link">
                    Shop Right Sidebar
                  </a>
                </div>
                <div className="accordion-item">
                  <a href="shop-details.html" className="accordion-link">
                    Shop Details
                  </a>
                </div>
                <div className="accordion-item">
                  <a href="cart.html" className="accordion-link">
                    Cart
                  </a>
                </div>
                <div className="accordion-item">
                  <a href="wishlist.html" className="accordion-link">
                    Wishlist
                  </a>
                </div>
                <div className="accordion-item">
                  <a href="checkout.html" className="accordion-link">
                    Checkout
                  </a>
                </div>
                <div className="accordion-item">
                  <a href="login.html" className="accordion-link">
                    Login
                  </a>
                </div>
                <div className="accordion-item">
                  <a href="signup.html" className="accordion-link">
                    Sign Up
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="offcanvas-contact-info">
        <h4>Contact Info</h4>
        <ul className="contact-info list-style">
          <li>
            <i className="ri-map-pin-fill" />
            <p>28/A Street, New York, USA</p>
          </li>
          <li>
            <i className="ri-mail-fill" />
            <a href="https://templates.hibootstrap.com/cdn-cgi/l/email-protection#2b434e4747446b494a534405484446"><span className="__cf_email__" data-cfemail="8ee6ebe2e2e1ceeceff6e1a0ede1e3">[email&nbsp;protected]</span></a>
          </li>
          <li>
            <i className="ri-phone-fill" />
            <a href="tel:1800123456789">+1 800 123 456 789</a>
          </li>
        </ul>
        <ul className="social-profile list-style">
          <li><a href="https://www.fb.com/" target="_blank"><i className="ri-facebook-fill" /></a></li>
          <li><a href="https://www.instagram.com/" target="_blank"><i className="ri-instagram-line" /></a></li>
          <li><a href="https://www.linkedin.com/" target="_blank"><i className="ri-linkedin-fill" /></a></li>
          <li><a href="https://www.twitter.com/" target="_blank"><i className="ri-twitter-fill" /></a></li>
        </ul>
      </div>
      <div className="others-option d-flex d-lg-none align-items-center">
        <div className="option-item">
          <a href="login.html" className="btn-two">Sign In</a>
        </div>
      </div>
    </div>
  </div>
  <div className="modal fade searchModal" id="searchModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
        <form>
          <input type="text" className="form-control" placeholder="Search here...." />
          <button type="submit"><i className="fi fi-rr-search" /></button>
        </form>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"><i className="ri-close-line" /></button>
      </div>
    </div>
  </div>
{/* <div className="container-fluid">
  <div className="trending-news-box">
    <div className="row gx-5">
      <div className="col-xxl-2 col-xl-3 col-lg-3 col-md-4">
        <h4>Trending Now</h4>
        <div className="trending-prev" tabIndex={0} role="button" aria-label="Previous slide" aria-controls="swiper-wrapper-c49210f4f15ec1ddc" onClick={updatePrevCarousel}><i className="flaticon-left-arrow" /></div>
        <div className="trending-next" tabIndex={0} role="button" aria-label="Next slide" aria-controls="swiper-wrapper-c49210f4f15ec1ddc" onClick={updateNextCarousel}><i className="flaticon-right-arrow" /></div>
      </div>
      <div className="col-xxl-10 col-xl-9 col-lg-9 col-md-8">
        <div className="trending-news-slider swiper swiper-initialized swiper-horizontal swiper-autoheight swiper-backface-hidden">
<div className="swiper-wrapper" style={{cursor: 'grab', height: 100, transitionDuration: '0ms', transform: 'translate3d(-417.273px, 0px, 0px)'}} id="swiper-wrapper-c49210f4f15ec1ddc" aria-live="polite">

            <div className={`swiper-slide news-card-one ${ currentCarouselItem === 1 ? "swiper-slide-active" : ""} ${currentCarouselItem === 4 ? "swiper-slide-prev" : ""} ${currentCarouselItem === 2 ? "swiper-slide-next" : ""}`} role="group" aria-label="1 / 4" data-swiper-slide-index={0} style={{width: '392.273px', marginRight: 25}}>
              <div className="news-card-img">
                <img src="/assets/img/news/trending-1.webp" alt="Image" />
              </div>
              <div className="news-card-info">
                <h3><a href="business-details.html">Climate Change &amp; Your Future Health</a></h3>
                <ul className="news-metainfo list-style">
                  <li><i className="fi fi-rr-clock-three" />15 Min Read</li>
                </ul>
              </div>
            </div>
            <div className={`swiper-slide news-card-one ${ currentCarouselItem === 2 ? "swiper-slide-active" : ""} ${currentCarouselItem === 1 ? "swiper-slide-prev" : ""} ${currentCarouselItem === 3 ? "swiper-slide-next" : ""}`} role="group" aria-label="2 / 4" data-swiper-slide-index={1} style={{width: '392.273px', marginRight: 25}}>
              <div className="news-card-img">
                <img src="/assets/img/news/trending-2.webp" alt="Image" />
              </div>
              <div className="news-card-info">
                <h3><a href="business-details.html">Female Hawks Win $10,000 Funding Boost</a></h3>
                <ul className="news-metainfo list-style">
                  <li><i className="fi fi-rr-clock-three" />10 Min Read</li>
                </ul>
              </div>
            </div>
            <div className={`swiper-slide news-card-one ${ currentCarouselItem === 3 ? "swiper-slide-active" : ""} ${currentCarouselItem === 2 ? "swiper-slide-prev" : ""} ${currentCarouselItem === 4 ? "swiper-slide-next" : ""}`} role="group" aria-label="3 / 4" data-swiper-slide-index={2} style={{width: '392.273px', marginRight: 25}}>
              <div className="news-card-img">
                <img src="/assets/img/news/trending-3.webp" alt="Image" />
              </div>
              <div className="news-card-info">
                <h3><a href="business-details.html">Goodwin Must Break Clarkson Hold</a></h3>
                <ul className="news-metainfo list-style">
                  <li><i className="fi fi-rr-clock-three" />8 Min Read</li>
                </ul>
              </div>
            </div>
            <div className={`swiper-slide news-card-one ${ currentCarouselItem === 4 ? "swiper-slide-active" : ""} ${currentCarouselItem === 3 ? "swiper-slide-prev" : ""} ${currentCarouselItem === 1 ? "swiper-slide-next" : ""}`} role="group" aria-label="4 / 4" data-swiper-slide-index={3} style={{width: '392.273px', marginRight: 25}}>
              <div className="news-card-img">
                <img src="/assets/img/news/trending-4.webp" alt="Image" />
              </div>
              <div className="news-card-info">
                <h3><a href="business-details.html">Major GWC Collection Is Coming To QVC</a></h3>
                <ul className="news-metainfo list-style">
                  <li><i className="fi fi-rr-clock-three" />12 Min Read</li>
                </ul>
              </div>
            </div>
          </div>
          <span className="swiper-notification" aria-live="assertive" aria-atomic="true" /></div>
      </div>
    </div>
  </div>
</div> */}

  <div className="container-fluid pb-75">
    <div className="news-col-wrap">
      <div className="news-col-one">
        <div className="news-card-two">
          <div className="news-card-img">
            <img src="/assets/img/news/telegram/telegram-1.jpg" alt="Image" />
            <a href="business.html" className="news-cat">{modAppData[0]?.category}</a>
          </div>
          <div className="news-card-info">
            <h3><NavLink to={`/details/app/telegram/${modAppData[0]?._id}`}>{modAppData[0]?.app_name}</NavLink></h3>
            <ul className="news-metainfo list-style">
              <li><i className="fi fi-rr-calendar-minus" /><a href="news-by-date.html">{modAppData[0]?.upload_date}</a></li>
              <li><i className="fi fi-rr-fire-flame-curved" />{modAppData[0]?.category}</li>
            </ul>
          </div>
        </div>
        <div className="news-card-three">
          <div className="news-card-img">
            <img src="/assets/img/news/news-3.webp" alt="Image" />
          </div>
          <div className="news-card-info">
            <a href="business.html" className="news-cat">Fashion</a>
            <h3><a href="business-details.html">How To Recreate The High Pony-tail That Celebrities Love</a></h3>
            <ul className="news-metainfo list-style">
              <li><i className="fi fi-rr-calendar-minus" /><a href="news-by-date.html">Apr 15, 2023</a></li>
              <li><i className="fi fi-rr-clock-three" />11 Min Read</li>
            </ul>
          </div>
        </div>
        <div className="news-card-three">
          <div className="news-card-img">
            <img src="/assets/img/news/news-4.webp" alt="Image" />
          </div>
          <div className="news-card-info">
            <a href="business.html" className="news-cat">Fashion</a>
            <h3><a href="business-details.html">Tempores Imperdiet Rhoncus Ipsam Lobortis Kolats.</a></h3>
            <ul className="news-metainfo list-style">
              <li><i className="fi fi-rr-calendar-minus" /><a href="news-by-date.html">Apr 14, 2023</a></li>
              <li><i className="fi fi-rr-clock-three" />10 Min Read</li>
            </ul>
          </div>
        </div>
        <div className="news-card-three">
          <div className="news-card-img">
            <img src="/assets/img/news/news-5.webp" alt="Image" />
          </div>
          <div className="news-card-info">
            <a href="business.html" className="news-cat">Fashion</a>
            <h3><a href="business-details.html">Beauty Queens Need Beauty Material &amp; Products</a></h3>
            <ul className="news-metainfo list-style">
              <li><i className="fi fi-rr-calendar-minus" /><a href="news-by-date.html">Apr 10, 2023</a></li>
              <li><i className="fi fi-rr-clock-three" />8 Min Read</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="news-col-two">
        <div className="news-card-four">
          <img src="/assets/img/news/news-58.webp" alt="Image" />
          <div className="news-card-info">
            <h3><a href="business-details.html">Best VR Headsets For PC And Gaming This Year</a></h3>
            <ul className="news-metainfo list-style">
              <li><i className="fi fi-rr-calendar-minus" /><a href="news-by-date.html">Apr 08, 2023</a></li>
              <li><i className="fi fi-rr-clock-three" />14 Min Read</li>
            </ul>
          </div>
        </div>
        <div className="news-card-five">
          <div className="news-card-img">
            <img src="/assets/img/news/news-59.webp" alt="Image" />
            <a href="business.html" className="news-cat">Fashion</a>
          </div>
          <div className="news-card-info">
            <h3><a href="business-details.html">Man Wearing Black Pullover Hoodie To Smoke Light In</a></h3>
            <p>Lorem ipsum or lipsum as it is sometmes known is dum text used in laying print, graphic or web desi…</p>
            <ul className="news-metainfo list-style">
              <li><i className="fi fi-rr-calendar-minus" /><a href="news-by-date.html">Apr 08, 2023</a></li>
              <li><i className="fi fi-rr-clock-three" />10 Min Read</li>
            </ul>
          </div>
        </div>
        <div className="news-card-five">
          <div className="news-card-img">
            <img src="/assets/img/news/news-60.webp" alt="Image" />
            <a href="business.html" className="news-cat">Travel</a>
          </div>
          <div className="news-card-info">
            <h3><a href="business-details.html">Selective Focus Photography Of Orange Fox Life</a></h3>
            <p>Lorem ipsum or lipsum as it is sometmes known is dum text used in laying print, graphic or web desi…</p>
            <ul className="news-metainfo list-style">
              <li><i className="fi fi-rr-calendar-minus" /><a href="news-by-date.html">Apr 03, 2023</a></li>
              <li><i className="fi fi-rr-clock-three" />11 Min Read</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="news-col-three">
        <div className="news-card-two">
          <div className="news-card-img">
            <img src="/assets/img/news/news-2.webp" alt="Image" />
            <a href="business.html" className="news-cat">Politics</a>
          </div>
          <div className="news-card-info">
            <h3><a href="business-details.html">Elijah James: The Nashville Photographer Shares Her Unique Journey</a></h3>
            <ul className="news-metainfo list-style">
              <li><i className="fi fi-rr-calendar-minus" /><a href="news-by-date.html">Apr 03, 2023</a></li>
              <li><i className="fi fi-rr-clock-three" />12 Min Read</li>
            </ul>
          </div>
        </div>
        <div className="news-card-three">
          <div className="news-card-img">
            <img src="/assets/img/news/news-7.webp" alt="Image" />
          </div>
          <div className="news-card-info">
            <a href="business.html" className="news-cat">Travel</a>
            <h3><a href="business-details.html">A Complimentary Day At Mandarin The Oriental</a></h3>
            <ul className="news-metainfo list-style">
              <li><i className="fi fi-rr-calendar-minus" /><a href="news-by-date.html">Mar 15, 2023</a></li>
              <li><i className="fi fi-rr-clock-three" />10 Min Read</li>
            </ul>
          </div>
        </div>
        <div className="news-card-three">
          <div className="news-card-img">
            <img src="/assets/img/news/news-6.webp" alt="Image" />
          </div>
          <div className="news-card-info">
            <a href="business.html" className="news-cat">Business</a>
            <h3><a href="business-details.html">First Prototype Flight Using Kinetic Launch System</a></h3>
            <ul className="news-metainfo list-style">
              <li><i className="fi fi-rr-calendar-minus" /><a href="news-by-date.html">Feb 22, 2023</a></li>
              <li><i className="fi fi-rr-clock-three" />8 Min Read</li>
            </ul>
          </div>
        </div>
        <div className="news-card-three">
          <div className="news-card-img">
            <img src="/assets/img/news/news-8.webp" alt="Image" />
          </div>
          <div className="news-card-info">
            <a href="business.html" className="news-cat">Health</a>
            <h3><a href="business-details.html">Life Health Continues To Spread Rapidly, Are Many People</a></h3>
            <ul className="news-metainfo list-style">
              <li><i className="fi fi-rr-calendar-minus" /><a href="news-by-date.html">Feb 15, 2023</a></li>
              <li><i className="fi fi-rr-clock-three" />10 Min Read</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* <div className="bg_gray editor-news pt-100 pb-75">
    <div className="container-fluid">
      <div className="row gx-5">
        <div className="col-xl-6">
          <div className="editor-box">
            <div className="row align-items-end mb-40">
              <div className="col-xl-6 col-md-6">
                <h2 className="section-title">Editor's Pick<img className="section-title-img" src="/assets/img/section-img.webp" alt="Image" /></h2>
              </div>
              <div className="col-xl-6 col-md-6">
                <ul className="nav nav-tabs news-tablist" role="tablist">
                  <li className="nav-item">
                    <button className="nav-link active" data-bs-toggle="tab" data-bs-target="#tab_1" type="button" role="tab">Poilitics</button>
                  </li>
                  <li className="nav-item">
                    <button className="nav-link" data-bs-toggle="tab" data-bs-target="#tab_2" type="button" role="tab">Sports</button>
                  </li>
                  <li className="nav-item">
                    <button className="nav-link " data-bs-toggle="tab" data-bs-target="#tab_3" type="button" role="tab">Business</button>
                  </li>
                </ul>
              </div>
            </div>
            <div className="tab-content editor-news-content">
              <div className="tab-pane fade show active" id="tab_1" role="tabpanel">
                <div className="row">
                  <div className="col-md-6">
                    <div className="news-card-six">
                      <div className="news-card-img">
                        <img src="/assets/img/news/news-38.webp" alt="Image" />
                        <a href="business.html" className="news-cat">Politics</a>
                      </div>
                      <div className="news-card-info">
                        <div className="news-author">
                          <div className="news-author-img">
                            <img src="/assets/img/author/author-thumb-1.webp" alt="Image" />
                          </div>
                          <h5>By <a href="author.html">OLIVIA EMMA</a></h5>
                        </div>
                        <h3><a href="business-details.html">How Maps Reshape American Politics In World</a></h3>
                        <ul className="news-metainfo list-style">
                          <li><i className="fi fi-rr-calendar-minus" /><a href="news-by-date.html">Apr 03, 2023</a></li>
                          <li><i className="fi fi-rr-comment" />03</li>
                          <li><i className="fi fi-rr-clock-three" />15 Min Read</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="news-card-six">
                      <div className="news-card-img">
                        <img src="/assets/img/news/news-39.webp" alt="Image" />
                        <a href="business.html" className="news-cat">Politics</a>
                      </div>
                      <div className="news-card-info">
                        <div className="news-author">
                          <div className="news-author-img">
                            <img src="/assets/img/author/author-thumb-2.webp" alt="Image" />
                          </div>
                          <h5>By <a href="author.html">ELIJAH JAMES</a></h5>
                        </div>
                        <h3><a href="business-details.html">Will Humans be able to live in Mars in the future?</a></h3>
                        <ul className="news-metainfo list-style">
                          <li><i className="fi fi-rr-calendar-minus" /><a href="news-by-date.html">Mar 22, 2023</a></li>
                          <li><i className="fi fi-rr-comment" />03</li>
                          <li><i className="fi fi-rr-clock-three" />10 Min Read</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="news-card-six">
                      <div className="news-card-img">
                        <img src="/assets/img/news/news-40.webp" alt="Image" />
                        <a href="business.html" className="news-cat">Politics</a>
                      </div>
                      <div className="news-card-info">
                        <div className="news-author">
                          <div className="news-author-img">
                            <img src="/assets/img/author/author-thumb-3.webp" alt="Image" />
                          </div>
                          <h5>By<a href="author.html">BANKS GAIN</a></h5>
                        </div>
                        <h3><a href="business-details.html">Here’s the proof momentum
                            strategy work</a></h3>
                        <ul className="news-metainfo list-style">
                          <li><i className="fi fi-rr-calendar-minus" /><a href="news-by-date.html">Apr 15, 2023</a></li>
                          <li><i className="fi fi-rr-comment" />03</li>
                          <li><i className="fi fi-rr-clock-three" />15 Min Read</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="news-card-six">
                      <div className="news-card-img">
                        <img src="/assets/img/news/news-41.webp" alt="Image" />
                        <a href="business.html" className="news-cat">Politics</a>
                      </div>
                      <div className="news-card-info">
                        <div className="news-author">
                          <div className="news-author-img">
                            <img src="/assets/img/author/author-thumb-4.webp" alt="Image" />
                          </div>
                          <h5>By <a href="author.html">HARPAR LUNA</a></h5>
                        </div>
                        <h3><a href="business-details.html">The Promise And Potential Of Synthetic Assets</a></h3>
                        <ul className="news-metainfo list-style">
                          <li><i className="fi fi-rr-calendar-minus" /><a href="news-by-date.html">Apr 14, 2023</a></li>
                          <li><i className="fi fi-rr-comment" />03</li>
                          <li><i className="fi fi-rr-clock-three" />15 Min Read</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="tab_2" role="tabpanel">
                <div className="row">
                  <div className="col-md-6">
                    <div className="news-card-six">
                      <div className="news-card-img">
                        <img src="/assets/img/news/news-42.webp" alt="Image" />
                        <a href="business.html" className="news-cat">Sports</a>
                      </div>
                      <div className="news-card-info">
                        <div className="news-author">
                          <div className="news-author-img">
                            <img src="/assets/img/author/author-thumb-5.webp" alt="Image" />
                          </div>
                          <h5>By <a href="author.html">OLIVIA EMMA</a></h5>
                        </div>
                        <h3><a href="business-details.html">Joe Gibbs discusses Ty Gibbs incident at Martinsville</a></h3>
                        <ul className="news-metainfo list-style">
                          <li><i className="fi fi-rr-calendar-minus" /><a href="news-by-date.html">Apr 07, 2023</a></li>
                          <li><i className="fi fi-rr-comment" />03</li>
                          <li><i className="fi fi-rr-clock-three" />12 Min Read</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="news-card-six">
                      <div className="news-card-img">
                        <img src="/assets/img/news/news-43.webp" alt="Image" />
                        <a href="business.html" className="news-cat">Sports</a>
                      </div>
                      <div className="news-card-info">
                        <div className="news-author">
                          <div className="news-author-img">
                            <img src="/assets/img/author/author-thumb-2.webp" alt="Image" />
                          </div>
                          <h5>By <a href="author.html">ELIJAH JAMES</a></h5>
                        </div>
                        <h3><a href="business-details.html">The Heart of a Champion: Mental Toughness in Sports</a></h3>
                        <ul className="news-metainfo list-style">
                          <li><i className="fi fi-rr-calendar-minus" /><a href="news-by-date.html">Apr 03, 2023</a></li>
                          <li><i className="fi fi-rr-comment" />03</li>
                          <li><i className="fi fi-rr-clock-three" />15 Min Read</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="news-card-six">
                      <div className="news-card-img">
                        <img src="/assets/img/news/news-44.webp" alt="Image" />
                        <a href="business.html" className="news-cat">Sports</a>
                      </div>
                      <div className="news-card-info">
                        <div className="news-author">
                          <div className="news-author-img">
                            <img src="/assets/img/author/author-thumb-3.webp" alt="Image" />
                          </div>
                          <h5>By<a href="author.html">BANKS GAIN</a></h5>
                        </div>
                        <h3><a href="business-details.html">Breaking Barriers: Inspiring Stories in Sports</a></h3>
                        <ul className="news-metainfo list-style">
                          <li><i className="fi fi-rr-calendar-minus" /><a href="news-by-date.html">Feb 03, 2023</a></li>
                          <li><i className="fi fi-rr-comment" />03</li>
                          <li><i className="fi fi-rr-clock-three" />12 Min Read</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="news-card-six">
                      <div className="news-card-img">
                        <img src="/assets/img/news/news-45.webp" alt="Image" />
                        <a href="business.html" className="news-cat">Sports</a>
                      </div>
                      <div className="news-card-info">
                        <div className="news-author">
                          <div className="news-author-img">
                            <img src="/assets/img/author/author-thumb-4.webp" alt="Image" />
                          </div>
                          <h5>By <a href="author.html">HARPAR LUNA</a></h5>
                        </div>
                        <h3><a href="business-details.html">Unleashing Your Inner Athlete: The Power of Sports</a></h3>
                        <ul className="news-metainfo list-style">
                          <li><i className="fi fi-rr-calendar-minus" /><a href="news-by-date.html">Apr 03, 2023</a></li>
                          <li><i className="fi fi-rr-comment" />03</li>
                          <li><i className="fi fi-rr-clock-three" />14 Min Read</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="tab_3" role="tabpanel">
                <div className="row">
                  <div className="col-md-6">
                    <div className="news-card-six">
                      <div className="news-card-img">
                        <img src="/assets/img/news/news-46.webp" alt="Image" />
                        <a href="business.html" className="news-cat">Business</a>
                      </div>
                      <div className="news-card-info">
                        <div className="news-author">
                          <div className="news-author-img">
                            <img src="/assets/img/author/author-thumb-1.webp" alt="Image" />
                          </div>
                          <h5>By <a href="author.html">OLIVIA EMMA</a></h5>
                        </div>
                        <h3><a href="business-details.html">Navigating the Entrepreneurial Journey: Tips for Success</a></h3>
                        <ul className="news-metainfo list-style">
                          <li><i className="fi fi-rr-calendar-minus" /><a href="news-by-date.html">Apr 15, 2023</a></li>
                          <li><i className="fi fi-rr-comment" />03</li>
                          <li><i className="fi fi-rr-clock-three" />15 Min Read</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="news-card-six">
                      <div className="news-card-img">
                        <img src="/assets/img/news/news-47.webp" alt="Image" />
                        <a href="business.html" className="news-cat">Business</a>
                      </div>
                      <div className="news-card-info">
                        <div className="news-author">
                          <div className="news-author-img">
                            <img src="/assets/img/author/author-thumb-2.webp" alt="Image" />
                          </div>
                          <h5>By <a href="author.html">ELIJAH JAMES</a></h5>
                        </div>
                        <h3><a href="business-details.html">Revolutionizing Business: The Power of Innovation</a></h3>
                        <ul className="news-metainfo list-style">
                          <li><i className="fi fi-rr-calendar-minus" /><a href="news-by-date.html">Mar 03, 2023</a></li>
                          <li><i className="fi fi-rr-comment" />03</li>
                          <li><i className="fi fi-rr-clock-three" />10 Min Read</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="news-card-six">
                      <div className="news-card-img">
                        <img src="/assets/img/news/news-48.webp" alt="Image" />
                        <a href="business.html" className="news-cat">Business</a>
                      </div>
                      <div className="news-card-info">
                        <div className="news-author">
                          <div className="news-author-img">
                            <img src="/assets/img/author/author-thumb-3.webp" alt="Image" />
                          </div>
                          <h5>By<a href="author.html">BANKS GAIN</a></h5>
                        </div>
                        <h3><a href="business-details.html">From Start-Up to Scale-Up: Growing Your Business</a></h3>
                        <ul className="news-metainfo list-style">
                          <li><i className="fi fi-rr-calendar-minus" /><a href="news-by-date.html">Feb 22, 2023</a></li>
                          <li><i className="fi fi-rr-comment" />03</li>
                          <li><i className="fi fi-rr-clock-three" />15 Min Read</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="news-card-six">
                      <div className="news-card-img">
                        <img src="/assets/img/news/news-49.webp" alt="Image" />
                        <a href="business.html" className="news-cat">Business</a>
                      </div>
                      <div className="news-card-info">
                        <div className="news-author">
                          <div className="news-author-img">
                            <img src="/assets/img/author/author-thumb-4.webp" alt="Image" />
                          </div>
                          <h5>By <a href="author.html">HARPAR LUNA</a></h5>
                        </div>
                        <h3><a href="business-details.html">Building a Thriving Business: Strategies for Success</a></h3>
                        <ul className="news-metainfo list-style">
                          <li><i className="fi fi-rr-calendar-minus" /><a href="news-by-date.html">Feb 05, 2023</a></li>
                          <li><i className="fi fi-rr-comment" />03</li>
                          <li><i className="fi fi-rr-clock-three" />15 Min Read</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-6">
          <div className="pp-news-box">
            <ul className="nav nav-tabs news-tablist-two" role="tablist">
              <li className="nav-item">
                <button className="nav-link active" data-bs-toggle="tab" data-bs-target="#tab_10" type="button" role="tab">Popular News</button>
              </li>
              <li className="nav-item">
                <button className="nav-link" data-bs-toggle="tab" data-bs-target="#tab_11" type="button" role="tab">Recent News</button>
              </li>
            </ul>
            <div className="tab-content news-tab-content">
              <div className="tab-pane fade show active" id="tab_10" role="tabpanel">
                <div className="news-card-seven">
                  <div className="news-card-img">
                    <img src="/assets/img/news/news-50.webp" alt="Image" />
                  </div>
                  <div className="news-card-info">
                    <a href="business.html" className="news-cat">Lifestyle</a>
                    <h3><a href="business-details.html">Jiraiya Banks Wants to Teach You How to Build a House</a></h3>
                    <ul className="news-metainfo list-style">
                      <li><i className="fi fi-rr-calendar-minus" /><a href="news-by-date.html">Feb 03, 2023</a></li>
                      <li><i className="fi fi-rr-comment" />03</li>
                      <li><i className="fi fi-rr-clock-three" />15 Min Read</li>
                    </ul>
                  </div>
                </div>
                <div className="news-card-seven">
                  <div className="news-card-img">
                    <img src="/assets/img/news/news-51.webp" alt="Image" />
                  </div>
                  <div className="news-card-info">
                    <a href="business.html" className="news-cat">Photography</a>
                    <h3><a href="business-details.html">The Secret Math Behind Mind Reading Magic Tricks</a></h3>
                    <ul className="news-metainfo list-style">
                      <li><i className="fi fi-rr-calendar-minus" /><a href="news-by-date.html">Apr 25, 2023</a></li>
                      <li><i className="fi fi-rr-comment" />03</li>
                      <li><i className="fi fi-rr-clock-three" />15 Min Read</li>
                    </ul>
                  </div>
                </div>
                <div className="news-card-seven">
                  <div className="news-card-img">
                    <img src="/assets/img/news/news-52.webp" alt="Image" />
                  </div>
                  <div className="news-card-info">
                    <a href="business.html" className="news-cat">Business</a>
                    <h3><a href="business-details.html">Recovery and Cleanup in Florida After Hurricane Ian</a></h3>
                    <ul className="news-metainfo list-style">
                      <li><i className="fi fi-rr-calendar-minus" /><a href="news-by-date.html">Msr 15, 2023</a></li>
                      <li><i className="fi fi-rr-comment" />03</li>
                      <li><i className="fi fi-rr-clock-three" />15 Min Read</li>
                    </ul>
                  </div>
                </div>
                <div className="news-card-seven">
                  <div className="news-card-img">
                    <img src="/assets/img/news/news-53.webp" alt="Image" />
                  </div>
                  <div className="news-card-info">
                    <a href="business.html" className="news-cat">Sports</a>
                    <h3><a href="business-details.html">6 Romantic places You Want to Visit with Your Partner</a></h3>
                    <ul className="news-metainfo list-style">
                      <li><i className="fi fi-rr-calendar-minus" /><a href="news-by-date.html">Feb 22, 2023</a></li>
                      <li><i className="fi fi-rr-comment" />03</li>
                      <li><i className="fi fi-rr-clock-three" />15 Min Read</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="tab_11" role="tabpanel">
                <div className="news-card-seven">
                  <div className="news-card-img">
                    <img src="/assets/img/news/news-54.webp" alt="Image" />
                  </div>
                  <div className="news-card-info">
                    <a href="business.html" className="news-cat">Lifestyle</a>
                    <h3><a href="business-details.html">Discovering Your Personal Bliss: A Guide to a Fulfilling Lifestyle</a></h3>
                    <ul className="news-metainfo list-style">
                      <li><i className="fi fi-rr-calendar-minus" /><a href="news-by-date.html">Feb 15, 2023</a></li>
                      <li><i className="fi fi-rr-comment" />03</li>
                      <li><i className="fi fi-rr-clock-three" />15 Min Read</li>
                    </ul>
                  </div>
                </div>
                <div className="news-card-seven">
                  <div className="news-card-img">
                    <img src="/assets/img/news/news-55.webp" alt="Image" />
                  </div>
                  <div className="news-card-info">
                    <a href="business.html" className="news-cat">Photography</a>
                    <h3><a href="business-details.html">Capturing Life's Moments: Tips for Better Photography</a></h3>
                    <ul className="news-metainfo list-style">
                      <li><i className="fi fi-rr-calendar-minus" /><a href="news-by-date.html">Feb 14, 2023</a></li>
                      <li><i className="fi fi-rr-comment" />03</li>
                      <li><i className="fi fi-rr-clock-three" />15 Min Read</li>
                    </ul>
                  </div>
                </div>
                <div className="news-card-seven">
                  <div className="news-card-img">
                    <img src="/assets/img/news/news-56.webp" alt="Image" />
                  </div>
                  <div className="news-card-info">
                    <a href="business.html" className="news-cat">Business</a>
                    <h3><a href="business-details.html">Empowering Your Business: Strategies for Growth</a></h3>
                    <ul className="news-metainfo list-style">
                      <li><i className="fi fi-rr-calendar-minus" /><a href="news-by-date.html">Feb 18, 2023</a></li>
                      <li><i className="fi fi-rr-comment" />03</li>
                      <li><i className="fi fi-rr-clock-three" />15 Min Read</li>
                    </ul>
                  </div>
                </div>
                <div className="news-card-seven">
                  <div className="news-card-img">
                    <img src="/assets/img/news/news-57.webp" alt="Image" />
                  </div>
                  <div className="news-card-info">
                    <a href="business.html" className="news-cat">Sports</a>
                    <h3><a href="business-details.html">Unleashing Your Inner Champion: The Excitement of Sports Competition</a></h3>
                    <ul className="news-metainfo list-style">
                      <li><i className="fi fi-rr-calendar-minus" /><a href="news-by-date.html">Feb 22, 2023</a></li>
                      <li><i className="fi fi-rr-comment" />03</li>
                      <li><i className="fi fi-rr-clock-three" />12 Min Read</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="selected-news ptb-100">
    <div className="container-fluid">
      <div className="content-wrapper">
        <div className="left-content">
          <div className="row align-items-end mb-40">
            <div className="col-md-7">
              <h2 className="section-title">Selected Posts<img className="section-title-img" src="/assets/img/section-img.webp" alt="Image" /></h2>
            </div>
            <div className="col-md-5 text-md-end">
              <a href="business.html" className="link-one">View All News<i className="flaticon-right-arrow" /></a>
            </div>
          </div>
          <div className="row gx-45">
            <div className="col-xl-7">
              <div className="news-card-four">
                <img src="/assets/img/news/news-31.webp" alt="Image" />
                <div className="news-card-info">
                  <h3><a href="business-details.html">Kyrgios And Djokovic Agree To Post-match Meal</a></h3>
                  <ul className="news-metainfo list-style">
                    <li><i className="fi fi-rr-calendar-minus" /><a href="news-by-date.html">Apr 25, 2023</a></li>
                    <li><i className="fi fi-rr-clock-three" />15 Min Read</li>
                  </ul>
                </div>
              </div>
              <div className="news-card-five">
                <div className="news-card-img">
                  <img src="/assets/img/news/news-32.webp" alt="Image" />
                  <a href="business.html" className="news-cat">Sports</a>
                </div>
                <div className="news-card-info">
                  <h3><a href="business-details.html">Muga Nemo Aptent Quaerat Explicabo Urna Ni Like Ange</a></h3>
                  <p>Lorem ipsum or lipsum as it is sometmes known is dum text used in laying print, graphic or web desi…</p>
                  <ul className="news-metainfo list-style">
                    <li><i className="fi fi-rr-calendar-minus" /><a href="news-by-date.html">Feb 03, 2023</a></li>
                    <li><i className="fi fi-rr-clock-three" />15 Min Read</li>
                  </ul>
                </div>
              </div>
              <div className="news-card-five">
                <div className="news-card-img">
                  <img src="/assets/img/news/news-33.webp" alt="Image" />
                  <a href="business.html" className="news-cat">Fashion</a>
                </div>
                <div className="news-card-info">
                  <h3><a href="business-details.html">Selective Focus Photography Of Orange Fox Life</a></h3>
                  <p>Lorem ipsum or lipsum as it is sometmes known is dum text used in laying print, graphic or web desi…</p>
                  <ul className="news-metainfo list-style">
                    <li><i className="fi fi-rr-calendar-minus" /><a href="news-by-date.html">Apr 03, 2023</a></li>
                    <li><i className="fi fi-rr-clock-three" />15 Min Read</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-5">
              <div className="news-card-two">
                <div className="news-card-img">
                  <img src="/assets/img/news/news-34.webp" alt="Image" />
                  <a href="business.html" className="news-cat">Politics</a>
                </div>
                <div className="news-card-info">
                  <h3><a href="business-details.html">Beyond Good &amp; Evil 2 Has Been In Development Longer Than Literally Any Game, Ever</a></h3>
                  <ul className="news-metainfo list-style">
                    <li><i className="fi fi-rr-calendar-minus" /><a href="news-by-date.html">Apr 15, 2023</a></li>
                    <li><i className="fi fi-rr-clock-three" />15 Min Read</li>
                  </ul>
                </div>
              </div>
              <div className="news-card-three">
                <div className="news-card-img">
                  <img src="/assets/img/news/news-35.webp" alt="Image" />
                </div>
                <div className="news-card-info">
                  <a href="business.html" className="news-cat">Travel</a>
                  <h3><a href="business-details.html">World Trending Best 10 Website Travel Tips For Runners Groups Of</a></h3>
                  <ul className="news-metainfo list-style">
                    <li><i className="fi fi-rr-calendar-minus" /><a href="news-by-date.html">Apr 22, 2023</a></li>
                    <li><i className="fi fi-rr-clock-three" />15 Min Read</li>
                  </ul>
                </div>
              </div>
              <div className="news-card-three">
                <div className="news-card-img">
                  <img src="/assets/img/news/news-36.webp" alt="Image" />
                </div>
                <div className="news-card-info">
                  <a href="business.html" className="news-cat">Business</a>
                  <h3><a href="business-details.html">How To Find The Right Template For Your Specific Product</a></h3>
                  <ul className="news-metainfo list-style">
                    <li><i className="fi fi-rr-calendar-minus" /><a href="news-by-date.html">Apr 15, 2023</a></li>
                    <li><i className="fi fi-rr-clock-three" />15 Min Read</li>
                  </ul>
                </div>
              </div>
              <div className="news-card-three">
                <div className="news-card-img">
                  <img src="/assets/img/news/news-37.webp" alt="Image" />
                </div>
                <div className="news-card-info">
                  <a href="business.html" className="news-cat">Health</a>
                  <h3><a href="business-details.html">Life Health Continues To Spread Rapidly, Are Many People</a></h3>
                  <ul className="news-metainfo list-style">
                    <li><i className="fi fi-rr-calendar-minus" /><a href="news-by-date.html">Apr 16, 2023</a></li>
                    <li><i className="fi fi-rr-clock-three" />15 Min Read</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="promo-wrap">
                <div className="promo-card bg-f">
                  <img src="/assets/img/promo-shape-2.webp" alt="Image" className="promo-shape" />
                  <div className="promo-content">
                    <a href="index.html" className="logo"><img src="/assets/img/logo-white.webp" alt="Image" /></a>
                    <p>The European languages are members of the same family.</p>
                  </div>
                  <div className="promo-img">
                    <img src="/assets/img/promo-img.webp" alt="Image" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sidebar">
          <div className="sidebar-widget">
            <h3 className="sidebar-widget-title">Social Links</h3>
            <ul className="social-widget list-style">
              <li>
                <a href="https://www.fb.com/" target="_blank">
                  <span><img src="/assets/img/icons/facebook.svg" alt="Image" /></span>
                  Facebook
                </a>
                <p>28 <br /> Likes</p>
              </li>
              <li>
                <a href="https://www.twitter.com/" target="_blank">
                  <span><img src="/assets/img/icons/twitter.svg" alt="Image" /></span>
                  Twitter
                </a>
                <p>289k Followers</p>
              </li>
              <li>
                <a href="https://www.instagram.com/" target="_blank">
                  <span><img src="/assets/img/icons/instagram.svg" alt="Image" /></span>
                  Instagram
                </a>
                <p>231k Followers</p>
              </li>
              <li>
                <a href="https://www.pinterest.com/" target="_blank">
                  <span><img src="/assets/img/icons/pinterest.svg" alt="Image" /></span>
                  Pinterest
                </a>
                <p>28k Followers</p>
              </li>
              <li>
                <a href="https://www.youtube.com/" target="_blank">
                  <span><img src="/assets/img/icons/youtube.svg" alt="Image" /></span>
                  Youtube
                </a>
                <p>159k Subscribers</p>
              </li>
              <li>
                <a href="https://www.soundcloud.com/" target="_blank">
                  <span><img src="/assets/img/icons/soundcloud.svg" alt="Image" /></span>
                  Soundcloud
                </a>
                <p>31k Followers</p>
              </li>
              <li>
                <a href="https://www.behance.com/" target="_blank">
                  <span><img src="/assets/img/icons/behance.svg" alt="Image" /></span>
                  Behance
                </a>
                <p>28 Followers</p>
              </li>
              <li>
                <a href="https://www.vimeo.com/" target="_blank">
                  <span><img src="/assets/img/icons/vimeo.svg" alt="Image" /></span>
                  Vimeo
                </a>
                <p>55k Followers</p>
              </li>
              <li>
                <a href="https://www.telegram.com/" target="_blank">
                  <span><img src="/assets/img/icons/telegram.svg" alt="Image" /></span>
                  Telegram
                </a>
                <p>788k Followers</p>
              </li>
            </ul>
          </div>
          <div className="sidebar-widget">
            <div className="newsletter-widget">
              <h2>Newsletter</h2>
              <h6>Join 70,000 Subscribers</h6>
              <form action="#">
                <input type="email" placeholder="Email Address" />
                <button type="submit">Subscribe<i className="flaticon-right-arrow-1" /></button>
              </form>
              <p>By signing up, you agree to our <a href="privacy-policy.html">Privacy Policy</a></p>
            </div>
          </div>
          <div className="sidebar-widget">
            <h3 className="sidebar-widget-title">Popular Tags</h3>
            <ul className="tag-list list-style">
              <li><a href="news-by-tags.html">BUSINESS</a></li>
              <li><a href="news-by-tags.html">FOOD</a></li>
              <li><a href="news-by-tags.html">SCIENCE</a></li>
              <li><a href="news-by-tags.html">LIFESTYLE</a></li>
              <li><a href="news-by-tags.html">SPORTS</a></li>
              <li><a href="news-by-tags.html">PHOTO</a></li>
              <li><a href="news-by-tags.html">TECHNOLOGY</a></li>
              <li><a href="news-by-tags.html">CONTENT</a></li>
              <li><a href="news-by-tags.html">FEATURED</a></li>
              <li><a href="news-by-tags.html">AUDIO</a></li>
              <li><a href="news-by-tags.html">FASHION</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="bg_gray popular-news ptb-100">
    <div className="container-fluid">
      <div className="row align-items-end mb-40">
        <div className="col-md-7">
          <h2 className="section-title">Most Popular<img className="section-title-img" src="/assets/img/section-img.webp" alt="Image" /></h2>
        </div>
        <div className="col-md-5 text-md-end">
          <a href="business.html" className="link-one">View All News<i className="flaticon-right-arrow" /></a>
        </div>
      </div>
      <div className="row gx-55">
        <div className="col-xl-6">
          <div className="row">
            <div className="col-12">
              <div className="news-card-eleven">
                <div className="news-card-img">
                  <img src="/assets/img/news/news-26.webp" alt="Image" />
                </div>
                <div className="news-card-info">
                  <div className="news-author">
                    <div className="news-author-img">
                      <img src="/assets/img/author/author-thumb-1.webp" alt="Image" />
                    </div>
                    <h5>By <a href="author.html">OLIVIA EMMA</a></h5>
                  </div>
                  <h3><a href="business-details.html">Multiple Games &amp; Updates For 2023 Holiday Season</a></h3>
                  <ul className="news-metainfo list-style">
                    <li><i className="fi fi-rr-calendar-minus" /><a href="news-by-date.html">Feb 03, 2023</a></li>
                    <li><i className="fi fi-rr-comment" />03</li>
                    <li><i className="fi fi-rr-clock-three" />15 Min Read</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="news-card-ten">
                <a href="business.html" className="news-cat">Business</a>
                <h3><a href="business-details.html">First Prototype Flight Using Kinetic Launch System</a></h3>
                <ul className="news-metainfo list-style">
                  <li><i className="fi fi-rr-calendar-minus" /><a href="news-by-date.html">Apr 03, 2023</a></li>
                </ul>
              </div>
            </div>
            <div className="col-md-6">
              <div className="news-card-ten">
                <a href="business.html" className="news-cat">Inspiration</a>
                <h3><a href="business-details.html">A Comprehensive Guide To The Best Summer Dresses</a></h3>
                <ul className="news-metainfo list-style">
                  <li><i className="fi fi-rr-calendar-minus" /><a href="news-by-date.html">Mar 03, 2023</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-6">
          <div className="row">
            <div className="col-md-6">
              <div className="news-card-six">
                <div className="news-card-img">
                  <img src="/assets/img/news/news-27.webp" alt="Image" />
                  <a href="business.html" className="news-cat">Health</a>
                </div>
                <div className="news-card-info">
                  <div className="news-author">
                    <div className="news-author-img">
                      <img src="/assets/img/author/author-thumb-1.webp" alt="Image" />
                    </div>
                    <h5>By <a href="author.html">OLIVIA EMMA</a></h5>
                  </div>
                  <h3><a href="business-details.html">I Thought I'd Found A Cheat Code For Parenting</a></h3>
                  <ul className="news-metainfo list-style">
                    <li><i className="fi fi-rr-calendar-minus" /><a href="news-by-date.html">Apr 22, 2023</a></li>
                    <li><i className="fi fi-rr-comment" />03</li>
                    <li><i className="fi fi-rr-clock-three" />15 Min Read</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="news-card-six">
                <div className="news-card-img">
                  <img src="/assets/img/news/news-28.webp" alt="Image" />
                  <a href="business.html" className="news-cat">Education</a>
                </div>
                <div className="news-card-info">
                  <div className="news-author">
                    <div className="news-author-img">
                      <img src="/assets/img/author/author-thumb-2.webp" alt="Image" />
                    </div>
                    <h5>By <a href="author.html">OLIVIA EMMA</a></h5>
                  </div>
                  <h3><a href="business-details.html">How To Make Your Life Routine More Fun And Eco-friendly</a></h3>
                  <ul className="news-metainfo list-style">
                    <li><i className="fi fi-rr-calendar-minus" /><a href="news-by-date.html">Feb 14, 2023</a></li>
                    <li><i className="fi fi-rr-comment" />03</li>
                    <li><i className="fi fi-rr-clock-three" />15 Min Read</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="news-card-six">
                <div className="news-card-img">
                  <img src="/assets/img/news/news-29.webp" alt="Image" />
                  <a href="business.html" className="news-cat">Technology</a>
                </div>
                <div className="news-card-info">
                  <div className="news-author">
                    <div className="news-author-img">
                      <img src="/assets/img/author/author-thumb-3.webp" alt="Image" />
                    </div>
                    <h5>By <a href="author.html">CLAIRE AUDREY</a></h5>
                  </div>
                  <h3><a href="business-details.html">You Can Read Any Of These Short Novels In A Weekend</a></h3>
                  <ul className="news-metainfo list-style">
                    <li><i className="fi fi-rr-calendar-minus" /><a href="news-by-date.html">Feb 17, 2023</a></li>
                    <li><i className="fi fi-rr-comment" />03</li>
                    <li><i className="fi fi-rr-clock-three" />15 Min Read</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="news-card-six">
                <div className="news-card-img">
                  <img src="/assets/img/news/news-30.webp" alt="Image" />
                  <a href="business.html" className="news-cat">Fashion</a>
                </div>
                <div className="news-card-info">
                  <div className="news-author">
                    <div className="news-author-img">
                      <img src="/assets/img/author/author-thumb-4.webp" alt="Image" />
                    </div>
                    <h5>By <a href="author.html">ELENA NAOMI</a></h5>
                  </div>
                  <h3><a href="business-details.html">Read 5 Best Novel In A Your Weekend Time</a></h3>
                  <ul className="news-metainfo list-style">
                    <li><i className="fi fi-rr-calendar-minus" /><a href="news-by-date.html">Feb 19, 2023</a></li>
                    <li><i className="fi fi-rr-comment" />03</li>
                    <li><i className="fi fi-rr-clock-three" />15 Min Read</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="general-news ptb-100">
    <div className="container-fluid">
      <div className="content-wrapper">
        <div className="left-content">
          <div className="row align-items-end mb-40">
            <div className="col-md-7">
              <h2 className="section-title">General News<img className="section-title-img" src="/assets/img/section-img.webp" alt="Image" /></h2>
            </div>
            <div className="col-md-5 text-md-end">
              <a href="business.html" className="link-one">View All News<i className="flaticon-right-arrow" /></a>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-6">
              <div className="news-card-twelve">
                <div className="news-card-img">
                  <img src="/assets/img/news/news-20.webp" alt="Image" />
                </div>
                <div className="news-card-info">
                  <a href="business.html" className="news-cat">Fashion</a>
                  <h3><a href="business-details.html">Is This The Beginning Of The End Of The Internet?</a></h3>
                  <ul className="news-metainfo list-style">
                    <li><i className="fi fi-rr-calendar-minus" /><a href="news-by-date.html">Feb 22, 2023</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="news-card-twelve">
                <div className="news-card-img">
                  <img src="/assets/img/news/news-21.webp" alt="Image" />
                </div>
                <div className="news-card-info">
                  <a href="business.html" className="news-cat">Politics</a>
                  <h3><a href="business-details.html">7 Steps To Get Professional Facial Results At Home</a></h3>
                  <ul className="news-metainfo list-style">
                    <li><i className="fi fi-rr-calendar-minus" /><a href="news-by-date.html">Feb 25, 2023</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="news-card-twelve">
                <div className="news-card-img">
                  <img src="/assets/img/news/news-22.webp" alt="Image" />
                </div>
                <div className="news-card-info">
                  <a href="business.html" className="news-cat">Inspiration</a>
                  <h3><a href="business-details.html">Creative Photography Ideas From Smart Devices</a></h3>
                  <ul className="news-metainfo list-style">
                    <li><i className="fi fi-rr-calendar-minus" /><a href="news-by-date.html">Feb 18, 2023</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="news-card-twelve">
                <div className="news-card-img">
                  <img src="/assets/img/news/news-23.webp" alt="Image" />
                </div>
                <div className="news-card-info">
                  <a href="business.html" className="news-cat">Politics</a>
                  <h3><a href="business-details.html">6 Romantic Places You Should Visit In 2023</a></h3>
                  <ul className="news-metainfo list-style">
                    <li><i className="fi fi-rr-calendar-minus" /><a href="news-by-date.html">Feb 20, 2023</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="news-card-twelve">
                <div className="news-card-img">
                  <img src="/assets/img/news/news-24.webp" alt="Image" />
                </div>
                <div className="news-card-info">
                  <a href="business.html" className="news-cat">Sports</a>
                  <h3><a href="business-details.html">The Best Place To Celebrate Birthday And Music</a></h3>
                  <ul className="news-metainfo list-style">
                    <li><i className="fi fi-rr-calendar-minus" /><a href="news-by-date.html">Feb 27, 2023</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="news-card-twelve">
                <div className="news-card-img">
                  <img src="/assets/img/news/news-25.webp" alt="Image" />
                </div>
                <div className="news-card-info">
                  <a href="business.html" className="news-cat">Business</a>
                  <h3><a href="business-details.html">Splurge Or Save Last Minute Pampering Gift Ideas</a></h3>
                  <ul className="news-metainfo list-style">
                    <li><i className="fi fi-rr-calendar-minus" /><a href="news-by-date.html">Feb 18, 2023</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="ad-section">
            <p>SPONSORED AD</p>
          </div>
          <div className="promo-wrap">
            <div className="promo-card-two">
              <img src="/assets/img/promo-shape-1.webp" alt="Image" className="promo-shape" />
              <div className="promo-content">
                <a href="index.html" className="logo">
                  <img className="logo-light" src="/assets/img/logo.webp" alt="Image" />
                  <img className="logo-dark" src="/assets/img/logo-white.webp" alt="Image" />
                </a>
                <p>The European languages are members of the same family separ existence is a Baxo. For science, music, sport, etc.</p>
              </div>
              <img src="/assets/img/promo-img-2.webp" alt="Image" className="promo-img" />
            </div>
          </div>
        </div>
        <div className="sidebar">
          <div className="sidebar-widget-two">
            <div className="contact-widget">
              <img src="/assets/img/contact-bg.svg" alt="Image" className="contact-shape" />
              <a href="index.html" className="logo">
                <img className="logo-light" src="/assets/img/logo.webp" alt="Image" />
                <img className="logo-dark" src="/assets/img/logo-white.webp" alt="Image" />
              </a>
              <p>Mauris mattis auctor cursus. Phasellus iso tellus tellus, imperdiet ut imperdiet eu, noiaculis a sem Donec vehicula luctus nunc in laoreet Aliquam</p>
              <ul className="social-profile list-style">
                <li><a href="https://www.fb.com/" target="_blank"><i className="flaticon-facebook-1" /></a></li>
                <li><a href="https://www.twitter.com/" target="_blank"><i className="flaticon-twitter-1" /></a></li>
                <li><a href="https://www.instagram.com/" target="_blank"><i className="flaticon-instagram-2" /></a></li>
                <li><a href="https://www.linkedin.com/" target="_blank"><i className="flaticon-linkedin" /></a></li>
              </ul>
            </div>
          </div>
          <div className="sidebar-widget">
            <h3 className="sidebar-widget-title">Popular Posts</h3>
            <div className="pp-post-wrap">
              <div className="news-card-one">
                <div className="news-card-img">
                  <img src="/assets/img/news/news-thumb-4.webp" alt="Image" />
                </div>
                <div className="news-card-info">
                  <h3><a href="business-details.html">Bernie Nonummy Pelopai Iatis Eum Litora</a></h3>
                  <ul className="news-metainfo list-style">
                    <li><i className="fi fi-rr-calendar-minus" /><a href="news-by-date.html">Apr 22, 2023</a></li>
                  </ul>
                </div>
              </div>
              <div className="news-card-one">
                <div className="news-card-img">
                  <img src="/assets/img/news/news-thumb-5.webp" alt="Image" />
                </div>
                <div className="news-card-info">
                  <h3><a href="business-details.html">How Youth Viral Diseases May The Year 2023</a></h3>
                  <ul className="news-metainfo list-style">
                    <li><i className="fi fi-rr-calendar-minus" /><a href="news-by-date.html">Apr 23, 2023</a></li>
                  </ul>
                </div>
              </div>
              <div className="news-card-one">
                <div className="news-card-img">
                  <img src="/assets/img/news/news-thumb-6.webp" alt="Image" />
                </div>
                <div className="news-card-info">
                  <h3><a href="business-details.html">Man Wearing Black Pullover Hoodie To Smoke</a></h3>
                  <ul className="news-metainfo list-style">
                    <li><i className="fi fi-rr-calendar-minus" /><a href="news-by-date.html">Apr 14, 2023</a></li>
                  </ul>
                </div>
              </div>
              <div className="news-card-one">
                <div className="news-card-img">
                  <img src="/assets/img/news/news-thumb-7.webp" alt="Image" />
                </div>
                <div className="news-card-info">
                  <h3><a href="business-details.html">First Prototype Flight Using Kinetic Launch System</a></h3>
                  <ul className="news-metainfo list-style">
                    <li><i className="fi fi-rr-calendar-minus" /><a href="news-by-date.html">Apr 07, 2023</a></li>
                  </ul>
                </div>
              </div>
              <div className="news-card-one">
                <div className="news-card-img">
                  <img src="/assets/img/news/news-thumb-8.webp" alt="Image" />
                </div>
                <div className="news-card-info">
                  <h3><a href="business-details.html">Beauty Queens Need Material &amp; Products</a></h3>
                  <ul className="news-metainfo list-style">
                    <li><i className="fi fi-rr-calendar-minus" /><a href="news-by-date.html">Apr 03, 2023</a></li>
                  </ul>
                </div>
              </div>
              <div className="news-card-one">
                <div className="news-card-img">
                  <img src="/assets/img/news/news-thumb-9.webp" alt="Image" />
                </div>
                <div className="news-card-info">
                  <h3><a href="business-details.html">That Woman Comes From Heaven Look Like Angel</a></h3>
                  <ul className="news-metainfo list-style">
                    <li><i className="fi fi-rr-calendar-minus" /><a href="news-by-date.html">Apr 01, 2023</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
<div className="video-news-wrap pt-100 pb-75">
  <div className="container-fluid">
    <div className="row mb-50 align-items-center">
      <div className="col-md-7">
        <h2 className="section-title text-white">Featured Video<img className="section-title-img" src="/assets/img/section-img.webp" alt="Image" /></h2>
      </div>
      <div className="col-md-5 text-md-end">
        <a href="featured-video.html" className="link-one">View All Featured Video<i className="flaticon-right-arrow" /></a>
      </div>
    </div>
    <div className="scrollscreen featured-video-box"><div className="scrollscreen--content">
        <div className="row gx-4">
          <div className="col-xl-7">
            <div className="news-card-four">
              <img src="/assets/img/news/video/news-1.webp" alt="Image" />
              <a className="play-now" href="#quickview-modal" data-bs-toggle="modal">
                <i className="flaticon-play-button" />
                <span className="ripple" />
              </a>
              <div className="news-card-info">
                <h3><a href="business-details.html">Apex Legends Season 11 Start Date, Time, &amp; What To Expect</a></h3>
                <ul className="news-metainfo list-style">
                  <li><i className="fi fi-rr-calendar-minus" /><a href="news-by-date.html">Feb 27, 2023</a></li>
                  <li><i className="fi fi-rr-clock-three" />15 Min Read</li>
                </ul>
              </div>
            </div>
            <div className="news-card-four">
              <img src="/assets/img/news/video/news-8.webp" alt="Image" />
              <a className="play-now" href="#quickview-modal" data-bs-toggle="modal">
                <i className="flaticon-play-button" />
                <span className="ripple" />
              </a>
              <div className="news-card-info">
                <h3><a href="business-details.html">Navigating The Political Sphere: Insights And Analysis</a></h3>
                <ul className="news-metainfo list-style">
                  <li><i className="fi fi-rr-calendar-minus" /><a href="news-by-date.html">Feb 27, 2023</a></li>
                  <li><i className="fi fi-rr-clock-three" />15 Min Read</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-xl-5">
            <div className="row">
              <div className="col-xl-12 col-lg-6">
                <div className="news-card-eight">
                  <img src="/assets/img/news/video/news-2.webp" alt="Image" />
                  <a className="play-now" href="#quickview-modal" data-bs-toggle="modal">
                    <i className="flaticon-play-button" />
                    <span className="ripple" />
                  </a>
                  <div className="news-card-info">
                    <h3><a href="business-details.html">First Season Of ‘Battlefield’ Debuts June 9th With Map</a></h3>
                    <ul className="news-metainfo list-style">
                      <li><i className="fi fi-rr-calendar-minus" /><a href="news-by-date.html">Feb 16, 2023</a></li>
                      <li><i className="fi fi-rr-clock-three" />13 Min Read</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-12 col-lg-6">
                <div className="news-card-eight">
                  <img src="/assets/img/news/video/news-3.webp" alt="Image" />
                  <a className="play-now" href="#quickview-modal" data-bs-toggle="modal">
                    <i className="flaticon-play-button" />
                    <span className="ripple" />
                  </a>
                  <div className="news-card-info">
                    <h3><a href="business-details.html">Man wearing black pullover hoodie to smoke light in</a></h3>
                    <ul className="news-metainfo list-style">
                      <li><i className="fi fi-rr-calendar-minus" /><a href="news-by-date.html">Feb 12, 2023</a></li>
                      <li><i className="fi fi-rr-clock-three" />10 Min Read</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-12 col-lg-6">
                <div className="news-card-eight">
                  <img src="/assets/img/news/video/news-9.webp" alt="Image" />
                  <a className="play-now" href="#quickview-modal" data-bs-toggle="modal">
                    <i className="flaticon-play-button" />
                    <span className="ripple" />
                  </a>
                  <div className="news-card-info">
                    <h3><a href="business-details.html">How To Find The Right Template For Your Product</a></h3>
                    <ul className="news-metainfo list-style">
                      <li><i className="fi fi-rr-calendar-minus" /><a href="news-by-date.html">Feb 12, 2023</a></li>
                      <li><i className="fi fi-rr-clock-three" />10 Min Read</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div><div className="scrollscreen--track" style={{opacity: 1}}><div className="scrollscreen--slider" style={{height: '375.89px', transform: 'translateY(0px)'}} /></div></div>
    <div className="video-slider-wrap">
      <div className="video-slider swiper swiper-initialized swiper-horizontal swiper-autoheight swiper-backface-hidden">
        <div className="swiper-wrapper" style={{cursor: 'grab', height: 243}} id="swiper-wrapper-db1d7cbf58ef3a6a" aria-live="polite">
          <div className="swiper-slide swiper-slide-active" role="group" aria-label="1 / 4" data-swiper-slide-index={0} style={{width: 376, marginRight: 25}}>
            <div className="news-card-nine">
              <img src="/assets/img/news/video/news-4.webp" alt="Image" />
              <a className="play-now" href="#quickview-modal" data-bs-toggle="modal">
                <i className="flaticon-play-button" />
                <span className="ripple" />
              </a>
              <div className="news-card-info">
                <h3><a href="business-details.html">5 things we know about GTA Trilogy: Definitive Edition so far</a></h3>
                <ul className="news-metainfo list-style">
                  <li><i className="fi fi-rr-calendar-minus" /><a href="news-by-date.html">Apr 25, 2023</a></li>
                  <li><i className="fi fi-rr-clock-three" />25 Min Read</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="swiper-slide swiper-slide-next" role="group" aria-label="2 / 4" data-swiper-slide-index={1} style={{width: 376, marginRight: 25}}>
            <div className="news-card-nine">
              <img src="/assets/img/news/video/news-5.webp" alt="Image" />
              <a className="play-now" href="#quickview-modal" data-bs-toggle="modal">
                <i className="flaticon-play-button" />
                <span className="ripple" />
              </a>
              <div className="news-card-info">
                <h3><a href="business-details.html">Nintendo Switch Online’s Next Wave of N64 Games Confirmed</a></h3>
                <ul className="news-metainfo list-style">
                  <li><i className="fi fi-rr-calendar-minus" /><a href="news-by-date.html">Apr 23, 2023</a></li>
                  <li><i className="fi fi-rr-clock-three" />15 Min Read</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="swiper-slide" role="group" aria-label="3 / 4" data-swiper-slide-index={2} style={{width: 376, marginRight: 25}}>
            <div className="news-card-nine">
              <img src="/assets/img/news/video/news-6.webp" alt="Image" />
              <a className="play-now" href="#quickview-modal" data-bs-toggle="modal">
                <i className="flaticon-play-button" />
                <span className="ripple" />
              </a>
              <div className="news-card-info">
                <h3><a href="business-details.html">Back 4 Blood developers Turtle Rock have been bought by Tencent</a></h3>
                <ul className="news-metainfo list-style">
                  <li><i className="fi fi-rr-calendar-minus" /><a href="news-by-date.html">Apr 15, 2023</a></li>
                  <li><i className="fi fi-rr-clock-three" />10 Min Read</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="swiper-slide" role="group" aria-label="4 / 4" data-swiper-slide-index={3} style={{width: 376, marginRight: 25}}>
            <div className="news-card-nine">
              <img src="/assets/img/news/video/news-7.webp" alt="Image" />
              <a className="play-now" href="#quickview-modal" data-bs-toggle="modal">
                <i className="flaticon-play-button" />
                <span className="ripple" />
              </a>
              <div className="news-card-info">
                <h3><a href="business-details.html">Beauty queens need beauty material &amp; products</a></h3>
                <ul className="news-metainfo list-style">
                  <li><i className="fi fi-rr-calendar-minus" /><a href="news-by-date.html">Apr 11, 2023</a></li>
                  <li><i className="fi fi-rr-clock-three" />12 Min Read</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <span className="swiper-notification" aria-live="assertive" aria-atomic="true" /></div>
      <div className="video-prev" tabIndex={0} role="button" aria-label="Previous slide" aria-controls="swiper-wrapper-db1d7cbf58ef3a6a"><i className="flaticon-left-arrow" /></div>
      <div className="video-next" tabIndex={0} role="button" aria-label="Next slide" aria-controls="swiper-wrapper-db1d7cbf58ef3a6a"><i className="flaticon-right-arrow" /></div>
    </div>
  </div>
</div>

  <div className="latest-news pb-100">
    <div className="container-fluid">
      <div className="content-wrapper">
        <div className="left-content">
          <div className="row align-items-end mb-40">
            <div className="col-md-7">
              <h2 className="section-title">Latest News<img className="section-title-img" src="/assets/img/section-img.webp" alt="Image" /></h2>
            </div>
            <div className="col-md-5 text-md-end">
              <a href="business.html" className="link-one">View All News<i className="flaticon-right-arrow" /></a>
            </div>
          </div>
          <div className="row gx-5">
            <div className="col-xl-7">
              <div className="scrollscreen">
                <div className="news-card-five">
                  <div className="news-card-img">
                    <img src="/assets/img/news/news-9.webp" alt="Image" />
                    <a href="business.html" className="news-cat">Lifestyle</a>
                  </div>
                  <div className="news-card-info">
                    <h3><a href="business-details.html">Good Day To Take A Photo With Your Favorite Style</a></h3>
                    <p>Lorem ipsum or lipsum as it is sometmes known is dum text used in laying print, graphic or desi…</p>
                    <ul className="news-metainfo list-style">
                      <li><i className="fi fi-rr-calendar-minus" /><a href="news-by-date.html">Apr 22, 2023</a></li>
                      <li><i className="fi fi-rr-clock-three" />15 Min Read</li>
                    </ul>
                  </div>
                </div>
                <div className="news-card-five">
                  <div className="news-card-img">
                    <img src="/assets/img/news/news-10.webp" alt="Image" />
                    <a href="business.html" className="news-cat">Fashion</a>
                  </div>
                  <div className="news-card-info">
                    <h3><a href="business-details.html">I Turned My Home Into A Fortress of Surveillance</a></h3>
                    <p>Lorem ipsum or lipsum as it is sometmes known is dum text used in laying print, graphic or desi…</p>
                    <ul className="news-metainfo list-style">
                      <li><i className="fi fi-rr-calendar-minus" /><a href="news-by-date.html">Apr 15, 2023</a></li>
                      <li><i className="fi fi-rr-clock-three" />10 Min Read</li>
                    </ul>
                  </div>
                </div>
                <div className="news-card-five">
                  <div className="news-card-img">
                    <img src="/assets/img/news/news-11.webp" alt="Image" />
                    <a href="business.html" className="news-cat">Science</a>
                  </div>
                  <div className="news-card-info">
                    <h3><a href="business-details.html">Man Wearing Black Pullover Hoodie To Smoke Light In</a></h3>
                    <p>Lorem ipsum or lipsum as it is sometmes known is dum text used in laying print, graphic or desi…</p>
                    <ul className="news-metainfo list-style">
                      <li><i className="fi fi-rr-calendar-minus" /><a href="news-by-date.html">Apr 17, 2023</a></li>
                      <li><i className="fi fi-rr-clock-three" />8 Min Read</li>
                    </ul>
                  </div>
                </div>
                <div className="news-card-five">
                  <div className="news-card-img">
                    <img src="/assets/img/news/news-12.webp" alt="Image" />
                    <a href="business.html" className="news-cat">Photography</a>
                  </div>
                  <div className="news-card-info">
                    <h3><a href="business-details.html">Recovery And Cleanup In Florida After Hurricane Ian</a></h3>
                    <p>Lorem ipsum or lipsum as it is sometmes known is dum text used in laying print, graphic or desi…</p>
                    <ul className="news-metainfo list-style">
                      <li><i className="fi fi-rr-calendar-minus" /><a href="news-by-date.html">Apr 12, 2023</a></li>
                      <li><i className="fi fi-rr-clock-three" />13 Min Read</li>
                    </ul>
                  </div>
                </div>
                <div className="news-card-five">
                  <div className="news-card-img">
                    <img src="/assets/img/news/news-13.webp" alt="Image" />
                    <a href="business.html" className="news-cat">Business</a>
                  </div>
                  <div className="news-card-info">
                    <h3><a href="business-details.html">Apex Legends Season 11 Starting From August, 2023</a></h3>
                    <p>Lorem ipsum or lipsum as it is sometmes known is dum text used in laying print, graphic or desi…</p>
                    <ul className="news-metainfo list-style">
                      <li><i className="fi fi-rr-calendar-minus" /><a href="news-by-date.html">Apr 07, 2023</a></li>
                      <li><i className="fi fi-rr-clock-three" />15 Min Read</li>
                    </ul>
                  </div>
                </div>
                <div className="news-card-five">
                  <div className="news-card-img">
                    <img src="/assets/img/news/news-14.webp" alt="Image" />
                    <a href="business.html" className="news-cat">Travel</a>
                  </div>
                  <div className="news-card-info">
                    <h3><a href="business-details.html">Creative Photography Ideas From Smart Devices</a></h3>
                    <p>Lorem ipsum or lipsum as it is sometmes known is dum text used in laying print, graphic or desi…</p>
                    <ul className="news-metainfo list-style">
                      <li><i className="fi fi-rr-calendar-minus" /><a href="news-by-date.html">Apr 05, 2023</a></li>
                      <li><i className="fi fi-rr-clock-three" />11 Min Read</li>
                    </ul>
                  </div>
                </div>
                <div className="news-card-five">
                  <div className="news-card-img">
                    <img src="/assets/img/news/news-15.webp" alt="Image" />
                    <a href="business.html" className="news-cat">Travel</a>
                  </div>
                  <div className="news-card-info">
                    <h3><a href="business-details.html">6 Romantic Places You Want To Visit With Your Partner</a></h3>
                    <p>Lorem ipsum or lipsum as it is sometmes known is dum text used in laying print, graphic or desi…</p>
                    <ul className="news-metainfo list-style">
                      <li><i className="fi fi-rr-calendar-minus" /><a href="news-by-date.html">Apr 03, 2023</a></li>
                      <li><i className="fi fi-rr-clock-three" />15 Min Read</li>
                    </ul>
                  </div>
                </div>
                <div className="news-card-five">
                  <div className="news-card-img">
                    <img src="/assets/img/news/news-16.webp" alt="Image" />
                    <a href="business.html" className="news-cat">Fashion</a>
                  </div>
                  <div className="news-card-info">
                    <h3><a href="business-details.html">7 Steps To Get Professional Facial Results At Home</a></h3>
                    <p>Lorem ipsum or lipsum as it is sometmes known is dum text used in laying print, graphic or desi…</p>
                    <ul className="news-metainfo list-style">
                      <li><i className="fi fi-rr-calendar-minus" /><a href="news-by-date.html">Apr 02, 2023</a></li>
                      <li><i className="fi fi-rr-clock-three" />10 Min Read</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-5">
              <div className="news-card-two">
                <div className="news-card-img">
                  <img src="/assets/img/news/news-17.webp" alt="Image" />
                  <a href="business.html" className="news-cat">Technology</a>
                </div>
                <div className="news-card-info">
                  <h3><a href="business-details.html">Elijah James: The Nashville Photographer Shares Her Unique Journey</a></h3>
                  <ul className="news-metainfo list-style">
                    <li><i className="fi fi-rr-calendar-minus" /><a href="news-by-date.html">Feb 25, 2023</a></li>
                    <li><i className="fi fi-rr-clock-three" />15 Min Read</li>
                  </ul>
                </div>
              </div>
              <div className="news-card-three">
                <div className="news-card-img">
                  <img src="/assets/img/news/news-18.webp" alt="Image" />
                </div>
                <div className="news-card-info">
                  <a href="business.html" className="news-cat">Travel</a>
                  <h3><a href="business-details.html">A Complimentary Day At Mandarin The Oriental</a></h3>
                  <ul className="news-metainfo list-style">
                    <li><i className="fi fi-rr-calendar-minus" /><a href="news-by-date.html">Feb 23, 2023</a></li>
                  </ul>
                </div>
              </div>
              <div className="news-card-three">
                <div className="news-card-img">
                  <img src="/assets/img/news/news-19.webp" alt="Image" />
                </div>
                <div className="news-card-info">
                  <a href="business.html" className="news-cat">Business</a>
                  <h3><a href="business-details.html">First prototype Flight Using Kinetic Launch System</a></h3>
                  <ul className="news-metainfo list-style">
                    <li><i className="fi fi-rr-calendar-minus" /><a href="news-by-date.html">Feb 22, 2023</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sidebar">
          <div className="sidebar-widget">
            <h3 className="sidebar-widget-title">Explore Topics</h3>
            <ul className="category-widget list-style">
              <li><a href="business.html"><i className="flaticon-right-arrow" />Celebration <span>(6)</span></a></li>
              <li><a href="business.html"><i className="flaticon-right-arrow" />Culture<span>(3)</span></a></li>
              <li><a href="business.html"><i className="flaticon-right-arrow" />Fashion<span>(2)</span></a></li>
              <li><a href="business.html"><i className="flaticon-right-arrow" />Inspiration<span>(8)</span></a></li>
              <li><a href="business.html"><i className="flaticon-right-arrow" />Lifestyle<span>(6)</span></a></li>
              <li><a href="business.html"><i className="flaticon-right-arrow" />Politics<span>(2)</span></a></li>
              <li><a href="business.html"><i className="flaticon-right-arrow" />Trending<span>(4)</span></a></li>
            </ul>
          </div>
          <div className="sidebar-widget">
            <h3 className="sidebar-widget-title">Celebration</h3>
            <div className="featured-widget">
              <div className="featured-slider swiper">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="news-card-one">
                      <div className="news-card-img">
                        <img src="/assets/img/news/news-thumb-1.webp" alt="Image" />
                      </div>
                      <div className="news-card-info">
                        <h3><a href="business-details.html">How Youth Viral Diseases May The Year 2023</a></h3>
                        <ul className="news-metainfo list-style">
                          <li><i className="fi fi-rr-calendar-minus" /><a href="news-by-date.html">Mar 24, 2023</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="news-card-one">
                      <div className="news-card-img">
                        <img src="/assets/img/news/news-thumb-2.webp" alt="Image" />
                      </div>
                      <div className="news-card-info">
                        <h3><a href="business-details.html">Nintendo Switch Online’s Next Wave of N64 Games</a></h3>
                        <ul className="news-metainfo list-style">
                          <li><i className="fi fi-rr-calendar-minus" /><a href="news-by-date.html">Mar 22, 2023</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="news-card-one">
                      <div className="news-card-img">
                        <img src="/assets/img/news/news-thumb-3.webp" alt="Image" />
                      </div>
                      <div className="news-card-info">
                        <h3><a href="business-details.html">5 things We Know About GTA Definitive Edition</a></h3>
                        <ul className="news-metainfo list-style">
                          <li><i className="fi fi-rr-calendar-minus" /><a href="news-by-date.html">Mar 14, 2023</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="featured-prev"><i className="flaticon-left-arrow" /></div>
                <div className="featured-next"><i className="flaticon-right-arrow" /></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
<div className="container-fluid pb-50">
  <div className="instagram-slider swiper swiper-initialized swiper-horizontal swiper-backface-hidden">
    <div className="swiper-wrapper" id="swiper-wrapper-a921c1797fa6ebe4" aria-live="off" style={{cursor: 'grab', transitionDuration: '0ms', transform: 'translate3d(-644px, 0px, 0px)'}}>
      <div className="swiper-slide" role="group" aria-label="1 / 6" data-swiper-slide-index={0} style={{width: 312, marginRight: 10}}>
        <a className="instagram-slide" href="https://www.instagram.com/" target="_blank">
          <img src="/assets/img/instagram/insta-1.webp" alt="Image" />
          <span>@Baxo on Instagram<i className="flaticon-right-arrow" /></span>
        </a>
      </div>
      <div className="swiper-slide swiper-slide-prev" role="group" aria-label="2 / 6" data-swiper-slide-index={1} style={{width: 312, marginRight: 10}}>
        <a className="instagram-slide" href="https://www.instagram.com/" target="_blank">
          <img src="/assets/img/instagram/insta-2.webp" alt="Image" />
          <span>@Baxo on Instagram<i className="flaticon-right-arrow" /></span>
        </a>
      </div>
      <div className="swiper-slide swiper-slide-active" role="group" aria-label="3 / 6" data-swiper-slide-index={2} style={{width: 312, marginRight: 10}}>
        <a className="instagram-slide" href="https://www.instagram.com/" target="_blank">
          <img src="/assets/img/instagram/insta-3.webp" alt="Image" />
          <span>@Baxo on Instagram<i className="flaticon-right-arrow" /></span>
        </a>
      </div>
      <div className="swiper-slide swiper-slide-next" role="group" aria-label="4 / 6" data-swiper-slide-index={3} style={{width: 312, marginRight: 10}}>
        <a className="instagram-slide" href="https://www.instagram.com/" target="_blank">
          <img src="/assets/img/instagram/insta-4.webp" alt="Image" />
          <span>@Baxo on Instagram<i className="flaticon-right-arrow" /></span>
        </a>
      </div>
      <div className="swiper-slide" role="group" aria-label="5 / 6" data-swiper-slide-index={4} style={{width: 312, marginRight: 10}}>
        <a className="instagram-slide" href="https://www.instagram.com/" target="_blank">
          <img src="/assets/img/instagram/insta-5.webp" alt="Image" />
          <span>@Baxo on Instagram<i className="flaticon-right-arrow" /></span>
        </a>
      </div>
      <div className="swiper-slide" role="group" aria-label="6 / 6" data-swiper-slide-index={5} style={{width: 312, marginRight: 10}}>
        <a className="instagram-slide" href="https://www.instagram.com/" target="_blank">
          <img src="/assets/img/instagram/insta-6.webp" alt="Image" />
          <span>@Baxo on Instagram<i className="flaticon-right-arrow-1" /></span>
        </a>
      </div>
    </div>
    <span className="swiper-notification" aria-live="assertive" aria-atomic="true" /></div>
</div> */}

<Footer />
  <button type="button" id="backtotop" className="position-fixed text-center border-0 p-0">
    <i className="ri-arrow-up-line" />
  </button>
  <div className="modal fade" id="newsletter-popup" tabIndex={-1} aria-labelledby="newsletter-popup" aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered modal-xl">
      <div className="modal-content">
        <button type="button" className="btn_close" data-bs-dismiss="modal" aria-label="Close">
          <i className="fi fi-rr-cross" />
        </button>
        <div className="modal-body">
          <div className="newsletter-bg bg-f" />
          <div className="newsletter-content">
            <img src="/assets/img/newsletter-icon.webp" alt="Image" className="newsletter-icon" />
            <h2>Join Our Newsletter &amp; Read The New Posts First</h2>
            <form action="#" className="newsletter-form">
              <input type="email" placeholder="Email Address" />
              <button type="button" className="btn-one">Subscribe<i className="flaticon-arrow-right" /></button>
            </form>
            <div className="form-check checkbox">
              <input className="form-check-input" type="checkbox" id="test_21" />
              <label className="form-check-label" htmlFor="test_21">
                I've read and accept <a href="privacy-policy.html">Privacy Policy</a>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="modal fade" id="quickview-modal" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="quickview-modal" aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered modal-xl">
      <div className="modal-content">
        <button type="button" className="btn_close" data-bs-dismiss="modal" aria-label="Close">
          <i className="ri-close-line" />
        </button>
        <div className="modal-body">
          <div className="video-popup">
            <iframe width={885} height={498} src="https://www.youtube.com/embed/3FjT7etqxt8" title="How to Design an Elvis Movie Poster in Photoshop" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
          </div>
        </div>
      </div>
    </div>
  </div>
</>

  );
}

export default Home;
