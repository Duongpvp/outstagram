import React from "react";
import "./ProfileCard.css";
import Cover from "../../assets/img/cover.jpg";
import Avatar from "../../assets/img/avatar.jpg";

const ProfileCard = () => {
  const ProfilePage = true;
  return (
    <div className="ProfileCard">
      <div className="ProfileImages">
        <img src={Cover} alt="Cover - Background Wallpaper" />
        <img src={Avatar} alt="Avatar" />

        <div className="ProfileName">
          <span>YanG Pham</span>
          <span>Senior CTU University</span>
        </div>

        <div className="FollowStatus">
          <hr />
          <div>
            <div className="Follow">
              <span>1</span>
              <span>Followings</span>
            </div>
            <div className="split-col"> </div>
            <div className="Follow">
              <span>891,109</span>
              <span>Followers</span>
            </div>
            {ProfilePage && (
              <>
                <div className="split-col"></div>
                <div className="Follow">
                  <span>3</span>
                  <span>Posts</span>
                </div>
              </>
            )}
          </div>
          <hr />
        </div>
      </div>
      {ProfilePage ? <br/> : <span>My profile</span>}
    </div>
  );
};

export default ProfileCard;
