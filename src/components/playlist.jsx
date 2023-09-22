import axios from  'axios';
import React, {useEffect} from 'react';
import styled from 'styled-components';
import {reducerCases} from '../Assets/constents';
import {useStateProvider} from '../Assets/SatateProvider';

const Playlists = () => {
    const  [{token, playlists},dispatch] = useStateProvider();
    useEffect(() =>{
        const getPlaylistData = async () =>{
            const response = await  axios.get('https://api.spotify.com/v1/me/playlists', {
                headers:{
                    Authorization: "Bearer  "+ token,
                    "Content-Type": "application/json",
                },
            }
            );
            const {items} = response.data
            const playlists = items.map(({name, id})=>{
                return {name, id};
            });
            console.log(playlists);
            dispatch({type:reducerCases.SET_PLAYLISTS, playlists});
        };  
        getPlaylistData();  
    },[token,dispatch]);
  return (
    <div className='playlists-continer'>
        <ul className='sidebar-playlists'>
            {
                playlists.map(({name, id})=>{
                    return(
                        <li className='playlist-coloums' key={id}>{name}</li>
                    )
                })
            }
            
        </ul>
    </div>
  )
}

export default Playlists
