import React from 'react';
import { HiArrowNarrowRight } from "react-icons/hi";
import { HiShare } from "react-icons/hi";
import { FaRegComments } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsPinterest } from "react-icons/bs";
import { BsGoogle } from "react-icons/bs";
import comment_1 from "../../Assets/images/comment_1.png";
import comment_2 from "../../Assets/images/comment_2.png";
import comment_3 from "../../Assets/images/comment_3.png";
import blog_avatar from "../../Assets/images/blog_avatar.png";
import blog_details from "../../Assets/images/blog_details.jpg";
import { Link } from 'react-router-dom';


function Blog_details() {
  return (
    <div>
        <section className="breadcrumb-area">
        <div className="container">
            <div className="content">
                <h2 className="title">
                    Blog Single
                </h2>
                <ul className="breadcrumb-list extra-padding">
                    <li>
                    <Link to="/"><a href="">
                            Home
                        </a></Link>
                    </li>
                    <i className="fa fa-long-arrow-right lotterlo1"><HiArrowNarrowRight /></i>
                    <li>
                        <a href="#">Blog Single</a>
                    </li>
                </ul>
            </div>
        </div>
    </section>

    <section className="blog-page">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-10">
                    <div className="post-details">
                        <div className="content">
                            <div className="top-area">
                                <p className="date">
                                    2 days ago <span>3 min read</span>
                                </p>
                                <h4 className="title">
                                    Win the Lottery Guaranteed
                                    Surefire Simple And Effective Tips
                                </h4>
                            </div>
                            <div className="main-content">
                                <div className="left">
                                    <div className="avatar">
                                        <img src={blog_avatar} alt=""/>
                                    </div>
                                    <ul className="meta-list">
                                        <li>
                                            <a href="#">
                                                <i className="fa fa-comments-o" style={{color: "#ec1379"}}><FaRegComments /></i>
                                            </a>
                                            <span>30</span>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fa" style={{color: "#ec1379"}}><HiShare /></i>
                                            </a>
                                            <span>22</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="right">
                                    <div className="post-content">
                                        <p>
                                            To win the lottery guaranteed, you need to have a plan, some strategies and
                                            most importantly, an implementation plan. So what are the simple and
                                            effective tips that can help you to win the lottery guaranteed?
                                        </p>
                                        <p>
                                            First, familiarize yourself with the rules of the lottery game which you are
                                            taking part in. This is the fundamental rule that everyone must know even
                                            before taking part in a game. However, most of the time, the players are not
                                            familiar or aware of how a system picks the winning lottery numbers. To win
                                            the lottery guaranteed, you must at least know how the game is played, their
                                            rules and how the winning numbers are selected.
                                        </p>
                                        <img src={blog_details} alt=""/>
                                        <p>
                                            While the above tips would enhance your chances of winning the lottery
                                            substantially, it takes more than the above to win the lottery guaranteed.
                                            Fortunately, with the advanced strategy in this modern age, there are
                                            lottery systems that you can rely on to enhance your winning chances up to
                                            98% or 9 out of 10 games.

                                        </p>
                                    </div>
                                    <div className="tags-area">
                                        <div className="tags">
                                            <span>
                                                Tags :
                                            </span>
                                            <div className="tags-item">
                                                <a href="#"> Tickets </a>
                                                <a href="#"> Coming Soon </a>
                                                <a href="#"> Movies </a>
                                            </div>
                                        </div>
                                        <ul className="social-icons">
                                            <li>
                                                <a href="#">
                                                    <i className="fa"><FaFacebookF /></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                  
                                                    <i className="fa "><BsTwitter /></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa "><BsInstagram /></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa "><BsPinterest /></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa "><BsGoogle /></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="blog-comment">
                        <h5 className="title">comments</h5>
                        <ul className="comment-area">
                            <li>
                                <div className="blog-thumb">
                                    <a href="#">
                                        <img src={comment_1} alt="blog"/>
                                    </a>
                                </div>
                                <div className="blog-thumb-info">
                                    <span>13 days ago</span>
                                    <h6 className="title"><a href="#">carl morgan</a></h6>
                                </div>
                                <div className="blog-content">
                                    <p>
                                        Maecenas at velit eu erat egestas vestibulum id ut tellus. Sed et semper mauris.
                                        Quisque eu lorem libero. Donec finibus metus tellus, eget rutrum est mattis non.
                                    </p>
                                </div>
                            </li>
                            <li>
                                <div className="blog-thumb">
                                    <a href="#">
                                        <img src={comment_2} alt="blog"/>
                                    </a>
                                </div>
                                <div className="blog-thumb-info">
                                    <span>13 days ago</span>
                                    <h6 className="title"><a href="#">john flores</a></h6>
                                </div>
                                <div className="blog-content">
                                    <p>
                                        Maecenas at velit eu erat egestas vestibulum id ut tellus. Sed et semper mauris.
                                        Quisque eu lorem libero. Donec finibus metus tellus, eget rutrum est mattis non.
                                    </p>
                                </div>
                            </li>
                            <li>
                                <div className="blog-thumb">
                                    <a href="#">
                                        <img src={comment_3} alt="blog"/>
                                    </a>
                                </div>
                                <div className="blog-thumb-info">
                                    <span>13 days ago</span>
                                    <h6 className="title"><a href="#">carl morgan</a></h6>
                                </div>
                                <div className="blog-content">
                                    <p>
                                        Maecenas at velit eu erat egestas vestibulum id ut tellus. Sed et semper mauris.
                                        Quisque eu lorem libero. Donec finibus metus tellus, eget rutrum est mattis non.
                                    </p>
                                </div>
                            </li>
                        </ul>
                        <div className="leave-comment">
                            <h5 className="title">leave comment</h5>
                            <form className="blog-form">
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Enter Your Full Name" required=""/>
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Enter Your Email Address" required=""/>
                                </div>
                                <div className="form-group">
                                    <textarea placeholder="Write A Message" className="form-control" required=""></textarea>
                                </div>
                                <div className="form-group">
                                    <button className="custom-button2" type="submit">Submit Now</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}

export default Blog_details