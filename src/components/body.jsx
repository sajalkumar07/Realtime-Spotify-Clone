import React, {useEffect} from 'react'
import '../styles/body.css'
import styled from 'styled-components'
import {AiFillClockCirlce} from "react-icons/ai"
import { useStateProvider } from '../Assets/SatateProvider'
import axios from 'axios'

const Body = () => {

  const[{token, selectedPlaylistId}, dispatch]=useStateProvider();
  useEffect(() =>{
    const getInitialPlaylist = async () => {
      const response  = await axios.get(`https://api.spotify.com/v1/playlists/${selectedPlaylistId}`, {
        headers:{
          Authorization: "Bearer  "+ token,
          "Content-Type": "application/json",
        },
    })
      
      console.log(response)
    }
    getInitialPlaylist()
  },[token, dispatch]);
  return (
    <Container>
      
    </Container>
  )
}

export default Body
const Container = styled.div``