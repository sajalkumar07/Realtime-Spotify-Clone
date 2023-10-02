import axios from 'axios'
import React, {useEffect,useRef,useState} from 'react'
import styled from 'styled-components'
import Body from './body'
import Footer from './footer'
import Navbar from './navbar'
import Sidebar from './sidebar'
import '../styles/spotify.css'
import { useStateProvider } from '../Assets/SatateProvider'
import { reducerCases } from '../Assets/constents'

const Spotify = () => { 
  const[{token}, dispatch]=useStateProvider();
  const bodyRef = useRef();
  const [navBackground, setNavBackground] = useState(false);
  const [headerBackground,  setHeaderBackground] = useState(false); 
  const bodyScrolled = () => {
    bodyRef.current.scrollTop >= 30
    ? setNavBackground(true)
    : setNavBackground(false);
    bodyRef.current.scrollTop >= 268
    ? setHeaderBackground(true)
    : setHeaderBackground(false);
  }

  useEffect(()=>{
    const getUserInfo = async ()=>{
      const {data} = await axios.get("https://api.spotify.com/v1/me/", {
        headers:{
          Authorization: "Bearer  "+ token,
          "Content-Type": "application/json",
        },
      })
      const userInfo = {
        userId: data.id,
        userName: data.display_name,  
    };
    dispatch({type:reducerCases.SET_USER,userInfo})
    };
    getUserInfo();
  }, [dispatch, token]) 
  return (
    <Container id='container-box'>
      <div className="spotify-body">
        <Sidebar></Sidebar>
        <div className="body"ref={bodyRef} onScroll={bodyScrolled} >
          <Navbar navBackground={navBackground}></Navbar>
          <div className="body-contants">
            <Body headerBackground={headerBackground}></Body>
          </div>
        </div>
      </div>
      <div className="spotify-footer">
       <Footer></Footer>
      </div>
    </Container>
  )
}

export default Spotify
const Container = styled.div``