import React from 'react'
import styled from 'styled-components';
import {FaSearch} from 'react-icons/fa';
import {CgProfile} from 'react-icons/cg';
import { useStateProvider } from '../Assets/SatateProvider';
import '../styles/navbar.css'

const Navbar = () => {

  const [{userInfo}]=useStateProvider();
  console.log({userInfo}, "from navbar");
  return (
    <Container className='main-section-navbar'>
        <div className="search-bar">
          <FaSearch/>
          <input className='search-section' type="text" placeholder="Artist, songs, or podcast" />
        </div>
        <div className="avatar">
          <a className='profile-icon' href="#">
            <CgProfile/>
              <span>
                {userInfo?.userName}  
              </span>
          </a>
        </div>
    </Container>
  )
}

export default Navbar
const Container = styled.div``