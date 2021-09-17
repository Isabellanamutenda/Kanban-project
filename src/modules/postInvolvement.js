const postLikes = async (item) => {
  console.log(item)
  const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/evHHvuIv3WOjJCJ4yH2P/likes', {
    method: 'POST',
    body: JSON.stringify({ item_id: item }),
    headers: {
      'Content-type': 'application/json; Charset=UTF-8',
    },
  });

  return response.text();
};

const postComments = async (button, userName, comment) => {
  const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/evHHvuIv3WOjJCJ4yH2P/comments', {
    method: 'POST',
    body: JSON.stringify({
      item_id: button,
      username: userName.value,
      comment: comment.value,
    }),
    headers: {
      'Content-type': 'application/json; Charset=UTF-8',
    },
  });

  return response.text();
};

export { postLikes, postComments };