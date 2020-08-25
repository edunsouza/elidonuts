import React, { useReducer, useContext, createContext } from 'react';

const RootContext = createContext({});

const initialState = {
    products: [],
    order: {},
    selectedBoxes: []
};

const reducer = (oldState, { type, payload }) => {
    switch (type) {
        case 'SET_PRODUCTS':
            return { ...oldState, products: payload };
        case 'SET_ORDER': // TODO
            return oldState;
        case 'SET_SELECTED_BOXES': // TODO
            return oldState;
        default:
            console.log('Dispatched action was not found:', type);
            return oldState;
    }
}

export const RootContextProvider = ({ children }) => {
    const [store, dispatch] = useReducer(reducer, initialState);
    return (
        <RootContext.Provider value={{ store, dispatch }}>
            {children}
        </RootContext.Provider>
    );
};

export const useRootContext = () => useContext(RootContext);