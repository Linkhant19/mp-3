// src/components/Projects.tsx

import Styled from 'styled-components';
import Calculator from './Calculator';

const StyledP = Styled.p`
    margin: 0 2.8vw;
    font-size: calc(10px + .8vw);
    color: #FBF5F3;
`;

const StyledTitle = Styled.h1`
    margin-top: 50px;
    text-align: center;
    font-size: calc(25px + 2.5vw);
    color: #FBF5F3;
`;

const StyledH2 = Styled.h2`
    margin: 0 2.8vw;
    font-size: calc(10px + .8vw);
    color: #1BE2E6;
`;

const StyledA = Styled.a`
    margin-right: 2vw;
    font-size: calc(10px + .8vw);
    color: #1BE2E6;
`;

const StyledDiv = Styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    @media (max-width: 900px) {
        flex-direction: column;
    }
`;


export default function Projects() {
    return (
        <>
            <StyledTitle>Projects</StyledTitle>
            <StyledDiv>
                <StyledH2>Hide and Seek</StyledH2>
                <StyledP>Developed a Full-Stack web application using the Django Framework along with Python, HTML, CSS, and JavaScript and hosted it via Heroku.
                Featured multiple data models along with data representation, creation, updates, deletion, data types, relationships between models, and use of the Django ORM while attending carefully to the user interface, giving it a fun, game-like aesthetic.</StyledP>
                <StyledA href="https://github.com/Linkhant19/hideandseek_fullstack" target="_blank">GitHub Link</StyledA>
            </StyledDiv>

            <StyledDiv>
                <StyledH2>JavaScript Calculator</StyledH2>
                <StyledP>Coded a calculator using JavaScript, HTML, and CSS with 2 input boxes, 6 buttons marked (+, -, *, /, **, Clear), and a textual output. </StyledP>
            </StyledDiv>

            <Calculator />

        </>
    );
}