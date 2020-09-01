import React, { useState } from 'react';
import './style.scss'
import { Container, Row, Col } from 'react-bootstrap';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import { Formik } from 'formik';
import * as yup from 'yup';
import { Form, Input } from 'formik-antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { fetchSendQuestionContact } from 'api/question';
import { toast } from 'react-toastify';
// import Link from 'next/link';
import { Link } from './../../../../routers';

const { TextArea } = Input;

function Contact(props) {
  const [state, setState] = useState({
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
  })
  const lat = 16.333481;
  const lng = 107.748174
  const onMarkerClick = (props, marker, e) => {
    setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    })
  }

  return (
    <React.Fragment>
      <div className="distant___"></div>
      <Container>
        <div className="title-wrap-contact">
          <Link route="/"><a><span className="title-wrap-contact-0">Home</span></a></Link>
          <span className="title-wrap-contact-1">Liên hệ</span>
        </div>
        <div className="distant___"></div>
        <div className="form-contact-bast">
          <Row>
            <Col lg={12}>
              <div className="form-name-contact">
                <div className="form-name-contact-1">
                  <div className="form-contact-0">
                    <div className="form-contact">
                      <Formik
                        initialValues={{
                          Title: '',
                          usename: '',
                          Email: '',
                          address: '',
                          Message: ''
                        }}
                        onSubmit={async (values, { setSubmitting }) => {
                          const data = {
                            title: values.Title,
                            name: values.usename,
                            email: values.Email,
                            address: values.address,
                            message: values.Message
                          }
                          let resultFetch = await fetchSendQuestionContact(data);
                          if (resultFetch.status == 200 && resultFetch.data?.status == "success") {
                            toast.success("Gửi thành công");
                            values.Title = '',
                              values.usename = '';
                            values.address = '';
                            values.Email = '';
                            values.Message = '';
                          } else {
                            toast.error("Có Lỗi Xảy Ra Khi Gửi");
                          }
                        }}
                        validationSchema={
                          yup.object().shape({
                            Title: yup.string().required('Hãy nhập Tiêu đề.'),
                            usename: yup.string().required('Hãy nhập Họ tên.'),
                            Email: yup.string().required('Hãy nhập nhập Email.'),
                            address: yup.string().required('Hãy nhập Địa chỉ.'),
                            Message: yup.string().required('Hãy nhập Lời nhắn.'),
                          })
                        }
                      >
                        {({
                          values,
                          handleSubmit,
                          handleChange,
                          errors,
                          touched
                        }) => (
                            <Form onSubmit={handleSubmit}>
                              <div className="contact-title-0">
                                <div className="contact-title-1">
                                  <span>Tiêu đề</span>
                                  <Input
                                    name='Title'
                                    value={values.Title}
                                    onChange={handleChange}
                                    className="Title-question"
                                  />
                                  {
                                    errors.Title && touched.Title && (
                                      <span className="errors"><ExclamationCircleOutlined />&emsp;{errors.Title}</span>
                                    )
                                  }
                                </div>
                                <div className="contact-title-1">
                                  <span>Họ tên</span>
                                  <Input
                                    name='usename'
                                    value={values.usename}
                                    onChange={handleChange}
                                    className="Title-question"
                                  />
                                  {
                                    errors.usename && touched.usename && (
                                      <span className="errors"><ExclamationCircleOutlined />&emsp;{errors.usename}</span>
                                    )
                                  }
                                </div>
                              </div>
                              <div className="contact-title-0">
                                <div className="contact-title-1">
                                  <span>Địa chỉ</span>
                                  <Input
                                    name='address'
                                    value={values.address}
                                    onChange={handleChange}
                                    className="Title-question"
                                  />
                                  {
                                    errors.address && touched.address && (
                                      <span className="errors"><ExclamationCircleOutlined />&emsp;{errors.address}</span>
                                    )
                                  }
                                </div>
                                <div className="contact-title-1">
                                  <span>Email</span>
                                  <Input
                                    name='Email'
                                    value={values.Email}
                                    onChange={handleChange}
                                    className="Title-question"
                                  />
                                  {
                                    errors.Email && touched.Email && (
                                      <span className="errors"><ExclamationCircleOutlined />&emsp;{errors.Email}</span>
                                    )
                                  }
                                </div>
                              </div>
                              <div className="contact-title-0 contact-title-0-mission">
                                <div className="contact-title-2">
                                  <span>Lời nhắn</span>
                                  <TextArea rows={2}
                                    name="Message"
                                    value={values.Message}
                                    className="Title-question"
                                    id="mission"
                                  />
                                  {
                                    errors.Message && touched.Message && (
                                      <span className="errors"><ExclamationCircleOutlined />&emsp;{errors.Message}</span>
                                    )
                                  }
                                </div>
                              </div>
                              <div className="contact-submit submitForm">
                                <button type="submit">GỬI LỜI NHẮN</button>
                              </div>
                            </Form>
                          )}
                      </Formik>
                    </div>
                  </div>
                  <div className="contact-name">
                    <div className="contact-name-0">
                      <div>
                        <h6>Zekang Việt Nam</h6>
                      </div>
                      <div>
                        <span>Trụ sở chính</span>
                        <p>Tầng 3, Tòa nhà Lotus, Số 2 phố Duy Tân, phường Dịch Vọng Hậu, quận Cầu Giấy, Hà Nội</p>
                      </div>
                      <div>
                        <span>Tel</span>
                        <p>(+84) 0977552086</p>
                      </div>
                      <div>
                        <span>Email</span>
                        <p>info@antgroup.com.vn</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
      <div className="distant___"></div>
      <div style={{ height: '500px', width: '100%' }}>
        <Map
          google={props.google}
          initialCenter={{
            lat: lat,
            lng: lng
          }}
          zoom={15}
        >
          <Marker onClick={onMarkerClick}
            position={{ lat: lat, lng: lng }}
            name={'Hi'}
          />
          <InfoWindow
            marker={state.activeMarker}
            visible={state.showingInfoWindow}>
            <div>
              <h1>{state.selectedPlace.name}</h1>
            </div>
          </InfoWindow>
        </Map>
      </div>
    </React.Fragment>
  );
}
export default GoogleApiWrapper({
  apiKey: ('AIzaSyDnXwhhg8SfyNqOzPcFJvW3NywvXoRPRww')
})(React.memo(Contact));
