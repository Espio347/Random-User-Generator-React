import React, { useState, useEffect } from "react";
import "./utils.css";

const GetUser = () => {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://randomuser.me/api/");
        const data = await response.json();

        const { first, last } = data.results[0].name;
        const picture = data.results[0].picture.large;
        const description = data.results[0].location.country;

        setUserData({ name: `${first} ${last}`, picture, description });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="profile-box">
      {userData.name && (
        <div className="content">
          <p className="text-dark">
            <b>{userData.name}</b>
          </p>
          <img src={userData.picture} alt="User" className="image-box" />
          <p className="text-dark">{userData.description}</p>
        </div>
      )}
    </div>
  );
};

export default GetUser;
