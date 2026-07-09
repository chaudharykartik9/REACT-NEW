import React from "react";

const Card = ({ user }) => {
  return (
    <div className="profile">
      <h1>NAME: {user.username}</h1>
      <h2>ADDRESS: {user.address}</h2>
      <h2>COLLEGE: {user.college}</h2>
    </div>
  );
};

export default Card;