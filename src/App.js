import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { Button, Marbles } from './components'
import { actionPing, actionPong } from './store/actions/pingActions'

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

const App = (props) => {
  const { pingResult } = props

  const handleClick = () => {
    if (pingResult === null) {
      props.actionPing()
    } else if (pingResult.toUpperCase() === 'PING') {
      props.actionPong()
    } else if (pingResult.toUpperCase() === 'PONG') {
      props.actionPing()
    }
  }

  return (
    <Root>
      <Logo src={require('@/assets/logo.svg')} alt="" />
      <h1>Hello React!</h1>
      <p>Built by Webpack</p>
      <Button onClick={handleClick}>Move the ball</Button>
      <Marbles position={(pingResult !== null && pingResult.toUpperCase() === 'PING') ? 'left' : 'right'} />
    </Root>
  )
}

const mapStateToProps = (state) => ({
  pingResult: state.ping.result,
})

export default connect(mapStateToProps, {
  actionPing,
  actionPong,
})(App)
