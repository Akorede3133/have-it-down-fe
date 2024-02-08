const BASE_URL = import.meta.env.VITE_API_BASE_URL;

const destroyClap = async (commentId, userId ) => {
  console.log(commentId, userId);
  try {
    const response = await fetch(`${BASE_URL}/commentClaps/${commentId}/${userId}`, {
      method: 'DELETE',
      credentials: 'include',
    });
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

export default destroyClap;