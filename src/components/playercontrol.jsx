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

  const [{ token, playerState }, dispatch] = useStateProvider();

  const changeState = async () => {
    const state = playerState ? "pause" : "play";
    await axios.put(
      `https://api.spotify.com/v1/me/player/${state}`,
      {},
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      }
    );
    dispatch({
      type: reducerCases.SET_PLAYER_STATE,
      playerState: !playerState,
    });
  };
  const changeTrack = async (type) => {
    await axios.post(
      `https://api.spotify.com/v1/me/player/${type}`,
      {},
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      }
    );
    dispatch({ type: reducerCases.SET_PLAYER_STATE, playerState: true });
    const response1 = await axios.get(
      "https://api.spotify.com/v1/me/player/currently-playing",
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      }
    );
    if (response1.data !== "") {
      const currentPlaying = {
        id: response1.data.item.id,
        name: response1.data.item.name,
        artists: response1.data.item.artists.map((artist) => artist.name),
        image: response1.data.item.album.images[2].url,
      };
      dispatch({ type: reducerCases.SET_PLAYING, currentPlaying });
    } else {
      dispatch({ type: reducerCases.SET_PLAYING, currentPlaying: null });
    }
  };
      

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