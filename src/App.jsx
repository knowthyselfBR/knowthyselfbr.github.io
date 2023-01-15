import MainContent from "./components/MainContent";
import Sidebar from "./components/Sidebar";
import "./styles/components/app.sass";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div id='portfolio'>
        <Sidebar />
        <MainContent />
      </div>
    </>
  );
}

export default App;
