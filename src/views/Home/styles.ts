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
`

export const Container = styled.div`
padding: 5em;
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr;
gap: 24px;

@media screen and (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 16px;
  }
`

export const Description = styled.p`
`

