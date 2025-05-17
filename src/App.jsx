import './App.scss';
import Clock from './pages/Clock';
import Stopwatch from './pages/Stopwatch';
import Timer from './pages/Timer';
import Menu from './Menu';
import { Route,Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Menu/>
      <Routes>
        <Route path='/clock' element={<Clock/>}/>
        <Route path='/stopwatch' element={<Stopwatch/>}/>
        <Route path='/timer' element={<Timer/>}/>
      </Routes>
    </div>
  );
}

export default App;

