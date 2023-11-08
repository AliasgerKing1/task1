/* eslint-disable */
import React, {useState ,useEffect } from 'react'
import {NavLink} from 'react-router-dom'
const DetailsContent = ({name, data}) => {
  let [completePage, setCompletePage] = useState([])
  
  useEffect(() => {
    if (data?.description) {
      let splitedData = data?.description.split('.!')
      let completePage = [];
      let imageIndex = 0; // add an index for images
      let skipImage = false; // flag to check if the last line was "Mod Info -"
      splitedData.forEach((pageItem, index) => {
        let lines = pageItem.split('\n');
        let tempList = [];
        lines.forEach(line => {
          if (line.match(/^\d+\).+/g)) { // if line matches "number) text"
            let newLine = line.replace(/^\d+\)\s*/, ''); // remove "number) "
            tempList.push(newLine);
          } else if (line == "Mod Info -") { // if line is "Mod Info -"
            completePage.push(`<>${line}`); // add line as h3 to completePage
            skipImage = true; // set skipImage to true
          } else { // if line does not match "number) text"
            completePage.push(line); // add line as plain text to tempList
            skipImage = false; // reset skipImage to false
          }
        });
        if (!skipImage && data?.image && data.image[imageIndex]) { // if image is available and skipImage is false
          completePage.push(data.image[imageIndex]); // add image to completePage
          imageIndex++; // increment image index only when an image is added
        }
        if (tempList.length > 0) {
          completePage.push(tempList); // add tempList to completePage if it's not empty
        }
      });
      let filteredCompletePage = completePage.filter(item => item !== '');
      setCompletePage(filteredCompletePage);
      // console.log(filteredCompletePage); // check filteredCompletePage
    }
  }, [data]);
  
  return (
    <>
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
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
            Home
          </button>
          <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#navbarAccordion">
            <div className="accordion-body">
              <div className="accordion" id="navbarAccordion2">
                <div className="accordion-item">
                  <a className="accordion-link" href="index.html">
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
          <button className="accordion-button collapsed active" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
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
                  <a href="business-details.html" className="accordion-link active">
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
            <a href="https://templates.hibootstrap.com/cdn-cgi/l/email-protection#d1b9b4bdbdbe91b3b0a9beffb2bebc"><span className="__cf_email__" data-cfemail="462e232a2a290624273e296825292b">[email&nbsp;protected]</span></a>
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
  <div className="breadcrumb-wrap">
    <div className="container">
      <h2 className="breadcrumb-title">{name}</h2>
      <ul className="breadcrumb-menu list-style">
        <li><NavLink to="/">Home</NavLink></li>
        <li><a href="business.html">{data?.category}</a></li>
        <li>{name}</li>
      </ul>
    </div>
  </div>
  <div className="news-details-wrap ptb-100">
    <div className="container">
      <div className="row gx-55 gx-5">
        <div className="col-lg-8">
          <article>
            <div className="news-img">
              <img src="/assets/img/news/telegram/telegram.png" alt="Image" />
              <a href="business.html" className="news-cat">{data?.category}</a>
            </div>
            <ul className="news-metainfo list-style">
              <li className="author">
                <span className="author-img">
                  <img src="/assets/img/author/author-thumb-1.webp" alt="Image" />
                </span>
                <a href="author.html">AliasgerB</a>
              </li>
              <li><i className="fi fi-rr-calendar-minus" /><a href="news-by-date.html">{data?.upload_date}</a></li>
              <li><i className="fi fi-rr-fire-flame-curved" />{data?.category}</li>
            </ul>
            <div className="news-para">
              <h1>{data?.app_name}</h1>
              {completePage?.map((pageItem) => (
                <>
                {typeof(pageItem) === 'string' && pageItem != "<>Mod Info -" && !pageItem?.includes("/assets")  ? (<p>{pageItem}</p>) :null}
                {typeof(pageItem) === 'string' && pageItem?.includes("<>") && !pageItem?.includes("/assets") ? (<h5 className='mt-2'>{pageItem.replace("<>", "")}</h5>) :null}
                {typeof(pageItem) === 'string' && pageItem?.includes("/assets") ? (<img src={pageItem} />) :null}
                {typeof(pageItem) === 'object' ? (<ul className="content-feature-list list-style mt-15">
                  {pageItem?.map((lst) => (
                  <li key={lst}><span><i class="flaticon-arrow-right"></i></span>
                  {lst}</li>
                  ))}
                  </ul>) :null}
                </>
                ))}
            </div>
            {/* <div className="news-img">
              <img src="/assets/img/news/single-news-2.webp" alt="Image" />
            </div>
            <div className="news-para">
              <h5>Mastering Digital Transformation: How to Stay Ahead in a Rapidly Changing Business Landscape</h5>
              <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
              <h5>Unordered &amp; Ordered Lists</h5>
              <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form by injected humour, or randomised words which don't look even slightly believable.</p>
              <ul className="content-feature-list list-style mt-15">
                <li>
                  <span><i className="flaticon-arrow-right" /></span>
                  It is a long established fact that a reader will be distracted by the readable content.
                </li>
                <li>
                  <span><i className="flaticon-arrow-right" /></span>
                  Lorem Ipsum is simply dummy text of the printing and typesetting
                </li>
                <li>
                  <span><i className="flaticon-arrow-right" /></span>
                  It was popularised in the 1960s with the release of Letraset sheets
                </li>
                <li>
                  <span><i className="flaticon-arrow-right" /></span>
                  Publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </li>
                <li>
                  <span><i className="flaticon-arrow-right" /></span>
                  All the Lorem Ipsum generators on the Internet tend to repeat predefined.
                </li>
              </ul>
              <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a <strong>adipisicing</strong> of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
            </div>
            <blockquote className="wp-block-quote">
              <i className="fi fi-rr-quote-right" />
              <p>“ People find waiting more tolerable when they can see the work being done on their behalf ”</p>
              <h6>William Benjamin</h6>
            </blockquote>
            <div className="news-para">
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's stand dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specim book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchange was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
              <ol>
                <li>Lacus sed viverra tellus in hac habitasse platea dictumst.</li>
                <li>Gravida neque convallis a <strong>cras</strong> semper auctor neque vitae.</li>
                <li>Lacus sed turpis tincidunt id aliquet risus feugiat in.</li>
                <li>Risus commodo viverra manas accumsan lacus vel facilisis</li>
              </ol>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam culpa reprehenderit ad ipsa porro obcaecati accusantium tempore officiis tenetur est!</p>
            </div> */}
            {/* <div className="row">
            <div className="col-lg-6 offset-lg-3">
            <div className="option-item">
  <NavLink to={data?.share_link} target="_blank" className="btn-two">Download {name}</NavLink>
</div>
              </div>
            </div> */}

          </article>
          {/* <div className="post-pagination">
            <a className="prev-post" href="business-details.html">
              <span>PREVIOUS</span>
              <h6>The Future Of Business: Predictions And Trends To Watch</h6>
            </a>
            <a className="next-post" href="business-details.html">
              <span>NEXT</span>
              <h6>From Start-up To Scale-up: Navigating Growth In Your Business</h6>
            </a>
          </div> */}
          <h3 className="comment-box-title">{data?.comment?.length} Comments</h3>
          <div className="comment-item-wrap">
            <div className="comment-item">
              <div className="comment-author-img">
                <img src="/assets/img/author/author-thumb-1.webp" alt="Image" />
              </div>
              <div className="comment-author-wrap">
                <div className="comment-author-info">
                  <div className="row align-items-start">
                    <div className="col-md-9 col-sm-12 col-12 order-md-1 order-sm-1 order-1">
                      <div className="comment-author-name">
                        <h5>Killian Mider</h5>
                        <span className="comment-date">Jul 22, 2023 | 7:10 PM</span>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-12 col-12 text-md-end order-md-2 order-sm-3 order-3">
                      <a href="#cmt-form" className="reply-btn">Reply</a>
                    </div>
                    <div className="col-md-12 col-sm-12 col-12 order-md-3 order-sm-2 order-2">
                      <div className="comment-text">
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                          sed diam nonumy eirmod tempor invidunt ut labore et dolore
                          magna aliquyam.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="comment-item reply">
              <div className="comment-author-img">
                <img src="/assets/img/author/author-thumb-2.webp" alt="Image" />
              </div>
              <div className="comment-author-wrap">
                <div className="comment-author-info">
                  <div className="row align-items-start">
                    <div className="col-md-9 col-sm-12 col-12 order-md-1 order-sm-1 order-1">
                      <div className="comment-author-name">
                        <h5>Everly Leah </h5>
                        <span className="comment-date">Jul 23, 2023 | 7:10 PM</span>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-12 col-12 text-md-end order-md-2 order-sm-3 order-3">
                      <a href="#cmt-form" className="reply-btn">Reply</a>
                    </div>
                    <div className="col-md-12 col-sm-12 col-12 order-md-3 order-sm-2 order-2">
                      <div className="comment-text">
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                          sed diam nonumy eirmod tempor invidunt ut labore et dolore
                          magna aliquyam erat.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="comment-item">
              <div className="comment-author-img">
                <img src="/assets/img/author/author-thumb-3.webp" alt="Image" />
              </div>
              <div className="comment-author-wrap">
                <div className="comment-author-info">
                  <div className="row align-items-start">
                    <div className="col-md-9 col-sm-12 col-12 order-md-1 order-sm-1 order-1">
                      <div className="comment-author-name">
                        <h5>Michel Ohio</h5>
                        <span className="comment-date">Jun 14, 2023 | 7:10 PM</span>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-12 col-12 text-md-end order-md-2 order-sm-3 order-3">
                      <a href="#cmt-form" className="reply-btn">Reply</a>
                    </div>
                    <div className="col-md-12 col-sm-12 col-12 order-md-3 order-sm-2 order-2">
                      <div className="comment-text">
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                          sed diam nonumy eirmod tempor invidunt ut labore et dolore
                          magna aliquyam.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
          {/* <div id="cmt-form">
            <div className="mb-30">
              <h3 className="comment-box-title">Leave A Comment</h3>
              <p>Your email address will not be published. Required fields are marked.</p>
            </div>
            <form action="#" className="comment-form">
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <input type="text" name="name" id="name" required placeholder="Name*" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <input type="email" name="email" id="email" required placeholder="Email Address*" />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group">
                    <textarea name="messages" id="messages" cols={30} rows={10} placeholder="Please Enter Your Comment Here" defaultValue={""} />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-check checkbox">
                    <input className="form-check-input" type="checkbox" id="test_2" />
                    <label className="form-check-label" htmlFor="test_2">
                      Save my info for the next time I commnet.
                    </label>
                  </div>
                </div>
                <div className="col-md-12 mt-3">
                  <button className="btn-two">Post A Comment<i className="flaticon-right-arrow" /></button>
                </div>
              </div>
            </form>
          </div> */}
        </div>
        {/* <div className="col-lg-4">
          <div className="sidebar">
            <div className="sidebar-widget-two">
              <form action="#" className="search-box-widget">
                <input type="search" placeholder="Search" />
                <button type="submit">
                  <i className="fi fi-rr-search" />
                </button>
              </form>
            </div>
            <div className="sidebar-widget">
              <h3 className="sidebar-widget-title">Categories</h3>
              <ul className="category-widget list-style">
                <li><a href="business.html"><img src="/assets/img/icons/arrow-right.svg" alt="Image" />Celebration <span>(6)</span></a></li>
                <li><a href="business.html"><img src="/assets/img/icons/arrow-right.svg" alt="Image" />Culture<span>(3)</span></a></li>
                <li><a href="business.html"><img src="/assets/img/icons/arrow-right.svg" alt="Image" />Fashion<span>(2)</span></a></li>
                <li><a href="business.html"><img src="/assets/img/icons/arrow-right.svg" alt="Image" />Inspiration<span>(8)</span></a></li>
                <li><a href="business.html"><img src="/assets/img/icons/arrow-right.svg" alt="Image" />Lifestyle<span>(6)</span></a></li>
                <li><a href="business.html"><img src="/assets/img/icons/arrow-right.svg" alt="Image" />Politics<span>(2)</span></a></li>
                <li><a href="business.html"><img src="/assets/img/icons/arrow-right.svg" alt="Image" />Trending<span>(4)</span></a></li>
              </ul>
            </div>
            <div className="sidebar-widget">
              <h3 className="sidebar-widget-title">Recent Posts</h3>
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
        </div> */}
      </div>
    </div>
  </div>
    </>
  )
}

export default DetailsContent
