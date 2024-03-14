import { useReducer } from 'react';

export const initialState = {
  title: '',
  content: '',
  posts: [],
  error: '',
};

export const ACTIONS = {
  CHANGE_VALUE: 'changeValue',
  ADD_POST: 'addPost',
  REMOVE_POST: 'removePost',
  ADD_ERROR: 'addError',
};

const postReducer = (state, action) => {
  const { type, value } = action.payload;
  switch (action.type) {
    case ACTIONS.CHANGE_VALUE:
      return {
        ...state,
        [type]: value,
        error: '',
      };
    case ACTIONS.ADD_POST:
        //console.log('Adding post:', state.title, state.content);
      return {
        ...state,
        title: '',
        content: '',
        error: '',
        posts: [
          ...state.posts,
          { id: Date.now(), title: state.title, content: state.content },
        ],
      };
    case ACTIONS.ADD_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case ACTIONS.REMOVE_POST:
      return {
        ...state,
        posts: state.posts.filter((post) => post.id !== action.payload),
      };
    default:
      return state;
  }
};

export default postReducer;
