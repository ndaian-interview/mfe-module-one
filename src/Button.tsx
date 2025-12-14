import React from "react";

interface ButtonProps {
  label: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "danger";
}

const Button: React.FC<ButtonProps> = ({ label, onClick, variant = "primary" }) => {
  return (
    <button
      onClick={onClick}
      style={getButtonStyle(variant)}
      onMouseEnter={(e) => {
        const button = e.currentTarget;
        button.style.opacity = "0.8";
      }}
      onMouseLeave={(e) => {
        const button = e.currentTarget;
        button.style.opacity = "1";
      }}
    >
      {label}
    </button>
  );
};

const getButtonStyle = (variant: string): React.CSSProperties => {
  const baseStyle: React.CSSProperties = {
    padding: "10px 20px",
    fontSize: "16px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    transition: "opacity 0.3s ease",
  };

  switch (variant) {
    case "primary":
      return { ...baseStyle, backgroundColor: "#61dafb", color: "#282c34" };
    case "secondary":
      return { ...baseStyle, backgroundColor: "#e8e8e8", color: "#282c34" };
    case "danger":
      return { ...baseStyle, backgroundColor: "#ff6b6b", color: "white" };
    default:
      return baseStyle;
  }
};

export default Button;
