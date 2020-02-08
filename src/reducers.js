const initialState = {
  posts: [],
  post: {},
};

export const reducers = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_POSTS':
      return Object.assign({}, state, { posts: action.posts });
    case 'SET_POST':
      return Object.assign({}, state, { post: action.post });
    default:
      return state;
  }
};
