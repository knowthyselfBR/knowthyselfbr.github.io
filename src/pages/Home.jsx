import MainContent from "../components/MainContent";
import Sidebar from "../components/Sidebar";
import "../styles/components/app.sass";
import Navbar from "../components/Navbar";

function Home () {
    return (
          <div id='portfolio'>
            <Sidebar />
            <MainContent />
          </div>
    )
}

export default Home;