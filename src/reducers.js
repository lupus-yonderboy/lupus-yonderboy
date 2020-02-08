const initialState = {
  posts: [],
};

export const reducers = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_POSTS':
      return Object.assign({}, state, { posts: action.posts });
    default:
      return state;
  }
};
