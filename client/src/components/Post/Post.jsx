import React from "react";
import { Icon } from "@iconify/react";
import './Post.css';

const Post = ({ data, id }) => {
  return (
    <div className="Post">
      <img src={data.img} alt="" />
      <div className="PostReact">
        {data.liked?(<Icon icon="emojione-v1:red-heart" />): (<Icon icon="akar-icons:heart" />)}
        <Icon icon="akar-icons:comment" />
        <Icon icon="bxs:share" />
      </div>
      <span style={{color: 'var(--gray)', fontSize: '0.8rem'}}>{data.likes} Likes</span>
      <div className="DetailPost">
        <span><b>{data.name} - </b></span>
        <span>{data.desc}</span>
      </div>
    </div>
  );
};

export default Post;
