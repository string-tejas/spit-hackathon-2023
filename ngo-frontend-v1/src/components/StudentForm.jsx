import { Button, MenuItem, TextField } from "@mui/material";
import { useRef, useState } from "react";
import { useAuth } from "../context";
import { api } from "../queries";
import { readExcelFile } from "../utils/convertExcelToJson";
import convertKeysToLowerCase from "../utils/convertKeysToLowercase";

const StudentForm = ({ inst, cb = () => {} }) => {
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [age, setAge] = useState("");
    const [stream, setStream] = useState("");
    const [loading, setLoading] = useState(false);
    const streams = ["Class X", "Class XII", "JEE", "UPSC", "NEET"];
    const chooseRef = useRef();

    const { user } = useAuth();

    const onSubmit = async (e) => {
        e.preventDefault();
        const obj = {
            name,
            address,
            age,
            stream,
            addedBy: user.user._id,
        };
        console.log(obj);
        setLoading(true);
        try {
            const res = await api.post("/student/add", obj);
            setLoading(false);
            if (res.status === 200) {
                setName("");
                setAddress("");
                setAge("");
                setStream("");
                window.alert("Student added successfully");
                cb();
            }
        } catch (e) {
            console.log(e);
            window.alert(e.response.data.message);
        }
    };
    const keys = ["name", "address", "age", "stream"];

    const checkExcel = async (excelJson) => {
        let isValid = true;
        if (!excelJson || !excelJson.length) {
            window.alert("Invalid Excel file");
        } else {
            let filtered = [];
            for (let i = 0; i < excelJson.length; i++) {
                keys.forEach((key) => {
                    if (
                        !Object.keys(excelJson[i])
                            .map((e) => e.toLowerCase())
                            .includes(key.toLowerCase())
                    ) {
                        isValid = false;
                        window.alert(
                            "Excel file does not contain the necessary columns ! name, address, age, stream"
                        );
                        return;
                    }
                });
                filtered.push({
                    ...convertKeysToLowerCase(excelJson[i]),
                    [inst ? "addedByInst" : "addedBy"]: user.user._id,
                });
                console.log(filtered);
            }

            if (isValid) {
                console.log(filtered);
                const result = await api.post("/student/add-many", filtered);
                console.log(result);
                window.alert(result.data.message);
                cb();
            }
        }
    };

    return (
        <form
            onSubmit={onSubmit}
            style={{
                width: "90%",
                background: "white",
                borderRadius: "4px",
                boxShadow: "0 0 3px gray",
                padding: "12px 20px",
            }}
        >
            <h1 style={{ fontSize: "30px", marginBottom: "20px" }}>
                Enter student's details
            </h1>
            <TextField
                style={{
                    width: "90%",
                }}
                id="outlined-basic"
                label="Name"
                variant="outlined"
                value={name}
                required
                onChange={(e) => setName(e.target.value)}
            />
            <TextField
                style={{
                    width: "90%",
                    marginTop: "12px",
                }}
                multiline
                minRows={4}
                id="outlined-basic"
                label="Address"
                variant="outlined"
                required
                value={address}
                onChange={(e) => setAddress(e.target.value)}
            />
            <div style={{ display: "flex", width: "90%", marginTop: "12px" }}>
                <TextField
                    label="Age"
                    variant="outlined"
                    required
                    value={age}
                    type="number"
                    onChange={(e) => setAge(e.target.value)}
                />

                <TextField
                    select
                    style={{ width: "70%", marginLeft: "20px" }}
                    label="Stream"
                    value={stream}
                    defaultValue={streams[0]}
                    required
                    onChange={(e) => {
                        setStream(e.target.value);
                    }}
                >
                    {streams.map((option, i) => (
                        <MenuItem key={i} value={option}>
                            {option}
                        </MenuItem>
                    ))}
                </TextField>
            </div>

            <div style={{ marginTop: "20px", gap: "20px", display: "flex" }}>
                <Button color="success" variant="contained" type="submit">
                    Submit
                </Button>
                <Button color="error" variant="contained" type="reset">
                    Reset
                </Button>
                <Button
                    variant="outlined"
                    onClick={() => chooseRef.current.click()}
                >
                    Upload Excel Sheet
                </Button>
                <input
                    type="file"
                    accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
                    ref={chooseRef}
                    style={{ display: "none" }}
                    onChange={(e) => readExcelFile(e.target.files, checkExcel)}
                />
            </div>
        </form>
    );
};

export default StudentForm;
