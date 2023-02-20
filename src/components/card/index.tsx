import { FC, useCallback, useState, useEffect } from 'react'
import { Container, Description, Image, ButtonDetails, ButtonFav, FavImg, DeleteMars, ContainerButton } from './styles'
import {Props} from './types'
import { getToken } from '../../services/storage'
import hearth from "./assets/icons8-favorite-96.png"
import hearthFilled from "./assets/icons8-favorite-96-filled.png"

const Card:FC<Props> = ({
    nasaId,
    sol,
    image,
    onClick,
    id,
    onRemove
}) => {

    const [isFavorited, setIsFavorited] = useState(false);

    const deleteMars = useCallback(async (id: number) => {
        const token = getToken();             // Obtener el token de localStorage
        await fetch(`http://localhost:8000/mars/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}` // Agregar el token al header 'Authorization'
            },
        });
        onRemove(id);
    }, [onRemove]);


    const addFavRover = useCallback(async (id: number) => {

        const token = getToken();
        const response = await fetch(`http://localhost:8000/users/addFavoritesMars/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}` // Agregar el token al header 'Authorization'
            },
        });

        if (response.ok) {
            const data = await response.json();
            setIsFavorited(data.isAdded); // Aquí establecemos el estado a verdadero
        }

    }, []);

    const fetchData = useCallback(async () => {
        const token = getToken();
        const response = await fetch('http://localhost:8000/users/favList/', {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
        });

        if (response.ok) {
            const data = await response.json();
            const apodFavorite = data.apodFavorites.find((item: any) => item.id === id);
            setIsFavorited(apodFavorite !== undefined);
        }
    }, [id])
    

    const handleClick = () => {
        if (onClick && id) {
            onClick(id)
        }
    }

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    return(
        <Container>
            <Description>Id: {nasaId}</Description>
            <Description>Sol: {sol}</Description>
            <Image src={image}/>
            <ContainerButton>
            <DeleteMars type="button" onClick={() => { deleteMars(nasaId) }}>Delete</DeleteMars>
            <ButtonFav onClick={() => { addFavRover(nasaId) }}>
                <FavImg src={isFavorited ? hearthFilled : hearth} />
            </ButtonFav>
            </ContainerButton>
        </Container>
    )
}

export default Card