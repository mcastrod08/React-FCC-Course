import './App.css';
import Navbar from "./Navbar/Navbar";
import Main from "./Main/Main";
import Footer from "./Footer/Footer"

function App() {
  return (
    <div className="App">
      <Navbar/>
    	<Main/>  
    	<Footer name="María Castro"/>  
    </div>
  );
}

export default App;