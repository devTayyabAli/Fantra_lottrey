import React from "react";

function Testimonial_data() {
  return (
    <div>
      <div className=" ">
        <div className="arrow"></div>
        <div className="client-review">
          <h5 className="top-text">Awesome Fantra!</h5>
          <div className="stars">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
          </div>
          <p className="bottom-text fw-500">
            “Ideas are easy. Implementation is hard.”
          </p>
          <div className="client-info">
            <h4 className="name">Flora Oliver</h4>
            <p className="date">Jan 1, 2021</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial_data;
