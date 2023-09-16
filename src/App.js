import React, {useEffect, useState} from 'react'
import  Login  from './components/login';
import Spotify from './components/spotify';
import { useStateProvider } from './Assets/SatateProvider';
import { reducerCases } from './Assets/constents';

const App = () => {
  const [{token},dispatch] = useStateProvider()
  useEffect(() => {
    const hash = window.location.hash;
    if(hash){
      const token = hash.substring(1).split("&")[0].split('=')[1];
      console.log(token)
      dispatch({type: reducerCases.SET_TOKEN, token});
    }
  }, [token, dispatch]);
  return (
    <div> {
      token ? <Spotify></Spotify> : <Login></Login>}<Login></Login>
    </div>
  )
}

export default App