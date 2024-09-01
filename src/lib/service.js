import axios from 'axios';


async function getData(userId) {
  try {
    
    const userResponse = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
    const userData = userResponse.data;

    
    const postsResponse = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
    const postsData = postsResponse.data;

    
    return {
      id: userData.id,
      name: userData.name,
      username: userData.username,
      email: userData.email,
      address: userData.address,
      phone: userData.phone,
      website: userData.website,
      company: userData.company,
      posts: postsData
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}

export default getData;
