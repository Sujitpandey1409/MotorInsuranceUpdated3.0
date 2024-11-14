import React, { useState } from 'react';
import './Header.css'; // Assuming CSS will be applied separately.
import logo from '../assets/Logo.png';
import userProfile from '../assets/user_profile.png';
import { SlArrowDown } from "react-icons/sl";
import { FiMenu } from "react-icons/fi"; // Menu Icon
import { FaTimes } from "react-icons/fa"; // Close Icon for Drawer
import { BiHomeAlt } from "react-icons/bi";
import { IoChevronForward, IoCloseOutline } from "react-icons/io5";
import { TbClipboardText } from "react-icons/tb";
import { RiGroupLine } from "react-icons/ri";
import { MdClose, MdOutlineMiscellaneousServices } from "react-icons/md";
import { IoIosHelpCircleOutline } from 'react-icons/io';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="header">
            <div className="menu-icon" onClick={toggleMenu}>
                <FiMenu />
            </div>

            <div className="nav-logo">
                <img src={logo} alt="Finhaat Logo" />
            </div>

            <div className="user-profile">
                <div className="user-icon">
                    <img src={userProfile} alt="User Profile" />
                </div>
                <div className="user-info">
                    <div className="user-name">John Doe</div>
                    <div className="user-id">ID: 1234567</div>
                </div>
                <div className="dropdown-arrow">
                    <SlArrowDown />
                </div>
            </div>

            <div className={`mobile-drawer ${isMenuOpen ? 'open' : ''}`}>
                <div className="drawer-logo-container">
                    <div className="drawer-header">
                        <div className="nav-logo" style={{ position: 'static', background: 'transparent' }}>
                            <img src={logo} alt="Finhaat Logo" />
                        </div>
                        <div className="close-icon">
                            <MdClose onClick={toggleMenu} />
                        </div>
                    </div>
                </div>
                <nav className="drawer-menu">
                    <div className="drawer-links-icon-container">
                        <div className="d-flex gap-2 align-items-center">
                            <BiHomeAlt size={25} /><a href="/home">Home</a>
                        </div>
                        <IoChevronForward color='#007bff' />
                    </div>
                    <div className="drawer-links-icon-container">
                        <div className="d-flex gap-2 align-items-center">
                            <TbClipboardText size={25} /><a href="/home">My Policies</a>
                        </div>
                        <IoChevronForward color='#007bff' />
                    </div>
                    <div className="drawer-links-icon-container">
                        <div className="d-flex gap-2 align-items-center">
                            <RiGroupLine size={25} /><a href="/home">Leads Overview</a>
                        </div>
                        <IoChevronForward color='#007bff'/>
                    </div>
                    <div className="drawer-links-icon-container">
                        <div className="d-flex gap-2 align-items-center">
                            <MdOutlineMiscellaneousServices size={25} /><a href="/home">Other Services</a>
                        </div>
                        <IoChevronForward color='#007bff' />
                    </div>
                    <div className="drawer-links-icon-container">
                        <div className="d-flex gap-2 align-items-center">
                            <IoIosHelpCircleOutline size={25} /><a href="/home">Get Help</a>
                        </div>
                        <IoChevronForward color='#007bff' />
                    </div>
                </nav>
            </div>

            {isMenuOpen && <div className="drawer-overlay" onClick={toggleMenu}></div>}
        </header>
    );
};

export default Header;
