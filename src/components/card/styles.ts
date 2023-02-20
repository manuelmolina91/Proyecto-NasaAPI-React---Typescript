import styled from "styled-components";

export const App = styled.div`
  text-align: center;
  background-color: #282c34;
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

export const Description = styled.p`
    font-size: 18px;
    margin-bottom: 10px;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
`;

export const Image = styled.img`
     width: 75px;
    height: 100px;
    margin-bottom: 20px;
    margin-left: 69px;
    margin-right: 69px;
`

export const Container = styled.div`
background-color: ${({theme})=> theme.colors.grey900};
border: 1px solid white;
border-radius: 15%;
padding: 15px;
width: 10em;
`

export const ButtonDetails = styled.button`
cursor: pointer;
justify-items: center;
border-radius: 10px;
`

export const ContainerButton = styled.div`
display: flex;
align-items: center;
margin-bottom: 1rem;
`


export const ButtonFav = styled.button`
align-items: center;
cursor: pointer;
display: flex;
margin-left: 120px;

@media (max-width: 768px) {
    margin-left: 50px;
  }
  
  @media (max-width: 480px) {
    margin-left: 20px;
  }
`


export const FavImg = styled.img`
width: 30px;
height: 30px;

@media (max-width: 480px) {
    width: 20px;
    height: 20px;
  }
`

export const DeleteMars = styled.button`
cursor: pointer;
border-radius: 10px;
height: 30px;
width: 200px;
display: block;
margin-left: 5px;

@media (max-width: 768px) {
    margin-left: 20px;
  }
  
  @media (max-width: 480px) {
    width: 150px;
    margin-left: 0;
  }
`