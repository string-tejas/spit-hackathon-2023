import { useEffect, useState } from "react";
import CustomTable from "../components/CustomTable";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { api } from "../queries";

const DashAdminViewsStudent = () => {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        api.get("/student")
            .then((res) => {
                console.log(res.data);
                const arr = [];
                res.data.forEach((e) => {
                    arr.push({
                        ...e,
                        addedby: e.addedBy?.name || e.addedByInst?.name,
                        institutealloted: e.instituteAlloted,
                    });
                });
                console.log("arr", arr);
                setStudents(arr);
            })
            .catch((e) => console.log(e));
    }, []);

    return (
        <>
            <Navbar />
            <div
                style={{
                    background: "#eee",
                    width: "100%",
                    height: "92vh",
                    display: "grid",
                    gridTemplateColumns: "1fr 4fr",
                }}
            >
                <div
                    style={{
                        background: "#ddd",
                        width: "100%",
                        height: "100%",
                    }}
                >
                    <Sidebar />
                </div>
                <div
                    style={{
                        maxHeight: "100%",
                        overflow: "auto",
                    }}
                >
                    <CustomTable
                        columns={[
                            "Name",
                            "Address",
                            "Age",
                            "Institute Alloted",
                            "Stream",
                            "addedBy",
                        ]}
                        data={students}
                    />
                </div>
            </div>
        </>
    );
};

export default DashAdminViewsStudent;
