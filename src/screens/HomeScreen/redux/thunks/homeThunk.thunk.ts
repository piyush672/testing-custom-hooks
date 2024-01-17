import { createAsyncThunk } from "@reduxjs/toolkit";

export const homeThunk = createAsyncThunk('homeThunk', async (_, thunkApi) => {
    try {
        function getDefaultAutoSelectFamily(): Promise<{ error: string }> {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    reject({ error: "Some error" })
                }, 400)
            })
        }

        const data = await getDefaultAutoSelectFamily()
        if (data.error) {
            throw new Error(data.error)
        }
        return data
    } catch (error) {
        return thunkApi.rejectWithValue(error.message)
    }
})  