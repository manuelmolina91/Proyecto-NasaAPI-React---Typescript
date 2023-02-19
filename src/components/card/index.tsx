import { FC } from 'react'
import { Container, Description, Image, ButtonDetails } from './styles'
import {Props} from './types'

const Card:FC<Props> = ({
    nasaId,
    sol,
    image,
    onClick,
    id
}) => {

    const handleClick = () => {
        if (onClick && id) {
            onClick(id)
        }
    }

    return(
        <Container>
            <Description>Id: {nasaId}</Description>
            <Description>Sol: {sol}</Description>
            <Image src={image}/>
            <ButtonDetails onClick={handleClick}>View details</ButtonDetails>
        </Container>
    )
}

export default Card