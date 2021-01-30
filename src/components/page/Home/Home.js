import React, { useState } from 'react';
import './style.scss';
import { Carousel, KCSModal } from 'components';
import i18n from 'utils/i18n';

const LIST_SLIDE = [
  { img: '/static/imgs/banner1.jpg', title: "Callback function called after the current index changes" },
  { img: '/static/imgs/banner2.jpg', title: "Go to slide index, if dontAnimate=true, it happens without animation" },
];

const Home = () => {
  const [isOpenModal, setOpenModal] = useState(false);

  return (
    <div className="home-page container">
      <Carousel list={LIST_SLIDE} />
      <h3>{i18n.IDS_HELLO}</h3>

      <section className="home-page__intro">
        <h3 id="#intro" onClick={() => setOpenModal(true)}>Giới thiệu</h3>
        <h4>Chức năng, nhiệm vụ</h4>
        <div>
          <p>Cục An toàn thông tin là cơ quan trực thuộc Bộ Thông tin và Truyền thông thực hiện chức năng tham mưu, giúp Bộ trưởng quản lý nhà nước và tổ chức thực thi pháp luật về an toàn thông tin.</p>
          <p>Cục An toàn thông tin có tư cách pháp nhân, có con dấu và tài khoản để giao dịch theo quy định của pháp luật, có trụ sở chính đặt tại thành phố Hà Nội.</p>
        </div>
        <h4>Cơ cấu tổ chức</h4>
      </section>

      <div className="w-25">
        <KCSModal
          isOpenModal={isOpenModal}
          closeModal={() => setOpenModal(false)}
          title="Đăng ký thành công"
          content="Hệ thống sẽ phê duyệt thông tin của bạn trong vài giờ và sẽ gửi email cho bạn khi xác nhận thông tin của bạn thành công. Xin cảm ơn!"
        />
      </div>
    </div>
  );
}


export default React.memo(Home);
