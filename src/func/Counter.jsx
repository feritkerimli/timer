import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
const Counter = () => {
    const count = useSelector(state => state.myCount.value);
    // const dispatch = useDispatch();
  return (
    <div>
        <h1>Counter: {count}</h1>
    </div>
  )
}

export default Counter