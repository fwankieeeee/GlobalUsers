const fetchUsers = async () => {
  try {
    const API_URL = process.env.EXPO_PUBLIC_API_URL;
    const response = await fetch(API_URL);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error ('Error fetching data'); 
  }
}

export default fetchUsers;