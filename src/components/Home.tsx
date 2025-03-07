// src/components/Home.tsx

import Styled from 'styled-components';

const StyledDiv = Styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    padding: 2vh 2vw;
`;

const StyledImage = Styled.img`
    width: 40%;
    margin: 1vh 1vw;
`;

const StyledGif = Styled.img`
    width: 10%;
    margin: 1vh 1vw;
`;

const StyledP = Styled.p`
    margin: 0 2.8vw;
    font-size: calc(4px + .8vw);
    color: #FBF5F3;
`;

const StyledTitle = Styled.h1`
    margin: 2vw 0;
    text-align: center;
    font-size: calc(25px + 2.5vw);
    color: #FBF5F3;
`;

export default function Home() {
    return (
        <>
            <StyledTitle>Home</StyledTitle>
            <StyledDiv>
                <StyledImage src="./photo1.JPG" alt="Lin Khant Ko" />
                <StyledP> 
                    Hey, I am Lin! 
                    <br></br>
                    <br></br>
                    I am an aspiring Software Engineer and Game Developer, studying Computer Science and Psychology at Boston University. I have taken classes such as Full-Stack Application Development, Software Engineering, Artifical Intelligence, Data Science Fundamentals, Database Systems, and Distributed Systems to further extend my knowledge in the field.
                </StyledP>
            </StyledDiv>
            
            <StyledP>
                Welcome to my website, here you will find my <strong><em>Educational</em></strong> and my
                <strong><em>Employment</em></strong> history; as well as other information that might be
                of interest to you.
            </StyledP>
            <StyledGif src="./main.gif" alt="Main Gif" />
        </>
    );
}