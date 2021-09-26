
import styled, { css } from "styled-components";
import Intro from "./componentsRespons/Intro";
import Navbar from "./componentsRespons/Navbar";
import Feature from "./componentsRespons/Feature";

import Contact from "./componentsRespons/Contact";
import Footer from "./componentsRespons/Footer";
import Price from "./componentsRespons/Price";
import Service from "./componentsRespons/Service";

const Container = styled.div`
  height: 100vh;

  overflow: hidden; // aparece la barra de desplazamiento si es requerida */
  position: relative;
`;

const Shape = css`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`;

const IntoShape = styled.div`
  ${Shape}
  clip-path: polygon(67% 0, 100% 0%, 100% 100%, 55% 100%);
  background-color: crimson;
`;

const FeatureShape = styled.div`
  ${Shape}
  clip-path: polygon(0 0, 55% 0%, 33% 100%, 0 100%);
  background-color: pink;
`;

const ServiceShape = styled.div`
  ${Shape}
  clip-path: polygon(0 0, 36.2% 0%, 36.2% 100%, 0 100%);
  background-color: #f88497;
`;

const PriceShape = styled.div`
  ${Shape}
  clip-path: polygon(33% 0, 100% 0%, 100% 100%, 67% 100%);
  background-color: crimson;
`;

function AppResponsive() {
  const smallScreen = window.screen.width <= 480 ? true : false;
  return (
    <>
      <Container>
        <Navbar />
        <Intro />
        <IntoShape />
      </Container>
      <Container>
        <Feature />
        <FeatureShape />
      </Container>
      <Container>
        <Service />
        <ServiceShape />
        {!smallScreen && <ServiceShape />}
      </Container>
      <Container>
        <Price />
        <PriceShape />
      </Container>
      <Container>
        <Contact />
        <Footer />
      </Container>
    </>
  );
}

export default AppResponsive;







// const App = () => {
//   const smallScreen = window.screen.width <= 480 ? true : false;
//   return (
//     <>
//       <Container>
//         <Navbar />
//         <Intro />
//         <IntoShape />
//       </Container>
//       <Container>
//         <Feature />
//         <FeatureShape />
//       </Container>
//       <Container>
//         <Service />
//         {!smallScreen && <ServiceShape />}
//       </Container>
//       <Container>
//         <Price />
//         <PriceShape />
//       </Container>
//       <Container>
//         <Contact />
//         <Footer />
//       </Container>
//     </>
//   );
// };
