import React from 'react'
import styled from 'styled-components'
import Body from './body'
import Footer from './footer'
import Navbar from './navbar'
import Sidebar from './sidebar'
import './spotify.css'

const spotify = () => {
  return (
    <Container id='container-box'>
      <div className="spotify-body">
        <Sidebar></Sidebar>
        <div className="body">
          <Navbar></Navbar>
          <div className="body-contants">
            <Body></Body>
          </div>
        </div>
      </div>
      <div className="spotify-footer">
       <Footer></Footer>
      </div>
    </Container>
  )
}

export default spotify
const Container = styled.div``