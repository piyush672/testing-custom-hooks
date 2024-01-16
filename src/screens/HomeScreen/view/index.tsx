import React from 'react'
import Counter from './counter'
import { View, StyleSheet } from 'react-native'

interface IHomeIndexProps {
    counter: number,
    incrementCounter: () => void
    decrementCounter: () => void
}

function HomeIndex(props: IHomeIndexProps) {

    return (
        <View style={style.main}>
            <Counter {...props} />
        </View>
    )
}

const style = StyleSheet.create({
    main: {
        flex: 1,
    }
})

export default HomeIndex