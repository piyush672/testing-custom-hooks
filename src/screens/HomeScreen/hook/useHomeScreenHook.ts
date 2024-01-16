import { useCallback, useEffect, useState } from "react"

function simulateAPICall(): Promise<Boolean> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            return resolve(true)
        }, 800)
    })
}

function useHomeScreen() {

    const [counter, setCounter] = useState(0)

    useEffect(() => {
        setCounter(3)
    }, [])

    const incrementCounter = async () => {
        await simulateAPICall()
        setCounter((prevCounter) => prevCounter + 2)

    }

    const decrementCounter = async () => {
        await simulateAPICall()
        setCounter((prevCounter) => prevCounter - 1)

    }

    return {
        counter,
        incrementCounter,
        decrementCounter
    }
}

export default useHomeScreen