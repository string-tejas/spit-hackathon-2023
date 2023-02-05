import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context";
import Sidebar from "./SidebarElements";
import { BiLogOut } from "react-icons/bi";

const Index = () => {
    const [selected, setSelected] = useState(window.location.pathname);

    const auth = useAuth();

    const handleSelect = (path) => {
        setSelected(path);
    };

    return (
        <Sidebar.Container>
            <Sidebar.Header>
                <img
                    src="/yasham.jpeg"
                    style={{ borderRadius: "50%", width: "40%" }}
                />
                <span
                    style={{
                        color: "white",
                        fontFamily: "Outfit",
                    }}
                >
                    Yasham Foundation
                </span>
            </Sidebar.Header>

            <Sidebar.Separator />

            <Sidebar.Navigation>
                <Sidebar.Item
                    label={"Volunteers"}
                    selected={selected === "/dashboard"}
                    to="/dashboard"
                    onClick={() => handleSelect("/dashboard")}
                />
                <Sidebar.Item
                    label={"Institutes"}
                    to="/dashboard/institutes"
                    selected={selected === "/dashboard/institutes"}
                    onClick={() => handleSelect("/dashboard/institutes")}
                />
                <Sidebar.Item
                    to="/dashboard/students"
                    label={"Students"}
                    selected={selected === "/dashboard/students"}
                    onClick={() => handleSelect("/dashboard/students")}
                />
            </Sidebar.Navigation>

            <Sidebar.Separator />

            <Sidebar.Item
                icon={<BiLogOut />}
                label={"Logout"}
                style={{
                    marginTop: "auto",
                }}
                button
                onClick={auth.logOut}
            />
        </Sidebar.Container>
    );
};

export default Index;
