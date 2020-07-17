import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Dallas from '../assets/dallas.webp';
import Beijing from '../assets/beijing.webp';
import Austin from '../assets/austin.webp';
import NewYork from '../assets/newyork.webp';
import SanFrancisco from '../assets/sanfrancisco.webp';

const cities = [
    { name: "Dallas", image: Dallas },
    { name: "Austin", image: Austin },
    { name: "New York", image: NewYork },
    { name: "San Francisco", image: SanFrancisco },
    { name: "Beijing", image: Beijing }
];

const textContent = {
    visible: {
        opacity: 1,
        transition: {
            when: "beforeChildren",
            staggerChildren: 0.3,
        },
    },
    hidden: {
        opacity: 0,
        transition: {
            when: "afterChildren",
        },
    }
};
const item = {
    visible: { delay: 1, opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -100 },
}

const Container = styled(motion.div)`
    display: none;
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
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    position: fixed;
    height: 100%;
    width: 100%;
    z-index: -1;
    background: #000;
`;
const Wrapper = styled.div`
    height: 100%;
    padding: 0 15%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #e20001;
    position: relative;
`;
const CityBackground = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    opacity: 0;
    background-size: cover;
    background-repeat: no-repeat;
    animation-name: backgroundEffect;
    animation-duration: 30s;
    animation-iteration-count: infinite;
    z-index: -1;

    @keyframes backgroundEffect {
        0% {
            background-position: 0% 0%;
        }
        25% {
            background-position: 40% 10%;
        }
        50% {
            background-position: 0 10%;
        }
        75% {
            background-position: 10% 40%;
        }
        100% {
            background-position: 0% 0%;
        }
    }
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

const RightContainer = styled(motion.div)`
    flex: 2;
    display: flex;
    flex-direction: column;
    align-items: space-around;
    padding: 0 30px;
`;
const Title = styled(motion.h4)`
    color: #fff;
    font-size: 1.2rem;
    font-weight: 600;
`;
const Para = styled(motion.p)`
    font-size: 1rem;
    color: #fff;
`;

const Hamburger = ({ state }) => {
    const menu = useRef();
    const locationBg = useRef();

    useEffect(() => {
        if (state) {
            // menu.current.style.display = 'block';
        } else {
            // menu.current.style.display = 'none';
        }
    }, [state]);

    const cityHover = (image) => {
        console.log('in hover', image);
        // locationBg.current.style.background = `url(${image}) center center`;
        // locationBg.current.style.backgroundColor = 'green';
        // locationBg.current.style.opacity = 1;
    }
    const cityMoveAway = () => {
        // locationBg.current.style.opacity = 0;
    }

    return (
        <AnimatePresence>
            <Container ref={menu}
                initial={{
                    display: 'none',
                    opacity: 0
                }}
                animate={{
                    display: state ? 'block' : 'none',
                    opacity: state ? 1 : 0
                }}
                exit={{
                    opacity: 0,
                    transition: { delay: 2 }
                }}
            >
                <SecondaryBackground>
                    <Wrapper>
                        <CityBackground ref={locationBg} />
                        <Content>
                            <LeftContainer>
                                <Links>
                                    <motion.span
                                        whileHover={{
                                            y: 3,
                                            skewX: 4,
                                            transition: { duration: 0.5 }
                                        }}
                                    >
                                        <Link to="opportunities">Opportunities</Link>
                                    </motion.span>
                                    <motion.span
                                        whileHover={{
                                            y: 3,
                                            skewX: 4,
                                            transition: { duration: 0.5 }
                                        }}
                                    >
                                        <Link to="solutions">Solutions</Link>
                                    </motion.span>
                                    <motion.span
                                        whileHover={{
                                            y: 3,
                                            skewX: 4,
                                            transition: { duration: 0.5 }
                                        }}
                                    >
                                        <Link to="contact-us">Contact us</Link>
                                    </motion.span>


                                </Links>
                                <Locations>
                                    <span style={{ color: '#fff' }}>Locations</span>
                                    {
                                        cities.map((item, index) => <Location
                                            key={item.name}
                                            onMouseEnter={() => cityHover(item.image)}
                                            onMouseLeave={cityMoveAway}
                                        >{item.name}</Location>
                                        )
                                    }
                                </Locations>
                            </LeftContainer>
                            <RightContainer variants={textContent} initial="hidden" animate="visible">
                                <Title variants={item}>Our promise</Title>
                                <Para variants={item}>
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
        </AnimatePresence>
    );
};

export default Hamburger;