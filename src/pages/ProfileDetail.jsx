import React from "react";
import ProfileSidebar from "../components/ProfileSidebar";
import ProfileInfo from "../components/ProfileInfo";
import HamburgerMenu from "../components/HamburgerMenu";

// import { Link } from "react-router-dom";

function ProfileDetail() {
  return (
    <div className="flex flex-row bg-light--gray max-h-screen">
      {window.innerWidth < 640 ? (
        <HamburgerMenu>
          <ProfileSidebar />
        </HamburgerMenu>
      ) : (
        <ProfileSidebar />
      )}
      {/* Üyelik Bilgilerim */}
      <ProfileInfo />
    </div>
  );
}

export default ProfileDetail;
