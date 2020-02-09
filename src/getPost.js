export const getPost = (posts, id) => {
  return posts.find((p) => {
    return p.Id === id;
  });
};
