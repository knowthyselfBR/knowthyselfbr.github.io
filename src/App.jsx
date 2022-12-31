import MainContent from "./components/MainContent";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

import "./styles/components/app.sass";


function App() {
  return (
    <>
      <Navbar />
      <div id='portfolio'>
        <Sidebar />
        <MainContent />
      </div>
      <Footer />
    </>
  );
}

export default App;
