const BASE_URL = import.meta.env.VITE_API_BASE_URL;

const createFeed = async (data) => {
  console.log(data);
  try {
    const response = await fetch(`${BASE_URL}/feeds`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
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
export default createFeed;