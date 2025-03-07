import './App.css'
import Header from './components/Header.tsx';
import Nav from './components/Nav.tsx';
import Main from './components/Main.tsx';
import Footer from './components/Footer.tsx';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Styled from 'styled-components';

const StyledDiv = Styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  position: relative;
  background-color: #150318;
  border: 1px solid #FBF5F3;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

const StyledWrapper = Styled.div`
  width: 80vw;
  margin: 0 auto;
`;

function Root() {
  return (
    <StyledWrapper>
      <Header />
      <StyledDiv>
        <Nav />
        <Main />
      </StyledDiv>
      <Footer />
    </StyledWrapper>
  );
}

const router = createBrowserRouter(
  [
    { path: "*", Component: Root}
  ]
);

export default function App() {
  return <RouterProvider router={router} />
}

