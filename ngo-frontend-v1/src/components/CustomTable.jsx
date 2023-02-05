import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from "@mui/material";
import React from "react";
import { v4 as uuid } from "uuid";

const CustomTable = ({ columns = [], data = [], onClickRow = () => {} }) => {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        {columns.map((e) => (
                            <TableCell key={uuid()}>{e}</TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((d) => {
                        return (
                            <TableRow
                                sx={{
                                    ":hover": {
                                        cursor: "pointer",
                                        background: "#eee",
                                    },
                                }}
                                key={uuid()}
                            >
                                {columns.map((i) => (
                                    <TableCell
                                        key={uuid()}
                                        onClick={() => {
                                            onClickRow(d);
                                        }}
                                    >
                                        {d[i.toLowerCase()]}
                                    </TableCell>
                                ))}
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default CustomTable;
