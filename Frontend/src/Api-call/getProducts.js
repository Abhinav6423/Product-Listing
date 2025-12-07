import axios from "axios";

export const getProducts = async (page, limit) => {
  try {
    const res = await axios.get(
      `${import.meta.env.VITE_APP_BASE_URL}/api/products/list`,
      {
        params: { page, limit },
        withCredentials: true
      }
    );
    console.log(res.data )
    return res.data; // ✅ return pure data
  } catch (error) {
    // ✅ throw error so React Query can handle it
    throw new Error(
      error.response?.data?.message || "Failed to fetch products"
    );
  }
};
