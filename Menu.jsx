import { NavLink } from 'react-router-dom';
export default function Menu() {
  return (
    <div className="Menu">
        <div className="nav">
          <NavLink  to="/clock">
            Clock
          </NavLink>
          <NavLink  to="/stopwatch">
            Stopwatch
          </NavLink>
          <NavLink  to="/timer">
            Timer
          </NavLink>
        </div>
    </div>
  );
}