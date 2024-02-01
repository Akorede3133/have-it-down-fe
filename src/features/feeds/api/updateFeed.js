const BASE_URL = import.meta.env.VITE_API_BASE_URL;

const updateFeed = async (data, id) => {
  try {
    const response = await fetch(`${BASE_URL}/feeds/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
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
export default updateFeed;