import "../styles/components/informationcontainer.sass";

import { AiOutlineMail, AiFillEnvironment } from "react-icons/ai";

const InformationContainer = () => {
  return (
    <section id="information">
      <div className="info-card">
        <AiOutlineMail id="email-icon" />
        <div>
          <h3>E-mail</h3>
          <p>rd.dev.2022@gmail.com</p>
        </div>
      </div>
      <div className="info-card">
        <AiFillEnvironment id="pin-icon" />
        <div>
          <h3>localization</h3>
          <p>Rio de Janeiro - Brasil</p>
        </div>
      </div>
    </section>
  );
};

export default InformationContainer;
