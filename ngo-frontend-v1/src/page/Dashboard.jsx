import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context";
import DashboardAdmin from "./DashboardAdmin";
import DashboardInstitute from "./DashboardInstitute";
import DashboardVolunteer from "./DashboardVolunteer";

const Dashboard = () => {
    const { user } = useAuth();
    if (!user) return <Navigate to="/login" />;

    if (user.userType === "admin") return <DashboardAdmin />;
    else if (user.userType === "volunteer") return <DashboardVolunteer />;
    else return <DashboardInstitute />;
};

export default Dashboard;
