// src/components/Header.tsx

import Styled from 'styled-components';

const Title = Styled.h1`
    font-size: calc(7px + 3.5vw);
    font-family: Times New Roman, serif;
    color: #1BE2E6;
`;

const Subtitle = Styled.h2`
    font-size: calc(4px + 1.5vw);
    font-family: Times New Roman, serif;
    color: #1BE2E6;
`;

const StyledDiv = Styled.div`
    background-color: #2E0A75;
    border: 2px solid #FBF5F3;
`;

export default function Header() {
    return (
        <StyledDiv>
            <Title>LIN KHANT KO</Title>
            <Subtitle>Lin's Resume</Subtitle>
        </StyledDiv>
    );
}

