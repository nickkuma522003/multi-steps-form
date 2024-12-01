import React from "react";

const Step3 = ({ prevStep, formData }) => {
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    alert(`Form submitted successfully!\n\nData: ${JSON.stringify(formData, null, 2)}`);
    console.log("Submitted Data:", formData); // Optional: Log the data
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Review Your Details</h2>
      <div>
        <p><strong>Name:</strong> {formData.name}</p>
        <p><strong>Email:</strong> {formData.email}</p>
        <p><strong>Other Data:</strong> {formData.otherField}</p>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", marginTop: "20px" }}>
        <button type="button" onClick={prevStep}>
          Back
        </button>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default Step3;
