import React from 'react';
import { SocialIcon } from 'react-social-icons';
import "./footer.css";

export const Footer = () => {
  return (
    <footer className="footer">
        <div className="container">
            <div className="row">
           
                <div className="footer-col">
                    <h4>Get Help</h4>
                    <ul>
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">Subscription</a></li>
                        <li><a href="#">Watch online</a></li>
                        <li><a href="#">Download</a></li>
                        <li><a href="#">Get Premium</a></li>
                    </ul>
                </div>

                <div className="footer-col">
                    <h4>Movies and Series</h4>
                    <ul>
                        <li><a href="#">Animated</a></li>
                        <li><a href="#">Action</a></li>
                        <li><a href="#">Adventure</a></li>
                        <li><a href="#">Suspense Thriller</a></li>
                    </ul>
                </div>

                <div className="footer-col">
                    <h4>Terms & Policies</h4>

                    <ul>
                        <li><a href="#">Policies</a></li>
                        <li><a href="#">Terms of Use</a></li>
                        <li><a href="#">Code of Conduct</a></li>
                        <li><a href="#">Privacy</a></li>
                    </ul>
                </div>

                <div className="footer-col">
                    <h4>Follow Us</h4>
                    <div className="social-links">
                        <li><a href="#"><SocialIcon url="https://twitter.com" /></a></li>
                        <li><a href="#"><SocialIcon url="https://facebook.com/" /></a></li>
                        <li><a href="#"><SocialIcon url="https://instagram.com/" /></a></li>
                        <li><a href="#"><SocialIcon url="https://linkedin.com/" /></a></li>
                    </div>
                </div>

                

            </div>
        </div>
    </footer>
  )
}



