import React from "react";
import Wrapper from "./components/Wrapper";
import PictureContainer from "./components/PictureContainer";
import InfoContainer from "./components/InfoContainer";
import Footer from "./components/Footer";

function App() {
  return (
    <Wrapper>
      <PictureContainer />
      <InfoContainer />
      <Footer />
    </Wrapper>
  );
}

export default App;
