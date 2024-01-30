const BASE_URL = import.meta.env.VITE_API_BASE_URL;
const login = async (data) => {
  try {
    const response = await fetch(`${BASE_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(data),
    });
    const result = await response.json();
    if (!response.ok) {
      throw new Error(result.message);
    }
    return result;
  } catch (error) {
    throw new Error(error.message);
  }
}

export default login;