import logo from "./logo192.png"; // Make sure the logo is in your src folder

// ============================== Exercise 2 ==============================
const AppLogo = () => (
    <div style={{ textAlign: "center" }}>
        {" "}
        {/* Center align the content */}
        <img
            src={logo}
            alt="React Logo"
            style={{ width: "200px", marginTop: "50px" }}
        />{" "}
        {/* Image with styles */}
        <p style={{ fontStyle: "italic" }}>
            This is the React logo! <br />
            (I don't know why it is here either)
        </p>
        <p>The library for web and native user interfaces</p>
    </div>
);

export default AppLogo;