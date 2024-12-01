import React from "react";
import MultiStepForm from "./MultiStepForm";

const App = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh", backgroundColor: "#f0f0f0" }}>
      <div style={{ width: "90%", maxWidth: "500px", padding: "20px", backgroundColor: "#ffffff", borderRadius: "8px", boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)" }}>
        <h1 style={{ textAlign: "center", color: "#333" }}>Multi-Step Form</h1>
        <MultiStepForm />
      </div>
    </div>
  );
};

export default App;
