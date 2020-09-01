import React from 'react';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';
import './style.scss';

function MainHome() {
  const params = {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    loop: true
  }

  return (
    <div>
      <main className="back-front-page">
        <Swiper {...params}>
          <div className="swiper-slide">
            <div className="gallery-item">
              <div className="img-content">
              </div>
              <div className="text-wrapper">
                <div className="text-box"></div>
                <div className="text-wrap-box">
                  <div className="text-wrap-context">
                    <h4 className="titleWow ">New, Bigger Sizes!</h4>
                    <p>Enjoy our bestselling body and hair staples, now available in a a family friendly 32 or size</p>
                    <button className="btn btn_">xem chi tiết</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="swiper-slide">
            <div className="gallery-item">
              <div className="img-content">
              </div>
              <div className="text-wrapper">
                <div className="text-box"></div>
                <div className="text-wrap-box">
                  <div className="text-wrap-context">
                    <h4 className="titleWow ">New, Bigger Sizes!</h4>
                    <p>Enjoy our bestselling body and hair staples, now available in a a family friendly 32 or size</p>
                    <button className="btn btn_">xem chi tiết</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Swiper>
      </main>
      
      <style jsx>{`
           .img-content{
            background-image: url('static/imgs/Bin.jpg');
            height: 100%;
            width: 80%;
            background-position: center;
            background-size: 100%;
            background-repeat: no-repeat;
            background-size: cover;
            position: absolute;
            right: 0;
        }
        .text-wrap-box {
            background-image: url('static/imgs/Last.png');
            background-size: contain;
            background-repeat: no-repeat;
            height: 100%;
            display: flex;
            width: 30%;
            z-index: 9;
            position: absolute;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
            `}</style>
    </div>
  );
}

export default React.memo(MainHome);