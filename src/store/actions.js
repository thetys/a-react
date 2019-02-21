import { SELECT_DOCUMENTATION_CONTENT } from './actionTypes';

export const selectDocumentationContent = (type, id) => ({
  type: SELECT_DOCUMENTATION_CONTENT,
  payload: {
    type,
    id,
  },
});
