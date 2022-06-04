import React, { useState, useRef } from "react";
import "./PostShare.css";
import avatar from "../../assets/img/avatar.jpg";
import { Icon } from "@iconify/react";

const PostShare = () => {
  const [image, setImage] = useState(null);
  const imageRef = useRef(null);

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setImage({
        image: URL.createObjectURL(img),
      });
    }
  };
  return (
    <div className="PostShare">
      <img src={avatar} alt="avatar" />
      <div>
        <input type="text" placeholder="What your're thinking..." />
        <div className="PostOptions">
          <div className="Option" style={{ color: "var(--photo)" }} onClick={()=>imageRef.current.click()}>
            <Icon icon="uil:scenery" className="op-icon" /> Photo
          </div>
          <div className="Option" style={{ color: "var(--video)" }}>
            <Icon icon="ant-design:play-circle-outlined" className="op-icon" />{" "}
            Video
          </div>
          <div className="Option" style={{ color: "var(--location)" }}>
            <Icon icon="akar-icons:location" className="op-icon" /> Location
          </div>
          <div className="Option" style={{ color: "var(--schedule)" }}>
            <Icon icon="ant-design:schedule-outlined" className="op-icon" />{" "}
            Schedule
          </div>
          <button className="btn Share-btn">Share</button>
        </div>
        <div style={{ display: "none" }}>
          <input
            type="file"
            name="myImage"
            ref={imageRef}
            onChange={onImageChange}
          />
        </div>
        {image && (
          <div className="PreviewImage">
            <Icon onClick={()=>{setImage(null)}} icon="clarity:times-line"/>
            <img src={image.image} alt="" />
          </div>
        )}
      </div>
    </div>
  );
};

export default PostShare;
