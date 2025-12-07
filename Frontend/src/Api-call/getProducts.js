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

    return {
      success: true,
      message: "Products fetched successfully",
      data: res.data
    };
  } catch (error) {
    return {
      success: false,
      message: error.response?.data?.message || error.message
    };
  }
};
