const BASE_URL = import.meta.env.VITE_API_BASE_URL;

const createComment = async (feedId, content) => {
  console.log(feedId, content);
  try {
    const response = await fetch(`${BASE_URL}/comments/${feedId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ content}),
      credentials: "include",
    })
    const result = await response.json();
    if (!response.ok) {
      console.log(result);
      throw new Error(result.message);
    }
    console.log(result);
    return result;
  } catch (error) {
    throw new Error(error.message);
  }
}

export default createComment;