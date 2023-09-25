import React from 'react'
import styled from 'styled-components';
import {FaSearch} from 'react-icons/fa';
import {CgProfile} from 'react-icons/cg';
import { useStateProvider } from '../Assets/SatateProvider';

const Navbar = () => {

  const [{userInfo}]=useStateProvider();
  return (
    <Container>
        <div className="search-bar">
          <FaSearch/>
          <input type="text" placeholder="Artist, songs, or podcast" />
        </div>
        <div className="avatar">
          <a href="#">
            <CgProfile/>
              <span>
                {userInfo?.name}  
              </span>
          </a>
        </div>
    </Container>
  )
}

export default Navbar
const Container = styled.div``