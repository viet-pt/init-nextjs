import React from 'react';
import './style.scss';
import { Carousel } from 'components';

const LIST_SLIDE = [
  { img: '/static/imgs/banner1.jpg' },
  { img: '/static/imgs/banner2.jpg' },
];

const Home = () => {

  return (
    <div className="home-page container">
      <Carousel list={LIST_SLIDE} />

      <section className="home-page__intro">
        <h3 id="#intro">Giới thiệu</h3>
        <h4>Chức năng, nhiệm vụ</h4>
        <div>
          <p>Cục An toàn thông tin là cơ quan trực thuộc Bộ Thông tin và Truyền thông thực hiện chức năng tham mưu, giúp Bộ trưởng quản lý nhà nước và tổ chức thực thi pháp luật về an toàn thông tin.</p>
          <p>Cục An toàn thông tin có tư cách pháp nhân, có con dấu và tài khoản để giao dịch theo quy định của pháp luật, có trụ sở chính đặt tại thành phố Hà Nội.</p>
        </div>
        <h4>Cơ cấu tổ chức</h4>
      </section>
    </div>
  );
}


export default React.memo(Home);
