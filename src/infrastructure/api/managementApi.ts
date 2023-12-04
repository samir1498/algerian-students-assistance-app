import axios from "./axios";

export const getAllManagers = async () => {
  try {
    const response = await axios.get("/management");
    if (response.status === 200) {
      return response.data;
    } else {
      console.error("Failed to fetch help requests");
      return;
    }
  } catch (error) {
    console.error("Error fetching help requests:", error);
    return;
  }
};
