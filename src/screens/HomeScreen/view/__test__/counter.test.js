import Counter from '../counter';
import { fireEvent, render, renderHook, screen, waitFor, act } from '@testing-library/react-native';
import useHomeScreen from '../../hook/useHomeScreenHook';
import { useDispatch, useSelector } from 'react-redux';
import { store } from '../../../../redux/store';
import { homeSliceActions } from '../../redux/slice/home.slice';


describe("test counter component", () => {

    // test('counter increments correctly when increment button pressed', async () => {
    //     const { result } = renderHook(() => useHomeScreen())
    //     const { rerender } = render(<Counter
    //         counter={result.current.counter}
    //         incrementCounter={result.current.incrementCounter}
    //         decrementCounter={result.current.decrementCounter}
    //     />)

    //     await act(async () => {
    //         fireEvent.press(await screen.findByTestId('increment'))
    //     })

    //     await waitFor(async () => {
    //         rerender(<Counter
    //             counter={result.current.counter}
    //             incrementCounter={result.current.incrementCounter}
    //             decrementCounter={result.current.decrementCounter}
    //         />)
    //         const counterText = await screen.findByTestId('counter')
    //         expect(counterText).toHaveTextContent('5')
    //     })

    // });

    // test('counter renders correctly when decrement button pressed', async () => {
    //     const { result } = renderHook(() => useHomeScreen())
    //     const { rerender } = render(<Counter
    //         counter={result.current.counter}
    //         incrementCounter={result.current.incrementCounter}
    //         decrementCounter={result.current.decrementCounter}
    //     />)

    //     await act(async () => {
    //         fireEvent.press(await screen.findByTestId('decrement'))
    //     })

    //     await waitFor(async () => {
    //         rerender(<Counter
    //             counter={result.current.counter}
    //             incrementCounter={result.current.incrementCounter}
    //             decrementCounter={result.current.decrementCounter}
    //         />)
    //         const counterText = await screen.findByTestId('counter')
    //         expect(counterText).toHaveTextContent('2')
    //     })

    // });

    // test('counter renders correctly when decrement and increment buttons are pressed sequantially', async () => {
    //     const { result } = renderHook(() => useHomeScreen())
    //     const { rerender } = render(<Counter
    //         counter={result.current.counter}
    //         incrementCounter={result.current.incrementCounter}
    //         decrementCounter={result.current.decrementCounter}
    //     />)

    //     await act(async () => {
    //         fireEvent.press(await screen.findByTestId('increment'))
    //         fireEvent.press(await screen.findByTestId('decrement'))
    //     })

    //     await waitFor(async () => {
    //         rerender(<Counter
    //             counter={result.current.counter}
    //             incrementCounter={result.current.incrementCounter}
    //             decrementCounter={result.current.decrementCounter}
    //         />)
    //         const counterText = await screen.findByTestId('counter')
    //         expect(counterText).toHaveTextContent('4')
    //     })

    // });

    test('counter increments correctly when increment button pressed', async () => {
        const mockDispatch = jest.fn();
        useDispatch.mockReturnValue(mockDispatch);
        useSelector.mockImplementation((selectorFn) => selectorFn(store.getState()));

        const { result } = renderHook(() => useHomeScreen())

        render(<Counter
            counter={result.current.counter}
            incrementCounter={result.current.incrementCounter}
            decrementCounter={result.current.decrementCounter}
        />)

        await act(async () => {
            fireEvent.press(await screen.findByTestId('increment'))
        })

        await waitFor(async () => {
            expect(mockDispatch).toHaveBeenCalledWith(homeSliceActions.incrementValue());
        })
    });

    test('counter increments correctly when decrement button pressed', async () => {
        const mockDispatch = jest.fn();
        useDispatch.mockReturnValue(mockDispatch);
        useSelector.mockImplementation((selectorFn) => selectorFn(store.getState()));

        const { result } = renderHook(() => useHomeScreen())

        render(<Counter
            counter={result.current.counter}
            incrementCounter={result.current.incrementCounter}
            decrementCounter={result.current.decrementCounter}
        />)

        await act(async () => {
            fireEvent.press(await screen.findByTestId('decrement'))
        })

        await waitFor(async () => {
            expect(mockDispatch).toHaveBeenCalledWith(homeSliceActions.decrementValue());
        })
    });
})
