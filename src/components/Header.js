import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Hamburger from './Hamburger';

const Container = styled.header`
    flex: 1;
    padding: 10px 15%;
    position: relative;
`;
const Content = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 25px;
`;
const Home = styled.div`
    font-size: 2rem;
    font-weight: 800;
    cursor: pointer;
    z-index: 10;
`;
const Menu = styled.p`
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    z-index: 10;
`;

const Header = () => {
    return (
        <Container>
            <Content>
                <Home>
                    <Link style={{ textDecoration: 'none', color: '#000' }} to="/home">Hamburg</Link>
                </Home>
                <Menu>Menu</Menu>
            </Content>
            <Hamburger />
        </Container>
    );
};

export default Header;