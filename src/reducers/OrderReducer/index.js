const initialState = [];

const type = {
  ADD_ORDER_ITEM: "ADD_ORDER_ITEM"
};

export function addOrderItem(item) {
  return { type: type.ADD_ORDER_ITEM, item };
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case type.ADD_ORDER_ITEM:
      return [ ...state, action.item ];
    default:
      return state;
  }
}
