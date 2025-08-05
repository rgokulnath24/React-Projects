import { useNavigate } from "react-router-dom";

export default function Apply() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "30px",
        textAlign: "center",
        boxSizing: "border-box"
      }}
    >
      <h2>🎉 Thank you for applying!</h2>
      <p>We’ll get back to you soon.</p>
      <button
        onClick={() => navigate("/")}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer"
        }}
      >
        Back to Jobs
      </button>
    </div>
  );
}
