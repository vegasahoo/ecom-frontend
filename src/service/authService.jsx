import axiosInstance from "../api/axiosInstance";

export const loginUser = (data) => {
    return axiosInstance.post("/auth/login", data)
}

export const registerUser = (data) => {
    return axiosInstance.post("/auth/register", data)
}