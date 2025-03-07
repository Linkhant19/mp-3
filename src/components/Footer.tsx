// src/components/Footer.tsx

import Styled from 'styled-components';

const StyledFooter = Styled.footer`
    text-align: center;
    padding: 40px;
    background-color: #2E0A75;
    border: 2px solid #FBF5F3;
`;

const FooterText = Styled.p`
    font-family: "Kode Mono", serif;
    font-size: calc(4px + 1vw);
    color: #1BE2E6;
`;

export default function Footer() {
    return (
        <StyledFooter>
            <FooterText> All rights reserved by Lin Khant Ko &copy; </FooterText>
        </StyledFooter>
    );
}
