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
function Result_card(data) {
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
      const webSupply = new Web3(
        "https://data-seed-prebsc-1-s1.binance.org:8545"
      );
      const web3 = window.web3;
      let loteryContractOf = new webSupply.eth.Contract(
        loteryContractAbi,
        loteryContractAddress
      );

      let array2 = [];
      let array3 = [];

      for (let i = 1; i < 17; i++) {
        let result = await loteryContractOf.methods
          .show_latest_winners(i)
          .call();
        let arr = [];

        let WinnerDate = result[2];
        let dateObj = {
          Date:
            WinnerDate == 0
              ? "Days Month,Year"
              : moment(WinnerDate * 1000).format("dddd MMMM DD,YYYY"),
        };
        array3.push(dateObj);
        setgameWinnerDate([...array3]);

        for (let index = 0; index < result[0].length; index++) {
          const address = result[0][index];
          let amount = result[1][index];
          // setgameWinnerDate(moment(WinnerDate* 1000).format("dddd MMMM DD,YYYY"))
          amount = web3.utils.fromWei(amount.toString());
          let obj = {
            address: address,
            amount: parseInt(amount),
          };
          arr.push(obj);
        }
        // array3=[...array3,arr2]
        array2 = [...array2, arr];
      }

      setCardData([...array2]);
    } catch (error) {
      console.log("Error While Get Lottery Result", error);
    }
  };

  const getTime = async () => {
    try {
      
      const webSupply = new Web3(
        "https://data-seed-prebsc-1-s1.binance.org:8545"
      );
      const web3 = window.web3;
      let loteryContractOf = new webSupply.eth.Contract(
        loteryContractAbi,
        loteryContractAddress
      );
      let arr = [];
      for (let i = 1; i < 17; i++) {
        let cardInfo = await loteryContractOf.methods.fin(i).call();
        // console.log("cardInfo", cardInfo);

        let obj = {
          receivedEntry: cardInfo.received_entry,
          winner: cardInfo.winners,
          time: cardInfo.time,
          cardTitle: cardInfo.name,
          totalEntry: cardInfo.total_entry,
          currenttime: cardInfo.currenttime,
        };

        // console.log("playerEntry", obj);

        arr.push(obj);
        setcardEndTime([...arr]);
      }
    } catch (e) {}
  };

  useEffect(() => {
    getResult();
    getTime();
   
  }, []);



  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentTokens = cardData.slice(indexOfFirstPost, indexOfLastPost);

  console.log("cardData",cardData);

  return (
    <div>
      {cardData.slice(0, isOpen).map((item, index) => {
       
        return (
          <>
            <ul>
              <li>
                <div class="result-list" id="top">
                  <div class=" single-list" id="">
                    <div class="accordion-item">
                      <h2 class="accordion-header1" id="headingOne">
                        <button
                          class="accordion-button collapsed single-"
                          type="button"
                        >
                          <div class="light-area">
                            <div class="light-area-top">
                              <div class="left">
                                {/* <img src={d1} alt="" /> */}
                                {index == 0 ? (
                                  <>
                                    {" "}
                                    <div className="icon">
                                      <img src={x10} alt="" />
                                    </div>
                                  </>
                                ) : index == 1 ? (
                                  <>
                                    {" "}
                                    <div className="icon">
                                      <img src={x20} alt="" />
                                    </div>
                                  </>
                                ) : index == 2 ? (
                                  <>
                                    {" "}
                                    <div className="icon">
                                      <img src={x50} alt="" />
                                    </div>
                                  </>
                                ) : index == 3 ? (
                                  <>
                                    {" "}
                                    <div className="icon">
                                      <img src={x100} alt="" />
                                    </div>
                                  </>
                                ) : index == 4 ? (
                                  <>
                                    <div className="icon">
                                      <img src={x250} alt="" />
                                    </div>
                                  </>
                                ) : index == 5 ? (
                                  <>
                                    <div className="icon">
                                      <img src={x500} alt="" />
                                    </div>
                                  </>
                                ) : index == 6 ? (
                                  <>
                                    <div className="icon">
                                      <img src={x1000} alt="" />
                                    </div>
                                  </>
                                ) : index == 7 ? (
                                  <>
                                    <div className="icon">
                                      <img src={x2500} alt="" />
                                    </div>
                                  </>
                                ) : index == 8 ? (
                                  <>
                                    <div className="icon">
                                      <img src={x5000} alt="" />
                                    </div>
                                  </>
                                ) : index == 9 ? (
                                  <>
                                    <div className="icon">
                                      <img src={x10000} alt="" />
                                    </div>
                                  </>
                                ) : index == 10 ? (
                                  <>
                                    <div className="icon">
                                      <img src={x25000} alt="" />
                                    </div>
                                  </>
                                ) : index == 11 ? (
                                  <>
                                    <div className="icon">
                                      <img src={x50000} alt="" />
                                    </div>
                                  </>
                                ) : index == 12 ? (
                                  <>
                                    <div className="icon">
                                      <img src={x100000} alt="" />
                                    </div>
                                  </>
                                ) : index == 13 ? (
                                  <>
                                    <div className="icon">
                                      <img src={x250000} alt="" />
                                    </div>
                                  </>
                                ) : index == 14 ? (
                                  <>
                                    <div className="icon">
                                      <img src={x500000} alt="" />
                                    </div>
                                  </>
                                ) : (
                                  <>
                                    <div className="icon">
                                      <img src={x1000000} alt="" />
                                    </div>
                                  </>
                                )}
                                <h4 class="textsiz1"></h4>
                              </div>
                              <div class="right">
                                <span>Draw took place on</span>
                                <h6>
                                  {" "}
                                  {gameWinnerDate[index].Date}
                                </h6>
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
                                          <th scope="col">Amount</th>
                                        </tr>
                                      </thead>

                                      <tbody class="#tbbody">
                                        {item
                                          .slice(0, itemToBeShow)
                                          .map((items, ind) => {
                                            return (
                                              <>
                                                <tr key={ind}>
                                                  <th scope="row">{ind + 1}</th>
                                                  <td>{items?.address}</td>
                                                  <td>{items?.amount} BUSD</td>
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

                        {/* <div className="d-flex justify-content-center">
                          <Pagination
                            count={Math.ceil(cardData.length / postsPerPage)}
                            page={currentPage}
                            onChange={setPageNumber}
                          />
                        </div> */}

                        {/* {isOpen && (
                    <div className="col-md-12">
                    <div class="paadding">
                      <div class="light-area-top">
                        <div class="left"></div>
                        <div class="right"></div>
                      </div>
                      <div class="">
                        <div class="row">
                          <div class="col-md-12">
                            <div class="tabun1">
                              <table class="table">
                                <tbody class="#tbbody">
                                  {item.map((item, index) => (
                                   return(
                                    <>
                                    <tr key={ind}>
                                   <th scope="row">{ind}</th>
                                   <td>{items?.address}</td>
                                    <td>{items?.amount}</td>
                                   </tr>
                                   </>
                                   )
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    </div>
                  )} */}
                        <button
                          id="clickbtn"
                          class=" custom-buttonn4  mx-auto show-more-btn"
                          onClick={() =>
                            setitemToBeShow(
                              itemToBeShow == cardData[index].length
                                ? "4"
                                : cardData[index].length
                            )
                          }
                        >
                          {itemToBeShow !== cardData[index].length
                            ? "    Show more"
                            : "Show Less"}
                        </button>
                      </h2>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </>
        );
      })}

      <div
        className="text-center"
        onClick={() =>
          setIsOpen(isOpen == cardData.length ? 4 : cardData.length)
        }
      >
        <a className="view-all" href="#top">
          View All Result
        </a>
      </div>
    </div>
  );
}

export default Result_card;


// PDFViewer react js