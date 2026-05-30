import { useState } from "react";
import "../styles/AiGuide.css";

function UploadPage() {
  const [image, setImage] = useState(null);
  const [file, setFile] = useState(null); // ✅ FIXED
  const [result, setResult] = useState("");
  console.log("UI Result:", result);
  // 📷 Upload image
  const handleUpload = (e) => {
    const selectedFile = e.target.files[0];

    console.log("Selected file:", selectedFile);

    setFile(selectedFile); // ✅ FIXED
    setImage(URL.createObjectURL(selectedFile));
  };

  // 🤖 Detect monument
  const handleDetect = async (e) => {
  if (e) e.preventDefault();

  if (!file) {
    alert("Please upload an image first!");
    return;
  }

  console.log("Sending request...");
  console.log("File:", file);

  const formData = new FormData();
  formData.append("image", file);

  try {
    const res = await fetch("http://127.0.0.1:5000/predict", {
      method: "POST",
      body: formData,
    });

    const text = await res.text(); // 👈 safer first step
    console.log("Raw response:", text);

    const data = JSON.parse(text);

    if (!res.ok) {
      setResult(data.error || "Backend error");
      return;
    }

    setResult(data.result);

  } catch (error) {
    console.error("Fetch error:", error);
    setResult("Error connecting to backend!");
  }
};
  return (
  <div className="ai-page">

    {/* HEADER CARD */}
    <div className="header-card">
      <h1> AI Monument Guide</h1>
      <p>Upload an image and explore India’s heritage instantly</p>
    </div>

    {/* MAIN CARD */}
    <div className="main-card">

      {/* UPLOAD SECTION */}
      <div className="upload-card">
        <h3> Upload Monument Image</h3>

        <input type="file" onChange={handleUpload} />

        {image && (
          <img src={image} alt="preview" className="preview-img" />
        )}

        <button className="detect-btn" onClick={handleDetect}>
          Detect Monument
        </button>
      </div>

      {/* RESULT SECTION */}
      {result && (
        <div className="result-card">
          <h3>AI Insight</h3>
          <p>{result}</p>
        </div>
      )}

    </div>
  </div>
);
}

export default UploadPage;