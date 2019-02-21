import { SELECT_DOCUMENTATION_CONTENT } from '../actionTypes';

export default function (state = null, action) {
  switch (action.type) {
    case SELECT_DOCUMENTATION_CONTENT: {
      const { type, id } = action.payload;
      return {
        ...state,
        type,
        id
      };
    }
    default:
      return state;
  }
}
