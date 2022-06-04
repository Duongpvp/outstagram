import React from "react";
import "./NoticeSide.css";
import { Icon } from "@iconify/react";
import TrendCard from "../TrendCard/TrendCard.jsx"
const NoticeSide = () => {
  return (
    <div className="NoticeSide">
      <div className="navIcon">
        <Icon icon="ant-design:home-outlined" />
        <Icon icon="ant-design:setting-outlined" />
        <Icon icon="fe:notice-active" />
        <Icon icon="bx:comment-dots" />
      </div>
      <TrendCard/>
      <button className="btn Post-btn">
        Share
      </button>
    </div>
  );
};

export default NoticeSide;
