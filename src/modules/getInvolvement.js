const getLikes = async () => {
  const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/evHHvuIv3WOjJCJ4yH2P/likes');
  return response.json();
};

const getComments = async (button) => {
  const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/evHHvuIv3WOjJCJ4yH2P/comments?item_id=${button}`);
  return response.json();
};

export { getLikes, getComments };
