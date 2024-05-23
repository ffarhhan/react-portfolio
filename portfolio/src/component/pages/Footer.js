import React from 'react';
import '../css/Footer.css';
import Contact from "./Contact";
import JoinMe from "./JoinMe";

const Footer = () => {
    return (
        <footer>
            <p>&copy; 2024 Copyright</p>
            <JoinMe/>
            <Contact/>
        </footer>
    );
};

export default Footer;
