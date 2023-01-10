import React from "react";
import { SocialIcon } from 'react-social-icons';
import "./contact.css";
export const Contact = () => {
  return (
    <section className="contact">
      <div className="content">
        <h2>Contact Us</h2>
        <p>Can Contact anytime 24X7.</p>
      </div>
      <div className="container">
        <div className="contactInfo">
          <div className="box">
            <div className="icon"><SocialIcon url="https://googlemap.com" /></div>
            <div className="text">
              <h3>Address</h3>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          </div>

          <div className="box">
            <div className="icon"><SocialIcon url="https://email.com" /></div>
            <div className="text">
              <h3>Email</h3>
              <p>moviesonline@gmail.com</p>
            </div>
          </div>

          <div className="box">
            <div className="icon"><SocialIcon url="https://whatsapp.com" /></div>
            <div className="text">
              <h3>Phone</h3>
              <p>+91-1234567890</p>
            </div>
          </div>
          </div>

          <div className="contactForm">
            <form>
              <h2>Send Message</h2>
              <div className="inputBox">
                <input type="text" name="" required="required"/>
                <span>Full Name</span>
              </div>
              <div className="inputBox">
                <input type="text" name="" required="required"/>
                <span>Email</span>
              </div>
              <div className="inputBox">
                <textarea required="required"></textarea>
                <span>Type your Message...</span>
              </div>
              <div className="inputBox">
                <input type="submit" name="" value="Send"/>
                
              </div>
            </form>
          </div>
      </div>
    </section>
  );
};