import React from "react";
import "./Footer.css";
import { FaTwitterSquare, FaInstagram, FaGithubSquare, FaLinkedin } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-icons">
                <FaTwitterSquare onClick={() => window.open('https://www.twitter.com', '_blank')}/>
                <FaInstagram onClick={() => window.open('https://www.instagram.com', '_blank')}/>
                <FaGithubSquare onClick={() => window.open('https://www.github.com/BautyGarcia', '_blank')}/>
                <FaLinkedin onClick={() => window.open('https://www.linkedin.com', '_blank')}/>
            </div>
        </footer>
    )
}
