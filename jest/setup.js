// include this section and the NativeAnimatedHelper section for mocking react-native-reanimated
import '@testing-library/react-native/extend-expect';
import { RootState } from '../src/redux/store';

jest.mock('@react-navigation/native', () => ({
    ...jest.requireActual('@react-navigation/native'),
    NavigationContainer: ({ children }) => <>{children}</>,
}));

jest.mock('@react-navigation/native-stack', () => ({
    createNativeStackNavigator: () => ({
        Navigator: ({ children }) => <>{children}</>,
        Screen: jest.fn()
    }),
}));

jest.mock('react-redux', () => ({
    useSelector: jest.fn()
}))
