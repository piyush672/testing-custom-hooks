import React from 'react'
import { Provider } from 'react-redux'
import { type store, type RootState, setupStore } from '../redux/store'


export const renderWithProviders = () => {
    const store = setupStore()
    return ({ children }: { children?: React.ReactNode }) => <Provider store={store}>{children}</Provider>
}
