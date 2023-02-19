import React, { FC, useCallback } from 'react'
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
    //<UniversePicture>
    <WelcomeContainer>
      <WelcomeMessage>Welcome to Nasa Web App</WelcomeMessage>
      <RedirectMessage>Please login or create an account to continue</RedirectMessage>
        <ButtonBoxes>
      <WelcomeButton to="/login">Login</WelcomeButton>
      <WelcomeButton to="/signup">Signup</WelcomeButton>
      </ButtonBoxes>
    </WelcomeContainer>
    //</UniversePicture>
  )
}

export default Welcome
