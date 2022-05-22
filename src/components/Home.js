import React from "react";

export default function Home() {
  return (
    <>
      <div className="home1">
        <div className="home">
          <video
            autoPlay
            loop
            muted
            style={{
              position: "absolute",
              width: "100%",
              height: "130vh",
              left: "50%",
              objectFit: "cover",
              transform: "translate(-50%, -50%)",
              zIndex: "-1",
            }}
          >
            <source src="video.mp4" className="hv" type="video/mp4" />
          </video>
        </div>
        <div className="container">
          <h2 className="hd">
            BROWSER EXTENSION <br /> THE NEW NORM <br />
            SEE WHAT MAKES US DIFFERENT
          </h2>
          <p className="hp">
            NetSepio browser extension allows users to vote for a website/domain
            categorizing it into various categories and get rewards. The user
            can be aware of the threats like Tracking, Malware, Drive-By
            Downloads, Adware, Phishing, Cryptojacking, etc. and also can report
            the website for having unsafe content.
          </p>
        </div>
      </div>
      <div className="container cyb">
        <h2 style={{ fontWeight: "bold", fontSize: "3.6vw" }}>Cyber Attacks</h2>
        <p style={{ marginTop: "43px", fontSize: "1.2vw" }}>
          * Adware accounts for 72% of mobile malware: Report - gadgetsnow.com{" "}
          <br />
          * Thousands of COVID-19 scam and malware sites are being created on a
          daily basis - zdnet.com <br />
          * Phishing emails tempting people with fake coronavirus vaccines -
          techrepublic.com <br />
          * Browser-based cryptojacking sees sudden spike in activity in Q2 2020
          - zdnet.com <br />
          * Browser fingerprinting ‘more prevalent on the web now than ever
          before’ - research - portswigger.net <br />* Web Browsers still allow
          drive-by-downloads in 2020 - malwaretips.com <br />
          * On The Frontline: The Rise Of Hate Speech And Racism On Social Media
          - discoversociety.org <br />
        </p>
        <img src="cyber.jpg" className="cimg" alt="" />
      </div>
      
      
    </>
  );
}
