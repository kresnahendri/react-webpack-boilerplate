import React from 'react'
import { connect } from 'react-redux'
import { Button, Marbles } from '../components'
import { actionPing, actionPong } from '../store/actions/pingActions'

const MarbleContainer = (props) => {
  const { result } = props
  const handleClick = () => {
    if (result === null) {
      props.actionPing()
    } else if (result.toUpperCase() === 'PING') {
      props.actionPong()
    } else if (result.toUpperCase() === 'PONG') {
      props.actionPing()
    }
  }
  return (
    <>
      <Button onClick={handleClick}>Move the ball</Button>
      <Marbles position={(result !== null && result.toUpperCase() === 'PING') ? 'left' : 'right'} />
    </>
  )
}

const mapStateToProps = (state) => ({
  result: state.ping.result,
})

export default connect(mapStateToProps, {
  actionPing,
  actionPong,
})(MarbleContainer)
