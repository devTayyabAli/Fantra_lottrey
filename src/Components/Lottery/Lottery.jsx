import React, { useRef, useState } from "react";
import "./Lottery.css";
import clock from "../../Assets/images/clock.png";
import bt1 from "../../Assets/images/bt1.png";
import bt2 from "../../Assets/images/bt2.png";
import bt3 from "../../Assets/images/bt3.png";
import { HiPlus } from "react-icons/hi";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
// import "./styles.css";
import { Pagination } from "swiper";
import Lottery_slider from "../Lottery_slider/Lottery_slider";
import Pick_number from "../Pick_number/Pick_number";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";

function Lottery() {
  return (
    <div>
      <section className="breadcrumb-area">
        <img
          className="lottory"
          src="assets/images/lottery-b-icon.png"
          alt=""
        />
        <div className="container">
          <div className="content">
            <h2 className="title">POWERBALL</h2>
            <ul className="breadcrumb-list extra-padding">
              <li>
                <Link to="/"><a href="">Home</a></Link>
              </li>
              <i className="fa fa-long-arrow-right lotterlo1">< HiArrowNarrowRight/></i>
              <li>
                <a href="#">Powerball</a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="singlelottery">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="steps">
                <div className="left">
                  <h4>Only 3 easy steps</h4>
                </div>
                <div className="right">
                  <ul>
                    <li>
                      <div className="box">
                        <img src={bt1} alt="" />
                        <p>1. Pick</p>
                      </div>
                    </li>
                    <li>
                      <div className="box">
                        <img src={bt2} alt="" />
                        <p>2. Play</p>
                      </div>
                    </li>
                    <li>
                      <div className="box">
                        <img src={bt3} alt="" />
                        <p>3. Win</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="time-wrapper">
                <div className="time-counter">
                  <img src={clock} alt="" />
                  <p className="time-countdown">00 Days 00:00:00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pick-number-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-9">
                <div className="row justify-content-center">
                  <div className="col-lg-4 col-md-6">
                    <Pick_number />
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <Pick_number />
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <Pick_number />
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12 text-center">
                    <a href="#" className="add-ticket-btn">
                      <HiPlus className="fa fa-plus" /> Add Tickets
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="cart-summary">
                  <div className="top-area">
                    <h4 className="title">Cart Summary</h4>
                    <p className="text">
                      You've got 30% of chance to win. Shop more tickets to get
                      more chance
                    </p>
                  </div>
                  <div className="middle-area">
                    <div className="tikit">
                      <span className="left">Filled out Tickets</span>
                      <span className="right">3</span>
                    </div>
                    <div className="price">
                      <span className="left">
                        Ticket Price
                        <small>
                          (8 tickets <i className="fas fa-times"></i> $4.99)
                        </small>
                      </span>
                      <span className="right">$39.92</span>
                    </div>
                  </div>
                  <div className="bottom-area">
                    <div className="total-area">
                      <span className="left">Total</span>
                      <span className="right">$39.92</span>
                    </div>
                    <a href="#" className="custom-button2">
                      Buy Tickets
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="frequent-number">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-9">
                <div className="section-header">
                  <h2 className="title ep">Most Frequent Number</h2>
                  <p className="text">
                    Check Your lotto online, find all the lotto winning numbers
                    and see if you won the latest lotto jackpots
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12 apna_swiper">
                <Swiper
                  slidesPerView={1}
                  spaceBetween={10}
                  pagination={{
                    clickable: true,
                  }}
                  breakpoints={{
                    640: {
                      slidesPerView: 2,
                      spaceBetween: 20,
                    },
                    768: {
                      slidesPerView: 2,
                      spaceBetween: 20,
                    },
                    1024: {
                      slidesPerView: 3,
                      spaceBetween: 30,
                    },
                  }}
                  modules={[Pagination]}
                  className="mySwiper"
                >
                  <div className="number-slider owl-carousel">
                    <SwiperSlide>
                      <Lottery_slider />
                    </SwiperSlide>
                    <SwiperSlide>
                      <Lottery_slider />
                    </SwiperSlide>
                    <SwiperSlide>
                      <Lottery_slider />
                    </SwiperSlide>
                    <SwiperSlide>
                      <Lottery_slider />
                    </SwiperSlide>
                    <SwiperSlide>
                      <Lottery_slider />
                    </SwiperSlide>
                    <SwiperSlide>
                      <Lottery_slider />
                    </SwiperSlide>
                    <SwiperSlide>
                      <Lottery_slider />
                    </SwiperSlide>
                  </div>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Lottery;
