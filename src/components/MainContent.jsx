import TechnologiesContainer from "./TechnologiesContainer";
import AboutContainer from "./AboutContainer";

import "../styles/components/maincontent.sass";

const MainContent = () => {
  return (
    <main id="main-content">
      <AboutContainer />
      <TechnologiesContainer />
    </main>
  );
};

export default MainContent;
