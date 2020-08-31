import React from 'react';
import MainHome from './MainHome/MainHome';
import ProductItem from './ProductItem/ProductItem';
import News from './News/News';
function Home(props) {
    return (
        <React.Fragment>
            <MainHome></MainHome>
            <ProductItem {...props}></ProductItem>
            <News {...props}></News>
        </React.Fragment>
    );
}
export default Home;