import { useNavigate } from "react-router-dom";
import SignUpForm from "../components/SignUpForm";
import { useAuth } from "../context";
import { api } from "../queries";

const SignUp = () => {
    const { setUser } = useAuth();
    const navigate = useNavigate();
    const onSubmit = async (data, type) => {
        console.log(data);
        try {
            const result = await api.post(`/${type}`, data);
            if (result.status === 200) {
                window.alert("Sign Up successful");
                navigate("/dashboard");
            }
        } catch (e) {
            window.alert(e.response.data.message);
        }
    };
    return <SignUpForm onSubmit={onSubmit} />;
};

export default SignUp;
