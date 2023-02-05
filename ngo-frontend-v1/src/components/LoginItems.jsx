import styled from "@emotion/styled";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export const GradientBackground = styled.div`
    width: 100%;
    height: 100vh;
    background: linear-gradient(175.93deg, #5f00d8 -10.23%, #b200f1 117.03%);
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const LoginCard = styled.div`
    width: min(700px, 90%);
    min-height: 370px;
    background-color: white;
    border-radius: 20px;
    box-shadow: 0 0 2px black, 0 0 20px rgba(0, 0, 0, 0.3);
    display: grid;
    grid-template-columns: 1fr 1fr;

    @media (max-width: 800px) {
        display: flex;
        flex-direction: column;
    }
`;

export const Branding = styled.div`
    background: linear-gradient(to bottom right, #a610a3, #4c1980);
    border-top-left-radius: 18px;
    border-bottom-left-radius: 18px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ImageLogo = styled.img`
    margin-top: 3rem;
    height: 5rem;
`;

export const BrandingTitle = styled.h1`
    font-family: "Outfit";
    color: white;
    margin: 0;
    padding: 0;
    margin-top: 1rem;
    font-weight: 600;
`;

export const BrandingSubtitle = styled.h3`
    font-family: "Outfit";
    color: white;
    margin: 0;
    padding: 0;
    margin-top: 0.4rem;
    font-weight: 200;
`;

export const BrandingInfo = styled.span`
    font-family: "Outfit";
    color: #ffddff;
    font-size: 1.2rem;
    margin: 0;
    padding: 0;
    margin-top: 3.8rem;
    font-weight: 400;
    display: flex;
    align-items: center;
    padding: 0 2rem;
    text-align: center;
`;

export const LoginForm = styled.form`
    padding: 1.3rem 2.2rem;
    padding-top: 0;
`;

export const LoginTitle = styled.h1`
    font-size: 1.8rem;
    font-weight: 500;
    font-family: "Outfit";
    margin-top: 3rem;
`;

export const LoginSubtitle = styled.h4`
    font-size: 1rem;
    font-family: "Outfit";
    margin: 0;
    margin-top: 0.5rem;
    font-weight: 200;
`;

export const SubmitButton = styled(Button)`
    background: linear-gradient(175.93deg, #5f00d8 -10.23%, #b200f1 117.03%);
    width: 100%;
    margin-top: 2rem;
    text-transform: none;
    color: white;
    font-family: "Outfit";
`;

export const ForgotLink = styled(Link)`
    color: darkblue;
    text-decoration: none;
    font-family: "Outfit";
    font-size: 15px;

    &:hover {
        text-decoration: underline;
    }
`;
