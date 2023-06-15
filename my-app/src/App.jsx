import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import Home1 from './components/Home1';
// import Home from './components/Home'
import Discover from './components/Discover';
function App() {
return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home1/>} />
        <Route path='/discover' element={<Discover/>}/>
      </Routes>
    </Router>
  );
}

export default App;
