import React, { FC, } from 'react'
import {
    ButtonBoxes,
  RedirectMessage,
  WelcomeButton,
  WelcomeContainer,
  WelcomeMessage,
  //UniversePicture
} from './styles'

const Welcome: FC = () => {
  return (
    <WelcomeContainer>
      <WelcomeMessage>Welcome to Nasa Web App</WelcomeMessage>
      <RedirectMessage>Please login or create an account to continue</RedirectMessage>
        <ButtonBoxes>
      <WelcomeButton to="/login">Login</WelcomeButton>
      <WelcomeButton to="/signup">Signup</WelcomeButton>
      </ButtonBoxes>
    </WelcomeContainer>
  )
}

export default Welcome
