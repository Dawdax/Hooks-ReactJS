import React from 'react'
import { useCounter } from '../hooks/useCounter'

export const CounterWithCustomHook = () => {

    const {counter, increment, reduce, reset} = useCounter();

    return (
        <>
            <h1>Counter with hooks: {counter} </h1>
            <hr />
            <button onClick={() => increment()} className='btn btn-primary'> +1 </button>
            <button onClick={() => reduce()} className='btn btn-info'> -1 </button>
            <button onClick={() => reset()} className='btn btn-danger'> Reset </button>
        </>
    )
}
