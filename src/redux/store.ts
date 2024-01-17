import { AnyAction, ThunkDispatch, combineReducers, configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import homeSlice from "../screens/HomeScreen/redux/slice/home.slice";

const reducers = combineReducers({
    homeReducer: homeSlice
})

export type RootState = ReturnType<typeof reducers>;
export type AppDispatch = ThunkDispatch<RootState, any, AnyAction>

export const useAppDispatch = () => useDispatch<AppDispatch>()

export const store = configureStore({
    reducer: reducers,
});

export const setupStore = (preloadedState?: Partial<RootState>) => {
    return configureStore({
        reducer: reducers,
        preloadedState
    })
}

export type AppStore = ReturnType<typeof setupStore>
