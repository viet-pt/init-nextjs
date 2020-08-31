import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './style.scss'
import Moment from 'react-moment';
import { Link } from '../../../../routers';
function News(props) {
    const List = props[0]
    return (
        <React.Fragment>
            <div className="distant"></div>
            <div className="content-text news">
                <div>
                    <h6>tin tức & các thông tin liên quan</h6>
                </div>
                <div>
                    <span>Khi sử dụng sản phẩm của ZeKang</span>
                </div>
            </div>
            {
                List ?
                    <Container className="distant_">
                        <Row>
                            <Col lg={6} md={6} sm={6} xs={6} className="dest_0">
                                {
                                    List[0]
                                        ?
                                        <div className="dest_1">
                                            <img src={List[0].image} alt="" className="img-fluid" />
                                            <div className="overlay">
                                                <div className="overlayBottom">
                                                    <div className="date">
                                                        <span><Moment format="DD/MM/YYYY" date={List[0].createdAt} /></span>
                                                    </div>
                                                    <div className="text">
                                                        <span>{List[0].title}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        :
                                        <div> </div>
                                }
                                {
                                    List[1]
                                        ?
                                        <div className="dest_2">
                                            <img src={List[1].image} alt="" className="img-fluid" />
                                            <div className="overlay">
                                                <div className="overlayBottom">
                                                    <div className="date">
                                                        <span><Moment format="DD/MM/YYYY" date={List[1].createdAt} /></span>
                                                    </div>
                                                    <div className="text">
                                                        <span>{List[1].title}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        :
                                        <div> </div>
                                }
                            </Col>
                            <Col lg={6} md={6} sm={6} xs={6} className="dest_0">
                                {
                                    List[2]
                                        ?
                                        <div className="dest_3">
                                            <img src={List[2].image} alt="" className="img-fluid" />
                                            <div className="overlay">
                                                <div className="overlayBottom">
                                                    <div className="date">
                                                        <span><Moment format="DD/MM/YYYY" date={List[2].createdAt} /></span>
                                                    </div>
                                                    <div className="text">
                                                        <span>{List[2].title}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        :
                                        <div> </div>
                                }
                                {
                                    List[3]
                                        ?
                                        <div className="dest_4">
                                            <img src={List[3].image} alt="" className="img-fluid" />
                                            <div className="overlay">
                                                <div className="overlayBottom">
                                                    <div className="date">
                                                        <span><Moment format="DD/MM/YYYY" date={List[3].createdAt} /></span>
                                                    </div>
                                                    <div className="text">
                                                        <span>{List[3].title}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        :
                                        <div> </div>
                                }
                            </Col>

                        </Row>
                        <div className="showdes">
                            <Link route="/tin-tuc"><a> <button className="btn_new_1 btn_new_2">xem Thêm</button></a></Link>
                        </div>
                    </Container>

                    : <div></div>
            }
            <div className="distant"></div>
        </React.Fragment>
    );
}

export default News;