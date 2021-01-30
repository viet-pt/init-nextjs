import React, { useEffect, useState } from 'react';
import './style.scss';
import { InputSearch, Notification } from 'components';
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faChevronDown, faChevronUp } from '@fortawesome/fontawesome-free-solid';
import { doLogout } from 'stores/reducer/userReducer';
import { Link } from 'routers';
import { i18n } from 'utils/i18nconfig';

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [valueSearch, setValueSearch] = useState('');
  const [showMenu, setShowMenu] = useState(false);

  const dispatch = useDispatch();
  const authorized = useSelector(state => state.authorizedReducer.authorized);

  const handleSignOut = () => {
    sessionStorage.clear();
    dispatch(doLogout());
    Notification.success("Đăng xuất thành công");
  }

  const changeLanguage = (value) => {
    i18n.changeLanguage(value);
  }

  return (
    <>
      <div className="header-wrapper-top">
        <div className="container header-top">
          <div className="header-top__left">
            <span onClick={() => changeLanguage("en")}>EN</span> - 
            <span onClick={() => changeLanguage("vi")}>VI</span>
          </div>

          <div className="header-top__right">
            <div className="mr-3">
              <InputSearch
                value={valueSearch}
                handleOnChange={(value) => setValueSearch(value)}
              />
            </div>
            {authorized &&
              <div className="header-top__user">
                <span>Phan Thanh Việt</span>
                <FontAwesomeIcon
                  color="#fff"
                  icon={faUserCircle}
                  size="lg"
                  className="ml-3"
                />
                <ul>
                  <li><Link route="/ho-so"><a>Hồ sơ</a></Link></li>
                  <li><Link route="/info"><a>Thông tin cá nhân</a></Link></li>
                  <li><Link route="/danh-sach-phuong-tien"><a>Danh sách phương tiện</a></Link></li>
                  <li><Link route="/quan-ly-don-hang"><a>Quản lý đơn hàng</a></Link></li>
                  <li><Link route="/lich-su-dau-gia"><a>Lịch sử đấu giá</a></Link></li>
                  <li onClick={handleSignOut}>Đăng xuất</li>
                </ul>
              </div>
            }
            {!authorized &&
              <>
                <Link route="/dang-nhap"><a className="btn-log mr-1">Đăng nhập</a></Link>/
              <Link route="/dang-ky"><a className="btn-log ml-1">Đăng ký</a></Link>
              </>
            }
          </div>
        </div>
      </div>

      <div className="header-wrapper">
        <div className={`container header ${openMenu ? 'open-menu' : ''}`}>
          <Link route='/'>
            <a className="header__logo mr-lg-3"><img alt="home" src='/static/imgs/logo.png' /></a>
          </Link>

          <div className="header__group-btn">
            <div className="d-lg-none input-search--mobile">
              <InputSearch
                value={valueSearch}
                handleOnChange={(value) => setValueSearch(value)}
              />
            </div>
            <div className="header__cate btn-res"><Link route="/"><a>Trang chủ</a></Link></div>
            <div className="header__cate btn-res"><Link route="/dich-vu"><a>Dịch vụ</a></Link></div>
            <div className="header__cate btn-res"><Link route="/lien-he"><a>Liên hệ</a></Link></div>
            <div className="header__check-btn btn-res">Đăng kí kiểm tra xe</div>
            <div className="header__check-btn btn-res">Mua xe kiểm tra</div>
            <div className="header__sale-btn btn-res">
              <Link route="/ban-xe"><a>BÁN XE</a></Link>
            </div>
            <div className="d-lg-none btn-mobile">
              {authorized &&
                <div className="header-top__use-mobile">
                  <div className="display-sb">
                    <span>Phan Thanh Việt</span>
                    <FontAwesomeIcon
                      color="#ED1B26"
                      icon={showMenu ? faChevronUp : faChevronDown}
                      size="lg"
                      className="ml-3"
                      onClick={() => setShowMenu(!showMenu)}
                    />
                  </div>
                  {showMenu &&
                    <ul>
                      <li><Link route="/ho-so"><a>Hồ sơ</a></Link></li>
                      <li><Link route="/info"><a>Thông tin cá nhân</a></Link></li>
                      <li><Link route="/danh-sach-phuong-tien"><a>Danh sách phương tiện</a></Link></li>
                      <li><Link route="/quan-ly-don-hang"><a>Quản lý đơn hàng</a></Link></li>
                      <li><Link route="/lich-su-dau-gia"><a>Lịch sử đấu giá</a></Link></li>
                      <li onClick={handleSignOut}>Đăng xuất</li>
                    </ul>
                  }
                </div>
              }
              {!authorized &&
                <>
                  <button><Link route="/dang-nhap"><a className="btn-log mr-1">Đăng nhập</a></Link></button>
                  <button><Link route="/dang-ky"><a className="btn-log ml-1">Đăng ký</a></Link></button>
                </>
              }
            </div>
          </div>

          <div className="d-lg-none header__close-btn" onClick={() => setOpenMenu(!openMenu)}>
            <div />
          </div>
        </div>
      </div>
    </>
  );
};

export default React.memo(Header);
