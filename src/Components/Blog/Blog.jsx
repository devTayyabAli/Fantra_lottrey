import React from 'react';
import blog1 from "../../Assets/images/blog1.jpg";
import blog2 from "../../Assets/images/blog2.jpg";
import blog3 from "../../Assets/images/blog3.jpg";
import blog4 from "../../Assets/images/blog4.jpg";
import post_by from "../../Assets/images/post_by.png";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from 'react-router-dom';



function Blog() {
  return (
    <div>
        <section class="breadcrumb-area">
        <div class="container">
            <div class="content">
                <h2 class="title">
                    Blog
                </h2>
                <ul class="breadcrumb-list extra-padding">
                    <li>
                    <Link to="/"><a href="">
                            Home
                        </a></Link>
                    </li>
                    <i class="fa fa-long-arrow-right lotterlo1"><HiArrowNarrowRight /></i>
                    <li>
                        <a href="#">Blog</a>
                    </li>
                </ul>
            </div>
        </div>
    </section>

    <section class="blog-page">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="single-blog">
                        <div class="img">
                            <img src={blog1} alt=""/>
                        </div>
                        <div class="content">
                            <h4 class="title">Winning The Lottery &amp;
                                What To Do When You Win </h4>
                            <ul class="meta-list">
                                <li>
                                    <div class="post-by">
                                        <img src="assets/images/post-by.png" alt=""/>
                                        By <a href="#">Admin</a>
                                    </div>
                                </li>
                                <li>
                                    <div class="date">
                                        30 Dec, 2020
                                    </div>
                                </li>
                            </ul>
                            <p class="text">
                                There are a lot of people that play the lottery, but not so many individuals that have
                                the ability to win the lotto.
                                Quite a few players have won many times,
                            </p>
                            <Link to="/Blog_details"><a href="" class="custom-button2">Read More</a></Link>
                        </div>
                    </div>
                    <div class="single-blog">
                        <div class="img">
                            <img src={blog2} alt=""/>
                        </div>
                        <div class="content">
                            <h4 class="title">Ten Mistakes Most Lottery
                                Players Make </h4>
                            <ul class="meta-list">
                                <li>
                                    <div class="post-by">
                                        <img src={post_by} alt=""/>
                                        By <a href="#">Admin</a>
                                    </div>
                                </li>
                                <li>
                                    <div class="date">
                                        30 Dec, 2020
                                    </div>
                                </li>
                            </ul>
                            <p class="text">
                                There are a lot of people that play the lottery, but not so many individuals that have
                                the ability to win the lotto.
                                Quite a few players have won many times,
                            </p>
                           <Link to="/Blog_details"> <a href="" class="custom-button2">Read More</a></Link>
                        </div>
                    </div>
                    <div class="single-blog">
                        <div class="img">
                            <img src={blog3} alt=""/>
                        </div>
                        <div class="content">
                            <h4 class="title">Winning Lottery Entails
                                Proper Game Selection</h4>
                            <ul class="meta-list">
                                <li>
                                    <div class="post-by">
                                        <img src={post_by} alt=""/>
                                        By <a href="#">Admin</a>
                                    </div>
                                </li>
                                <li>
                                    <div class="date">
                                        30 Dec, 2020
                                    </div>
                                </li>
                            </ul>
                            <p class="text">
                                There are a lot of people that play the lottery, but not so many individuals that have
                                the ability to win the lotto.
                                Quite a few players have won many times,
                            </p>
                            <Link to="/Blog_details"><a href="" class="custom-button2">Read More</a></Link>
                        </div>
                    </div>
                    <div class="single-blog">
                        <div class="img">
                            <img src={blog4} alt=""/>
                        </div>
                        <div class="content">
                            <h4 class="title">Assorted Ways to Play the
                                Mega Millions Lottery</h4>
                            <ul class="meta-list">
                                <li>
                                    <div class="post-by">
                                        <img src={post_by} alt=""/>
                                        By <a href="#">Admin</a>
                                    </div>
                                </li>
                                <li>
                                    <div class="date">
                                        30 Dec, 2020
                                    </div>
                                </li>
                            </ul>
                            <p class="text">
                                There are a lot of people that play the lottery, but not so many individuals that have
                                the ability to win the lotto.
                                Quite a few players have won many times,
                            </p>
                            <Link to="/Blog_details"><a href="" class="custom-button2">Read More</a></Link>
                        </div>
                    </div>
                </div>
                <div class="col-lg-12 text-center">
                    <ul class="pagination">
                        <li>
                            <i class="fa blogfaicn"><MdKeyboardArrowLeft /></i>
                        </li>
                        <li class="active">
                            01
                        </li>
                        <li>
                            02
                        </li>
                        <li>
                            03
                        </li>
                        <li>
                            04
                        </li>
                        <li>
                            <i class="fa blogfaicn"><MdOutlineKeyboardArrowRight /></i>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}

export default Blog