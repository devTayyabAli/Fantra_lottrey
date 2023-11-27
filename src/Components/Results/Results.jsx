import React from 'react';

import Result_check from '../Result_check/Result_check';
import result from "../../Assets/images/result.jpg";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import Result_card from '../Result_card/Result_card';



function Results() {
  return (
    <div>
    

        <section class="breadcrumb-area">
        <div class="container">
            <div class="content">
                <h2 class="title">
                    Results
                </h2>
                <ul class="breadcrumb-list extra-padding">
                    <li>
                    <Link to="/"><a href="">
                            Home
                        </a>
                        </Link>
                    </li>
                    <i class="fa fa-long-arrow-right lotterlo1 fs-5"><HiArrowNarrowRight /></i>
                    <li>
                        <a href="#">Results</a>
                    </li>
                </ul>
            </div>
        </div>
    </section>

    <section class="results">
        <div class="top-image">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="image">
                            <img src={result} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <div class="check-number result-page">
            <div class="container">
                <Result_check />
            </div>
        </div> */}
                       
        <div class="lottery-result result-page">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                    <div className="result-list">
                  <Result_card />
                </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}

export default Results