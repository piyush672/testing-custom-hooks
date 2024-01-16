// import { renderHook } from '@testing-library/react-native'
// import useHomeScreen from './useHomeScreenHook'
// import { act } from 'react-test-renderer'


// describe('useHomeScreen', () => {
//     test('increment the value', async () => {
//         try {
//             const { result } = renderHook(useHomeScreen)
//             await act(async () => {                          // Wrap any code rendering and triggering updates to your components into act() calls
//                 await new Promise((resolve) => setTimeout(() => resolve(true), 3000))
//             })
//             expect(result.current.counter).toBe(7)
//         } catch (err: any) {
//             console.log("error is", err.message)
//         }
//     })
// })