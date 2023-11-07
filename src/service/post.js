export const getPosts = async () => {
  const response = await fetch('http://localhost:3000/posts');
  const data = await response.json();
  return data;
}

export const getPostId = async (id) => {
  const response = await fetch(`http://localhost:3000/posts/${id}`);
  const data = await response.json();
  return data;
}

export const createNewPost = async (post) => {
  const response = await fetch('http://localhost:3000/posts', {
    method: 'POST',
    body: JSON.stringify(post),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  const data = await response.json();
  return data;
}
