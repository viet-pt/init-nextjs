import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.scss';
import { Link } from './../../../../routers';
function Footer(props) {
  return (
    <React.Fragment>
      <div className="footerBottom">
        <div className="footerBottom_imgRight"></div>
        <div className="footerBottom_imgLeft"></div>
        <Container>
          <div className="footerContent">
            <h4>ZEKANG</h4>
            <span>Hotline: (+84) 0977552086</span>
          </div>
          <div className="footerItem">
            <Row>
              <Col lg={4} md={4} sm={4} xs={4} >
                <div className="footerDres">
                  <span>Trụ sở: Chi nhánh khu phụ trách khu vực các tỉnh phía Bắc: Bắc Giang,Bắc Ninh, Thái Nguyên, Bắc Kạn, Hà Giang, Tuyen Quang, Cao Bằng.</span>
                </div>
              </Col>
              <Col lg={4} md={4} sm={4} xs={4} >
                <div className="footerDres">
                  <span>Văn phòng làm việc: Tầng 3, tòa Lotus Building, số 2 phố Duy Tân, phường Dịch Vọng Hậu, quận Cầu Giấy Hà Nội.</span>
                </div>
              </Col>
              <Col lg={4} md={4} sm={4} xs={4} >
                <div className="footerDres">
                  <span>Điện Thoại: (+84) 0977552086<br></br>- Fax: (+84) 02436403971 <br />E-mail: zekang@antgroup.com.vn</span>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
        <div className="footerMenu_">
          <Container>
            <Row>
              <Col lg={8} md={10} sm={9} sm={9} className="footer-main-nav">
                <nav id="footer-main-nav">
                  <ul id="footer-menu-primary-menu" className="footer-menu">
                    <li className="footer-menu-item footer-Item"><Link route="/"><a><span className="cool-link">Trang Chủ</span></a></Link></li>
                    <li className="footer-menu-item "><Link route="/gioi-thieu"><a><span className="cool-link">Giới Thiệu</span></a></Link></li>
                    <li className="footer-menu-item "><Link route="/san-pham"><a><span className="cool-link">Sản Phẩm</span></a></Link></li>
                    <li className="footer-menu-item "><Link route="/experopinion"><a><span className="cool-link">Ý Kiến Chuyên Gia</span></a></Link></li>
                    <li className="footer-menu-item "><Link route="/news"><a><span className="cool-link">Tin Tức</span></a></Link></li>
                    <li className="footer-menu-item "><Link route="/contact"><a><span className="cool-link">Liên Hệ</span></a></Link></li>
                  </ul>
                </nav>
              </Col>
              <Col lg={4} md={2} sm={3} sm={3}  >
                <div className="footerMess">
                  <img src="static/imgs/Mess.png" alt="" className="img-fluid " />
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <style jsx>{`
        .footerBottom_imgRight{
            background-image: url('/img/tree_1.png');
            width: 15%;
            height: 100%;
            right: 0;
            background-repeat: no-repeat;
            position: absolute;
            background-size: contain;
        }
        .footerBottom_imgLeft{
            background-image: url('/img/tree_2.png');
            width: 15%;
            height: 100%;
            left: 0;
            background-repeat: no-repeat;
            position: absolute;
            background-size: contain;
        }
      `}</style>
    </React.Fragment>
  );
}

export default React.memo(Footer);