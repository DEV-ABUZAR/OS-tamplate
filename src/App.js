import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import BasicExample from './components/Navbar';
import TextExample from './components/Ucards'
import Ucards from './components/Ucards';
import Images from './components/Images';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BasicExample/>
      
      </header>
      <Ucards />
        <div className="container">
        <div className="mid">      <hr className="line"></hr> <div className="work"> LATEST WORK</div> <hr className='line'></hr>
</div>
        </div>
        <Images/>
       

        <Footer/>
    </div>
  );
}


export default App;
