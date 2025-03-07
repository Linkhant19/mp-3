// src/components/Achievements.tsx

import Styled from 'styled-components';

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

const StyledImage = Styled.img`
    width: 20%;
    margin: 1vh 1vw;

    @media (max-width: 900px) {
        width: 30%;
    }
`;

const StyledDiv = Styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    @media (max-width: 900px) {
        flex-direction: column;
        align-items: center;
    }
`;

export default function Achievements() {
    return (
        <>
            <StyledTitle>Achievements</StyledTitle>
            <StyledDiv>
                <StyledImage src="./a1.png" alt="achievment 1" />
                <StyledP>2024. Visionary Developer Award</StyledP>
            </StyledDiv>
            <StyledDiv>
                <StyledImage src="./a2.png" alt="achievment 2" />
                <StyledP>2024. Cloud Architecture Award</StyledP>
            </StyledDiv>
            <StyledDiv>
                <StyledImage src="./a3.png" alt="achievment 3" />
                <StyledP>2023. Elite Innovator Recognition</StyledP>
            </StyledDiv>
            <StyledDiv>
                <StyledImage src="./a4.png" alt="achievment 4" />
                <StyledP>2020. The Tech Alchemist Award</StyledP>
            </StyledDiv>
        </>
    );
}