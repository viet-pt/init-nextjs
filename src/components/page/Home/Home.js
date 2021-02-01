import React, { useState } from 'react';
import './style.scss';
import { Carousel, Title } from 'components';

const LIST_SLIDE = [
  { img: '/static/imgs/banner1.png' },
];

const Home = () => {

  return (
    <div className="container">
      <div className="home-page">
        <Carousel list={LIST_SLIDE} />
        
        <section className="mt-4">
          <Title text="Xem miễn phí" link="/xem-mien-phi" />
        </section>
        
      </div>
    </div>
  );
}


export default React.memo(Home);
