import React from 'react'
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
return (
    <div class='footer'>
        <div class='container'>
            <div class='row'>
                <div class='col-12 col-sm-12 col-md-4 col-lg-3 my-5'>
                    <h4 class='footer-h2'>CodeTech Learn</h4>
                    <p class='footer-p1'>Need to help for your dream Career? trust us. With CodeTech learn, Learn smatter than harder with us</p>
                    <hr class='footer-divider'/>
                            <FaInstagramSquare class='icon-instagram'/>
                            <FaLinkedin class='icon-linkedin'/>
                            <FaFacebook class='icon-facebook'/>
                </div>
                <div class='col-12 col-sm-12 col-md-4 col-lg-4 ms-5 my-5'>
                    <h4 class='pages-h2'>Pages</h4>
                    <p class='pages-p'>Home</p>
                    <p class='pages-p'>About us</p>
                    <p class='pages-p'>Courses</p>
                    <p class='pages-p'>Contact us</p>
                </div>
                <div class='col-12 col-sm-12 col-md-4 col-lg-4 my-5'>
                    <h4>Address</h4>
                    <p>Bangalore, Neelasandra, Ayyappa temple Block</p>
                    <p>Karnataka 560047</p>
                    <h4>Email</h4>
                    <p>learn@codetech.com</p>
                </div>
            </div>
        </div>
    </div> 
)
}

export default Footer