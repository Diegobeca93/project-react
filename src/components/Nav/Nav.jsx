import React from 'react'
// import './style.css'
import styled from 'styled-components'
import SearchIcon from '@material-ui/icons/Search';
import CartWidget from '../CartWidget'

const Container = styled.div`
    height: 60px;
    
`;
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;  
    align-items: center;
    justify-content: space-between;
`;
const Left = styled.div`
    flex: 1;
    display:flex;
    align-items: center;
`;
const SearchContainer = styled.div`
    border: 0.5px solid  gray;
    display:flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
    font-family: 'Montserrat', sans-serif;
`
const Input = styled.input`
    border: none;
`
const Center = styled.div`
    flex: 1;
    text-align: center;
`;
const Logo = styled.h1`
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
`

const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`
const MenuItems = styled.div`
    margin-left: 25px;
`

const Nav = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <SearchContainer>
                        <Input />
                        <SearchIcon style={ {color: "gray", fontsize: 16} }/>
                    </SearchContainer>
                </Left>
                <Center><Logo>Ecommer</Logo></Center>
                <Right>
                    <MenuItems>
                        REGISTRARSE
                    </MenuItems>
                    <MenuItems>
                        INICIAR
                    </MenuItems>
                    <CartWidget />
                </Right>
            </Wrapper>
        </Container>

    )
}

export default Nav
