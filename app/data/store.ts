import { Store as ReduxStore, createStore } from 'redux';
import createRootReducer, { RootState, RootAction } from './reducer';

export type Store = ReduxStore<RootState, RootAction>;

const configureStore = (initialState?: RootState): Store => {
    const rootReducer = createRootReducer();
    const store = createStore(rootReducer, initialState);

    return store;
}

export default configureStore;
