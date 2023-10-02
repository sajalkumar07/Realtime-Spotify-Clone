import React from 'react'
import styled from 'styled-components'
import '../styles/footer.css'
import Currenttrack from './currenttrack'

const footer = () => {
  return (
    <Container className='foorter-container' >
      <Currenttrack></Currenttrack>
    </Container>
  )
}

export default footer
const Container = styled.div``