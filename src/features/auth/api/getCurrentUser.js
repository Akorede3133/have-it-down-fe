const BASE_URL = import.meta.env.VITE_API_BASE_URL;

const getCurrentUser = async () => {
  try {
    const response =await fetch(`${BASE_URL}/currentUser`);
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

export default getCurrentUser;