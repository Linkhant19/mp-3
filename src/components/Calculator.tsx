// src/components/Calculator.tsx

import Styled from 'styled-components';
import { useState } from 'react';

const StyledH2 = Styled.h2`
    margin: 0 2.8vw;
    font-size: calc(10px + .8vw);
    color: #1BE2E6;
`;

const StyledButton = Styled.button`
    margin: 1vw;
    font-size: calc(10px + .8vw);
    color: #1BE2E6;
`;

const StyledP = Styled.p`
    margin: 0 2.8vw;
    font-size: calc(10px + .8vw);
    color: #FBF5F3;
`;

const StyledDiv = Styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    width: 50%;

    @media (max-width: 900px) {
        flex-direction: row;
    }
`;

export default function Calculator() {
    const [result, setResult] = useState(0);
    const [color, setColor] = useState("white");
    
    function GetValues() {
        const first = document.getElementById("first") as HTMLInputElement;
        const second = document.getElementById("second") as HTMLInputElement;
        return [Number(first.value), Number(second.value)];
    }

    function addition() {
        const [first, second] = GetValues();
        updateResult(first + second);
    }

    function subtract() {
        const [first, second] = GetValues();
        updateResult(first - second);
    }

    function multiply() {
        const [first, second] = GetValues();
        updateResult(first * second);
    }

    function divide() {
        const [first, second] = GetValues();
        updateResult(first / second);
    }

    function power() {
        const [first, second] = GetValues();
        let result = 1;
        for (let i = 0; i < second; i++) {
            result *= first;
        }
        updateResult(result);
    }

    function updateResult(x: number) {
        setResult(x);
        setColor(x < 0 ? "red" : "white");
    }

    function reset() {
        const first = document.getElementById("first") as HTMLInputElement;
        const second = document.getElementById("second") as HTMLInputElement;
        first.value = "";
        second.value = "";
        setResult(0);
    }


    return (
        <>
            <StyledH2> THE CALCULATOR </StyledH2>

            <input id="first" type="number" placeholder="First Number" />
            <input id="second" type="number" placeholder="Second Number" />

            <StyledDiv>
                <StyledButton onClick={addition}>+</StyledButton>
                <StyledButton onClick={subtract}>-</StyledButton>
                <StyledButton onClick={multiply}>*</StyledButton>
                <StyledButton onClick={divide}>/</StyledButton>
                <StyledButton onClick={power}>**</StyledButton>
                <StyledButton onClick={reset}>Clear</StyledButton>
            </StyledDiv>
            

            <StyledP style={{color}}>Result: {result}</StyledP>
        </>
    );
}