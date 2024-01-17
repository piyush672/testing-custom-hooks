import { store } from '../../../../redux/store'
import reducer, { homeSliceActions } from './home.slice'

describe('test home slice', () => {

    test('test increment', () => {
        const state = store.getState()
        expect(reducer(state.homeReducer, homeSliceActions.incrementValue())).toEqual({ counter: 2 })
    })

    test('test decrement', () => {
        const state = store.getState()
        expect(reducer(state.homeReducer, homeSliceActions.decrementValue())).toEqual({ counter: 0 })
    })
})