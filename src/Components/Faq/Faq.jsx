import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import Faq_accord from "../Faq_accord/Faq_accord";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
// import "./Faq.css";
import Header from "../Header/Header";

function Faq() {
  return (
    <div>
    
      <section class="breadcrumb-area">
        <div class="container">
          <div class="content">
            <h2 class="title">FAQ</h2>
            <ul class="breadcrumb-list extra-padding">
              <li>
                <Link to="/">
                  <a href="">Home</a>
                </Link>
              </li>

              <i class="fa fa-long-arrow-right lotterlo1">
                <HiArrowNarrowRight />
              </i>

              <li>
                <a href="#">FAQ</a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section class="faq">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="faq-box">
                <div class="section-header">
                  <h2 class="title ep">Asked Questions</h2>
                  <p class="text">
                    Do not hesitate to send us an email if you can't find what
                    you're looking for.
                  </p>
                </div>
                {/* <div class="row">
                  <div class="col-lg-4">
                    <div class="faq-menu">
                      <ul>
                        <li>
                          <a href="#aboutfaq" class="active">
                            <i class="fa fs-4 firsti">
                              <MdKeyboardArrowRight />
                            </i>{" "}
                            About Fantra
                          </a>
                        </li>
                        <li>
                          <a href="#bankingfaq">
                            <i class="fa fs-4 firsti">
                              <MdKeyboardArrowRight />
                            </i>{" "}
                            Banking
                          </a>
                        </li>
                        <li>
                          <a href="#winingfaq">
                            <i class="fa fs-4 firsti">
                              <MdKeyboardArrowRight />
                            </i>{" "}
                            Wining
                          </a>
                        </li>
                        <li>
                          <a href="#securityfaq">
                            <i class="fa fs-4 firsti">
                              <MdKeyboardArrowRight />
                            </i>{" "}
                            Security
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="col-lg-8">
                    <h4 class="title mb-5">About Fantra</h4>
                    <Faq_accord />

                    <div style={{ marginTop: "60px" }}>
                      <h4 class="title mb-5">Banking</h4>
                      <Faq_accord />
                    </div>

                    <div style={{ marginTop: "60px" }}>
                      <h4 class="title mb-5">Winning</h4>
                      <Faq_accord />
                    </div>

                    <div style={{ marginTop: "60px" }}>
                      <h4 class="title mb-5">Security</h4>
                      <Faq_accord />
                    </div>
                   
                  </div>
                </div> */}


                                    {/* according starts fro here  */}




                <div className="row justify-content-center">
                <div className="col-md-8">
                <Faq_accord/>
                </div>


                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Faq;
