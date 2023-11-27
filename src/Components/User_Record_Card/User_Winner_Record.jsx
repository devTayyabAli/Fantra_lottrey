import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { loadWeb3 } from "../../apis/api";
import { Pagination } from "@mui/material";
import Web3 from "web3";

export default function User_Winner_Record() {
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

  const WebSupply = new Web3(
    "https://endpoints.omniatech.io/v1/bsc/testnet/public"
  );

  const getResult = async () => {
    try {
      let acc = await loadWeb3();

      let res = await axios.get(
        `https://winner.archiecoin.online/get_User_Record?userAddress=${acc}`
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

                                    <th scope="col">Reward</th>
                                    <th scope="col">Date</th>
                                  </tr>
                                </thead>

                                <tbody class="#tbbody">
                                  {currentTokens.map((items, ind) => {
                                    console.log("cardData", items);
                                    return (
                                      <>
                                        <tr key={items}>
                                          <th scope="row">{ind + 1}</th>
                                          <td>{items?.userAddress}</td>
                                          <td>{items?.card_Number} </td>
                                          <td>{items?.gameNumber} </td>

                                          <td>
                                            {WebSupply.utils.fromWei(
                                              items?.reward
                                            )}{" "}
                                            BUSD
                                          </td>
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
                </h2>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}
