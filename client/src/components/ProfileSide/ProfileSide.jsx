import React from 'react'
import './ProfileSide.css'
import '../ProfileCard/ProfileCard.css'
import LogoSign from '../LogoSign/LogoSign.jsx'
import ProfileCard from '../ProfileCard/ProfileCard.jsx'
import FollowCard from '../FollowCard/FollowCard.jsx'

const ProfileSide = () => {
  return (
    <div className="ProfileSide">
        <LogoSign/>
        <ProfileCard/>
        <FollowCard/>
    </div>
  )
}

export default ProfileSide