import { useReducer } from "react";    //can be used useState

import CartContext from "./cart-context";

const defaultCartState = {
    items: [],
    totalAmount: 0,
};

//cartReducer outside of the component bcs dont need to use any data from this component & shouldnt been recreated all the time when the component is reevaluated
const cartReducer = (state, action) => {
    if (action.type === 'ADD_ITEM') {
        const updatedItems = state.items.concat(action.item);
        const updatedTotalAmount = state.totalAMount + action.item.price * action.item.amount;
        return {
            items: updatedItems,
            totalAMount: updatedTotalAmount
        }
    }
    return defaultCartState;
};

const CartProvider = props => {
    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

    const addItemToCarthandler = (item) => {
        dispatchCartAction({ type: 'ADD_ITEM', item: item });
    };

    const removeItemFromCartHandler = (id) => {
        dispatchCartAction({ type: 'REMOVE', id: id })
    };

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCarthandler,
        removeItem: removeItemFromCartHandler,
    };

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    );
};

export default CartProvider;