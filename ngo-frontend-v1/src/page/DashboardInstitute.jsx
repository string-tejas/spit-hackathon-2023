import React, { useEffect, useState } from "react";
import CustomTable from "../components/CustomTable";
import Navbar from "../components/Navbar";
import StudentForm from "../components/StudentForm";
import { api } from "../queries";

const DashboardInstitute = () => {
    const [students, setStudents] = useState([]);

    const getStudents = () => {
        api.get("/student")
            .then((d) => {
                setStudents(d.data);
            })
            .catch((e) => console.log(e));
    };

    useEffect(() => {
        getStudents();
    });

    return (
        <div
            style={{
                background: "#eee",
            }}
        >
            <Navbar />
            <div
                style={{
                    background: "#eee",
                    width: "100%",
                    height: "91vh",
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        background: "#eee",
                        padding: "18px",
                        paddingTop: "24px",
                    }}
                >
                    <h2 style={{ alignSelf: "start", margin: "12px" }}>
                        Students Requiring Allocation
                    </h2>
                    <CustomTable
                        columns={["Name", "Age", "Address", "Stream"]}
                        data={students}
                    />
                </div>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        paddingTop: "24px",
                        background: "#eee",
                    }}
                >
                    <StudentForm inst cb={getStudents} />
                </div>
            </div>
        </div>
    );
};

export default DashboardInstitute;
