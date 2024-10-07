import './App.css';
import './index.css';
import Navbar from './components/navbar';
import Popular from './components/home';
import Contact from './components/contact'


function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
         <Navbar />
         <Popular />
         <Contact />


      {/* </header> */}
    </div>
  );
}

export default App;
