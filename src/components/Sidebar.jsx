import SocialNetworkContainer from "./SocialNetworkContainer";
import InformationContainer from "./InformationContainer";

import { Link } from "react-router-dom";

import Avatar from "../assets/images/me.png";

import "../styles/components/sidebar.sass";

const Sidebar = () => {
  return (
    <aside id="sidebar" className="container">
      <img src={Avatar} alt="Rafael Duarte" />
      <p className="title">Developer</p>
      <SocialNetworkContainer />
      <InformationContainer />
      <Link to="/" className="btn" onSubmit={() => {return false}} />
    </aside>
  );
};

export default Sidebar;
