import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    counter: 1
}

const homeSlice = createSlice({
    name: 'HomeSlice',
    initialState,
    reducers: {
        incrementValue: (state) => {
            state.counter += 1
        },
        decrementValue: (state) => {
            state.counter -= 1
        }
    }
})

export const homeSliceActions = { ...homeSlice.actions }
export default homeSlice.reducer