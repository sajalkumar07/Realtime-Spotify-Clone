import React from 'react'
import styled from 'styled-components'
import '../styles/footer.css'
import Currenttrack from './currenttrack'
import PlayerControl from './playercontrol'
import Volume from './volume'

const footer = () => {
  return (
    <Container className='foorter-container' >
      <Currenttrack></Currenttrack>
      <PlayerControl></PlayerControl>
      <Volume></Volume>
    </Container>
  )
}

export default footer
const Container = styled.div``