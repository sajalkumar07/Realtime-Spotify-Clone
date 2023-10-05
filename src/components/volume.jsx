import React from 'react'
import styled from 'styled-components'
import { useStateProvider } from '../Assets/SatateProvider';
import '../styles/volume.css'
import axios from 'axios';

const Volume = () => {
    const [{ token }] = useStateProvider();
    const setVolume = async (e) => {
        await axios.put(
        "https://api.spotify.com/v1/me/player/volume",
        {},
        {
            params: {
            volume_percent: parseInt(e.target.value),
            },
            headers: {
                Authorization: "Bearer " + token,
                "Content-Type": "application/json",
    
            },
        }
        );
    };
  return (
    <Container>
        <input type="range" class="spotify-volume" min={0} max={100} onMouseUp={(e=>setVolume(e))} />
    </Container>
  )
}

export default Volume
const Container = styled.div``