import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Button from "./Button";

const DefaultPage: React.FC = () => (
  <p style={paragraphStyle}>This is the Module One component. It exports a Button component and other utilities.</p>
);

const SortUsersPage: React.FC = () => <p style={actionStyle}>Sorting users… (remote handling placeholder)</p>;

const InsertUserPage: React.FC = () => <p style={actionStyle}>Insert user form… (remote handling placeholder)</p>;

const App: React.FC = () => {
  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>Module One</h2>

      <Routes>
        <Route index element={<DefaultPage />} />
        <Route path="sort-users" element={<SortUsersPage />} />
        <Route path="insert-user" element={<InsertUserPage />} />
        <Route path="*" element={<Navigate to="." replace />} />
      </Routes>

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

const actionStyle: React.CSSProperties = {
  color: "#1f2937",
  marginBottom: "15px",
  padding: "10px 12px",
  backgroundColor: "#e5f4ff",
  borderRadius: "6px",
  border: "1px solid #bde0ff",
};

const demoStyle: React.CSSProperties = {
  marginTop: "15px",
  padding: "15px",
  backgroundColor: "white",
  borderRadius: "4px",
};

export default App;
