import React from "react";
import about_counter_bg from "../../Assets/images/about_counter_bg.jpg";
import ac1 from "../../Assets/images/ac1.png";
import ac2 from "../../Assets/images/ac2.png";
import ac3 from "../../Assets/images/ac3.png";
import about_left from "../../Assets/images/about_left.png";
import map from "../../Assets/images/map.png";
import testi1 from "../../Assets/images/testi1.png";
import testi2 from "../../Assets/images/testi2.png";
import testi3 from "../../Assets/images/testi3.png";
import testi4 from "../../Assets/images/testi4.png";
import testi5 from "../../Assets/images/testi5.png";
import testi6 from "../../Assets/images/testi6.png";
import af1 from "../../Assets/images/af1.png";
import af2 from "../../Assets/images/af2.png";
import af3 from "../../Assets/images/af3.png";
import af4 from "../../Assets/images/af4.png";
import { HiArrowNarrowRight } from "react-icons/hi";
import "./About.css";
// import Button from 'react-bootstrap/Button';
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
// import Popover from 'react-bootstrap/Popover';
import { Button, Popover } from "antd";
import { Link } from "react-router-dom";
import Testimonial_data from "../Testimonial_data/Testimonial_data";
import Header from "../Header/Header";
import Web3 from "web3";
import { loteryContractAbi, loteryContractAddress } from "../../utilies/Bsc_contract";
import { useState } from "react";
import { useEffect } from "react";
const content = (
  <div>
    <p>Content</p>
    <p>Content</p>
  </div>
);

function About() {
  const [total_entries_all, settotal_entries_all] = useState(0)
  const [total_invested_amount, settotal_invested_amount] = useState(0)
  const [total_lottery_completed, settotal_lottery_completed] = useState(0)
  const [total_reward, settotal_reward] = useState()



  const webSupply = new Web3("https://bsc-testnet.public.blastapi.io");
  const lotter_all_data = async () => {
    try {
      // let acc = await loadWeb3();
      const web3 = window.web3;
      let loteryContractOf = new webSupply.eth.Contract(
        loteryContractAbi,
        loteryContractAddress
      );

    
        let total_entries_all = await loteryContractOf.methods
          .total_entries()
          .call();

        settotal_entries_all(total_entries_all);
        let total_invested_amount = await loteryContractOf.methods
          .total_invested_amount()
          .call();
        total_invested_amount = webSupply.utils.fromWei(total_invested_amount);
        settotal_invested_amount(total_invested_amount);
        let total_lottery_completed = await loteryContractOf.methods
          .total_lottery_completed()
          .call();
        settotal_lottery_completed(total_lottery_completed);
        let total_reward = await loteryContractOf.methods.total_reward().call();
        settotal_reward(parseInt(webSupply.utils.fromWei(total_reward)));
      
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    lotter_all_data()
  }, [])
  
  return (
    <div>
     

      <section className="breadcrumb-area">
        <div className="container">
          <div className="content">
            <h2 className="title">About Us</h2>
            <ul className="breadcrumb-list extra-padding">
              <li>
                <Link to="/">
                  <a href="">Home</a>
                </Link>
              </li>
              <i className="fa fa-long-arrow-right lotterlo1">
                <HiArrowNarrowRight />
              </i>
              <li>
                <a href="#">About Us</a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="about-counter">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="about-counter-image">
                <img src={about_counter_bg} alt="" />
              </div>
              <div className="counter-area">
                <div className="row justify-content-center">
                  <div className="col-lg-10">
                    <div className="counter-area-inner">
                      <div className="row">
                        <div className="col-lg-4">
                          <div className="c-box">
                            <img className="icon" src={ac1} alt="" />
                            <h3 className="number">{total_entries_all}</h3>
                            <p className="text">Total Entries</p>
                          </div>
                        </div>
                        <div className="col-lg-4">
                          <div className="c-box">
                            <img className="icon" src={ac2} alt="" />
                            <h3 className="number">{total_invested_amount} BUSD</h3>
                            <p className="text">Total Invested Amount</p>
                          </div>
                        </div>
                        <div className="col-lg-4">
                          <div className="c-box">
                            <img className="icon" src={ac3} alt="" />
                            <h3 className="number">{total_lottery_completed}</h3>
                            <p className="text">Total Lottery Completed</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-info">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="left-image">
                <img src={about_left} alt="" />
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <div className="right-content">
                <div className="section-header">
                  <h2 className="title">About us</h2>
                  <p>
                    At LuckyMe, we're on a mission to revolutionize the world of
                    lottery systems. Our team is made up of experienced
                    developers and entrepreneurs who are passionate about using
                    blockchain technology to create a fair and transparent
                    lottery experience.
                  </p>
                  <p>
                    We believe that everyone should have the opportunity to win
                    big, regardless of their background or financial status.
                    That's why we created LuckyMe, a decentralized blockchain
                    lottery system that's accessible to anyone with an internet
                    connection.
                  </p>
                  <p>
                    With our smart contract automation and instant reward
                    system, we're proud to offer a lottery experience that's
                    both fun and secure. And with our commitment to transparency
                    and fairness, you can trust that your chances of winning are
                    just as good as anyone else's.
                  </p>
                  <p>
                    Thank you for choosing LuckyMe as your lottery system of
                    choice. We look forward to bringing you the best possible
                    experience and helping you achieve your dreams of hitting it
                    big!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonial">
        <div className="about-feature">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6">
                <div className="a-f-box">
                  <img src={af1} alt="" />
                  <h4 className="title">100% Secure</h4>
                  <p className="text">
                    All transactions are protected by GeoTrust 128-bit SSL
                    security layer.
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="a-f-box">
                  <img src={af2} alt="" />
                  <h4 className="title">No Risk</h4>
                  <p className="text">
                    All transactions are protected by GeoTrust 128-bit SSL
                    security layer.
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="a-f-box">
                  <img src={af3} alt="" />
                  <h4 className="title">Support</h4>
                  <p className="text">
                    All transactions are protected by GeoTrust 128-bit SSL
                    security layer.
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="a-f-box">
                  <img src={af4} alt="" />
                  <h4 className="title">Spam-Free</h4>
                  <p className="text">
                    All transactions are protected by GeoTrust 128-bit SSL
                    security layer.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="about-testimonial">
                <img src={map} alt="" />

                <div className="client one cliieent_1">
                  <div className="img">
                    <img src={testi1} alt="" />
                  </div>
                  <Testimonial_data />
                </div>

                <div className="client two cliieent_1">
                  <div className="img">
                    <img src={testi2} alt="" />
                  </div>
                  <Testimonial_data />
                </div>
                <div className="client three cliieent_1">
                  <div className="img">
                    <img src={testi3} alt="" />
                  </div>
                  <Testimonial_data />
                </div>
                <div className="client four cliieent_1">
                  <div className="img">
                    <img src={testi4} alt="" />
                  </div>
                  <Testimonial_data />
                </div>
                <div className="client five cliieent_1">
                  <div className="img">
                    <img src={testi5} alt="" />
                  </div>
                  <Testimonial_data />
                </div>
                <div className="client six cliieent_1">
                  <div className="img">
                    <img src={testi6} alt="" />
                  </div>
                  <Testimonial_data />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
