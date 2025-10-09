// const BASE_URL = import.meta.env.VITE_API_URL;

// export const fetchAPI = async (endpoint, options = {}) => {
//   const res = await fetch(`${BASE_URL}${endpoint}`, options);
//   if (!res.ok) {
//     throw new Error(`API error: ${res.status}`);
//   }
//   return res.json();
// };



const BASE_URL = import.meta.env.VITE_API_URL;

// Helper to get token from Clerk
let getAuthToken = null;

// Call this from your components to set the token getter
export const setAuthTokenGetter = (getter) => {
  getAuthToken = getter;
};

export const fetchAPI = async (endpoint, options = {}) => {
  const headers = {
    'Content-Type': 'application/json',
    ...options.headers,
  };

  // Add Authorization header if token getter is available
  if (getAuthToken) {
    try {
      const token = await getAuthToken();
      if (token) {
        headers.Authorization = `Bearer ${token}`;
      }
    } catch (error) {
      console.error("Error getting auth token:", error);
    }
  }

  const res = await fetch(`${BASE_URL}${endpoint}`, {
    ...options,
    headers,
  });

  if (!res.ok) {
    const errorData = await res.json().catch(() => ({}));
    throw new Error(errorData.message || `API error: ${res.status}`);
  }

  return res.json();
};