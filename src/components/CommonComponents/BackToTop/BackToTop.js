import React, { useState, useEffect } from "react";
import './style.scss';
import { UpOutlined } from '@ant-design/icons';
const BackToTop = () => {
    const [state, setState] = useState(false)
    const handleScroll = (e) => {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            setState(true)
        } else {
            setState(false)
        }
    }
    useEffect(() => {
        document.addEventListener("scroll", handleScroll);
        return () => {
            document.removeEventListener('scroll', handleScroll);
        }
    }, [state])
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
    return (
        <div onClick={() => scrollToTop()}>
            {state && (
                <div className="scroll-to-top">
                    <div  className="btn_scroll">
                        <UpOutlined />
                    </div>
                </div>
            )}
        </div>
    );
}
export default React.memo(BackToTop)