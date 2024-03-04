//

//

function useStorage() {
  const addToLocalStorage = (data) => {
    const cart = JSON.parse(localStorage.getItem("CART")) || null;

    if (cart) {
      for (let index in cart) {
        if (cart[index].id === data.id) {
          cart[index].count = +cart[index].count + +data.count;
        } else {
          cart.push(data);
        }
      }
      localStorage.setItem("CART", JSON.stringify(cart));
      return;
    }

    localStorage.setItem("CART", JSON.stringify([data]));
  };

  const getCart = () => {
    const cart = JSON.parse(localStorage.getItem("CART"));
    return cart;
  };

  return { addToLocalStorage, getCart };
}

export default useStorage;
