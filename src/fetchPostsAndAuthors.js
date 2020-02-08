export const fetchPostsAndAuthors = () => {
  const environment = process.env.NODE_ENV || 'production';
  const url = environment === 'production'
    ? 'https://lupus-yonderboy-go-env.wv5mqwfbqj.us-east-1.elasticbeanstalk.com/'
    : 'http://localhost:5000/';

  const fetchPosts = fetch(url + 'posts')
    .then((res) => res.json());

  const fetchAuthors = fetch(url + 'authors')
    .then((res) => res.json());

  const associatePostsWithAuthors = ({ postsRes, authorsRes }) => {
    const authors = {};
    const posts = [];
    for (let author of authorsRes) {
      authors[author.Id] = author.Name;
    }
    for (let post of postsRes) {
      posts.push({
        _authorName: authors[post.Author],
        ...post,
      });
    }
    return posts;
  };

  const fetchAll = () => Promise.all([fetchPosts, fetchAuthors])
    .then((res) => {
      return associatePostsWithAuthors({
          postsRes: res[0],
          authorsRes: res[1],
        });
      });

  return fetchAll();
};
