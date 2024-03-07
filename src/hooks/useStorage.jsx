function useStorage() {
  //
  const cart = JSON.parse(localStorage.getItem("CART")) || null;

  const addToLocalStorage = (data) => {
    if (cart) {
      for (let index in cart) {
        if (cart[index].id === data.id) {
          cart[index].count = +cart[index].count + +data.count;
        } else {
          console.log("else");
          cart.push(data);
        }
      }
      localStorage.setItem("CART", JSON.stringify(cart));
      return;
    }
    localStorage.setItem("CART", JSON.stringify([data]));
  };

  const getCart = () => {
    return cart;
  };

  const getSubtotal = () => {
    let subTotal = 0;
    if (cart) {
      for (let index in cart) {
        subTotal = subTotal + +cart[index].count * +cart[index].price;
      }
    }

    return subTotal.toFixed(2);
  };

  return { addToLocalStorage, getCart, getSubtotal };
}

export default useStorage;
