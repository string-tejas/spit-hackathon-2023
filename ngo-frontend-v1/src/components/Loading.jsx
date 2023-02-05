const Loading = ({ children }) => {
    return (
        <div
            style={{
                width: "100%",
                height: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background:
                    "linear-gradient(175.93deg, #5f00d8 -10.23%, #b200f1 117.03%)",
            }}
        >
            Loading
        </div>
    );
};

export default Loading;
