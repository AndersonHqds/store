export function addToCarRequest(product) {
  return {
    type: '@car/ADD_PRODUCT',
    product,
  };
}

export function updateQuantitySuccess(product, quantity) {
  return {
    type: '@car/UPDATE_QUANTITY_SUCCESS',
    payload: { product, quantity },
  };
}

export function addToCarSuccess(product) {
  return {
    type: '@car/ADD_PRODUCT_SUCCESS',
    payload: { product },
  };
}
