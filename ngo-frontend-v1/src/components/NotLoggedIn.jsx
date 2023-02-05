import { useAuth } from "../context";
import { Navigate, useNavigate } from "react-router-dom";

export default function NotLoggedIn({ children }) {
    const { user } = useAuth();
    console.log(user);
    if (user) return <Navigate to="/dashboard" />;

    return children;
}
