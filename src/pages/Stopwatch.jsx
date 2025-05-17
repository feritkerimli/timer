import { useSelector, useDispatch } from 'react-redux';
import { start_watch, watch_flag_changer, reset_watch } from '../redux/counterSlice';
import { useState, useEffect, useRef } from 'react';
function Stopwatch() {
    const dispatch = useDispatch();
    const hour = useSelector(state => state.myCount.hour_watch);
    const minute = useSelector(state => state.myCount.minute_watch);
    const second = useSelector(state => state.myCount.second_watch);
    const flag = useSelector(state => state.myCount.watch_flag);
    const intervalRef = useRef(null);
    const [arr, setArr] = useState([]);
    useEffect(() => {
        if (flag) {
            intervalRef.current = setInterval(() => {
                dispatch(start_watch());
            }, 1000);
        } else {
            clearInterval(intervalRef.current);
        }
        return () => clearInterval(intervalRef.current);
    }, [flag, dispatch]);
    function startStop() {
        dispatch(watch_flag_changer());
    }
    function getNum() {
        setArr([...arr, hour + ":" + minute + ":" + second]);
    }
    function reset() {
        setArr([]);
        dispatch(reset_watch())
    }
    return (
        <div className="Stopwatch">
            <div className='watch-container'>
                <div>
                    <input type="number" placeholder="Saat" value={hour} readOnly />
                </div>
                <div>
                    <input type="number" placeholder="Deqiqe" value={minute} readOnly />
                </div>
                <div>
                    <input type="number" placeholder="Saniye" value={second} readOnly />
                </div>
                <button onClick={startStop}>{flag ? 'Stop' : 'Start'}</button>
                <button onClick={reset}>Reset</button>
                <button onClick={getNum}>o</button>
                
            </div>
            {arr.map((elem) => (
                    <div key={elem} className="elem">
                        {elem}
                    </div>
                ))}
        </div>

    );
}

export default Stopwatch;

