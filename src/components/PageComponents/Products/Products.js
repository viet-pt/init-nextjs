import React from 'react';
import { Container, Row } from 'react-bootstrap';
import CurrencyFormat from 'react-currency-format';
import { Link } from './../../../../routers';
import './style.scss';

function Products(props) {
  const { List } = props;
  const showProduct = () => {
    if (List) {
      let result = List.map((task, index) => {
        return <Link route={`/san-pham/${to_slug(task.name)}.${task.id}`} key={index}>
          <a className="resp col-lg-3 col-md-3 col-sm-3 pest">
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
                  <div>
                    <span className="star">{formatStar(task.start)}</span>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </Link>
      })
      return result;
    }
  }
  return (
    <React.Fragment>
      <div className="distant___"></div>
      <Container>
        <div className="title-wrap">
          <Link route="/"><a><span className="title-wrap-home">Home</span></a></Link>
          <span className="title-wrap-product">Sản Phẩm </span>
        </div>
        <Row className="product-show">
          {showProduct()}
        </Row>
      </Container>
      <div className="distant___"></div>
    </React.Fragment>
  );
}

export default React.memo(Products);