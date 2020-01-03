export function addToCarRequest(product) {
  return {
    type: '@car/ADD_PRODUCT',
    product,
  };
}

export function addToCarSuccess(product) {
  return {
    type: '@car/ADD_PRODUCT_SUCCESS',
    payload: product,
  };
}
