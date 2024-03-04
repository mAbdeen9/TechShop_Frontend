//

//

function useStorage() {
  const addToLocalStorage = (data) => {
    const cart = localStorage.getItem("cart");
    if (!cart) {
      localStorage.setItem("cart", JSON.stringify([data]));
    } else {
      const cartArray = JSON.parse(cart);

      for (let index in cartArray) {
        if (cartArray[index].id === data.id) {
          cartArray[index].count = +cartArray[index].count + +data.count;
        } else {
          cartArray.push(data);
        }
      }

      localStorage.setItem("cart", JSON.stringify(cartArray));
    }
  };

  const getCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart"));
    return cart;
  };

  return { addToLocalStorage, getCart };
}

export default useStorage;
