import { createStore } from "redux";

const initialState = {
  count: 0,
  firstName: '',
  lastName: '',
  email: ''
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        count: state.count + 1,
      };

    case "DECREMENT":
      if (state.count > 0) {
        return {
          ...state,
          count: state.count - 1,
        }
      };

    default:
      return state;
  }
}

const store = createStore(reducer);

export default store;
