import styled from "styled-components";

export const CustomNavbar = styled.nav`
    background-color:white;
    display:flex;
    justify-content:space-between;
    height:60px;
    width: 100%;
`
export const BackButton = styled.button`
    width: 50px;
    height: 30px;
    border-radius: 5px;
    margin:10px;
    cursor:pointer;
    display: block;
    block-size: auto;

    &:hover {
    background-color: black;
    color: white;
  }
`

export const SignoutButton = styled.button`
    width: 100px;
    height: 30px;
    border-radius: 5px;
    padding: 20px;
    margin:10px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    text-transform: uppercase;
    font-weight:bold;
    cursor:pointer;
`

export const ButtonLogout = styled.button`
    cursor: pointer;
    margin-left: 1440px;
    border: none;
    background-color: transparent;
    font-size: large;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
`