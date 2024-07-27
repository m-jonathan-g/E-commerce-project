import { createContext, ReactNode, useContext, useReducer } from "react";

interface CartItem {
    name: string;
    description: string;
    price: number;
    category: string;
    subCategory: string;
    productionDate: string;
    images: {path: string}[];
}

interface CartState {
    items: CartItem[];
    count: number;
}


const initialState: CartState = {
    items: [],
    count: 0,
};

type CartAction = {type: 'ADD_ITEM_TO_CART'; payload: CartItem} | {type: 'REMOVE_FROM_CART'; payload: CartItem}

//cart reducer
const cartReducer = (state: CartState, action:CartAction) => {
    switch (action.type) {
        case 'ADD_ITEM_TO_CART':
            return {
                ...state,
                items: [...state.items, action.payload],
                count: state.count + 1
            };
        case 'REMOVE_FROM_CART':
            const updatedItems = state.items.filter(item => item.name !== action.payload.name) 
            return {
                ...state,
                items: updatedItems,
                count: state.count - 1
            };
        default:
            return state;
    }
}


//cart context
interface CartContextType{
    cart: CartState;
    addToCart: (item: CartItem) => void;
    removeFromCart: (item: CartItem) => void;
}

const cartContext = createContext<CartContextType | undefined>(undefined)

//cart provider
export const CartProvider = ({ children }: {children: ReactNode}) => {
    const [state, dispatch] = useReducer(cartReducer, initialState);

    const addToCart = (item: CartItem) => {
        dispatch({ type: 'ADD_ITEM_TO_CART', payload: item });
    }

    const removeFromCart = (item: CartItem) => {
        dispatch({ type: 'REMOVE_FROM_CART', payload: item });
    }

    return(
        <cartContext.Provider value={{ cart: state, addToCart, removeFromCart }}>
            {children}
        </cartContext.Provider>
    )
}

export const useCart = (): CartContextType => {
    const context = useContext(cartContext)
    if (!context){
        throw new Error('useCart must be used within a CartProvider')
    }
    return context;
}