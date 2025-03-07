// src/components/About.tsx

import Styled from 'styled-components';

<h3 id="main-title">About</h3>

const StyledDiv = Styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    padding: 2vh 2vw;

    @media (max-width: 900px) {
        flex-direction: column;
        align-items: center;
    }
`;

const StyledImage = Styled.img`
    width: 30vw;
    height: 20vw;
    margin: 1vh 1vw;

    @media (max-width: 900px) {
        width: 60%;
        height: auto;
        margin-top: 70px;
    }
`;

const StyledSmallImage = Styled.img`
    width: 30%;
    margin-bottom: 50px;
    margin: 0 2vw;
`;

const StyledP = Styled.p`
    margin: 0 2.8vw;
    font-size: calc(10px + .7vw);
    color: #FBF5F3;
`;

const StyledTitle = Styled.h1`
    margin-top: 50px;
    text-align: center;
    font-size: calc(25px + 2.5vw);
    color: #FBF5F3;
`;

const StyledPhotosContainer = Styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 2vw;
`;

export default function About() {
    return (
        <>
            <StyledTitle>About</StyledTitle>
            <StyledDiv>
                <StyledP>Lin here!
                    <br></br>
                    <br></br>
                    I was born in Myanmar, a small country in Southeast Asia. I am currently a student at Boston University, studying Computer Science and Psychology. I am very passionate about learning and applying my knowledge to real-world problems. I am a quick learner, and I am always looking for new challenges to work on.
                </StyledP>
                <StyledImage src="./photo6.JPG" alt="Lin Khant Ko" />
            </StyledDiv>
            
            <StyledPhotosContainer>
                <StyledSmallImage src="./photo4.JPG" alt="Lin Khant Ko Second Photo" />
                <StyledSmallImage src="./photo2.JPG" alt="Lin Khant Ko Third Photo" />
            </StyledPhotosContainer>
        </>
    );
}