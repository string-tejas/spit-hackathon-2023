import {
    AppBar,
    Button,
    Card,
    CardActions,
    CardContent,
    IconButton,
    TextField,
    Toolbar,
    Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import {
    CircularProgressbar,
    CircularProgressbarWithChildren,
} from "react-circular-progressbar";
import { BiLogOut } from "react-icons/bi";
import Navbar from "../components/Navbar";
import StudentForm from "../components/StudentForm";
import { useAuth } from "../context";
import { api } from "../queries";
import "react-circular-progressbar/dist/styles.css";
import { FaHandsHelping } from "react-icons/fa";
import { GiTeacher, GiPublicSpeaker } from "react-icons/gi";
import CustomTable from "../components/CustomTable";

const DashboardVolunteer = () => {
    const [count, setCount] = useState(0);
    const [students, setStudents] = useState([]);
    const { user } = useAuth();

    const getCount = () => {
        api.get("/volunteer/contribution")
            .then((res) => {
                setCount(res.data.count);
            })
            .catch((err) => console.log(err));
    };

    const getStudentsOfVolunteer = () => {
        api.get("/volunteer/enrolled")
            .then((res) => {
                console.log(res.data);
                setStudents(res.data);
            })
            .catch((err) => console.log(err.response.data));
    };

    useEffect(() => {
        getCount();
        getStudentsOfVolunteer();
    }, []);
    return (
        <div style={{ height: "100vh", background: "#eee" }}>
            <Navbar />
            <div
                style={{
                    background: "#eee",
                    width: "100%",
                    // height: "91vh",
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        paddingTop: "24px",
                    }}
                >
                    <Card sx={{ minWidth: 475 }}>
                        <CardContent>
                            <Typography
                                sx={{ fontSize: 18 }}
                                color="text.secondary"
                                gutterBottom
                            >
                                Your contributions
                            </Typography>
                            <Typography variant="body2">
                                {count === 0
                                    ? "Reach out to the deserving so that they can enjoy the fruits of education"
                                    : `${count} children have been blessed with the gift of education due to your efforts`}
                                <br />
                                {user?.user?.teachingHours
                                    ? `${user.user.teachingHours} hours you spent have made the world a better place`
                                    : "You can also eduacate the needy ! Bring Success to everyone"}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>

                    <Card sx={{ maxWidth: 510, marginTop: "20px" }}>
                        <CardContent
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-around",
                            }}
                        >
                            <div
                                style={{
                                    width: "20%",
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                }}
                            >
                                <CircularProgressbarWithChildren
                                    value={count}
                                    maxValue={10}
                                >
                                    <FaHandsHelping
                                        style={{ fontSize: "3rem" }}
                                    />
                                </CircularProgressbarWithChildren>
                                <span
                                    style={{
                                        textAlign: "center",
                                        fontSize: "0.9rem",
                                        marginTop: "12px",
                                    }}
                                >
                                    Help 10 students
                                </span>
                            </div>
                            <div
                                style={{
                                    width: "20%",
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                }}
                            >
                                <CircularProgressbarWithChildren
                                    value={
                                        (user?.user?.teachingHours || 0) / 12
                                    }
                                    maxValue={1}
                                >
                                    <GiTeacher style={{ fontSize: "3rem" }} />
                                </CircularProgressbarWithChildren>
                                <span
                                    style={{
                                        textAlign: "center",
                                        fontSize: "0.9rem",
                                        marginTop: "12px",
                                    }}
                                >
                                    Teach 20 hours
                                </span>
                            </div>
                            <div
                                style={{
                                    width: "20%",
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                }}
                            >
                                <CircularProgressbarWithChildren value={0}>
                                    <GiPublicSpeaker
                                        style={{ fontSize: "3rem" }}
                                    />
                                </CircularProgressbarWithChildren>
                                <span
                                    style={{
                                        textAlign: "center",
                                        fontSize: "0.9rem",
                                        marginTop: "12px",
                                    }}
                                >
                                    Spread Awareness
                                </span>
                            </div>
                        </CardContent>
                    </Card>
                </div>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        paddingTop: "24px",
                    }}
                >
                    <StudentForm
                        cb={() => {
                            getStudentsOfVolunteer();
                            getCount();
                        }}
                    />
                </div>
            </div>
            <div
                style={{
                    padding: "2rem",
                    width: "100%",
                    background: "#eee",
                }}
            >
                <h2 style={{ margin: "12px 20px" }}>
                    Student's whose life you made better :
                </h2>
                <CustomTable
                    columns={["Name", "Address", "Stream", "Age"]}
                    data={students}
                />
            </div>
        </div>
    );
};

export default DashboardVolunteer;
