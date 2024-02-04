const BASE_URL = import.meta.env.VITE_API_BASE_URL;

const getFeed = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/feeds/${id}`);
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
export default getFeed;