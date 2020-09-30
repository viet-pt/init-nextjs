import React from 'react';
import './style.scss';
import { default as CarouselLib } from 'react-bootstrap/Carousel';

const Carousel = ({ list, hidePrevNextIcon, hideIndicator, customClass, customIndicator }) => {

  if (!list || !list.length) {
    return null;
  }

  return (
    <div className={`carousel-wrapper ${customClass || ''} 
      ${customIndicator ? 'custom-indicator' : ''} ${hideIndicator ? 'hide-indicator' : ''}`}>
      <CarouselLib controls={!hidePrevNextIcon}>
        {list.map((item, index) => (
          <CarouselLib.Item key={index} >
            <img
              className="d-block w-100"
              src={item.img}
              alt="img"
              title={item.title}
            />
            {item.title &&
              <CarouselLib.Caption>
                <h3 className="title-hover">
                  {item.title}
                </h3>
              </CarouselLib.Caption>
            }
          </CarouselLib.Item>
        ))}
      </CarouselLib>
    </div>
  )
}

export default React.memo(Carousel);
