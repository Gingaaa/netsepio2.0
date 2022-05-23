import React from "react";

export default function Footer() {
  return (
    <>
      <div className="fot">
        <div className="fo">
          <div
            className="d-flex flex-row mb-3"
            style={{ paddingLeft: "93px", paddingTop: "43px" }}
          >
            <img
              className="fimg"
              src="https://user-images.githubusercontent.com/69159515/163665970-6207901c-4c18-4b17-b048-8691d2132832.png"
              alt="error"
            />
            <h3 className="navbar-brand ftext">NetSepio</h3>
          </div>
          <div>
            <h6
              className="lazz"
              style={{
                paddingLeft: "118px",
                paddingTop: "19px",
                fontSize: "1.3vw",
              }}
            >
              Lazarus Network Inc. <br /> 2209 SW 58th Way <br /> West Park,
              Florida 33023 <br /> +1 954 378 9548 <br />
            </h6>
            <h6
              className="lazz"
              style={{
                paddingLeft: "118px",
                paddingTop: "23px",
                fontSize: "1.3vw",
              }}
            >
              hello@netsepio.com
            </h6>
          </div>

          <h5
            style={{
              textAlign: "center",
              marginTop: "53px",
              fontWeight: "bold",
              fontSize: "1.6vw",
            }}
          >
            2021-2022 © NetSepio
          </h5>
        </div>
        <div className="get">
          <h4
            className="succ"
            style={{
              marginLeft: "97px",
              fontWeight: "bold",
              fontSize: "1.8vw",
              marginTop: "-43px",
            }}
          >
            Subscribe
          </h4>
          <div className="col-auto edi" style={{ marginTop: "50px" }}>
            <label for="inputEmail2" className="visually-hidden eii">
              Email Id
            </label>
            <input
              type="password"
              className="form-control ef"
              id="inputEmail2"
              placeholder="Your Email Id"
              style={{ width: "300px" }}
            />
          </div>
          <div className="col-auto opt">
            <button
              type="submit"
              className="btn btn-primary mb-3 "
              style={{
                marginTop: "23px",
                marginLeft: "110px",
                fontSize: "1.2vw",
              }}
            >
              Opt-in
            </button>
          </div>
          <p
            className="plop"
            style={{ marginLeft: "-155px", fontSize: "1.3vw" }}
          >
            Latest news delivered right to your inbox! Your information will be
            kept confidential.
          </p>
        </div>
        <div className="con d-flex flex-row-reverse ">
          <h4 style={{ fontWeight: "bold", fontSize: "1.8vw" }} className="cnn">
            Connect
          </h4>
        </div>
        <div
          className="d-flex flex-row-reverse icnn"
          style={{ marginTop: "43px", marginRight: "99px" }}
        >
          <a href="https://github.com/NetSepio/ChromiumExtension">
            <img className="icon1" src="icon1.gif" alt="" />
          </a>
          <a href="https://discord.gg/9gQvK5ds">
            <img className="icon1" src="icon2.gif" alt="" />
          </a>
          <a href="https://t.me/NetSepio">
            <img className="icon1" src="icon5.gif" alt="" />
          </a>
        </div>
      </div>
    </>
  );
}
