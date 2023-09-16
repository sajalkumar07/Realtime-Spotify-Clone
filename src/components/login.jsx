import React from 'react'
import styled from 'styled-components'
export const Login = () => {

  const handleClick = () =>  {
    const clientId = "3548ed7ae5f346a1b8c4245c01196eef";
    const redirectUrl = "http://localhost:3000/";
    const apiUrl =  "https://accounts.spotify.com/authorize";
    const scope  = [
      'user-read-email',
      'user-read-private',
      'user-read-playback-state',
      'user-read-currently-playing',
      'user-read-recently-played',
      'user-read-playback-position',
      'user-top-read'];

      window.location.href = `${apiUrl}?client_id=${clientId}&redirect_uri=${redirectUrl}&scope=${scope.join(" ")}
      &response_type=token&show_daialog=true`;
    };

  return (
    <Container className='container'>
      <img className='logo' src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Black.png" alt=""/>
      <button onClick={handleClick} className='login-button'>Connect Spotify</button>
    </Container>
  )
}
export default Login
const Container = styled.div``
