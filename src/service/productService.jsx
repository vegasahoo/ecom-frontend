import axiosInstance from "../api/axiosInstance";

export const getAllProducts = async () => {
    return await axiosInstance.get("/product/all")
}

export const registerUser = async (data) => {
    return await axiosInstance.post("/auth/register", data)
}