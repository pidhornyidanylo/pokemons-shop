import React, { useReducer, useState } from 'react'

import './quick-question.style.css';

const QuickQuestion = () => {
    const initialState = { count: 0, country: '' };

    const [ val, setVal ] = useState('');
    
    const handleInput = e => {
        e.preventDefault();
        setVal(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault();
        dispatch({ type: 'entercountry', payload: val })
    }

    function reducer (state, { type, payload }) {
        switch(type) {
            case 'increment':
                return { count: state.count + 1 }
            case 'decrement':
                return { count: state.count - 1 }
            case 'entercountry':
                return { country: payload }
            default:
                return state;
        }
    }

    const [ state, dispatch ] = useReducer(reducer, initialState);

  return (
    <div className='question-container'>
        <h2>Please, select your age</h2>
        <div className='buttons-container'>
            <button className='decrement' onClick={() => dispatch({type: 'decrement'})}>-</button>
            <span className='output'>{state.count}</span>
            <button className='increment'  onClick={() => dispatch({type: 'increment'})}>+</button>
        </div>
        <form onSubmit={e => handleSubmit(e)}>
            <input onChange={e => handleInput(e)} className='country' type="text" placeholder='In which country do you live?' />
            <p className='greet'>With love {state.country.length ? `to ${state.country} people` : ''}  from Ukraine Nation!</p>
        </form>
    </div>
  )
}

export default QuickQuestion
