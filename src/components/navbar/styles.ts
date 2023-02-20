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
    box-shadow: 0 4px 16px rgba(49, 138, 172, 1);
    transition: all 0.2s ease;
    background: rgba(25 255, 255, 0.1);
    background-color: black;
    color: white;
    transition: all 1s ease;
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
    margin-left: 1040px;
    border: none;
    background-color: transparent;
    font-size: large;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
`

export const ButtonProfile = styled.button`
    cursor: pointer;
    border: none;
    background-color: transparent;
    font-size: large;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
`