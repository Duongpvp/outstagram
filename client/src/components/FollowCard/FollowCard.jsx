import React from 'react'
import './FollowCard.css'
import {Followers} from '../../Data/FollowersData.jsx'
const FollowCard = () => {
  return (
    <div className="FollowersCard">
      <h3>Followers</h3>

      {Followers.map((follower, id) => {
        return (
          <div className="Followers">
            <div>
              <img src={follower.img} alt="" className="FollowerImg"/>
              <div className="FollowerName">
                <span>{follower.name}</span>
                <span>{follower.userName}</span>
              </div>
            </div>
            <button className="Follow-btn">
              Follow
            </button>
          </div>
        )
      })}
    </div>
  )
}

export default FollowCard