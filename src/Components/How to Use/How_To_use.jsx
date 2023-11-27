import Guide_PDF from "../../Assets/Here is a guide on how to use LUCKY ME.pdf";
import { Document, Page } from "react-pdf";
import { useState } from "react";
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
import { Link } from "react-router-dom";
import Header from "../Header/Header";

export default function How_To_use() {
  return (
    <div>
   

      <section className="breadcrumb-area">
        <div className="container">
          <div className="content">
            <h2 className="title">How To Use "Lucky Me" Lottery</h2>
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
                <a href="#">How to Use</a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="about-info">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="left-image">
                <img src={about_left} alt="" />
              </div>
            </div>
            <div className="col-lg-7 align-self-center">
              <div className="right-content">
                <div className="section-header">
                  <h2 className="title">Guide</h2>
                  <p>
                    Here is a guide on how to use LUCKY ME the lottery game
                    functionality of the decentralized application (dApp):
                  </p>
                  <ol className="list_Guide mt-5">
                    <li>
                      Firstly, you must have a Binance Smart Chain-supported
                      wallet like Trust Wallet, TokenPocket, or Metamask. If you
                      don't have one, you can download and install any of these
                      wallets from their respective app stores.
                    </li>
                    <li>
                      . Once you have a Binance Smart Chain-supported wallet,
                      open it and connect it to the dApp. You can do this by
                      clicking on the "Connect Wallet" button on the dApp's
                      homepage and selecting your wallet from the list of
                      available wallets.
                    </li>
                    <li>
                      After connecting your wallet, your wallet's balance will
                      be displayed on the dApp's dashboard. To add funds to your
                      wallet, you can follow the below steps:
                      <ul className="subList_Guide">
                        <li>
                          Open your Binance Smart Chain-supported wallet.{" "}
                        </li>
                        <li>
                          {" "}
                          Click on the "Receive" button to get the address.
                        </li>
                        <li>
                          {" "}
                          Go to your exchange or another wallet and transfer
                          BUSD to this address.{" "}
                        </li>
                        <li>
                          {" "}
                          Once the BUSD is in your wallet, this amount will
                          reflect in the Balance button on top of the dApp's
                          home page
                        </li>
                      </ul>
                    </li>
                    <li>
                      You can now use your wallet balance to participate in
                      Lucky Me's lottery games by selecting different pools and
                      entering the amount of BUSD you wish to participate. Each
                      pool has a minimum and maximum entry amount. Here's a
                      table with the details:
                    </li>
                    <div className="table-responsive">
                      <table class="table">
                        <thead>
                          <tr>
                            <th scope="col">#</th>
                            <th scope="col">Pool </th>
                            <th scope="col">Min. Entry(BUSD) </th>
                            <th scope="col">Max. Entries(BUSD)</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">1</th>
                            <td>10x</td>
                            <td>1</td>
                            <td>10</td>
                          </tr>
                          <tr>
                            <th scope="row">2</th>
                            <td>20x</td>
                            <td>1</td>
                            <td>10</td>
                          </tr>
                          <tr>
                            <th scope="row">3</th>
                            <td>50x</td>
                            <td>1</td>
                            <td>10</td>
                          </tr>
                          <tr>
                            <th scope="row">4</th>
                            <td>100x</td>
                            <td>1</td>
                            <td>20</td>
                          </tr>{" "}
                          <tr>
                            <th scope="row">5</th>
                            <td>250x</td>
                            <td>1</td>
                            <td>50</td>
                          </tr>{" "}
                          <tr>
                            <th scope="row">6</th>
                            <td>500x</td>
                            <td>1</td>
                            <td>50</td>
                          </tr>{" "}
                          <tr>
                            <th scope="row">7</th>
                            <td>1,000x</td>
                            <td>1</td>
                            <td>80</td>
                          </tr>{" "}
                          <tr>
                            <th scope="row">8</th>
                            <td>2,500x</td>
                            <td>1</td>
                            <td>100</td>
                          </tr>{" "}
                          <tr>
                            <th scope="row">9</th>
                            <td>5,000x</td>
                            <td>1</td>
                            <td>200</td>
                          </tr>{" "}
                          <tr>
                            <th scope="row">10</th>
                            <td>10,000x</td>
                            <td>1</td>
                            <td>400</td>
                          </tr>{" "}
                          <tr>
                            <th scope="row">11</th>
                            <td>25,000x</td>
                            <td>1</td>
                            <td>1.000</td>
                          </tr>{" "}
                          <tr>
                            <th scope="row">12</th>
                            <td>50,000x</td>
                            <td>1</td>
                            <td>2,000</td>
                          </tr>{" "}
                          <tr>
                            <th scope="row">13</th>
                            <td>100,000x</td>
                            <td>1</td>
                            <td>3,000</td>
                          </tr>{" "}
                          <tr>
                            <th scope="row">14</th>
                            <td>250,000x </td>
                            <td>1</td>
                            <td>6,000</td>
                          </tr>{" "}
                          <tr>
                            <th scope="row">15</th>
                            <td>500,000x </td>
                            <td>1</td>
                            <td>11,000</td>
                          </tr>{" "}
                          <tr>
                            <th scope="row">16</th>
                            <td>1,000,000x </td>
                            <td>1</td>
                            <td>15,000</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <li>
                      {" "}
                      Each entry is 1 BUSD, and you can participate with
                      multiple entries at once. Once the desired amount is
                      chosen then{" "}
                      <b>
                        {" "}
                        <strong>
                          Smart Contract ask you to set a sending cap this means
                          you have to enter how much entires you have selected
                          and then
                        </strong>{" "}
                      </b>{" "}
                      the amount will be deducted from your wallet balance for
                      the purchasing entries. The lottery will end in either of
                      the two scenarios, either when the total number of entries
                      is filled, or when the time is over.
                    </li>
                    <li>
                      After the lottery ends, the winners will be decided
                      randomly by the contract, and the funds will be
                      distributed to the winners' respective wallets. You can
                      withdraw your winnings accordingly.
                    </li>
                    <li>
                      The winners of the lottery will be determined by either
                      the total number of entries filled or the winner's ratio
                      method, depending on how the lottery ends. In the winner's
                      ratio method, the number of winners is based on the ratio
                      of received entries to the total expected entries. If the
                      number of new winners is less than one, then the winner's
                      ratio will be multiplied by the winning amount, and the
                      resulting amount will be distributed among the number of
                      winners specified in the table provided earlier in this
                      guide.
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
