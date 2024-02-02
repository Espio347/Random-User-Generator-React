import GetUser from "./GetUser";
import "./MainPage.css";
import React from "react";

const handleReload = () => {
  window.location.reload(); // Reloads the page
};

function MainPage() {
  return (
    <>
      <body>
        <div className="title-container">
          <h1 className="text-white">Random User Generator</h1>
        </div>
        <div className="container">
          <GetUser />
          <GetUser />
          <GetUser />
          <GetUser />
          <GetUser />
        </div>
        <div className="button-container">
          <button onClick={handleReload}>Generate</button>
        </div>
      </body>
    </>
  );
}

export default MainPage;
