import { useAuth } from "../context";
import { useNavigate } from "react-router-dom";

export default function Protected({ children }) {
    const { user } = useAuth();
    const navigate = useNavigate();
    if (!user) navigate("/login");

    return children;
}
