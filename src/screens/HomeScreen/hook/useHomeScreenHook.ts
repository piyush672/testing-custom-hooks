import { useCallback, useEffect, useState } from "react"
import { Provider, useSelector } from "react-redux"
import { RootState, useAppDispatch } from "../../../redux/store"
import { homeSliceActions } from "../redux/slice/home.slice"

function simulateAPICall(): Promise<Boolean> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            return resolve(true)
        }, 800)
    })
}


function useHomeScreen() {

    const { counter } = useSelector((state: RootState) => state.homeReducer)
    const dispatch = useAppDispatch()

    const incrementCounter = async () => {
        await simulateAPICall()
        dispatch(homeSliceActions.incrementValue())

    }

    const decrementCounter = async () => {
        await simulateAPICall()
        dispatch(homeSliceActions.decrementValue())

    }

    // const [counter, setCounter] = useState(0)

    // useEffect(() => {
    //     setCounter(3)
    // }, [])

    // const incrementCounter = async () => {
    //     await simulateAPICall()
    //     setCounter((prevCounter) => prevCounter + 2)

    // }

    // const decrementCounter = async () => {
    //     await simulateAPICall()
    //     setCounter((prevCounter) => prevCounter - 1)

    // }

    return {
        counter,
        incrementCounter,
        decrementCounter
    }
}

export default useHomeScreen