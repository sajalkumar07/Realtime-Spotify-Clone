import React from 'react'
import styled from 'styled-components';
import {FaSearch} from 'react-icons/fa';
import {CgProfile} from 'react-icons/cg';
import { useStateProvider } from '../Assets/SatateProvider';
import '../styles/navbar.css'

const Navbar = ({navBackground}) => {

  const [{userInfo}]=useStateProvider();

  return (
    <Container navBackground={navBackground} className='main-section-navbar'>

        <div className="search-bar">
          <FaSearch/>
          <input className='search-section' type="search" placeholder="Artist, songs, or podcast" />
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
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3rem;
  padding-top: 10px;
  height: 16vh;
  position: sticky;
  top: 0;
  transition: 0.3s ease-in-out;
  margin-left: 30px;
  background-color: ${({navBackground})=>navBackground ? "rgba(0,0,0,0.8)" : "none"};

`