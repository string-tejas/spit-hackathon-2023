import React from "react";
import { LoginForm } from "../components/LoginForm";
import { useAuth } from "../context";
import { api } from "../queries";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const { user, setUser } = useAuth();
    const navigate = useNavigate();
    const onSubmit = async (data, type) => {
        console.log(data);
        try {
            const result = await api.post(`/auth/login/${type}`, data);
            if (result.status === 200) {
                setUser({
                    token: result.data.token,
                    userType: result.data.userType,
                    user: result.data.user,
                });
                navigate("/dashboard");
            }
        } catch (e) {
            window.alert(e.response.data.message);
        }
    };
    return <LoginForm onSubmit={onSubmit} />;
};

export default Login;
