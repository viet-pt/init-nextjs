import React, { useEffect, useState } from 'react';
import './style.scss';
import { InputSearch, Notification, OutsideClick } from 'components';
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH } from '@fortawesome/fontawesome-free-solid';
import { doLogout } from 'stores/reducer/userReducer';
import { Link } from 'routers';
import { i18n } from 'utils/i18nconfig';
import MenuHeader from './component/MenuHeader';

const Header = () => {
  const [openMenuMobile, setOpenMenuMobile] = useState(false);
  const [valueSearch, setValueSearch] = useState('');
  const [showMenu, setShowMenu] = useState(false);
  const [fixedHeader, setFixedHeader] = useState(false);

  const dispatch = useDispatch();
  const authorized = useSelector(state => state.authorizedReducer.authorized);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [fixedHeader]);

  const handleScroll = () => {
    const sticky = document.documentElement.scrollTop;
    if (sticky > 50) {
      setFixedHeader(true);
    } else if (fixedHeader && sticky === 0) {
      setFixedHeader(false);
    }
  }

  const handleSignOut = () => {
    sessionStorage.clear();
    dispatch(doLogout());
    Notification.success("Đăng xuất thành công");
  }

  const changeLanguage = (value) => {
    i18n.changeLanguage(value);
  }

  return (
    <div className={`header-wrapper ${fixedHeader ? 'sticky' : ''}`}>
      <OutsideClick onClickOutSide={() => setShowMenu(false)}>
        <>
          <div className={`container header ${openMenuMobile ? 'open-menu' : ''}`}>
            <Link route='/'>
              <a className="header__logo mr-lg-3"><img alt="home" src='/static/imgs/logo.png' /></a>
            </Link>

            <div className="header__group-btn">
              <InputSearch
                value={valueSearch}
                handleOnChange={(value) => setValueSearch(value)}
                placeholder="Từ khóa tìm kiếm"
              />
              <div className="header__cate"><Link route="/"><a>Miễn phí</a></Link></div>
              <div className="header__cate"><Link route="/dich-vu"><a>Livestream</a></Link></div>
              <div className="header__cate"><Link route="/lien-he"><a>Video</a></Link></div>
              <div className="header__cate">Chuyện 0h</div>
              <div className="header__cate">Share duyên</div>
              <FontAwesomeIcon
                icon={faEllipsisH} color="#000"
                onClick={() => setShowMenu(!showMenu)}
                size="lg"
              />
              <div className="d-lg-none btn-mobile">

              </div>
            </div>

            <div className="d-lg-none header__close-btn" onClick={() => setOpenMenuMobile(!openMenuMobile)}>
              <div />
            </div>
          </div>

          <div className={`header-menu-wrapper ${showMenu ? "show-menu-header" : ''}`}>
            <MenuHeader />
          </div>
        </>
      </OutsideClick>
    </div>
  );
};

export default React.memo(Header);
