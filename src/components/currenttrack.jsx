import React,{useEffect} from 'react';
import styled from 'styled-components';
import { useStateProvider } from '../Assets/SatateProvider';
import axios from 'axios';
import { reducerCases } from '../Assets/constents';
import '../styles/currenttrack.css'
const CurrentTrack = () => {
    
     const [{ token, currentPlaying }, dispatch] = useStateProvider();
    useEffect(() => {
      const getCurrentTrack = async () => {
        const response = await axios.get(
          "https://api.spotify.com/v1/me/player/currently-playing",
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + token,
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
        }
      };
      getCurrentTrack();
    }, [token, dispatch]);
    return (
      <Container>
        {currentPlaying && (
          <div className="track">
            <div className="track-image">
              <img src={currentPlaying.image} alt="currentPlaying" />
            </div>
            <div className="track-info">
              <h4 className="track-info-track-name">{currentPlaying.name}</h4>
              <h6 className="track-info-track-artists">
                {currentPlaying.artists.join(", ")}
              </h6>
            </div>
          </div>
        )}
      </Container>
    );
  }

export default CurrentTrack 
const Container = styled.div`
`