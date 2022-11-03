import { useMemo } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

let store;

const initialState = {
    productBucket: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
        let existingItem = state.productBucket.find(
            (product) => action.data.productId === product.productId
        );

        if (existingItem) {
            existingItem.quantity += 1;
            return {
                ...state,
            };
        } else {
            return {
                ...state,
                productBucket: [...state.productBucket, action.data],
            };
        }

        case 'DECREASE_PRODUCT_QUANTITY':
        let existItem = state.productBucket.find(
            (product) => action.data.productId === product.productId
        );

        if (existItem) {
            existItem.quantity > 1 ? (existItem.quantity -= 1) : 1;
            return {
                ...state,
            };
        } else {
            return {
                ...state,
                productBucket: [...state.productBucket, action.data],
            };
        }

        case 'REMOVE_CART_ITEM':
        return {
                ...state,
                productBucket: state.productBucket.filter(
                (product) => product.productId !== action.data
            ),
        };

        default:
        return state;
    }
};

    function initStore(preloadedState = initialState) {
        return createStore(
            reducer,
            preloadedState,
            composeWithDevTools(applyMiddleware())
        );
    }

    export const initializeStore = (preloadedState) => {
    let _store = store ?? initStore(preloadedState);

    // After navigating to a page with an initial Redux state, merge that state
    // with the current state in the store, and create a new store
    if (preloadedState && store) {
        _store = initStore({
            ...store.getState(),
            ...preloadedState,
        });
        // Reset the current store
        store = undefined;
    }

    // For SSG and SSR always create a new store
    if (typeof window === 'undefined') return _store;
    // Create the store once in the client
    if (!store) store = _store;

    return _store;
};

export function useStore(initialState) {
    const store = useMemo(() => initializeStore(initialState), [initialState]);
    return store;
}
