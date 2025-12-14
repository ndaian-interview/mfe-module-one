import React from "react";
import Button from "./Button";

const App: React.FC = () => {
  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>Module One</h2>
      <p style={paragraphStyle}>This is the Module One component. It exports a Button component and other utilities.</p>
      <div style={demoStyle}>
        <h3>Demo Components:</h3>
        <Button label="Click me from Module One" onClick={() => alert("Button clicked from Module One!")} />
      </div>
    </div>
  );
};

const containerStyle: React.CSSProperties = {
  padding: "20px",
  backgroundColor: "#e8f4f8",
  borderRadius: "8px",
  border: "2px solid #61dafb",
};

const headingStyle: React.CSSProperties = {
  color: "#282c34",
  marginBottom: "10px",
};

const paragraphStyle: React.CSSProperties = {
  color: "#555",
  marginBottom: "15px",
  lineHeight: "1.6",
};

const demoStyle: React.CSSProperties = {
  marginTop: "15px",
  padding: "15px",
  backgroundColor: "white",
  borderRadius: "4px",
};

export default App;
