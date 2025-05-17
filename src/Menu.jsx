import { NavLink } from 'react-router-dom';
export default function Menu() {
  return (
    <div className="Menu">
        <div className="nav">
          <NavLink  to="/timer/clock">
            Clock
          </NavLink>
          <NavLink  to="/timer/stopwatch">
            Stopwatch
          </NavLink>
          <NavLink  to="/timer/Timer">
            Timer
          </NavLink>
        </div>
    </div>
  );
}