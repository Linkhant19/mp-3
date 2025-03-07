// src/components/Nav.tsx

import Styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledNav = Styled.nav`
    width: 30%;

    @media (max-width: 900px) {
        width: 100%;
    }
`;

const StyledUl = Styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: #2E0A75;
    text-align: center;
    list-style: none;
    margin: 0;
    height: 100%;
    padding-left: 0;

    @media (max-width: 900px) {
        flex-direction: row;
    }
`;

const StyledLi = Styled.li`
    font-size: calc(3px + 1vw);
    width: 90%;
    background-color: #1BE2E6;
    padding: 2vh 0;
    margin: 5vh auto;
    border-radius: 20%;

    @media (max-width: 900px) {
        margin: 5vh 2vw;
    }
`;


export default function Nav() {
    return (
        <StyledNav>
            <StyledUl>
                <StyledLi>
                    <Link to={`/`}>Home</Link>
                </StyledLi>
                <StyledLi>
                    <Link to={`/about`}>About</Link>
                </StyledLi>
                <StyledLi>
                    <Link to={`/contacts`}>Contacts</Link>
                </StyledLi>
                <StyledLi>
                    <Link to={`/projects`}>Projects</Link>
                </StyledLi>
                <StyledLi>
                    <Link to={`/experience`}>Experience</Link>
                </StyledLi>
                <StyledLi>
                    <Link to={`/achievements`}>Achievements</Link>
                </StyledLi>
            </StyledUl>
        </StyledNav>
    );
}