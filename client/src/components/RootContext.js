import React, { useReducer, useContext, createContext } from 'react';

const RootContext = createContext({});

const initialState = {
    products: [],
    boxInProgress: { size: 0, content: null },
    order: {},
    orderStep: 0
};

const reducer = (oldState, { type, payload }) => {
    switch (type) {
        case 'SET_PRODUCTS':
            return { ...oldState, products: payload };
        case 'SET_BOX_IN_PROGRESS':
            return { ...oldState, boxInProgress: { ...oldState.boxInProgress, ...payload } };
        case 'SET_ORDER': // TODO
            return { ...oldState, order: { ...oldState.order, ...payload } };
        case 'SET_ORDER_STEP':
            return { ...oldState, orderStep: payload, };
        default:
            console.log('Dispatched action was not found:', type);
            return oldState;
    }
}

export const RootContextProvider = ({ children }) => {
    const [store, dispatcher] = useReducer(reducer, initialState);
    const dispatch = (type, payload) => dispatcher({ type, payload });

    return (
        <RootContext.Provider value={{ store, dispatch }}>
            {children}
        </RootContext.Provider>
    );
};

export const useRootContext = () => useContext(RootContext);