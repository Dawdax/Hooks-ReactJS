import React from 'react'
import { CounterApp } from './01-useState/CounterApp'
import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook'
import { SimpleForm } from './02-useEffect/SimpleForm'

export const HooksApp = () => {
    return (
        <>
            <CounterApp />
            <h1> ______________________________________________________ </h1>
            <CounterWithCustomHook/>
            <h1> ______________________________________________________ </h1>
            <SimpleForm/>
        </>
    )
}