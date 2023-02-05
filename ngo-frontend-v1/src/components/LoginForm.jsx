import {
    FormControl,
    FormControlLabel,
    InputLabel,
    MenuItem,
    Radio,
    RadioGroup,
    Select,
    TextField,
} from "@mui/material";
import { useState } from "react";
import {
    Branding,
    BrandingInfo,
    BrandingSubtitle,
    BrandingTitle,
    ForgotLink,
    GradientBackground,
    ImageLogo,
    LoginCard,
    LoginForm as LF,
    LoginTitle,
    SubmitButton,
} from "./LoginItems";
import { PropagateLoader } from "react-spinners";

export function LoginForm({ onSubmit }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [submitting, setSubmitting] = useState(false);
    const [type, setType] = useState("volunteer");

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        setSubmitting(true);
        await onSubmit(
            {
                email,
                password,
            },
            type
        );
        setSubmitting(false);
    };

    const handleChange = (e) => {
        setType(e.target.value);
    };

    return (
        <GradientBackground>
            <LoginCard>
                <Branding>
                    <ImageLogo
                        src="/yasham.jpeg"
                        style={{ borderRadius: "50%" }}
                    />
                    <BrandingTitle>Yasham Foundation</BrandingTitle>
                    <BrandingSubtitle>
                        Login into your aaccount
                    </BrandingSubtitle>
                    <BrandingInfo>
                        Empower, Educate <br /> Enlighten
                    </BrandingInfo>
                </Branding>
                <LF onSubmit={handleFormSubmit}>
                    <LoginTitle style={{ marginBottom: "12px" }}>
                        Log In
                    </LoginTitle>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">
                            User Type
                        </InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={type}
                            label="Age"
                            onChange={handleChange}
                        >
                            <MenuItem value={"admin"}>Admin</MenuItem>
                            <MenuItem value={"volunteer"}>Volunteer</MenuItem>
                            <MenuItem value={"institute"}>Institute</MenuItem>
                        </Select>
                    </FormControl>
                    <TextField
                        fullWidth
                        margin="dense"
                        label="Email"
                        color="secondary"
                        type="email"
                        variant="standard"
                        value={email}
                        onChange={handleEmailChange}
                        sx={{ fontFamily: "Outfit" }}
                        required
                    />
                    <TextField
                        fullWidth
                        margin="dense"
                        label="Password"
                        color="secondary"
                        type="password"
                        variant="standard"
                        value={password}
                        onChange={handlePasswordChange}
                        sx={{ fontFamily: "Outfit" }}
                        required
                    />
                    {submitting ? (
                        <ButtonLoading />
                    ) : (
                        <SubmitButton type="submit" disabled={submitting}>
                            Continue
                        </SubmitButton>
                    )}
                    <div
                        style={{
                            marginTop: "2rem",
                            width: "100%",
                            display: "flex",
                            justifyContent: "center",
                        }}
                    >
                        <ForgotLink to={"/signup"}>Sign up</ForgotLink>
                    </div>
                </LF>
            </LoginCard>
        </GradientBackground>
    );
}
export const ButtonLoading = ({ color = "#9b00ea", marginTop = "1.6rem" }) => {
    return (
        <div
            style={{
                marginTop: marginTop,
                width: "100%",
                height: "43px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <PropagateLoader color={color} />
        </div>
    );
};
