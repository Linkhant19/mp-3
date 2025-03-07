// src/components/Main.tsx

import Styled from 'styled-components';
import { Routes, Route } from 'react-router-dom';

import Home from './Home';
import About from './About';
import Contacts from './Contacts';
import Projects from './Projects';
import Experience from './Experience';
import Achievements from './Achievements';

const StyledMain = Styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width:70%;
    height: 100vh;
    background-color: #150318;
    font-family: Times New Roman, serif;

    @media (max-width: 900px) {
        width: 100%;
    }
`;

export default function Main() {
    return (
        <StyledMain>
            <Routes>
                <Route path={`/`} element={<Home />} />
                <Route path={`/about`} element={<About />} />
                <Route path={`/contacts`} element={<Contacts />} />
                <Route path={`/projects`} element={<Projects />} />
                <Route path={`/experience`} element={<Experience />} />
                <Route path={`/achievements`} element={<Achievements />} />
            </Routes>
        </StyledMain>
    );
}