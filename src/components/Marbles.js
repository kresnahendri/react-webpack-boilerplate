import React from 'react'
import styled from 'styled-components'

const Root = styled('div')`
  position: relative;
  display: flex;
  width: 100%;
  max-width: 300px;
  margin: 50px;
  justify-content: center;
  align-items: center;
`
const Ball = styled('div')`
  height: 30px;
  width: 30px;
  border-radius: 100%;
  position: absolute;
  background: ${(props) => ((props.position === 'left') ? 'orange' : 'purple')};
  left: ${(props) => (props.position === 'left' ? '10px' : 'calc(100% - 40px)')};
  transition: all .3s cubic-bezier(0.4, 0.0, 0.2, 1);
`
const Line = styled('div')`
  height: 2px;
  background: black;
  width: 100%;
`
const Marbles = ({ position }) => {
  return (
    <Root>
      <Ball position={position} />
      <Line />
    </Root>
  )
}

export default Marbles
