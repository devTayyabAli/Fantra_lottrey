import React, { useEffect, useState } from "react";
import google from "../../Assets/images/google.png";
import Modal from "react-bootstrap/Modal";
import { loadWeb3 } from "../../apis/api";
import { loteryTokenAbi, loteryTokenAddress } from "../../utilies/Bsc_contract";
import Web3 from "web3";
import Tooltip from "@mui/material/Tooltip";

const Connect_wallet_modal = () => {
  const [modalShow2, setModalShow2] = React.useState(false);
  let [btnTxt, setBtTxt] = useState("Connect Wallet");
  let [tokenBalance, settokenBalance] = useState(0);

  const getaccount = async () => {
    let web3= window.web3
    let acc = await loadWeb3();
    let accounts = await web3.eth.getAccounts();
    accounts=accounts[0] 
   
    
    if (acc == "No Wallet") {
      // toast.error('please install metamask')
      setBtTxt("No Wallet");
    } else if (acc == "Wrong Network") {
      setBtTxt("Wrong Network");
    } else {
      let myAcc =
        acc?.substring(0, 4) + "..." + acc?.substring(acc?.length - 4);
      setBtTxt(acc);

      const webSupply = new Web3(
        "https://data-seed-prebsc-1-s1.binance.org:8545"
      );

      let loteryTokenof = new webSupply.eth.Contract(
        loteryTokenAbi,
        loteryTokenAddress
      );

      let balanceOf = await loteryTokenof.methods.balanceOf(acc).call();
      balanceOf= webSupply.utils.fromWei(balanceOf.toString())

      settokenBalance(balanceOf.toString());
     
    }
  };
  useEffect(() => {
    
    const interval = setInterval(() => {

      getaccount();

    }, 3000);
    return () => clearInterval(interval);
  },[]);

  return (
    <div>
      <div className="right-area">
        <div className="log-reg-area " variant="">
          <Tooltip title={btnTxt} arrow    className="custom-button2 navmainbt ">
            <a
              onClick={getaccount}
              // onClick={() => setModalShow2(true)}
              href="#"
              class="custom-button2 navmainbt "
              data-toggle="modal"
              data-target="#loginModal"
            >
              {  btnTxt?.substring(0, 4) + "..." + btnTxt?.substring(btnTxt?.length - 4)}
            </a>
          </Tooltip>
          <a
            onClick={getaccount}
            // onClick={() => setModalShow2(true)}
            style={{ marginLeft: "1rem" }}
            href="#"
            class="custom-button2 navmainbt "
            data-toggle="modal"
            data-target="#loginModal"
          >
            Balance:
            {tokenBalance == 0 ? tokenBalance : tokenBalance.slice(0, 10)}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Connect_wallet_modal;
