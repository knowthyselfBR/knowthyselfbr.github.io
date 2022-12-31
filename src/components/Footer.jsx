import { FaMailBulk } from "react-icons/fa";
import SocialNetworkContainer from "./SocialNetworkContainer";
import "../styles/components/socialnetworkcontainer.sass";
import "../styles/components/footer.sass";


import "../styles/components/navbar.sass";

const Footer = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">
                <SocialNetworkContainer />
                <section id="social-networks-footer-mail">
                    <a className="social-btn-footer-mail" id="mail" href="mailto:yourmail@domain.com">
                        <FaMailBulk>
                            <button onClick={() => window.location = "mailto:yourmail@domain.com"} />
                        </FaMailBulk>
                    </a>
                </section>
            </div>
        </nav>
    );
};

export default Footer;