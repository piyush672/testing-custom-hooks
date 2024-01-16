import React, { PropsWithChildren, ReactNode } from 'react'
import { render } from '@testing-library/react-native'
import type { RenderOptions } from '@testing-library/react-native'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'

import type { store, RootState } from '../redux/store'
// As a basic setup, import your same slice reducers
import homeReducer from '../screens/HomeScreen/redux/home.slice'


interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
    preloadedState?: Partial<RootState>
    store?: typeof store
}

export function renderWithProviders(
    ui: React.ReactElement,
    {
        preloadedState = {},
        // Automatically create a store instance if no store was passed in
        store = configureStore({
            reducer: combineReducers({
                homeReducer
            }), preloadedState
        }),
        ...renderOptions
    }: ExtendedRenderOptions = {}
) {
    function Wrapper({ children }: PropsWithChildren<{}>): JSX.Element {
        return <Provider store={store}>{children}</Provider>
    }

    // Return an object with the store and all of RTL's query functions
    return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) }
}

export const StoreWrapper = ({ storeRef, children }: { storeRef: typeof store, children: ReactNode }) => <Provider store={storeRef}>{children}</Provider>