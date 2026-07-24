import axios from "axios";

const API = axios.create({
  baseURL: "http://127.0.0.1:8000",
  headers: {
    "Content-Type": "application/json",
  },
});

export const generateStory = async (storyData) => {
  try {
    const response = await API.post(
      "/api/generate-story",
      storyData
    );

    return response.data;
  } catch (error) {
    console.error("========== API ERROR ==========");
    console.error(error);
    console.error("Message:", error.message);
    console.error("Response:", error.response);
    console.error("Request:", error.request);

    throw error;
  }
};