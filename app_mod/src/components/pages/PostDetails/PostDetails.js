/* eslint-disable */
import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom'
import {getModAppById} from '../../../Services/ModAppService'
import Header from '../../shared/Header'
import Footer from '../../shared/Footer'
import DetailsContent from '../../shared/Content/DetailsContent';

let PostDetails = () => {
  let {name, id} = useParams()
  let [modAppData, setModAppData] = useState({});
  let getModAppFun = async () => {
    let result = await getModAppById(id);
    setModAppData(result.data[0])
    // console.log(result.data)
        }
    
        useEffect(()=> {
          getModAppFun()
        }, [])
  return (
  <>
  <div style={{textAlign : 'left'}}>
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
  <DetailsContent name={name} data={modAppData} />
  <Footer />
  <button type="button" id="backtotop" className="position-fixed text-center border-0 p-0">
    <i className="ri-arrow-up-line" />
  </button>
 <div className="modal fade show" id="newsletter-popup" tabIndex={-1} aria-labelledby="newsletter-popup" style={{display: 'none'}} aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered modal-xl">
    <div className="modal-content">
      <button type="button" className="btn_close" data-bs-dismiss="modal" aria-label="Close">
        <i className="fi fi-rr-cross" />
      </button>
      <div className="modal-body">
        <div className="newsletter-bg bg-f" />
        <div className="newsletter-content">
          <img src="assets/img/newsletter-icon.webp" alt="Image" className="newsletter-icon" />
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
</div>
</>

  );
}

export default PostDetails;
