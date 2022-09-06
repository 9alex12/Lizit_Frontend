import { READ_USERS, LOADING, READ_LOCATION, ERROR } from "./actionTypes";

const initialState = {
  characters: [],
  loading: false,
  error: null
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LOADING:
      return { ...state, loading: true, error: null };
    case READ_USERS:
      return {
        ...state,
        characters: action.payload,
        loading: false,
        error: null
      };
    case READ_LOCATION:
      return {
        ...state,
        characters: action.payload,
        loading: false,
        error: null
      };
    case ERROR:
      return {};
    default: {
      return state;
    }
  }
}
