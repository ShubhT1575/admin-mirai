import React from "react";
import ProfileHead from "./ProfileHead";
import ProfileRow from "./ProfileRow";

function ProfileMain() {
  return (
    <div className="main-content app-content" id="m-content">
      <div className="container-fluid">
        <ProfileHead />
        <ProfileRow />
      </div>
    </div>
  );
}

export default ProfileMain;
