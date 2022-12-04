import React from "react";
import "./InfoContainer.css";
import { MdEmail } from "react-icons/md";

export default function InfoContainer() {
    return (
        <div className="info-container">
            <div className="title-info">
                <h1>Bautista Garcia</h1>
                <p className="title-info-job">Full Stack Web Developer</p>
                <p>bautistagarcia.com</p>
            </div>
            <div className="contact-buttons">
                <button className="email-button" onClick={() => window.open('mailto:bautyroccogarcia@gmail.com', '_blank')}><MdEmail className="email-icon"/>Email</button>
            </div>
            <div className="main-info">
                <h2 className="main-info-header">About</h2>
                <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
                <h2 className="main-info-header">Interests</h2>
                <p>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
            </div>
        </div>
    )
}