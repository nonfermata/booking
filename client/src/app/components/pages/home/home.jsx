import React from 'react';
import { Link } from 'react-router-dom';
import logoHome from '../../../assets/images/logo-home.png';
import titleImage from '../../../assets/images/title-image.png';
import classes from './home.module.css';

const Home = () => {
    return (
        <div className={classes.mainWrap}>
            <Link className={classes.titleImageWrap} to='/rooms'>
                <img
                    className={classes.image}
                    src={titleImage}
                    alt='Main image'
                />
            </Link>
            <Link className={classes.logoWrap} to='/rooms'>
                <img className={classes.image} src={logoHome} alt='Logo' />
            </Link>
            <h1 className={classes.slogan}>
                Лучшие предложения <span className='no_wrap'>для комфортного отдыха!</span>
            </h1>
        </div>
    );
};

export default Home;
