import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Table from "../components/CustomTable";
import { api } from "../queries";
import { Box, Button, Modal, TextField } from "@mui/material";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "400px",
    height: "400px",

    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    fontFamily: "Outfit",
    pt: 2,
    px: 4,
    pb: 3,
};

const DashboardAdmin = () => {
    const [volunteers, setVolunteers] = useState([]);
    const [currVol, setCurrVol] = useState(null);
    const [modal, setModal] = useState(false);
    const [enCount, setEnCount] = useState(0);
    const [certAccount, setCertAccount] = useState("");

    useEffect(() => {
        api.get("/volunteer")
            .then((res) => {
                console.log(res.data);
                setVolunteers(res.data);
            })
            .catch((e) => console.log(e));
    }, []);

    const closeModal = () => setModal(false);

    const onRowClick = (volun) => {
        setModal(true);
        setCurrVol(volun);
        console.log("volun", volun);
    };

    useEffect(() => {
        if (currVol)
            api.post("/volunteer/contribution", { _id: currVol?._id }).then(
                (data) => {
                    console.log("count", data.data.count);
                    setEnCount(data.data.count);
                }
            );
    }, [currVol]);

    const onCertSendClick = async (e) => {
        e.preventDefault();
        if (certAccount) {
            const result = await api.post("/admin/issue-cert", {
                _id: currVol._id,
                accountOf: certAccount,
            });

            console.log(result);
        }
    };
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
                    <Table
                        columns={["Name", "Email", "Age", "Institute"]}
                        data={volunteers}
                        onClickRow={onRowClick}
                    />
                </div>
            </div>
            <Modal open={modal} onClose={closeModal}>
                <Box
                    sx={{ ...style, display: "flex", flexDirection: "column" }}
                >
                    <h2 style={{ fontFamily: "Outfit", marginBottom: "20px" }}>
                        {currVol?.name}
                    </h2>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "8px",
                        }}
                    >
                        <div>Age: {currVol?.age}</div>
                        <div>Institute: {currVol?.institute || "-"}</div>
                        <div>Students Enrolled By them: {enCount}</div>
                        <div style={{ marginTop: "12px" }}>
                            Issue Them a certificate on Account of :{" "}
                        </div>
                        <TextField
                            value={certAccount}
                            onChange={(e) => setCertAccount(e.target.value)}
                        />
                        <Button
                            variant="outlined"
                            color="success"
                            onClick={onCertSendClick}
                        >
                            Send
                        </Button>
                    </div>
                    <Button onClick={closeModal} style={{ marginTop: "auto" }}>
                        Close
                    </Button>
                </Box>
            </Modal>
        </>
    );
};

export default DashboardAdmin;
