import SocialNetworkContainer from "./SocialNetworkContainer";
import InformationContainer from "./InformationContainer";

import Avatar from "../assets/images/me.png";

import "../styles/components/sidebar.sass";

const Sidebar = () => {
  return (
    <aside id="sidebar" className="container">
      <img src={Avatar} alt="Rafael Duarte" />
      <p className="title">Developer</p>
      <SocialNetworkContainer />
      <InformationContainer />
      <a href="#" className="btn" onsubmit="return false">
      
      </a>
    </aside>
  );
};

export default Sidebar;
