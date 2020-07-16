import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
    flex: 1;
    height: 100vh;
    z-index: 9;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
`;
const SecondaryBackground = styled.div`
    height: 100%;
`;
const Wrapper = styled.div`
    height: 100%;
    padding: 0 15%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #e20001;
`;
const Content = styled.div`
    display: flex;
`;
const LeftContainer = styled.div`
    flex: 3;
    display: flex;
    flex-direction: column;
    padding: 0 20px;
`;
const Links = styled.nav`
    display: flex;
    flex-direction: column;
    a {
        color: #fff;
        font-size: 4rem;
        font-weight: 900;
        text-decoration: none;

        &:hover {
            color: #000;
        }
    }

`;
const Locations = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
const Location = styled.p`
    color: #fff;
    cursor: pointer;
    transition: 0.3s ease-in-out;
    &:hover {
        color: #fff;
        background: #000;
        padding: 4px 16px;
        border-radius: 4px;
    }
`;

const RightContainer = styled.div`
    flex: 2;
    display: flex;
    flex-direction: column;
    align-items: space-around;
    padding: 0 30px;
`;
const Title = styled.h4`
    color: #fff;
    font-size: 1.2rem;
    font-weight: 600;
`;
const Para = styled.p`
    font-size: 1rem;
    color: #fff;
`;

const Hamburger = () => {
    return (
        <Container>
            <SecondaryBackground>
                <Wrapper>
                    <Content>
                        <LeftContainer>
                            <Links>
                                <Link to="opportunities">Opportunities</Link>
                                <Link to="solutions">Solutions</Link>
                                <Link to="contact-us">Contact us</Link>
                            </Links>
                            <Locations>
                                <Location>Locations</Location>
                                <Location>Dallas</Location>
                                <Location>Austin</Location>
                                <Location>New York</Location>
                                <Location>San Fransisco</Location>
                                <Location>Beijing</Location>
                            </Locations>
                        </LeftContainer>
                        <RightContainer>
                            <Title>Our promise</Title>
                            <Para>
                                The passage experienced a surge in popularity during the 1960s
                                when Letraset used it on their dry-transfer sheets, and again
                                during the 90s as desktop publishers bundled the text with
                                their software.
                            </Para>
                        </RightContainer>
                    </Content>
                </Wrapper>
            </SecondaryBackground>
        </Container>
    );
};

export default Hamburger;