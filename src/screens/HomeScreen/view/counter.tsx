import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

interface ICounterProps {
    counter: number,
    incrementCounter: () => void
    decrementCounter: () => void
}
function Counter(props: ICounterProps) {
    return (
        <View style={style.main}>
            <Text testID='counter'>{props.counter}</Text>
            <View style={style.button}>
                <Button onPress={props.incrementCounter} title='Increment' testID='increment' />
            </View>
            <Button onPress={props.decrementCounter} title='Decrement' testID='decrement' />
        </View>
    )
}

const style = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        marginVertical: 10
    }
})

export default React.memo(Counter)