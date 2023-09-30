import axios from 'axios'
import React, {useEffect} from 'react'
import styled from 'styled-components'
import '../styles/body.css'
import { useStateProvider } from '../Assets/SatateProvider'
import {AiFillClockCircle} from "react-icons/ai"
import { reducerCases } from '../Assets/constents'
const Body = ({headerBackground}) => {

  const[{token, selectedPlaylist, selectedPlaylistId}, dispatch] = useStateProvider();
  useEffect(() =>{
    const getInitialPlaylist = async () => {
      const response  = await axios.get(
        `https://api.spotify.com/v1/playlists/${selectedPlaylistId}`, 
      {
        headers:{
          Authorization: "Bearer  "+ token,
          "Content-Type": "application/json",
        },
      }
    );
      const selectedPlaylist = {
        id : response.data.id,
        name: response.data.name,
        description: response.data.description.startsWith("<a")
        ?""
        : response.data.description,
        image: response.data.images[0].url,
        tracks: response.data.tracks.items.map(({track})=>({
          id: track.id,
          name: track.name,
          artists: track.artists.map((artist)=>artist.name),
          image: track.album.images[2].url,
          duration: track.duration_ms,
          album: track.album.name,
          context_uri: track.album.uri,
          track_number: track.track_number,
        })),
    };
    // console.log(selectedPlaylist)
    // console.log(response.data)
    dispatch({type: reducerCases.SET_PLAYLIST, selectedPlaylist});
  };
    getInitialPlaylist()
  },[token, dispatch, selectedPlaylistId]);
  return (
    <Container headerBackground={headerBackground}>
      {
        selectedPlaylist && (
          <>
            <div className="playlist">
              <div className="image">
                <img src={selectedPlaylist.image} alt="" />
              </div>
              <div className="details">
                <span className="type">PLAYLIST</span>
                <h1 className="title">{selectedPlaylist.name}</h1>
                <p className="description">{selectedPlaylist.description}</p>
              </div>
            </div>

            <div className="list">
              <div className="header-row">
                <div className="col">
                  <span>#</span>
                </div>
                <div className="col">
                  <span>TITLE</span>
                </div>
                <div className="col">
                  <span>ALBUM</span>
                </div>
                <div className="col">
                  <span><AiFillClockCircle>
                    </AiFillClockCircle>
                  </span>
                </div>
              </div>
              <div className="tracks">
                {
                  selectedPlaylist.tracks.map(({
                    id,
                    name,
                    artists,
                    image,
                    duration,
                    album,
                    context_uri,
                    track_number,
                  },index)=>{
                    return(
                      <div className="row">
                        <div className="col">
                          <span>{index+1}</span>
                        </div>
                        <div className="col-detail">
                          <div className="image">
                            <img src={image} alt="" />
                            <div className="info">
                              <span className='name'>{name}</span>
                              <span>{artists}</span>
                            </div>
                          </div>
                          <div className="col">
                            <span>{album}</span>
                          </div>
                          <div className="col">
                            <span>{duration}</span>
                          </div>
                        </div>
                      </div>
                    )
                  })
                }
              </div>
            </div>
          </>
        )
      }
    </Container>
  )
}
export default Body
const Container = styled.div``