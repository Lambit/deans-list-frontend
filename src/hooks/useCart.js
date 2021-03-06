import {useState} from 'react';

/* useCart sets the state of the cart to an empty array, and
houses functions to be used with in cart. They consist of
addToCart, subtractFromCart, and remove from cart. All these
function update the state.
 */ 

export default function useCart() {
    const [cartItems, setCartItems] = useState([]);
  
    function addToCart(coral) {
      setCartItems((prev) => {
        const existing = cartItems.find(
          (item) => item.id === coral.id,
        );
  
        return existing
          ? [
              ...cartItems.map((item) =>
                item.id === coral.id
                  ? { ...item, qty: item.qty + 1 }
                  : item,
              ),
            ]
          : [...prev, { ...coral, qty: 1 }];
      });
    }

    function subtractFromCart(coral, qty) {
        if (qty === 0) {
             return removeFromCart(coral);
        } else {
            setCartItems((prev) => {
              const existing = cartItems.find(
                (item) => item.id === coral.id,
              );
            
              return existing
                ? [
                    ...cartItems.map((item) =>
                      item.id === coral.id
                        ? { ...item, qty: item.qty - 1 }
                        : item,
                    ),
                  ]
                : [...prev, { ...coral, qty: 1 }];
            });
        }
    }
  
    function removeFromCart(coral) {
      setCartItems((prev) => [
        ...prev.filter((item) => item.id !== coral.id),
      ]);
    }

    return {
      cartItems,
      setCartItems,
      addToCart,
      subtractFromCart,
      removeFromCart,
    };
}