import {FC} from "react";

import planetSVG from '../../assets/ph_globe-simple.svg'
import arrowSVG from '../../assets/icon-chevron-down.svg'
import cartSVG from '../../assets/icon-cart.svg'

import './Header.scss'

const Header = () => {
    return (
        <header className='header'>
            <div className='header__logo-wrapper'>
                <h6>Eco Food</h6>
                <span>Ukraine</span>
            </div>
            <nav className='header__navigation'>
                <ul>
                    <li>Крамниця</li>
                    <li>Про нас</li>
                    <li>Відгуки</li>
                    <li>Зв'язатися з нами</li>
                </ul>
            </nav>
            <div className='header__actions'>
                <div className='header__select'>
                    <img src={planetSVG} alt="Planet"/>
                    <span>Укр</span>
                    <img src={arrowSVG} alt="Arrow"/>
                </div>
                <img className='header__cart' src={cartSVG} alt="Arrow"/>
            </div>
        </header>
    )
}

export default Header;