const initialState = {
  posts: [],
  post: {},
  darkMode: true,
};

export const reducers = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_POSTS':
      return Object.assign({}, state, { posts: action.posts });
    case 'SET_POST':
      return Object.assign({}, state, { post: action.post });
    case 'SET_DARK':
      return Object.assign({}, state, { darkMode: true });
    case 'SET_LIGHT':
      return Object.assign({}, state, { darkMode: false });
    default:
      return state;
  }
};
