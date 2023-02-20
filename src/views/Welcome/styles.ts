import styled from 'styled-components'
import { Link } from 'react-router-dom'


export const WelcomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.ReactBlue};

`

export const WelcomeMessage = styled.h1`
    color:${({ theme }) => theme.colors.black};;
    font-size: xxx-large;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    position: static;
`

export const RedirectMessage = styled.p`
color:${({ theme }) => theme.colors.black};
font-size: 25px;
margin: 70px;

`

export const ButtonBoxes = styled.div`
    display:block;
    margin:20px;
    border: 3px solid;
    padding: 30px;
`

export const WelcomeButton = styled(Link)`
  padding: 10px 20px;
  background-color: #3498db;
  color:${({ theme }) => theme.colors.black};;  border-radius: 5px;
  text-decoration: none;
  margin: 0 10px;
`