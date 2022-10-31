import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Cart from '../cart/Cart';
import Firm from '../firms/Firm';
import Home from '../home/Home';
import Information from '../information/Information';
import Products from '../products/Product';
import './Navbar.scss';

const Navbar = () => {
    return (
        <Router>
            <div className="navbar">
                <div className="navbar__row">
                    <div className="navLogo">
                        <Link to='/'>
                            <h1 className="logo">Agro-Bozor</h1>
                        </Link>
                    </div>
                    <div className="navLocation">
                        <div className="location__row">
                            <i className="fa-solid fa-location-dot"></i>
                            <h3>Andijon</h3>
                        </div>
                    </div>
                    <div className="navSearch">
                        <div className="searchBox">
                            <form action="" className="searchBox__input">
                                <div>
                                    <i className="fa-solid fa-magnifying-glass"></i>
                                    <input type="search" placeholder="Mahsulot nomini kiriting" />
                                </div>
                                <button type="submit" className="searchBox__button">Qidirish</button>
                            </form>
                        </div>
                    </div>
                    <div className="navCart">
                        <div>
                            <Link to='/cart' className='navCart__row'>
                                <i className="fa-solid fa-cart-shopping"></i>
                                <p>Savat</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <nav>
                <ul className='nav__lists'>
                    <li>
                        <i className="fa-solid fa-right-to-bracket"></i>
                        <Link className='link_routs'>Kirish / Royx o'tish</Link>
                    </li>
                    <div className="hr"></div>
                    <li>
                        {/* <i className="fa-solid fa-memo-circle-info"></i> */}
                        <i class="fa-solid fa-circle-info"></i>
                        <Link className='link_routs' to='/information'>Ma'lumot</Link>
                    </li>
                    <li>
                        {/* <i className="fa-brands fa-product-hunt"></i> */}
                        <i className="fa-solid fa-apple-whole"></i>
                        <Link to='products' className='link_routs'>Mahsulotlar</Link>
                    </li>
                    <li>
                        {/* <i className="fa-solid fa-comment-question"></i> */}
                        <i class="fa-solid fa-list"></i>
                        <Link to='/firms' className='link_routs'>Firmalar</Link>
                    </li>
                </ul>
            </nav>

            <Routes>
              <Route path='/' element={ <Home /> } />
              <Route path='/cart' element={ <Cart /> } />
              <Route path='/products' element={ <Products /> } />
              <Route path='/information' element={ <Information /> } />
              <Route path='/firms' element={ <Firm /> } />
            </Routes>
        </Router>
    );
};


export default Navbar;