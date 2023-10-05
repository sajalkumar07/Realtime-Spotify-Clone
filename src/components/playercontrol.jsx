import React from 'react'
import styled from 'styled-components'
import '../styles/playercontrol.css'
import {BsFillPlayCircleFill,BsFillPauseCircleFill,BsShuffle} from 'react-icons/bs';
import {CgPlayTrackNext,CgPlayTrackPrev} from 'react-icons/cg';
import {FiRepeat} from 'react-icons/fi'
import { useStateProvider } from '../Assets/SatateProvider';
import { reducerCases } from '../Assets/constents';
import axios from 'axios';
const Playercontrol = () => {

    const [{token, playerState}, dispatch] = useStateProvider();
    const changeTrack = async (type)  => {
        await axios.post(`https://api.spotify.com/v1/me/player/${type}`,{},
       
            {
              headers: {
                Authorization: "Bearer " + token,
                "Content-Type": "application/json",
              },
            }
          );
          const response = await axios.get(
            "https://api.spotify.com/v1/me/player/currently-playing",
            {
              headers: {
                Authorization: "Bearer " + token,
                "Content-Type": "application/json",
              },
            }
          );
          if (response.data !== "") {
            const {item} = response.data;
            const currentPlaying = {
              id: item.id,
              name: item.name,
              artists: item.artists.map((artist) => artist.name),
              image: item.album.images[2].url,
            };
            dispatch({ type: reducerCases.SET_PLAYING, currentPlaying});
        }else{
            dispatch({ type: reducerCases.SET_PLAYING, currentPlaying:null});
        }  
    }
    
    const changeState = async () => {
        const state = playerState ? "pause" : "play";
        const response = await axios.put(
            `https://api.spotify.com/v1/me/player/${state}`,{},
            {
              headers: {
                Authorization: "Bearer " + token,
                "Content-Type": "application/json",
              },
            }
          );
          dispatch({ type: reducerCases.SET_PLAYER_STATE, playerState: !playerState});
       }
      

  return (
    <Container className='main-player-section'>
        <div className="shuffle">
            <BsShuffle></BsShuffle>
        </div>
        <div className="previous">
            <CgPlayTrackPrev onClick={()=>changeTrack("previous")}></CgPlayTrackPrev>
        </div>
        <div className="state">
            {playerState ? <BsFillPauseCircleFill onClick={changeState}/> : <BsFillPlayCircleFill  onClick={changeState} className='play-button' />}
        </div>
        <div className="next">
            <CgPlayTrackNext onClick={()=>changeTrack("next")}></CgPlayTrackNext>
        </div>
        <div className="repeat">
            <FiRepeat></FiRepeat>
        </div>
    </Container>
  )
}

export default Playercontrol
const Container = styled.div``