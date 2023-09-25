import React from 'react'
import styled from 'styled-components'
import {IoLibrary} from 'react-icons/io5';
import {MdHomeFilled, MdSearch} from 'react-icons/md'
import Playlist from './playlist'
import '../styles/sidebar.css'

const sidebar = () => {
  return (
    <Container className='siderbar-container'>
      <div className="top-links">
        <div className="logo">
          <img className='logo' src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_White.png" alt=""/>
        </div>
        <ul className='sidebar-content'>
          <li className='sidebar-content-nested'>
          <MdHomeFilled></MdHomeFilled>
            <span>Home</span>
          </li>
          <li className='sidebar-content-nested'>
            <MdSearch></MdSearch>
            <span>Search</span>
          </li>
          <li className='sidebar-content-nested'>
            <IoLibrary></IoLibrary>
            <span>Your Library</span>
          </li>
        </ul>
      </div>
      <Playlist></Playlist>
    </Container>
  )
}

export default sidebar
const Container = styled.div``;
