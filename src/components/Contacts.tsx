// src/components/Contacts.tsx

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
    width: 30%;
    margin: 1vh 1vw;

    @media (max-width: 900px) {
        width: 40%;
    }
`;

const StyledDiv = Styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export default function Contacts() {
    return (
        <>
            <StyledTitle>Contacts</StyledTitle>
            <StyledDiv>
                <StyledImage src="./gmail.png" alt="gmail" />
                <StyledP>lkk19@bu.edu</StyledP>
            </StyledDiv>
            <StyledDiv>
                <StyledImage src="./phone.png" alt="phone" />
                <StyledP>123-456-7890</StyledP>
            </StyledDiv>
            <StyledDiv>
                <StyledImage src="./linkedin.png" alt="linkedin" />
                <StyledP>lin-khant-ko</StyledP>
            </StyledDiv>
        </>
    );
}