import React from "react";
import { Icon } from "@iconify/react";
import "./InfoCard.css";
import ProfileModal from "../ProfileModal/ProfileModal.jsx";
import { useState } from "react";
const InfoCard = () => {
  const [modalOpened, setModalOpened] = useState(false);
  return (
    <div className="InfoCard">
      <div className="InforHead">
        <h4>Your information</h4>
        <div>
          <Icon icon="bi:pen" onClick={() => setModalOpened(true)} />
          <ProfileModal
            modalOpened={modalOpened}
            setModalOpened={setModalOpened}
          />
        </div>
      </div>
      <div className="Infor">
        <span>
          <b>Status: </b>
        </span>
        <span>in Relationship</span>
      </div>
      <div className="Infor">
        <span>
          <b>Live in: </b>
        </span>
        <span>Can Tho City</span>
      </div>
      <div className="Infor">
        <span>
          <b>Work at: </b>
        </span>
        <span>Can Tho University</span>
      </div>
      <button className="btn Logout-btn">Log out</button>
    </div>
  );
};

export default InfoCard;
