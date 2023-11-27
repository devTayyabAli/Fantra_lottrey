import React, { useEffect, useState } from "react";
import Web3 from "web3";
import { loadWeb3 } from "../../apis/api";
import d1 from "../../Assets/images/d1.png";
import d2 from "../../Assets/images/d2.png";
import d3 from "../../Assets/images/d3.png";
import {
  loteryContractAbi,
  loteryContractAddress,
  loteryTokenAbi,
  loteryTokenAddress,
} from "../../utilies/Bsc_contract";
import x10 from "../../Assets/images/10x.png";
import x20 from "../../Assets/images/20x.png";
import x50 from "../../Assets/images/50x.png";
import x250 from "../../Assets/images/250x.png";
import x500 from "../../Assets/images/500x.png";
import x1000 from "../../Assets/images/1000x.png";
import x100 from "../../Assets/images/100x.png";
import x2500 from "../../Assets/images/2500x.png";
import x5000 from "../../Assets/images/5000x.png";
import x10000 from "../../Assets/images/10000x.png";
import x25000 from "../../Assets/images/25000x.png";
import x50000 from "../../Assets/images/50000x.png";
import x100000 from "../../Assets/images/100000x.png";
import x250000 from "../../Assets/images/250000.png";
import x500000 from "../../Assets/images/500000x.png";
import x1000000 from "../../Assets/images/1000000x.png";
import { Pagination } from "@mui/material";
import moment from "moment";
import axios from "axios";
function User_Record_Cards(data) {
  const [isOpen, setIsOpen] = useState(4);
  const [itemToBeShow, setitemToBeShow] = useState(4);

  const [cardData, setCardData] = useState([]);
  const [cardEndTime, setcardEndTime] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);
  const [gameWinnerDate, setgameWinnerDate] = useState([]);

  const setPageNumber = (event, value) => {
    // setPage(value);
    setCurrentPage(value);
  };

  const getResult = async () => {
    try {
      let acc = await loadWeb3();
      let res = await axios.get(
        `https://winner.archiecoin.online/get_User_Record_investor?userAddress=${acc}`
      );
      console.log("getResult", res.data.data);
      setCardData(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getResult();
  }, []);

  console.log("gameWinnerDate", gameWinnerDate);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentTokens = cardData.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <div>
      <ul>
        <li>
          <div class="result-list" id="top">
            <div class=" single-list" id="">
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingOne">
                  <button
                    class="accordion-button collapsed single-"
                    type="button"
                  >
                    <div class="light-area">
                      <div class="light-area-top">
                        <div class="right">
                          {/* <span>Draw took place on</span> */}
                          <h6>{/* {gameWinnerDate[index].Date} */}</h6>
                        </div>
                      </div>
                      <div class="">
                        <div class="row">
                          <div class="col-md-12">
                            <div class="tabun1">
                              <table class="table">
                                <thead>
                                  <tr>
                                    <th scope="col">SRN</th>

                                    <th scope="col">Recieving Address</th>
                                    <th scope="col">Card Number</th>
                                    <th>Entries</th>
                                    <th scope="col">Amount</th>
                                    <th scope="col">Date</th>

                                   
                                  </tr>
                                </thead>

                                <tbody class="#tbbody">
                                  {currentTokens.map((items, ind) => {
                                    console.log("cardData", items);
                                    return (
                                      <>
                                        <tr key={items}>
                                          <th scope="row">{ind+1}</th>
                                          <td>{items?.userAddress}</td>
                                          <td>{items?.card_Number} </td>
                                          <td>{items?.gameNumber} </td>
                                          <td>{items?.position} BUSD</td>
                                          <td>{items?.time} </td>

                                         

                                        </tr>
                                      </>
                                    );
                                  })}
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="container">
                        <div class="row">
                          <div class="col-md-12">
                            <div class="shbtn"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </button>
                  <div className="d-flex justify-content-center">
                    <Pagination
                      count={Math.ceil(cardData.length / postsPerPage)}
                      page={currentPage}
                      onChange={setPageNumber}
                    />
                  </div>

                  {/* <button
                    id="clickbtn"
                    class=" custom-buttonn4  mx-auto show-more-btn"
                    onClick={() =>
                      setitemToBeShow(
                        itemToBeShow == cardData.length ? "4" : cardData.length
                      )
                    }
                  >
                    {itemToBeShow !== cardData.length
                      ? "    Show more"
                      : "Show Less"}
                  </button> */}
                </h2>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default User_Record_Cards;
