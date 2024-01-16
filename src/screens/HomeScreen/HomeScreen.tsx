import React from 'react'
import useHomeScreen from './hook/useHomeScreenHook'
import HomeIndex from './view'

function HomeScreen() {
    const {
        counter,
        incrementCounter,
        decrementCounter
    } = useHomeScreen()
    return (
        <HomeIndex
            counter={counter}
            incrementCounter={incrementCounter}
            decrementCounter={decrementCounter}
        />
    )
}

export default HomeScreen