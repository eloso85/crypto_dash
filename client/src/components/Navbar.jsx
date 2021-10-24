import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
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
                        <li>

                            <box-icon color="white" name='search' ></box-icon>
                            <input type="text" placeholder="Search..." />
                            <span className="tooltip">Search</span>
                        </li>
                        <li>
                            <a href="#">
                                <box-icon color="white" name='grid-alt'></box-icon>
                                <span className="links_name">Dashboard</span>
                            </a>
                            <span className="tooltip">Dashboard</span>
                        </li>
                        <li>
                            <a href="#">
                                <box-icon color="white" name='user'></box-icon>
                                <span className="links_name">User</span>
                            </a>
                            <span className="tooltip">User</span>
                        </li>
                        <li>
                            <a href="#">
                                <box-icon color="white" name='chat'></box-icon>
                                <span className="links_name">Messages</span>
                            </a>
                            <span className="tooltip">Messages</span>
                        </li>
                        <li>
                            <a href="#">
                                <box-icon color="white" name='pie-chart-alt-2' ></box-icon>
                                <span className="links_name">Analytics</span>
                            </a>
                            <span className="tooltip">Analytics</span>
                        </li>
                        <li>
                            <a href="#">
                                <box-icon color="white" name='folder' ></box-icon>
                                <span className="links_name">File Manager</span>
                            </a>
                            <span className="tooltip">Files</span>
                        </li>
                        <li>
                            <a href="#">
                                <box-icon color="white" name='cart-alt' ></box-icon>
                                <span className="links_name">Order</span>
                            </a>
                            <span className="tooltip">Order</span>
                        </li>
                        <li>
                            <a href="#">
                                <box-icon color="white" name='heart' ></box-icon>
                                <span class="links_name">Saved</span>
                            </a>
                            <span class="tooltip">Saved</span>
                        </li>
                        <li>
                            <a href="#">
                                <box-icon color="white" name='cog' ></box-icon>
                                <span class="links_name">Setting</span>
                            </a>
                            <span class="tooltip">Setting</span>
                        </li>
                        <li class="profile">
                            <div class="profile-details">
                                {/* <img src="profile.jpg" alt="profileImg"/> */}
                                <div class ="name_job">
                                <div class ="name">Prem Shahi</div>
                                <div class ="job">Web designer</div>
                                </div>
                            </div>
                            <box-icon color="white" name='log-out' id="logout"></box-icon>
                        </li>
                    </ul>
                </div>
            </Nav>
        </>
    )
}

export default Navbar
