import * as xl from "xlsx";

// export const readExcelFile = (e) => {
//     e.preventDefault();
//     console.log(e);
//     if (e.target.files) {
//         const reader = new FileReader();
//         reader.onload = (event) => {
//             console.log("hi", event);
//             const data = event.target.result;
//             const workbook = xl.read(data, { type: "array" });
//             const sheetName = workbook.SheetNames[0];
//             const worksheet = workbook.Sheets[sheetName];
//             const json = xl.utils.sheet_to_json(worksheet);
//             console.log(json);
//         };
//     }
// };

export const readExcelFile = (files, cb = async () => {}) => {
    // files is an array of file
    // if I just want the first file
    const file = files[0];
    let reader = new FileReader();

    console.log("reading excel", file);

    reader.onload = async function (e) {
        let data = new Uint8Array(e.target.result);
        let workbook = xl.read(data, { type: "array" });
        // find the name of your sheet in the workbook first
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];

        // convert to json format
        const jsonData = xl.utils.sheet_to_json(worksheet);
        console.log(jsonData);
        await cb(jsonData);
    };
    reader.readAsArrayBuffer(file);
};
