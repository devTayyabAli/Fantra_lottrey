import React from 'react';
import { HiArrowNarrowRight } from "react-icons/hi";
import { MdKeyboardArrowRight } from "react-icons/md";
import picon from "../../Assets/images/picon.png";
import eicom from "../../Assets/images/eicom.png";
import contact_b_icon from "../../Assets/images/contact_b_icon.png";
import { Link } from 'react-router-dom';


function Contact() {
  return (
    <div>
        <section class="breadcrumb-area">
        <img class="contact w-25" src={contact_b_icon} alt=""/>
        <div class="container">
            <div class="content">
                <h2 class="title">
                    Contact
                </h2>
                <ul class="breadcrumb-list extra-padding">
                    <li>
                    <Link to="/"><a href="">
                            Home
                        </a></Link>
                    </li>
                    <i class="fa fa-long-arrow-right lotterlo1"><HiArrowNarrowRight /></i>
                    <li>
                        <a href="#">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    </section>

    <section class="contact">
        <div class="container">
            <div class="row justify-content-around">
                <div class="col-lg-7">
                    <div class="contact-box">
                        <h4 class="title">
                            Get In Touch
                        </h4>
                        <form action="#">
                            <div class="form-group">
                                <label>Your Name</label>
                                <input type="text" placeholder="Enter Your Name"/>
                            </div>
                            <div class="form-group">
                                <label>Your Email</label>
                                <input type="email" placeholder="Enter Your Email "/>
                            </div>
                            <div class="form-group last">
                                <label>Your Message</label>
                                <textarea placeholder="Enter Your Message"></textarea>
                            </div>
                            <div class="custom-control custom-checkbox">
                                <input type="checkbox" class="custom-control-input" id="customCheck1"/>
                                <label class="custom-control-label" for="customCheck1">I agree to receive emails,
                                    newsletters and promotional messages</label>
                            </div>
                            <button type="submit" class="custom-button1">Send Message</button>
                        </form>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="right-area">
                        <div class="faq-block">
                            <h4 class="title">Have questions?</h4>
                            <p>
                                If you have any questions or queries,
                                our helpful support team will be
                                more than happy to assist you.
                            </p>
                            <a href="#">
                                Read F.A.Q <i class="fa fs-4"><MdKeyboardArrowRight /></i>
                            </a>
                        </div>
                        <div class="contact-info">
                            <div class="single-info">
                                <img src={eicom} alt=""/>
                                <div class="content">
                                    <h4>Email Us</h4>
                                    <p><a href="/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="b6dfd8d0d9f6f0d7d8c2c4d798d5d9db">[email&nbsp;protected]</a></p>
                                </div>
                            </div>
                            <div class="single-info">
                                <img src={picon} alt=""/>
                                <div class="content">
                                    <h4>Call Us</h4>
                                    <p>+1 (987) 435-32-11</p>
                                    <p>+1 (987) 453-31-11</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}

export default Contact