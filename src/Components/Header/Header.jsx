import React, { useState } from "react";

import lucky from "../../Assets/images/lucky-me-logo.png";
import cart from "../../Assets/images/cart.png";
import "./Header.css";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineGoogle } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Connect_wallet_modal from "../Connect_wallet_modal/Connect_wallet_modal";
import { Button, Checkbox, Form, Input } from "antd";
import { Modal } from "antd";
import axios from "axios";
import { toast } from "react-toastify";
// import Button from '@mui/material/Button';


function Header() {
  let isuser= localStorage.getItem("UserAuth")
  const [modalShow, setModalShow] = React.useState(false);
  const [isLogin, setisLogin] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  let location = useLocation();
 
  const history = useNavigate();
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const onFinish = async (values) => {
    console.log("Success:", values);
    let res = await axios.post("https://winner.archiecoin.online/admin_login", {
      email: values.email,
      password: values.password,
    });
    if (res.data.success == true) {
      toast.success(res.data.msg);
      history("/admin_panel");
      localStorage.setItem("UserAuth",true)
      setisLogin(true);
      handleCancel();
    } else {
      toast.error(res.data.msg);
    }

    console.log("Login_Res", res.data.success);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div>
      <Modal
        title="Admin LogIn"
        footer={false}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form
          name="basic"
          layout="vertical"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Admin Email"
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your Email!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item className="d-flex justify-content-end">
            <Button
              type="primary"
              htmlType="submit"
              className="custom-button2 navmainbt"
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
      <header className="top-header">
        {location.pathname !== "/admin_panel" ? (
          <>
            <div className="header-top-area">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="header-top-area-inner">
                      <a href="" className="logo">
                        <img src={lucky} alt="" />
                      </a>
                      <div className="d-flex">
                        <Connect_wallet_modal />
                        {/* {isuser == true ? (
                          <button
                            class="custom-button2 navmainbt"
                            onClick={() => (history("/"),localStorage.removeItem("UserAuth"))}
                          >
                            Log Out
                          </button>
                        ) : (
                          <button
                            class="custom-button2 navmainbt"
                            onClick={showModal}
                          >
                            Admin Panel
                          </button>
                        )} */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="header-section">
              <div className="container">
                <div className="header-wrapper">
                  <ul className="menu">
                    <Link className="leenk" to="/">
                      <li>
                        <a href="" className="">
                          Home
                        </a>
                      </li>
                    </Link>
                    <Link className="leenk" to="/Results">
                      <li>
                        <a href="">Results</a>
                      </li>
                    </Link>
                    <Link className="leenk" to="/About">
                      <li>
                        <a href="">About Us</a>
                      </li>
                    </Link>
                    <Link className="leenk" to="/Faq">
                      <li>
                        <a href="">Faq</a>
                      </li>
                    </Link>
                    <Link className="leenk" to="/How_To_use">
                      <li>
                        <a href="">How To Use</a>
                      </li>
                    </Link>
                   
                  </ul>
                  <div className="right-tools"></div>
                  <div className="header-bar d-lg-none">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
          <div className="header-top-area">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="header-top-area-inner">
                      <a href="" className="logo">
                        <img src={lucky} alt="" />
                      </a>
                      <div className="d-flex">
                        <Connect_wallet_modal />
                        {/* {isLogin == true ? (
                          <button
                            class="custom-button2 navmainbt"
                            onClick={() => history("/")}
                          >
                            Log Out
                          </button>
                        ) : (
                          <button
                            class="custom-button2 navmainbt"
                            onClick={showModal}
                          >
                            Admin Panel
                          </button>
                        )} */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </header>
    </div>
  );
}

export default Header;
