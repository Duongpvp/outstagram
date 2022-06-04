import React from 'react'
import './Profile.css'
import ProfileLeft from '../../components/ProfileLeft/ProfileLeft.jsx'
import ProfileCard from '../../components/ProfileCard/ProfileCard.jsx'
import PostSide from '../../components/PostSide/PostSide.jsx'
import NoticeSide from '../../components/NoticeSide/NoticeSide.jsx'
const Profile = () => {
  return (
    <div className="Profile">
      <ProfileLeft/>
      <div className="ProfileCenter">
        <ProfileCard/>
        <PostSide/>
      </div>
      <NoticeSide/>
    </div>
  )
}

export default Profile