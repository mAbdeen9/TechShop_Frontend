function useStorage() {
  //
  const cart = JSON.parse(localStorage.getItem("CART")) || null;

  const addToLocalStorage = (data) => {
    if (cart && cart.length > 0) {
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

  const deleteItem = (item) => {
    const filteredCart = cart.filter((i) => i.id !== item.id);
    console.log(filteredCart);
    localStorage.setItem("CART", JSON.stringify(filteredCart));
  };

  return { addToLocalStorage, getCart, getSubtotal, deleteItem };
}

export default useStorage;
