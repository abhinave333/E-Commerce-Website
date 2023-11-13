import axios from "axios";

const BASE_URL = "http://localhost:5000/api"
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NTA2NTkwZjEzZjlhNjA5NDdmYjBlNSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY5OTc2NzgxNiwiZXhwIjoxNzAwMDI3MDE2fQ.Qi4FYYNn0AS1qXjAM_5f0wK3BwYW1rLXjjndkLQBD_g"

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header:{token:`Bearer ${TOKEN}`},
});