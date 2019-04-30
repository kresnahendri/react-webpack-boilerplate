import React from 'react'
import styled from 'styled-components'
import { MarbleContainer } from './containers'

const Root = styled('div')`
  padding: 0 20px;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  h1 {
    margin: 15px 0 10px;
  }
  p {
    margin: 0 0 50px;
  }
`
const Logo = styled('img')`
  height: 100px;
  width: auto;
`

const App = () => {
  return (
    <Root>
      <Logo src={require('@/assets/logo.svg')} alt="" />
      <h1>Hello React!</h1>
      <p>Built by Webpack</p>
      <MarbleContainer />
    </Root>
  )
}

export default App
