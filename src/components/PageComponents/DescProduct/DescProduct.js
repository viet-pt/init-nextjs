import React, { useEffect } from 'react';
import './style.scss';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'routers';
import CurrencyFormat from 'react-currency-format';

function DescProduct(props) {
  const { name, price, evaluation, heed, descriptions, usage, ingredients, expirydate, images } = props[0];

  useEffect(() => {
    const getAccordion = () => {
      var Accordion = document.getElementsByClassName("accordion");
      for (var i = 0; i < Accordion.length; i++) {
        Accordion[i].addEventListener("click", function () {
          this.classList.toggle("actives");
          var panel = this.nextElementSibling;
          if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
          } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
          }
        });
      }
    }
    getAccordion()
  }, [])

  const to_slug = (str) => {
    str = str.toLowerCase();
    str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, 'a');
    str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, 'e');
    str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, 'i');
    str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, 'o');
    str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, 'u');
    str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, 'y');
    str = str.replace(/(đ)/g, 'd');
    str = str.replace(/([^0-9a-z-\s])/g, '');
    str = str.replace(/(\s+)/g, '-');
    str = str.replace(/^-+/g, '');
    str = str.replace(/-+$/g, '');
    return str;
  }

  const showProduct = () => {
    let result = props[1].map((task, index) => {
      return <Link route={`/san-pham/${to_slug(task.name)}.${task.id}`} key={index}>
        <Col lg={3} md={3} sm={3} className="resp" key={index}>
          <div className="image-box is-trending has-discount">
            <div className="thumb">
              <div className="background-image">
                <img src={task.images[0]} className="" className="img-fluid d-block mx-auto" />
              </div>
              <div className="background-image thumb-img-first secondary-image" >
                <img src={task.images[1]} className="" className="img-fluid d-block mx-auto" />
              </div>
            </div>
            <div className="meta-inner">
              <div className="nameProduct"><h6>{task.name}</h6></div>
              <div className="formatProduct">
                <div>
                  <span className="price"><CurrencyFormat value={task.price} displayType={'text'} thousandSeparator={true} />  đ</span>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Link>
    })
    return result;
  }
  return (
    <React.Fragment>
      <div className="distant___"></div>
      <Container>
        <div className="title-wrap">
          <Link route="/"><a><span className="title-wrap-home">Home</span></a></Link>
          <Link route="/san-pham"><a><span className="title-wrap-nameproduct">Sản Phẩm </span></a></Link>
          <span className="title-wrap-nameProduct">{name}</span>
        </div>
        <div className="distant___"></div>
        <div>
          <Row>
            <Col lg={8} md={8} sm={8} xs={8} className="desc-pro-col">
              <Row>
                <Col lg={5} md={5} sm={5} xs={5} className="desc_Prod_1">
                  <div className="desc-img-1">
                    <img src={images[1]} alt="products_1" className="img-fluid" />
                  </div>
                  <div className="desc-img-2">
                    <img src={images[2]} alt="products_2" className="img-fluid" />
                  </div>
                </Col>
                <Col lg={7} md={7} sm={7} xs={7} className="desc_Prod_2">
                  <div className="desc-img-3">
                    <img src={images[0]} alt="products_3" className="img-fluid" />
                  </div>
                </Col>
              </Row>
              <Row>
                <Col lg={6} md={6} sm={6} xs={6} className="desc_Prod_3">
                  <div className="desc-img-4">
                    <img src={images[3]} alt="products_4" className="img-fluid" />
                  </div>
                </Col>
                <Col lg={6} md={6} sm={6} xs={6} className="desc_Prod_4">
                  <div className="desc-img-5">
                    <img src={images[4]} alt="products_5" className="img-fluid" />
                  </div>
                </Col>
              </Row>
            </Col>
            <Col lg={4} md={4} sm={4} xs={4} className="desc-pro-col">
              <div className="desc-product">
                <div className="title-desc-prod">
                  <h6>{name}</h6>
                  <span><CurrencyFormat value={price} displayType={'text'} thousandSeparator={true} />  đ</span>
                </div>
                <div className="title-infor-prod">
                  <p>{descriptions}</p>
                </div>
                <div className="accordion-prod">
                  <div>
                    <button className='accordion'>Thành phần</button>
                    <div className="panel">
                      <p>{ingredients}</p>
                    </div>
                  </div>
                  <div>
                    <button className='accordion'>cách sử dụng</button>
                    <div className="panel">
                      <p>{usage}</p>
                    </div>
                  </div>
                  <div>
                    <button className='accordion'>lưu ý</button>
                    <div className="panel">
                      <p>{heed}</p>
                    </div>
                  </div>
                  <div>
                    <button className='accordion'>hàm lượng & hạn sử dụng</button>
                    <div className="panel">
                      <p>{expirydate}</p>
                    </div>
                  </div>
                  <div>
                    <button className='accordion'>đánh giá của khách hàng</button>
                    <div className="panel">
                      <p>{evaluation}</p>
                    </div>
                  </div>
                  <div>
                    <button className='accordion'>HƯỚNG DẪN MUA HÀNG</button>
                    <div className="panel">
                      <p>Quý khách có thể mua sản phẩm ZeKang theo 3 phương thức sau:</p>
                      <p>1. Truy cập vào website <a href="/">http://zekang.com.vn</a> để tham khảo, lựa chọn sản phẩm cần mua và đặt hàng</p>
                      <p>2. Gọi điện trực tiếp đến chúng tôi thông qua số Hotline: 0977 552 086 hay số cố định 02436 401 123 để được tư vấn mua hàng</p>
                      <p>3. Liên hệ các đại lý phân phối gần nhất của chúng tôi để được tư vấn và đặt hàng. Tìm địa chỉ mua hàng gần nhất tại đây</p>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <div className="distant____"></div>
        <div>
          <span className="title-opg">các sản phẩm liên quan khác</span>
          <div className="distant___"></div>
          <Row>
            {
              showProduct()
            }
          </Row>
        </div>
      </Container>
      <div className="distant___"></div>
    </React.Fragment>
  );
}

export default React.memo(DescProduct);