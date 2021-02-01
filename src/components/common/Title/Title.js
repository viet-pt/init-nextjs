import React from 'react';
import './style.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/fontawesome-free-solid';
import { Link } from 'routers';

const Title = ({ text, link }) => {

  return (
    <div className="title-text">
      <div className="title-text__left">
        <p>{text}</p>
        <FontAwesomeIcon
          className="ml-3"
          icon={faChevronRight}
          color="#9b9b9b"
          size="lg"
        />

      </div>
      {link &&
        <Link route={link}><a>Xem thêm</a></Link>
      }
    </div>
  );
}

export default React.memo(Title);
