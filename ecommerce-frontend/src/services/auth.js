import api from "./api";

export const login = async (email, password) => {
    try {
        const res = await api.post("/auth/login", { email, password });
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user", JSON.stringify(res.data.user));
        return res.data.user;
    } catch (err) {
        throw new Error("login falhou");
        
    }
}