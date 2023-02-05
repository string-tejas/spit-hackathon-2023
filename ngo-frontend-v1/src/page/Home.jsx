import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <nav
            style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                height: "50px",
                backgroundColor: "#333",
                color: "#fff",
                padding: "0 28px",
                fontFamily: "Outfit, sans-serif",
            }}
        >
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    height: "50px",
                }}
            >
                <div
                    style={{
                        width: "50px",
                        height: "50px",
                        borderRadius: "25px",
                        backgroundColor: "#fff",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        marginRight: "10px",
                    }}
                >
                    <img
                        src="/yasham.jpeg"
                        alt="Logo"
                        style={{
                            width: "25px",
                            height: "25px",
                        }}
                    />
                </div>
                <div
                    style={{
                        fontWeight: "bold",
                        fontSize: "20px",
                    }}
                >
                    Yasham Foundation
                </div>
            </div>
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "20%",
                }}
            >
                <div
                    style={{
                        marginRight: "10px",
                        cursor: "pointer",
                        textDecoration: "underline",
                    }}
                >
                    Home
                </div>
                <Link
                    to="/signup"
                    style={{
                        marginRight: "10px",
                        cursor: "pointer",
                        textDecoration: "none",
                        color: "white",
                    }}
                >
                    Sign Up
                </Link>
                <Link
                    to="/login"
                    style={{
                        cursor: "pointer",
                        textDecoration: "none",
                        color: "white",
                    }}
                >
                    Login
                </Link>
            </div>
        </nav>
    );
};

const Home = () => {
    return (
        <>
            <Nav />
            <div
                style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <img src="/img.jpg" alt="img ngo" style={{ width: "75%" }} />
            </div>
            <div style={{ width: "100%", padding: "5rem 7rem" }}>
                <h1
                    style={{
                        fontFamily: "Outfit",
                        textAlign: "center",
                        fontSize: "2.4rem",
                        marginBottom: "2rem",
                    }}
                >
                    Yashaam Foundation
                </h1>
                <p
                    style={{
                        padding: "1rem",
                        fontFamily: "Outfit",
                        fontSize: "1.4rem",
                    }}
                >
                    Every child deserves a chance at life irrespective of his or
                    her background. We empower children to maximize their
                    potential and transform their lives Our endeavour is to
                    provide quality education, using the latest tools and
                    technology. We supplement formal school education by
                    conducting after school classes for students, to develop
                    them in to productive members of the society.
                </p>
            </div>
        </>
    );
};

export default Home;
