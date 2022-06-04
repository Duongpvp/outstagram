import React from 'react';
import './Home.css';
import ProfileSide from '../../components/ProfileSide/ProfileSide'
import PostSide from '../../components/PostSide/PostSide'
import NoticeSide from '../../components/NoticeSide/NoticeSide'

const Home = () => {
  return (
    <div className="Home">
        <ProfileSide/>
        <PostSide/>
        <NoticeSide/>
    </div>
  )
}

export default Home