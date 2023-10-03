import React from 'react'
import styled from 'styled-components'
import '../styles/footer.css'
import Currenttrack from './currenttrack'
import PlayerControl from './playercontrol'

const footer = () => {
  return (
    <Container className='foorter-container' >
      <Currenttrack></Currenttrack>
      <PlayerControl></PlayerControl>
      <></>
    </Container>
  )
}

export default footer
const Container = styled.div``