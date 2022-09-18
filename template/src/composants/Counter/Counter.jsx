import './Counter.scss';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from '../Store/counterSlice';

export function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="wrapper">
      <div>
        <button
          onClick={() => dispatch(decrement())}
        >
          <span>-</span>
        </button>
        <span>{count}</span>
        <button
          onClick={() => dispatch(increment())}
        >
          <span>+</span>
        </button>
      </div>
    </div>
  );
}
