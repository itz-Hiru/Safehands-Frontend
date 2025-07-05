import toast from "react-hot-toast";
import axiosInstance from "./axiosInstance.util";
import { API_PATHS } from "./apiPaths.util";

const uploadImage = async (imageFile) => {
  const formData = new FormData();
  formData.append("image", imageFile);

  try {
    const response = await axiosInstance.post(
      API_PATHS.IMAGE.UPLOAD_IMAGE,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return response.data;
  } catch (error) {
    toast.error("Error while uploading image");
    console.error("Error while uploading image", error);
    throw error;
  }
};

export default uploadImage;
