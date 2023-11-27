import React from "react";

function Result_check() {
  return (
    <div>
        <section class="check-number">
        <img class="img-left" src="assets/images/check-num-left.png" alt=""/>
        <img class="img-right" src="assets/images/check-num-right.png" alt=""/>
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-9">
                    <div class="content">
                        <div class="section-header">
                            <h2 class="title">
                                Check your numbers
                            </h2>
                            <p class="text">
                                Are you holding on to a winning ticket? Here's an
                                easy way to find out.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row justify-content-center">
                <div class="col-lg-4 col-md-6">
                    <div class="check-box">
                        <h4 class="title">Enter Your Token Number</h4>
                        <div class="form-area input-round-wrapper">
                            <input type="text" class="input-round"/>
                            <input type="text" class="input-round"/>
                            <input type="text" class="input-round"/>
                            <input type="text" class="input-round"/>
                            <input type="text" class="input-round"/>
                            <input type="text" class="input-round"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
  );
}

export default Result_check;
