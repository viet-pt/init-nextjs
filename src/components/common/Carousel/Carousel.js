import React, { useRef } from 'react';
import './style.scss';
import { Carousel as CarouselAnt } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/fontawesome-free-solid';

const Carousel = ({ list, autoplay, customClass }) => {
  let refCarousel = useRef(null);

  const onClickLeft = () => {
    refCarousel.prev();
  }

  const onClickRight = () => {
    refCarousel.next();
  }

  if (!list || !list.length) {
    return null;
  }

  return (
    <div className={`carousel-wrapper ${customClass || ''}`}>
      <CarouselAnt autoplay={autoplay} ref={el => (refCarousel = el)}>
        {list.map((item, index) => (
          <div key={index} className="position-relative">
            <FontAwesomeIcon 
              icon={faAngleLeft} color="#fff"
              className="arrow-icon"
              onClick={onClickLeft}
            />
            <img
              src={item.img}
              alt="img"
              title={item.title}
            />
            <FontAwesomeIcon
              icon={faAngleRight} color="#fff"
              className="arrow-icon --right"
              onClick={onClickRight}
            />
            {/* <h3 className="title-hover">
              {item.title}
            </h3> */}
          </div>
        ))}
      </CarouselAnt>
    </div>
  )
}

Carousel.defaultProps = {
  // autoplay: true,
  list: [],
};

export default React.memo(Carousel);
