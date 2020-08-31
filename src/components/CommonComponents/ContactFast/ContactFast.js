import React from 'react';
import './style.scss'
import { FacebookOutlined, YoutubeOutlined, PhoneOutlined } from '@ant-design/icons';
function ContactFast() {
    return (
        <React.Fragment>
            <div className="contact-Fact">
                <div className="contact-Fact-0">
                    <span><a href="https://www.facebook.com/ZekangVietNam/" target="_blank"><FacebookOutlined /></a></span>
                    <span><YoutubeOutlined /></span>
                    <span><a href="tel:0977552086"><PhoneOutlined /></a></span>
                </div>
            </div>
        </React.Fragment>
    );
}

export default React.memo(ContactFast);