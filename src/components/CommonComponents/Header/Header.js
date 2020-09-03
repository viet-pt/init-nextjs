import React, { useState, useEffect } from 'react';
import './Header.scss';
import { useRouter } from 'next/router';
import { Container, Row, Col } from 'react-bootstrap';
import { BsSearch, BsX } from "react-icons/bs"
import { AiOutlineMenu } from "react-icons/ai";
import ContactFast from '../ContactFast/ContactFast';
import BackToTop from '../BackToTop/BackToTop';
import { Link } from 'routers';
import { useDispatch, useSelector } from 'react-redux';
import { changeLocale } from 'stores/reducer/languageReducer';
import { FormattedMessage } from 'react-intl';

function Header() {
  const router = useRouter();
  const dispatch = useDispatch();

  const [header, setHeader] = useState(false)
  const [stateIcon, setstateIcon] = useState(false);

  const pathname = router.pathname;
  const state = pathname;
  const locale = useSelector(state => state.language.locale);

  useEffect(() => {
    const language = sessionStorage.getItem('language');
    if (language) {
      dispatch(changeLocale(language));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  const showMenu = (open) => {
    setstateIcon(!open)
  }

  const handleScroll = (e) => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      setHeader(true)
    } else {
      setHeader(false)
    }
  }

  const handleChange = value => {
    sessionStorage.setItem('language', value);
    dispatch(changeLocale(value));
  };

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    }
  }, [header])
  
  return (
    <div className={`${header ? 'headerScroll' : 'header'}`}>
      <style jsx>{`
            .active::after{
                content: url('/static/imgs/tree.png');
            }
            `}</style>
      <header id="site-header" className={`header_topBar ${header ? 'boxHeader' : ''}`}>
        <Container className="header-top">
          <Row className={`${header ? 'headerScroll' : 'header'}`}>
            <Col lg={3} md={3} sm={3} >
              <div id="site-logo" className="clearFix">
                <Link route="/"><img src="/static/imgs/logo.png" alt="cover" className={`img-fluid ${header ? 'headerScrollimg' : ''}`} /></Link>
              </div>
            </Col>
            <Col lg={9} md={9} sm={9}>
              <div className="wrap_nav">
                <nav id="main-nav" className="main-nav">
                  <ul id="menu-primary-menu" className="menu">
                    <li className={`menu-item ${state === '/introduces' ? 'active' : ''}`}>
                      <Link route="/gioi-thieu">
                        <a><span className="cool-link"><FormattedMessage id='IDS_PACK_DATA' /></span></a>
                      </Link>
                    </li>

                    <li className={`menu-item ${state === '/products' ? 'active' : ''}`}>
                      <Link route="/san-pham">
                        <a><span className="cool-link">Sản Phẩm</span></a>
                      </Link>
                    </li>

                    <li className={`menu-item ${state === '/experopinion' ? 'active' : ''}`}>
                      <Link route="/y-kien-chuyen-gia">
                        <a><span className="cool-link">Ý Kiến Chuyên Gia</span></a>
                      </Link>
                    </li>

                    <li className={`menu-item ${state === '/news' ? 'active' : ''}`}>
                      <Link route="/tin-tuc">
                        <a><span className="cool-link">Tin Tức</span></a>
                      </Link>
                    </li>

                    <li className={`menu-item ${state === '/contact' ? 'active' : ''}`}>
                      <Link route="/lien-he">
                        <a><span className="cool-link">Liên Hệ</span></a>
                      </Link>
                    </li>

                    <li>
                      {locale === 'vi' &&
                        <img alt="flag" src="/static/imgs/Flag_Vietnam.png" style={{width: '40px'}}
                          onClick={() => handleChange('en-US')} />
                      }
                      {locale === 'en-US' &&
                        <img alt="flag" src="/static/imgs/Flag_UK.png" style={{width: '40px'}}
                          onClick={() => handleChange('vi')} />
                      }
                    </li>
                  </ul>
                </nav>
              </div>
            </Col>
          </Row>
        </Container>
      </header>
      <ContactFast></ContactFast>
      <BackToTop></BackToTop>
      <header className="header-top_">
        <Container>
          <Row>
            <Col xs={4} className="DragHandle_Icon">
              <div className="DragHandleIcon">
                {stateIcon === false ? <AiOutlineMenu onClick={() => showMenu(stateIcon)}></AiOutlineMenu> : <BsX onClick={() => showMenu(stateIcon)}></BsX>}
              </div>
            </Col>
            <Col xs={4}>
              <div className="logoR">
                <img src="/static/imgs/logo.png" alt="cover" className="img-fluid d-block mx-auto" />
              </div>
            </Col>
            <Col xs={4}>
              <div className="iconR"> <BsSearch /></div>
            </Col>
          </Row>
        </Container>
        <div className={`sidenav ${stateIcon ? 'mySidenav' : 'closeSidenav'}`}>
          <nav className="navigation">
            <ul className="navR">
              <li className="navItem">
                <Link href="/" as="/">
                  <a><span>Trang Chủ</span></a>
                </Link>
              </li>
              <li className="navItem">
                <Link href="/introduces" as="/gioi-thieu">
                  <a> <span>Giới Thiệu</span></a>
                </Link>
              </li>
              <li className="navItem">
                <Link href="/products" as="/san-pham">
                  <a> <span>Sản Phẩm</span></a>
                </Link>
              </li>
              <li className="navItem">
                <Link href="/experopinion" as="/y-kien-chuyen-gia">
                  <a>  <span>Ý Kiến Chuyên Gia</span></a>
                </Link>
              </li>
              <li className="navItem">
                <Link href="/news" as="/tin-tuc">
                  <a>  <span>Tin Tức</span></a>
                </Link>
              </li>
              <li className="navItem">
                <Link href="/contact" as="/lien-he">
                  <a><span>Liên Hệ</span></a>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default React.memo(Header);