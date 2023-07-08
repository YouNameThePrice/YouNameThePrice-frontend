import React from "react";
import ProfileSidebar from "../components/ProfileSidebar";
import ProfileInfo from "../components/ProfileInfo";

// import { Link } from "react-router-dom";

function ProfileDetail() {
  return (
    <div className="flex flex-row bg-light--gray max-h-screen">
      <ProfileSidebar />

      {/* Üyelik Bilgilerim */}
      <ProfileInfo />
    </div>
  );
}

export default ProfileDetail;
