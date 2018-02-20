import imgLogo from './assets/images/webpack-logo.svg'
import React from 'react'
import './assets/styles/app.scss'
import Button from './components/Button'

const styles = {
  logo: {
    height: '100px',
    width: 'auto'
  }
}

export default () => {
  return (
    <div>
      <img src={require('./assets/images/webpack-logo.svg')} alt="Webpack" style={styles.logo} />
      <h1>Hello React!</h1>
      <small><b>Built by Webpack</b></small>
      <Button>Click me!</Button>
    </div>
  )
}