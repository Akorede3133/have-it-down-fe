const BASE_URL = import.meta.env.VITE_API_BASE_URL;

const createClap = async (feedId) => {
  console.log(feedId);
  try {
    const response = await fetch(`${BASE_URL}/claps/${feedId}`, {
      method: 'POST',
      credentials: "include",
    })
    const result = await response.json();
    if (!response.ok) {
      throw new Error(result.message);
    }
    console.log(result);
    return result;
  } catch (error) {
    throw new Error(error.message);
  }
}

export const createCommentClap = async (commentId) => {
  console.log(commentId);
  try {
    const response = await fetch(`${BASE_URL}/claps/${commentId}`, {
      method: 'POST',
      credentials: "include",
    })
    const result = await response.json();
    if (!response.ok) {
      throw new Error(result.message);
    }
    console.log(result);
    return result;
  } catch (error) {
    throw new Error(error.message);
  }
}
export default createClap;