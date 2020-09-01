import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './style.scss'
function Introduce(props) {
    return (
        <React.Fragment>
            <style jsx>
                {
                    `.profZ span::after{
                        content: url('static/imgs/tree.png');
                        position: absolute;
                        top: -80%;
                        right: -10%;
                    }`
                }
            </style>
            <div className="distant__"></div>
            <Container>
                <Row>
                    <Col lg={6} md={6} sm={6} className="inf-img ing-img_ ing-img_1">
                        <div className="profZ">
                            <div>
                                <span>
                                    Giới thiệu chung về công ty
                                </span>
                            </div><br/>
                            <div className="profzDes">
                                <p>Kernel medical international Pte. Ltd được thành lập 1997, là một doanh nghiệp công nghệ cao có trên 23 năm kinh nghiệm trong lĩnh vực chăm sóc sức khỏe và phát triển thiết bị y tế.</p>
                                <p>Chúng tôi có đội ngũ nghiên cứu phát triển sản phẩm là các Tiến sĩ và Bác sĩ đầu ngành về da liễu, đã nghiên cứu và sáng tạo nghiêm túc về các sản phẩm da liễu. Bên cạnh đó, các sản phẩm được giám sát, theo dõi chất lượng nghiêm ngặt, khắt khe tại các tổ chức khoa học trong và ngoài nước.</p>
                                <p>Đây là sứ mệnh của Công ty để mang đến dịch vụ tốt nhất cho khách hàng và phân phối sản phẩm rộng khắp thế giới.</p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={6} md={6} sm={6} className="inf-img inf-img__0">
                        <div className="infAboutImg_">
                            <div className="infAboutImg">
                                <img src="static/imgs/inf.png" alt="inf" className="img-fluid dir" />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <div className="distant_ distant__"></div>
            <Container>
                <Row>
                    <Col lg={6} md={6} sm={6} className="inf-img inf-img-0 inf-img_1">
                        <div className="infAboutImg_">
                            <div className="infAboutImg">
                                <img src="static/imgs/inf_1.png" alt="inf" className="img-fluid " />
                            </div>
                        </div>
                    </Col>
                    <Col lg={6} md={6} sm={6} className="inf-img inf-img-0 inf-img-1 ">
                        <div className="profZ">
                            <div>
                                <span>
                                    Giới thiệu chung về sản phẩm
                            </span>
                            </div><br/>
                            <div className="profzDes">
                                <p>Zekang ra đời là bước ngoặt lớn đối với sản phẩm hỗ trợ điều trị vẩy nến</p>
                                <p>Sản phẩm được điều chế từ nguồn nguyên liệu sạch, hoàn toàn có nguồn gốc thảo mộc tự nhiên. Zekang đã đạt doanh số hàng năm hơn 2 triệu sản phẩm và được yêu thích nhất tại Singapore, Trung Quốc…</p>
                                <p>Việc Hợp Tác với giáo sư Zhang Xuejun, là một người thầy thuốc nổi tiếng về bệnh vẩy nến đã mang lại uy tín rộng rãi và tạo tiếng vang lớn cho chúng tôi trong ngành da liễu</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <div className="distant__"></div>
        </React.Fragment>
    );
}

export default React.memo(Introduce);