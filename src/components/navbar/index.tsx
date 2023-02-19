import { FC, useCallback } from 'react'
import { Props } from './types'
// import { auth } from '../../services/fireabase';
import { useNavigate } from 'react-router-dom';
import { BackButton, ButtonLogout } from '../../components/navbar/styles'
import { CustomNavbar } from './styles'



const Navbar: FC<Props> = ({type='list'}) => {

    const navigate = useNavigate()

    const goToBack = useCallback(() => {
        navigate('/home')
    }, [navigate])
    
    const handleLogout = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        window.localStorage.clear()
        navigate('/login')
    }, [navigate])


    return (
        <CustomNavbar>
            <ButtonLogout onClick={handleLogout}>Logout</ButtonLogout>
            {type === 'details' &&<BackButton onClick={goToBack}>🔙</BackButton>}
        </CustomNavbar>
    )
}

export default Navbar