import React, { useReducer, useEffect, useMemo } from "react";
import { CartContext } from "./CartContext";

function makeKey(item) {
  const bits = [item.id, item.variant, item.size, item.color].filter(Boolean);
  return item.key ?? bits.join("|");
}

const initialState = { items: [], isOpen: false };

function reducer(state, action) {
  switch (action.type) {
    case "HYDRATE":
      return { ...state, ...action.payload };
    case "TOGGLE":
      return { ...state, isOpen: !state.isOpen };
    case "OPEN":
      return { ...state, isOpen: true };
    case "CLOSE":
      return { ...state, isOpen: false };
    case "ADD_ITEM": {
      const { item, qty = 1 } = action.payload;
      const key = makeKey(item);
      const idx = state.items.findIndex((i) => i.key === key);
      const items =
        idx > -1
          ? state.items.map((i) =>
              i.key === key ? { ...i, qty: Math.min(i.qty + qty, 99) } : i
            )
          : [...state.items, { ...item, key, qty: Math.max(qty, 1) }];
      return { ...state, items, isOpen: true };
    }
    case "INC_QTY": {
      const key = action.payload;
      const items = state.items.map((i) =>
        i.key === key ? { ...i, qty: Math.min(i.qty + 1, 99) } : i
      );
      return { ...state, items };
    }
    case "DEC_QTY": {
      const key = action.payload;
      const items = state.items
        .map((i) => (i.key === key ? { ...i, qty: Math.max(i.qty - 1, 0) } : i))
        .filter((i) => i.qty > 0);
      return { ...state, items };
    }
    case "REMOVE": {
      const idOrKey = action.payload;
      const items = state.items.filter(
        (i) => i.key !== idOrKey && i.id !== idOrKey
      );
      return { ...state, items };
    }
    case "CLEAR":
      return { ...state, items: [] };
    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("cart:v1");
      if (raw) dispatch({ type: "HYDRATE", payload: JSON.parse(raw) });
    } catch (e) {
      if (import.meta?.env?.DEV) console.warn("Cart hydrate error:", e);
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem("cart:v1", JSON.stringify(state));
    } catch (e) {
      if (import.meta?.env?.DEV) console.warn("Cart persist error:", e);
    }
  }, [state]);

  const { count, subtotal } = useMemo(() => {
    const count = state.items.reduce((s, it) => s + it.qty, 0);
    const subtotal = state.items.reduce((s, it) => s + it.price * it.qty, 0);
    return { count, subtotal };
  }, [state.items]);

  const addToCart = (item, qty = 1) =>
    dispatch({ type: "ADD_ITEM", payload: { item, qty } });
  const removeFromCart = (idOrKey) =>
    dispatch({ type: "REMOVE", payload: idOrKey });
  const inc = (key) => dispatch({ type: "INC_QTY", payload: key });
  const dec = (key) => dispatch({ type: "DEC_QTY", payload: key });
  const clear = () => dispatch({ type: "CLEAR" });
  const toggle = () => dispatch({ type: "TOGGLE" });
  const open = () => dispatch({ type: "OPEN" });
  const close = () => dispatch({ type: "CLOSE" });

  return (
    <CartContext.Provider
      value={{
        cart: state.items,
        items: state.items,
        isOpen: state.isOpen,
        addToCart,
        removeFromCart,
        inc,
        dec,
        clear,
        toggle,
        open,
        close,
        count,
        subtotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
