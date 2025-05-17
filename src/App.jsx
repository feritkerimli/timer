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
        <Route path='/timer/clock' element={<Clock/>}/>
        <Route path='/timer/stopwatch' element={<Stopwatch/>}/>
        <Route path='/timer/Timer' element={<Timer/>}/>
      </Routes>
    </div>
  );
}

export default App;

