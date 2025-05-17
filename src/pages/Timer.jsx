import { useSelector, useDispatch } from 'react-redux';
import {
    incrementHour, decrementHour,
    incrementMinute, decrementMinute,
    incrementSecond, decrementSecond, start_timer,timer_flag_changer,reset_timer
} from '../redux/counterSlice';
import { useState,useEffect, useRef } from 'react';
function Timer() {
    const dispatch = useDispatch();
    const hour = useSelector(state => state.myCount.hour_timer);
    const minute = useSelector(state => state.myCount.minute_timer);
    const second = useSelector(state => state.myCount.second_timer);
    const flag = useSelector(state => state.myCount.timer_flag);
    const intervalRef = useRef(null);
        const [arr, setArr] = useState([]);
        useEffect(() => {
            if (flag) {
                intervalRef.current = setInterval(() => {
                    dispatch(start_timer());
                }, 1000);
            } else {
                clearInterval(intervalRef.current);
            }
            return () => clearInterval(intervalRef.current);
        }, [flag, dispatch]);
        function startStop() {
            dispatch(timer_flag_changer());
        }
        function getNum(){
        setArr([...arr,hour + ":" + minute + ":" + second]);
        }
        function reset() {
            setArr([]);
            dispatch(reset_timer())
        }
    return (
        <div className="Timer">
            <div className='timer-container'>
            <div>
                <input type="text" placeholder="Saat" value={hour} />
                <button onClick={() => dispatch(incrementHour())}>+</button>
                <button onClick={() => dispatch(decrementHour())}>-</button>
            </div>
            <div>
                <input type="text" placeholder="Deqiqe" value={minute} />
                <button onClick={() => dispatch(incrementMinute())}>+</button>
                <button onClick={() => dispatch(decrementMinute())}>-</button>
            </div>
            <div>
                <input type="text" placeholder="Saniye" value={second} />
                <button onClick={() => dispatch(incrementSecond())}>+</button>
                <button onClick={() => dispatch(decrementSecond())}>-</button>
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

export default Timer;
