// Action
const GET_MESSAGE = "greetings/message";

// Action Creator
const getMessage = (message) => ({ type: GET_MESSAGE, payload: message });

// Reducer
export default function greetingsReducer(state = [], action = {}) {
  switch (action.type) {
    case GET_MESSAGE:
      return action.payload;
    default:
      return state;
  }
}

export { getMessage };
