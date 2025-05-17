import React, { use } from 'react'
import { useDispatch } from 'react-redux'
import { increment } from '../redux/counterSlice'
const Increment = () => {
    const dispatch = useDispatch()
  return (
    <div>
        <button onClick={() => dispatch(increment())}>Increment</button>
    </div>
  )
}

export default Increment