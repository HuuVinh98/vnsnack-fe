const initState = {
  showCartBox: false,
  selectedProduct: {},
};
//ACTION
const SWITCH_CART_BOX = "switch_cart_box"; // change cartbox status
const SELECTED_PRODUCT = "selected_product";

const switchCartBox = (payload) => {
  return {
    type: SWITCH_CART_BOX,
    payload,
  };
};
const selectedProduct = (payload) => {
  return {
    type: SELECTED_PRODUCT,
    payload,
  };
};
function reducer(state, action) {
  switch (action.type) {
    case SWITCH_CART_BOX:
      return {
        ...state,
        showCartBox: action.payload,
      };
    case SELECTED_PRODUCT:
      return { ...state, selectedProduct: action.payload };
    default:
      throw new Error("Invalid action!");
  }
}
export { initState };
export { switchCartBox };
export { selectedProduct };
export default reducer;
