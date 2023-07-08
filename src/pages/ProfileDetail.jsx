import React from "react";
import ProfileSidebar from "../components/ProfileSidebar";
import ProfileInfo from "../components/ProfileInfo";
import HamburgerMenu from "../components/HamburgerMenu";

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

      <ProfileInfo />
    </div>
  );
}

export default ProfileDetail;
