// src/components/Experience.tsx

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

const StyledH2 = Styled.h2`
    margin: 0 2.8vw;
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
        align-items: center;
    }
`;

export default function Experience() {
    return (
        <>
            <StyledTitle>Experiences</StyledTitle>
            <StyledDiv>
                <StyledH2>Teaching Assistant</StyledH2>
                <StyledP>Facilitated 3 lab sessions of about 100 students and conducted office hours, providing support to a diverse body of students.
                        Taught Python, algorithms, efficient debugging techniques leading to final project of creating Connect Four game AI Player.</StyledP>
            </StyledDiv>

            <StyledDiv>
                <StyledH2>President & Frontend Developer</StyledH2>
                <StyledP>Led a team of 10 executive board members in club operations, including financial and inventory management, while coordinating weekly meetings of 70-110 club members and fostering an inclusive environment, increasing committed members count by 42%.
                    Assembled interactive websites as advertisements for club events increasing sales by up to 145%.</StyledP>
            </StyledDiv>

            <StyledDiv>
                <StyledH2>Application Development Intern</StyledH2>
                <StyledP>Collaborated remotely within a cross-functional team to upgrade 2 Augmented Reality (AR) educational applications, aiming to boost user engagement among children impacted by educational disruptions in Myanmar.
                    Designed and upgraded the old application interface to attract more users and gamify the overall experience.</StyledP>
            </StyledDiv>
        </>
    );
}