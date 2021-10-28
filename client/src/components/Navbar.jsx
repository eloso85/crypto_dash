import React, {useState} from 'react'
import { Link } from 'react-router-dom';

import Nav from 'react-bootstrap/Nav'
import icon from '../images/cryptocurrency.png'

const Navbar = () => {
    const [isActive, setActive] = useState("false")
    const [isColor, setColor] = useState([
    "white",
    "white",
    "white",
    "white",
    "white",
    "white",
    "white",
    "white",
    "white",
    "white"
])

    const colorChange = (index, value)=>{
        const newColors = [...isColor]
        newColors[index] = value;
        setColor(newColors)
    }
    //console.log(isColor[0])
    

    const handleToggle =()=>{
        setActive(!isActive);
    }
    return (
        <>
            <Nav >
                <div className={isActive ? "sidebar" : "sidebar active"}>
                    <div className="logo_content">
                        <div className="logo">
                            <box-icon color="white" type='logo' name='c-plus-plus' size="28px"></box-icon>
                            <div className="logo_name">CryptoIsLife</div>
                        </div>
                        <box-icon color="white"  name='menu' id="btn" onClick={handleToggle} ></box-icon>
                    </div>
                    <ul className="nav-list list-unstyled">
                        <li className="search">

                            <box-icon color={isColor[0]} name='search' className="search" onClick={handleToggle} onMouseEnter={()=>colorChange(0,"black")} onMouseLeave={()=>colorChange(0,"white")}></box-icon>
                            <input type="text" placeholder="Search..." />
                            <span className="tooltip">Search</span>
                        </li>
                        <li>
                            <Link to="/" >
                                <box-icon color={isColor[1]} onMouseEnter={()=>colorChange(1,"black")} onMouseLeave={()=>colorChange(1,"white")} name='grid-alt'></box-icon>
                                <span className="links_name">Dashboard</span>
                            </Link>
                            <span className="tooltip">Dashboard</span>
                        </li>
                        <li >
                            <Link to="/">
                                <box-icon color={isColor[2]} onMouseEnter={()=>colorChange(2,"black")} onMouseLeave={()=>colorChange(2,"white")} name='user'></box-icon>
                                <span className="links_name">User</span>
                            </Link>
                            <span className="tooltip">User</span>
                        </li>
                        <li>
                            <Link to="/">
                                <box-icon color={isColor[3]} onMouseEnter={()=>colorChange(3,"black")} onMouseLeave={()=>colorChange(3,"white")} name='chat'></box-icon>
                                <span className="links_name">Messages</span>
                            </Link>
                            <span className="tooltip">Messages</span>
                        </li>
                        <li>
                            <Link to="/cryptocurrencies">
                                <box-icon color={isColor[4]} onMouseEnter={()=>colorChange(4,"black")} onMouseLeave={()=>colorChange(4,"white")} name='coin' ></box-icon>
                                <span className="links_name">Currencies</span>
                            </Link>
                            <span className="tooltip">Currencies</span>
                        </li>
                        <li>
                            <Link to="/exchanges">
                                <box-icon color={isColor[5]} onMouseEnter={()=>colorChange(5,"black")} onMouseLeave={()=>colorChange(5,"white")} name='line-chart' ></box-icon>
                                <span className="links_name">Exchanges</span>
                            </Link>
                            <span className="tooltip">Exchanges</span>
                        </li>
                        <li>
                            <Link to="/news">
                                <box-icon color={isColor[7]} onMouseEnter={()=>colorChange(7,"black")} onMouseLeave={()=>colorChange(7,"white")} name='news' ></box-icon>
                                <span className="links_name">News</span>
                            </Link>
                            <span className="tooltip">News</span>
                        </li>
                        <li>
                            <Link to="/">
                                <box-icon color={isColor[8]} onMouseEnter={()=>colorChange(8,"black")} onMouseLeave={()=>colorChange(8,"white")} name='heart' ></box-icon>
                                <span className="links_name">Saved</span>
                            </Link>
                            <span className="tooltip">Saved</span>
                        </li>
                        <li>
                            <Link to="/">
                                <box-icon color={isColor[9]} onMouseEnter={()=>colorChange(9,"black")} onMouseLeave={()=>colorChange(9,"white")} name='cog' ></box-icon>
                                <span className="links_name">Setting</span>
                            </Link>
                            <span className="tooltip">Setting</span>
                        </li>

                    </ul>
                    <div className="profile_content">
                        <div className="profile">
                            <div className="profile_details">
                                <img src={icon} alt="profileImg" />
                                <div className="name_job">
                                    <div className="name">Prem Shahi</div>
                                    <div className="job">Web designer</div>
                                </div>
                            </div>
                            <box-icon id="log_out" color="white" name='log-out' ></box-icon>
                        </div>
                        
                    </div>
                </div>
            </Nav>
        </>
    )
}

export default Navbar
