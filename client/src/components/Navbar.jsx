import React from 'react'
// import ListGroup from 'react-bootstrap/ListGroup'
import Badge from 'react-bootstrap/Badge'
import 'boxicons'
import { Link } from 'react-router-dom';

import Nav from 'react-bootstrap/Nav'
import icon from '../images/cryptocurrency.png'

const Navbar = () => {
    return (
        <>
            <Nav >
                <div className="sidebar">
                    <div className="logo_content">
                        <div className="logo">
                        <box-icon color="white" type='logo' name='c-plus-plus' size="28px"></box-icon>
                        <div className="logo_name">CryptoIsLife</div>
                        </div>
                        <box-icon color="white" name='menu' id="btn" ></box-icon>
                    </div>
                    <ul className="nav-list list-unstyled">
                        <li className="search">

                            <box-icon color="white" name='search' className="search"></box-icon>
                            <input type="text" placeholder="Search..." />
                            <span className="tooltip">Search</span>
                        </li>
                        <li>
                            <Link to="/">
                                <box-icon color="white" name='grid-alt' animation="flashing-hover"></box-icon>
                                <span className="links_name">Dashboard</span>
                            </Link>
                            <span className="tooltip">Dashboard</span>
                        </li>
                        <li>
                            <Link to="/">
                                <box-icon color="white" name='user'></box-icon>
                                <span className="links_name">User</span>
                            </Link>
                            <span className="tooltip">User</span>
                        </li>
                        <li>
                            <Link to="/">
                                <box-icon color="white" name='chat'></box-icon>
                                <span className="links_name">Messages</span>
                            </Link>
                            <span className="tooltip">Messages</span>
                        </li>
                        <li>
                            <Link to="/">
                                <box-icon color="white" name='pie-chart-alt-2' ></box-icon>
                                <span className="links_name">Analytics</span>
                            </Link>
                            <span className="tooltip">Analytics</span>
                        </li>
                        <li>
                            <Link to="/">
                                <box-icon color="white" name='folder' ></box-icon>
                                <span className="links_name">File Manager</span>
                            </Link>
                            <span className="tooltip">Files</span>
                        </li>
                        <li>
                            <Link to="/">
                                <box-icon color="white" name='cart-alt' ></box-icon>
                                <span className="links_name">Order</span>
                            </Link>
                            <span className="tooltip">Order</span>
                        </li>
                        <li>
                            <Link to="/">
                                <box-icon color="white" name='heart' ></box-icon>
                                <span class="links_name">Saved</span>
                            </Link>
                            <span class="tooltip">Saved</span>
                        </li>
                        <li>
                            <Link to="/">
                                <box-icon color="white" name='cog' ></box-icon>
                                <span class="links_name">Setting</span>
                            </Link>
                            <span class="tooltip">Setting</span>
                        </li>
                        
                    </ul>
                    <div class="profile_content">
                            <div className="profile">
                            <div class="profile_details">
                                <img src={icon} alt="profileImg"/>
                                <div class ="name_job">
                                <div class ="name">Prem Shahi</div>
                                <div class ="job">Web designer</div>
                                </div>
                                </div>
                            </div>
                            <box-icon color="white" name='log-out' id="logout"></box-icon>
                        </div>
                </div>
            </Nav>
        </>
    )
}

export default Navbar
